# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI Stream Solutions website built with Next.js 15, React 19, and TypeScript. It's a v0.app-generated project that syncs automatically with deployments and focuses on AI-powered business automation solutions. The site includes service pages, blog functionality, booking systems, and various business automation examples.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Architecture & Structure

### Framework Stack
- **Next.js 15** with App Router (`app/` directory)
- **React 19** with TypeScript
- **Tailwind CSS** with shadcn/ui components
- **Radix UI** primitives for accessibility
- **Framer Motion** for animations

### Key Directories
- `app/` - Next.js app router pages and layouts
  - Contains route pages like `/services`, `/blog`, `/admin`, `/automation-suite`
  - Main layout includes conditional rendering for GoHighLevel pages
- `components/` - Reusable UI components (40+ components)
  - `components/ui/` - shadcn/ui base components
  - Specialized components like booking modals, calendars, structured data
- `lib/` - Utility functions and business logic
  - `booking-utils.ts` - HubSpot and calendar integration logic
  - `structured-data.ts` - SEO schema markup utilities
- `types/` - TypeScript type definitions

### Component Architecture
- Uses shadcn/ui component system with Radix UI primitives
- Components are styled with Tailwind CSS and class-variance-authority
- Extensive use of structured data components for SEO
- Client/server component split with proper "use client" directives

### Key Features
- **Booking System**: HubSpot integration with Calendly fallback
- **Blog System**: Dynamic routing with structured data
- **SEO Optimization**: Comprehensive structured data, canonical links, resource hints
- **Theme Support**: Light/dark mode with next-themes
- **Performance**: Critical CSS, resource hints, optimized images
- **Third-party Integrations**: HubSpot, Calendly, Vercel Analytics

### Business Logic
- GoHighLevel page detection with conditional header/footer rendering
- Lead capture forms with HubSpot integration
- Booking flow with calendar integration and confirmation system
- Pricing tiers with structured data markup

## Development Guidelines

### Path Aliases
- `@/components` - components directory
- `@/lib` - lib directory
- `@/app` - app directory
- `@/*` - root directory

### Styling
- Uses Tailwind CSS with custom configuration
- shadcn/ui components with neutral base color
- CSS variables enabled for theming
- Custom classes for GoHighLevel page styling

### TypeScript
- Strict mode enabled
- Custom type definitions in `types/` directory
- React 19 types configured

### Third-party Integration Points
- HubSpot forms and tracking
- Calendly booking widgets
- Vercel Analytics
- Google Site Verification
- Structured data for search engines

## Deployment

The project is configured for:
- **Vercel** deployment (primary)
- **AWS Amplify** via amplify.yml configuration
- Automatic syncing with v0.app deployments

Build artifacts are in `.next/` directory with caching configured for `node_modules/`.