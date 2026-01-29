# Technical Specification Document (TSD)

## 1. Supabase Schema
```sql
create table tasks (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  priority text check (priority in ('P0', 'P1', 'P2', 'P3')),
  status text check (status in ('pending', 'in-progress', 'done')),
  created_at timestamp with time zone default now(),
  completed_at timestamp with time zone,
  context jsonb
);

create table activity_log (
  id uuid default gen_random_uuid() primary key,
  type text not null,
  summary text not null,
  details jsonb,
  session_key text,
  created_at timestamp with time zone default now()
);

create table sessions (
  session_key text primary key,
  status text,
  model text,
  started_at timestamp with time zone,
  token_usage integer
);
```

## 2. Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (Server-side only)

## 3. Real-time Subscriptions
Use `supabase.channel` to listen for `INSERT` events on `activity_log` to update the dashboard feed instantly.
