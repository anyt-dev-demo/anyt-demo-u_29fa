# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js template designed specifically for AI-assisted web development. The template serves as a starting point that should be modified based on user prompts. The current implementation features a Mission Control landing page for AI-assisted software development.

## Package Management

**IMPORTANT**: Always use `pnpm` for this project, never `npm` directly.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code with Biome
pnpm lint

# Format code with Biome
pnpm format

# Type check with TypeScript
pnpm typecheck
```

## Code Quality Requirements

**IMPORTANT**: All software changes in this repository must pass the following checks before being considered complete:

1. **Format**: `pnpm format` - Code must be properly formatted with Biome
2. **Lint**: `pnpm lint` - Code must pass all Biome linting rules
3. **Type Check**: `pnpm typecheck` - Code must have no TypeScript errors

Always run these three commands after making changes to ensure code quality standards are met.

## Architecture

### Next.js App Router Structure
- Uses Next.js 16 App Router (file-based routing in `src/app/`)
- `src/app/layout.tsx` - Root layout with metadata, font configuration (Geist Sans & Geist Mono)
- `src/app/page.tsx` - Main landing page component
- `src/app/globals.css` - Global styles with Tailwind CSS 4 and CSS variables for theming

### Styling System
- **Tailwind CSS 4** with inline `@theme` configuration in `globals.css`
- Dark mode: Uses `prefers-color-scheme` media query with CSS variables
- Color scheme: `--background` and `--foreground` CSS variables that adapt to dark mode
- Typography: Geist font family loaded via `next/font/google`

### Branding Assets
- Favicon: `src/app/favicon.ico` (main) + full set in `public/images/favicon/`
- Logos: `public/images/logo/` contains:
  - `logo.svg` - Light mode logo
  - `logo-dark.svg` - Dark mode logo
  - `logo-icon.svg` - Icon/favicon source
  - `favicon.svg` - SVG favicon

The landing page uses conditional rendering to show appropriate logo based on dark mode.

### Code Quality Tools
- **Biome** (v2.2.0) handles both linting and formatting
- Configuration in `biome.json` with Next.js and React recommended rules
- Auto-organizes imports on save
- Uses 2-space indentation

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*` for imports
- Target: ES2017
- Strict mode enabled
