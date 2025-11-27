# CLAUDE.md

This file provides context about the WNBA Schedule App for AI assistance across sessions.

## Project Overview

A web application for viewing and interacting with WNBA game schedules. Users can view games in a calendar format and select games they're interested in.

## Tech Stack

- **Framework**: Next.js 15.3 (App Router)
- **React**: 19.1 (with Ant Design v5 patch for React 19 compatibility)
- **UI Library**: Ant Design 5.25
- **Styling**: Tailwind CSS 4.1
- **Date Handling**: Day.js 1.11
- **Language**: TypeScript 5.8

## Architecture & Key Files

### Components
- `CalendarContainer.tsx` - Main calendar component (currently being developed)
- `ScheduleContainer.tsx` - Container for schedule management

### Context/State Management
- `SelectedGamesContext` - Global state for tracking which games the user has selected
- The app uses React Context for state management rather than external libraries like Redux

### Patterns in Use
- Custom hook: `useSelectedGames` - Accesses selected games from context
- Component composition with container/presentation pattern
- Centralized API utilities in `lib/api.ts` for data fetching

## Development Notes

### Important Decisions
- Using Ant Design Calendar component as the base calendar UI
- Managing selected games through React Context to avoid prop drilling
- Day.js for date manipulation (lighter alternative to Moment.js)

### Things to Know
- The project uses React 19, which requires a compatibility patch for Ant Design (`@ant-design/v5-patch-for-react-19`)
- Main git branch is `main`
- **Data Source**: WNBA schedule data is fetched from `https://www.wnba.com/api/schedule`
- **SSL Certificate Workaround**: `.env.local` contains `NODE_TLS_REJECT_UNAUTHORIZED=0` for WSL development (not used in production)

## Development Environment

### Code Formatting
- **Prettier** is configured and runs automatically via Claude Code hooks
- Configuration: `.prettierrc` (double quotes, 2-space tabs, trailing commas)
- **Auto-format hook**: `.claude/settings.json` contains a `post-write` hook that runs Prettier on all TypeScript, JavaScript, JSON, Markdown, and CSS files after Claude makes edits
- No manual formatting needed - files are automatically formatted when Claude modifies them

### TypeScript Configuration
- Path aliases configured in `tsconfig.json`:
  - `@/components/*` → `components/*`
  - `@/lib/*` → `lib/*`
  - `@/types/*` → `types/*`
  - `@/styles/*` → `styles/*`

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

This separation keeps each file focused and prevents CLAUDE.md from becoming cluttered with temporal information.

---

**Last Updated**: 2025-11-27
