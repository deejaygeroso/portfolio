# Bottom Navigation for Mobile & Tablet

**Date:** 2026-03-30
**Branch:** feature/mobileMenu

## Summary

Add a MUI `BottomNavigation` bar fixed to the bottom of the screen on mobile and tablet viewports (below `md`, i.e. < 900px). The existing AppBar/desktop navigation remains unchanged. The hamburger icon and side drawer are hidden on mobile/tablet since the bottom nav replaces their role.

## Changes

### New: `src/components/BottomNav/BottomNav.tsx`

A standalone component containing the MUI `BottomNavigation`. Responsibilities:
- Renders fixed to the bottom of the viewport, only below `md` breakpoint (`display: { xs: 'block', md: 'none' }`)
- 5 items matching `NAV_LINKS`: Home · About · Projects · Testimonials · Contact
- Icon set: Minimal/Geometric (MUI icons — `GridView`, `Info`, `Layers`, `FormatQuote`, `PhoneInTalk` or equivalents)
- Active item is determined by scroll position using an `IntersectionObserver` on each section element (same `SectionPageIds` IDs used in `NAV_LINKS`)
- Tapping an item calls `scrollToSection(id)` (same utility used in `Navbar`)
- Styled to match the current theme via MUI `sx` — background uses `nav.bg` or `background.paper`, active color uses `primary.main`

Exports: `export default BottomNav` + `src/components/BottomNav/index.ts`

### Modified: `src/components/Navbar/Navbar.tsx`

Two targeted changes only:
1. **Hide hamburger icon** — change `display: { xs: 'flex', md: 'none' }` to `display: 'none'` on the hamburger `IconButton`
2. **Show ThemeSwitcher on mobile** — move `<ThemeSwitcher />` out of the desktop-only `Box` so it renders in the AppBar on all breakpoints (visible at `xs` and above, not just `md`)

The `Drawer` and its state remain in the file but become unreachable (hamburger is hidden). No code deletion needed.

### Modified: Layout/Page

Add `<BottomNav />` alongside `<Navbar />` wherever `Navbar` is rendered in the app layout.

## Behaviour

- Bottom nav is always visible on scroll (fixed position, sits above page content via `zIndex`)
- Page content gets `paddingBottom` added on mobile to prevent the bottom nav from overlapping the last section
- Active indicator updates as the user scrolls through sections

## Out of Scope

- No changes to desktop navigation
- No drawer cleanup (left as-is, just unreachable on mobile)
- No animation/transition on the bottom nav appearance
