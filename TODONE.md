# Work Log

Chronological log of completed work on the WNBA Schedule App.

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
