# Design Document: Visual Design Enhancements

## Context

Enhancing the Advantage marketing website with professional images, modern animations, and automatic dark mode to create a more engaging, accessible, and visually compelling user experience that better represents the agency's creative capabilities.

**Current State:**
- Placeholder gradient boxes for hero sections
- Static design with no animations
- Light theme only
- Generic visual appearance

**Stakeholders:**
- Agency owners (brand perception, differentiation)
- Website visitors (user experience, engagement)
- Future developers (maintainability)

**Constraints:**
- Must maintain or improve Lighthouse > 90 performance score
- WCAG 2.1 AA accessibility compliance in both light and dark modes
- No increase in build time or complexity beyond reasonable limits
- All changes must work on mobile devices efficiently

## Goals / Non-Goals

### Goals
- Add professional hero images and service illustrations
- Implement smooth, modern animations that enhance UX
- Support automatic dark mode based on system preference
- Maintain excellent performance (60fps animations, optimized images)
- Ensure accessibility (contrast ratios, reduced-motion support)
- Create reusable animation and theming utilities

### Non-Goals
- Manual dark mode toggle (can be added later as separate feature)
- Complex 3D animations or WebGL effects
- Video backgrounds or heavy media
- Custom image CDN integration (use Next.js built-in optimization)
- Animation on every element (selective, purposeful use)
- Multiple color theme options (just light/dark for now)

## Technical Decisions

### 1. Dark Mode Implementation Strategy

**Decision**: Use next-themes with Tailwind CSS dark mode (class strategy)

**Rationale**:
- next-themes provides automatic system preference detection
- Prevents flash of unstyled content (FOUC)
- Works seamlessly with Tailwind's `dark:` variant
- Lightweight (~1KB gzipped)
- Handles localStorage persistence if we add manual toggle later

**Alternatives Considered**:
- Tailwind media strategy: No control over theme without JS
- Custom implementation: More work, less battle-tested
- CSS-only solution: Can't prevent FOUC, limited control

**Implementation**:
```typescript
// app/layout.tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Color Palette**:
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'hsl(262, 83%, 58%)',    // Purple
        dark: 'hsl(262, 83%, 65%)',        // Lighter in dark mode
      },
      accent: {
        DEFAULT: 'hsl(31, 100%, 52%)',    // Orange
        dark: 'hsl(31, 100%, 60%)',
      },
      background: {
        DEFAULT: 'hsl(0, 0%, 100%)',      // White
        dark: 'hsl(222, 47%, 11%)',        // Dark blue-gray
      },
      foreground: {
        DEFAULT: 'hsl(222, 84%, 5%)',     // Almost black
        dark: 'hsl(210, 40%, 98%)',        // Almost white
      },
      // ... muted, card, border, etc.
    }
  }
}
```

### 2. Animation Library Choice

**Decision**: Use Framer Motion for complex animations, CSS for simple ones

