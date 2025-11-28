# Work Log

Chronological log of completed work on the WNBA Schedule App.

## 2025-11-28

### [UI Library] Migration from Ant Design to Shadcn UI
- **Complete UI library replacement**: Migrated from Ant Design 5.25 to Shadcn UI
- **Shadcn setup**: Manually configured Shadcn with Tailwind v4 compatibility
  - Created `components.json` configuration
  - Created `lib/utils.ts` with cn() helper function
  - Updated `tailwind.config.js` with Shadcn theme variables and animations
  - Updated `app/globals.css` with CSS variables for theming (light/dark mode support)
- **Component migrations**:
  - `CalendarContainer.tsx`: Replaced Ant Design Calendar with Shadcn Calendar using Block 21 custom formatters pattern
  - `TableContainer.tsx`: Complete rewrite - replaced Ant Design Table with Shadcn Card grid layout
    - Implemented dual selection mechanism (checkbox + clickable card)
    - Added visual feedback with border-primary ring effect on selection
    - Responsive grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
    - Custom loading state for Button with Loader2 icon
  - `ScheduleContainer.tsx`: Removed dead Ant Design Button import
  - `app/page.tsx`: Removed React 19 compatibility patch import
- **Package cleanup**: Removed `antd` and `@ant-design/v5-patch-for-react-19` dependencies
- **New dependencies added**:
  - Shadcn core: `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`
  - Shadcn components: `@radix-ui/react-checkbox`, `@radix-ui/react-slot`, `react-day-picker`
  - Utilities: `date-fns`, `lucide-react`
- **Performance improvement**: Bundle size reduced from 222 kB to 36.6 kB (84% reduction)
- **Fixed Next.js 15 compatibility**: Updated `lib/api.ts` to handle async cookies() function
- **Testing**: Verified successful build and dev server startup with no errors

## 2025-11-27

### [DevEx] Prettier Auto-formatting
- Configured `.claude/settings.json` with post-write hooks for automatic formatting
- Prettier runs automatically on TypeScript, JavaScript, JSON, Markdown, and CSS files
- No manual formatting needed when Claude modifies files

### [API] SSL Certificate Fix & Data Fetching
- Created `.env.local` with `NODE_TLS_REJECT_UNAUTHORIZED=0` for WSL development
- Built `lib/api.ts` with centralized WNBA API utilities
- Created `fetchWNBASchedule()` function with proper TypeScript typing
- Fixed SSL certificate validation issues in WSL environment
- Updated `app/page.tsx` to use new API utility

### [Config] TypeScript Path Aliases
- Added `@/lib/*` and `@/types/*` mappings to `tsconfig.json`
- Added `@/styles/*` for consistency
- Enables cleaner imports across the codebase

### [Documentation] Initial Setup
- Created `README.md` with project setup instructions
- Created `CLAUDE.md` for project context and architecture documentation
- Documented tech stack, patterns, and development environment setup

### [Documentation] Reorganized Documentation Structure
- Created `TODONE.md` - chronological work log with date-based entries and feature tags
- Created `TODO.md` - upcoming tasks and open questions
- Refactored `CLAUDE.md` - removed temporal sections, added documentation workflow
- Established three-file documentation pattern for better organization

### [DevEx] Development Toolbar with Mock Data Toggle
- Created Linear-style dev toolbar for toggling between mock and real API data
- Generated `test/wnba-schedule-future.json` with future-dated mock schedule (December 2025 - April 2026)
- Updated `lib/api.ts` to support both mock and real data sources via cookies
- Built `DevToolbarContext` for managing toolbar state and cookie persistence
- Implemented `DevToolbar` component with clean, minimal design
- Uses cookies to communicate preference from client to server (preserves SSR)
- Only renders in development mode (production-safe)
- Added mock file selector to toggle between past (May 2025) and future (Dec 2025) mock data
- Created `scripts/generate-future-mock.js` for generating future-dated mock files
