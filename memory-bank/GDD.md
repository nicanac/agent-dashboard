# Graphic Design Document (GDD)

## 1. Visual Style
- **Aesthetic:** Modern, Clean, "Soft" UI.
- **Theme:** Light Mode default (slate-50 background).
- **Corner Radius:** `rounded-xl` or `rounded-2xl` for cards; `rounded-md` for buttons.

## 2. Color Palette
- **Background:** `bg-slate-50` / `bg-white` (Cards).
- **Primary Text:** `text-slate-900`.
- **Muted Text:** `text-slate-500`.
- **Accents:**
  - Blue: `#3b82f6` (Charts, Primary Actions)
  - Emerald: `#10b981` (Success, Projects)
  - Amber: `#f59e0b` (Warnings, Converted)
  - Rose: `#f43f5e` (Alerts, Conversion)

## 3. Typography
- **Font Family:** `Inter` (Sans-serif).
- **Hierarchy:**
  - **H1/Brand:** Bold, Tracking-tight.
  - **KPI Values:** Large, Bold (2xl/3xl).
  - **Labels:** Small, Uppercase, Muted (xs).

## 4. UI Components
- **Cards:** No border (or subtle), soft shadow (`shadow-sm` / `shadow-md`), white background.
- **Sidebar:** White/Light Gray, border-right.
- **Header:** White, border-bottom, sticky.
- **Charts:** Minimalist, no grid lines (or subtle dashed), tooltips enabled.

## 5. Layout Grid
- **Desktop (1024px+):** Fixed Sidebar + 4 Column Grid.
- **Tablet (768px-1024px):** Collapsed Sidebar (Icon only or Drawer) + 2 Column Grid.
- **Mobile (<768px):** Hidden Sidebar (Hamburger) + 1 Column Grid.