**Rationale**:
- Framer Motion provides easy scroll animations with IntersectionObserver
- Declarative API is easy to maintain
- Built-in support for gesture animations
- Can be tree-shaken (only import what's needed)
- CSS animations for simple hover/transitions (better performance)

**Alternatives Considered**:
- Pure CSS: Limited control, harder for complex scroll animations
- GSAP: More powerful but heavier (~30KB additional)
- react-spring: Physics-based but steeper learning curve
- No animations: Doesn't meet creative/modern requirement

**Performance Strategy**:
```typescript
// Use CSS for simple animations
.button {
  @apply transition-all duration-200;
}

// Use Framer Motion for scroll-triggered animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

**Reduced Motion Support**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3. Image Management Strategy

**Decision**: Use Next.js Image component with optimized assets in /public

**Rationale**:
- Next.js Image provides automatic optimization
- Lazy loading built-in
- Automatic WebP/AVIF conversion (when configured)
- Prevents layout shift with placeholder
- No external CDN needed for MVP

**Image Organization**:
```
public/
├── images/
│   ├── hero/
│   │   ├── home-hero.webp
│   │   ├── seo-hero.webp
│   │   └── ...
│   ├── services/
│   │   ├── seo-illustration.svg
│   │   ├── sea-illustration.svg
│   │   └── ...
│   ├── patterns/
│   │   ├── gradient-orb.svg
│   │   └── wave-pattern.svg
│   └── placeholders/
│       └── blur-data-url.txt
```

**Image Specifications**:
- Hero images: 1920x1080px WebP, ~150KB max
- Service illustrations: SVG (scalable, small size)
- Background patterns: SVG or optimized PNG
- Use blur placeholders for smooth loading

**Implementation**:
```typescript
import Image from 'next/image'

<Image
  src="/images/hero/home-hero.webp"
  alt="Marketing digital moderne"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="..."
/>
```

### 4. Animation Patterns

**Decision**: Establish consistent animation patterns across the site

**Scroll Animations**:
- Fade-in from bottom: Default for content sections
- Slide-in from side: Alternating for feature sections
- Stagger children: For grids and lists
- Parallax: Subtle background movement (optional)

**Interactive Animations**:
- Button hover: Scale 1.02, shadow increase
- Card hover: Lift effect (translateY -4px, shadow)
- Link hover: Underline slide-in
- Form focus: Border color transition, glow effect

**Page Transitions**:
- No full page transitions initially (can add with Framer Motion later)
- Smooth scroll to top on navigation
- Loading states for forms

**Animation Timing**:
- Fast: 150-200ms (buttons, small elements)
- Medium: 300-400ms (cards, modals)
- Slow: 500-700ms (scroll animations, large movements)

### 5. Dark Mode Color Strategy

**Decision**: Create semantic color system that adapts to light/dark

**Approach**:
- Use HSL colors for easy adjustment of lightness
- Semantic naming (background, foreground, primary, etc.)
- Test all combinations for WCAG AA (4.5:1 for text, 3:1 for large text)
- Invert lightness for dark mode while keeping hue
- Adjust saturation slightly for better dark mode appearance

**Color Testing**:
- Primary text on background: >= 4.5:1 contrast
- Secondary text on background: >= 4.5:1 contrast
- Buttons and CTAs: >= 3:1 contrast
- Use tools: WebAIM Contrast Checker, Tailwind dark mode preview

**Image Adaptation**:
- Most images work in both modes
- Add subtle overlay if needed: `dark:opacity-90`
- Consider inverted logos if needed
- Background patterns: lighter in dark mode

## Performance Optimization

### Image Performance
1. **Format**: Use WebP with fallback, consider AVIF
2. **Sizing**: Serve appropriate sizes for viewport
3. **Lazy Loading**: Below-the-fold images lazy load
4. **Compression**: 80-85% quality for photos
5. **Dimensions**: Always specify width/height

### Animation Performance
1. **GPU Acceleration**: Use transform and opacity only
2. **Will-change**: Only when animating, remove after
3. **Intersection Observer**: Trigger animations only when visible
4. **Debouncing**: Limit scroll/resize event handlers
5. **Frame Budget**: Target 60fps (16ms per frame)

**Monitoring**:
```bash
# Before/after measurements
npm run build
# Check bundle size
# Lighthouse audit
# Core Web Vitals in Chrome DevTools
```

## Accessibility Strategy

### Visual Accessibility
- **Contrast**: All text passes WCAG AA in both themes
- **Focus States**: Clear focus indicators (ring, outline)
- **Color Independence**: Don't rely on color alone for meaning
- **Scalable Text**: Use rem/em units, respect user zoom

### Motion Accessibility
- **Prefers-reduced-motion**: Respect user preference
- **Animation Off**: Content still accessible without animations
- **No Essential Motion**: Animations enhance but aren't required
- **Timing**: Not too fast (seizure risk) or too slow (frustrating)

### Testing
- macOS: Enable "Reduce motion" in Accessibility settings
- Windows: Enable "Show animations" toggle
- Browser: Test with DevTools "Emulate CSS prefers-reduced-motion"

## Risks / Trade-offs

### Risk 1: Animation Performance on Low-End Devices
- **Impact**: Janky animations, poor UX
- **Mitigation**:
  - Use CSS transforms/opacity (GPU-accelerated)
  - Conditional animations based on device capabilities
  - Respect prefers-reduced-motion
  - Test on mid-range devices
- **Trade-off**: May need to simplify some animations

### Risk 2: Image Loading Impact on Performance
- **Impact**: Slower page loads, poor Lighthouse scores
- **Mitigation**:
  - Aggressive image optimization
  - Lazy loading below fold
  - Modern formats (WebP/AVIF)
  - Placeholder blurs during load
- **Trade-off**: Initial setup time for image pipeline

### Risk 3: Dark Mode Color Contrast Issues
- **Impact**: Accessibility failures, hard to read content
- **Mitigation**:
  - Systematic contrast testing
  - Use color palette generator tools
  - Manual testing in both modes
  - Automated contrast checks in CI
- **Trade-off**: May need multiple iterations on colors

### Risk 4: Increased Maintenance Complexity
- **Impact**: Harder to update, more time to test changes
- **Mitigation**:
  - Document animation patterns
  - Create reusable animation components
  - Establish clear dark mode color system
  - Add Storybook for visual testing (future)
- **Trade-off**: Slightly longer development time

## Implementation Phases

### Phase 1: Dark Mode Foundation (Day 1)
1. Install next-themes
2. Configure Tailwind dark mode
3. Define color palette with dark variants
4. Update layout with ThemeProvider
5. Test contrast ratios

### Phase 2: Component Dark Mode Support (Day 1-2)
1. Update all components with dark: variants
2. Test navigation, footer in dark mode
3. Test forms and inputs
4. Fix any contrast issues
5. Add smooth transitions

### Phase 3: Image Integration (Day 2-3)
1. Source or create hero images
2. Create service illustrations (SVG)
3. Optimize all images
4. Implement Next.js Image components
5. Test loading performance

### Phase 4: Animation Implementation (Day 3-4)
1. Install Framer Motion
2. Add scroll animations to sections
3. Add hover effects to interactive elements
4. Implement loading states
5. Test reduced-motion support

### Phase 5: Testing & Optimization (Day 4-5)
1. Cross-browser testing (light/dark)
2. Performance audit (Lighthouse)
3. Accessibility audit (axe DevTools)
4. Mobile device testing
5. Final tweaks and polish

## Open Questions

1. **Image Source**: Should we use stock photos, custom illustrations, or a mix?
   - Recommendation: Mix of high-quality stock photos + custom SVG illustrations

2. **Animation Library**: Framer Motion or pure CSS?
   - Recommendation: Framer Motion for scroll animations, CSS for simple interactions

3. **Dark Mode Default**: Should users landing for first time see light or system preference?
   - Recommendation: System preference (most modern approach)

4. **Pattern Complexity**: How decorative should background patterns be?
   - Recommendation: Subtle, don't distract from content

5. **Performance Budget**: What's acceptable bundle size increase?
   - Recommendation: Max +100KB for animations library, optimized images should be neutral

## Success Metrics

**Before Enhancement** (Baseline):
- Lighthouse Performance: ~95
- No animations
- Light theme only
- Placeholder images

**After Enhancement** (Target):
- Lighthouse Performance: >= 90
- Smooth 60fps animations
- Full dark mode support
- Professional images throughout
- Improved user engagement metrics (if analytics enabled)
