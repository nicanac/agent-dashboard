# System Architecture

## 1. High-Level Overview
The Agent Dashboard acts as a control plane for the Clawdbot agent. It pushes/pulls data from a Supabase backend which acts as the source of truth for tasks and logs.

## 2. Component Hierarchy
```
src/
├── app/
│   ├── dashboard/   # Activity Feed + Stats
│   ├── tasks/       # Kanban / Task List
│   ├── sessions/    # Active Session Monitor
│   └── settings/    # Integrations Config
├── lib/
│   ├── supabase/    # Supabase Client
│   └── hooks/       # useTasks, useActivityLog (Real-time)
```

## 3. Data Flow
1.  **Activity Logs:** Agent -> Supabase (`activity_log`) -> Dashboard (Real-time Subscription).
2.  **Tasks:** User/Agent -> Supabase (`tasks`) <-> Notion API (Sync).
3.  **Sessions:** Agent -> Supabase (`sessions`) -> Dashboard.

## 4. Integration Points
- **Notion:** Linked via `notion-client` or Pipedream/Zapier (or internal agent skill).
- **Strava:** Fetched via API for specific "Training" widgets.
