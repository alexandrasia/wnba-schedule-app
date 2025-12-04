# CLAUDE.md

This file provides context about the WNBA Schedule App for AI assistance across sessions.

## Project Overview

A web application for viewing and interacting with WNBA game schedules. Users can view games in a calendar format and select games they're interested in.

## Tech Stack

- **Framework**: Next.js 16.0 (App Router with Turbopack)
- **React**: 19.2
- **UI Library**: Shadcn UI (Tailwind-based component library)
- **Styling**: Tailwind CSS 4.1
- **Date Handling**: date-fns 4.1 (for calendar formatting and date manipulation)
- **Language**: TypeScript 5.9

## Architecture & Key Files

### Components
- `CalendarContainer.tsx` - Calendar view using Shadcn Calendar with custom formatters
- `TableContainer.tsx` - Displays games as selectable Card components in responsive grid
- `ScheduleContainer.tsx` - Container for schedule management

### Context/State Management
- `SelectedGamesContext` - Global state for tracking which games the user has selected
- `ThemeContext` - Manages theme (light/dark/system) preferences
- The app uses React Context for state management rather than external libraries like Redux

### Theme System
- **Architecture**: CSS variables + Tailwind CSS using Shadcn UI approach
- **Color Format**: HSL (Hue Saturation Lightness) for easy manipulation
- **File Structure**:
  - `app/globals.css` - All color definitions and CSS variables
  - `contexts/ThemeContext.tsx` - Theme state management
  - `components/ThemeToggle.tsx` - UI toggle for light/dark/system
- **Features**:
  - Light/Dark mode with system preference detection
  - Generic sports accent colors (maroon #8B1538) suitable for any league
  - Improved dark mode aesthetics (background: 11% lightness)
  - Clean, simplified theme system
  - WCAG AAA contrast ratios in dark mode (19.5:1)
- **Color Tokens**: 24 semantic CSS variables (background, foreground, primary, secondary, muted, accent, destructive, border, input, ring, card, popover)
- **Customization**: Change colors in `globals.css` - fully documented with inline comments

### Patterns in Use
- Custom hook: `useSelectedGames` - Accesses selected games from context
- Component composition with container/presentation pattern
- Centralized API utilities in `lib/api.ts` for data fetching

## Development Notes

### Important Decisions
- Using Shadcn UI components (copy/paste approach) for customizable, Tailwind-based UI
- Shadcn Calendar with custom formatters for calendar view
- Game cards with dual selection mechanism (checkbox + clickable card)
- Managing selected games through React Context to avoid prop drilling
- date-fns for date manipulation and formatting

### Things to Know
- The project uses React 19 with Shadcn UI (no compatibility patches needed)
- Main git branch is `main`
- **Data Source**: WNBA schedule data is fetched from `https://www.wnba.com/api/schedule`
- **SSL Certificate Workaround**: `.env.local` contains `NODE_TLS_REJECT_UNAUTHORIZED=0` for WSL development (not used in production)

## Development Environment

### Code Formatting
- **Prettier** is configured and runs automatically via Claude Code hooks
- Configuration: `.prettierrc` (double quotes, 2-space tabs, trailing commas)
- **Auto-format hook**: `.claude/settings.json` contains a `post-write` hook that runs Prettier on all TypeScript, JavaScript, JSON, Markdown, and CSS files after Claude makes edits
- No manual formatting needed - files are automatically formatted when Claude modifies them

### Dev Toolbar
- **Purpose**: Toggle between mock and real API data during development
- **Location**: Floating bottom-right corner (Linear-style design)
- **How it works**:
  - Uses cookies to communicate preference from client to server
  - Preserves SSR benefits while allowing easy data source switching
  - Only renders in development mode (production-safe)
- **Mock data files**:
  - `test/wnba-schedule-example.json` - Past dates (May 2025)
  - `test/wnba-schedule-future.json` - Future dates (December 2025 - April 2026)
- **Features**:
  - **Data Source Toggle**: Switch between "Mock Data" and "Real API"
  - **Mock File Selector**: When using mock data, choose between "Past" and "Future" dates
  - Both preferences persist across page refreshes via cookies
- **Default**: Real API in both development and production
- **Generating custom mock data**: Run `node scripts/generate-future-mock.js` to regenerate future-dated mock file (modify script for custom date ranges)

### TypeScript Configuration
- Path aliases configured in `tsconfig.json`:
  - `@/components/*` → `components/*`
  - `@/lib/*` → `lib/*`
  - `@/types/*` → `types/*`
  - `@/styles/*` → `styles/*`
  - `@/contexts/*` → `contexts/*`

### Theme Development
- **This project uses Tailwind v4 NOT v3**
- **Modifying Colors**: Edit HSL values in `app/globals.css` `:root` (light) or `.dark` sections
- **Color Documentation**: All color definitions and contrast ratios documented in `globals.css` with inline comments
- **Testing Themes**: Use ThemeToggle component (top-right) to switch between light/dark/system modes

## Documentation Structure

This project uses three documentation files for better organization:

- **CLAUDE.md** (this file) - Project architecture, patterns, tech stack, and key decisions
- **TODO.md** - Upcoming tasks, features, and open questions
- **TODONE.md** - Chronological work log of completed features and fixes

### Workflow for Claude Sessions

When completing significant work:
1. **Add to TODONE.md**: Create an entry with today's date and appropriate category tag (e.g., `[API]`, `[Components]`, `[DevEx]`)
2. **Update TODO.md**: Remove completed items or add newly discovered tasks
3. **Update CLAUDE.md**: Only when architectural decisions, patterns, or core tech stack changes
4. **Update README.md**: Only when there are changes in how to run the app or when there are tech stack changes

This separation keeps each file focused and prevents CLAUDE.md from becoming cluttered with temporal information.

---

**Last Updated**: 2025-12-04
- Theme system simplification: Removed multi-league code, elevation utilities, and WNBA-specific branding
- Replaced WNBA orange with generic sports maroon (#8B1538) suitable for all leagues
- Reduced codebase by ~470 lines through aggressive cleanup
