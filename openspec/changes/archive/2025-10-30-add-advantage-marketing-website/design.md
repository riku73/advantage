# Design Document: Advantage Marketing Website

## Context

Building a French-language digital marketing website from scratch using Next.js 14+, Tailwind CSS, and shadcn/ui. The website must balance creative innovation with conversion optimization, showcasing the agency's capabilities while generating qualified leads through contact forms.

**Key Stakeholders:**
- Marketing agency owners (business goals)
- French-speaking SMB clients (end users)
- Future developers maintaining the codebase

**Constraints:**
- French language only (proper typography and string escaping)
- Mobile-first responsive design required
- Performance targets: Lighthouse > 90, FCP < 1.5s
- GDPR compliance for data collection
- Creative & innovative design aesthetic

## Goals / Non-Goals

### Goals
- Create performant, SEO-optimized website with Next.js 14+ App Router
- Implement conversion-focused design with strategic CTAs and contact forms
- Build reusable component system for maintainability
- Ensure mobile-responsive experience across all devices
- Demonstrate creative design capabilities matching agency positioning
- Enable easy content updates and future feature additions

### Non-Goals
- Content Management System (CMS) integration (future consideration)
- User authentication or client portal (separate feature)
- Blog functionality (separate feature if needed)
- E-commerce or payment processing
- Multi-language support (French only for MVP)
- Complex animations or WebGL effects (keep performant)

## Technical Decisions

### 1. Next.js App Router Architecture

**Decision**: Use Next.js 14+ App Router with server components by default

**Rationale**:
- Built-in SEO optimization with Metadata API
- Improved performance with React Server Components
- File-based routing simplifies page structure
- Excellent image optimization out of the box
- Vercel deployment integration

**Alternatives Considered**:
- Pages Router: Older pattern, less performant
- Pure React SPA: Worse SEO, requires additional tooling
- Astro: Good for static sites but less flexible for future features

**Implementation**:
```
app/
├── layout.tsx              # Root layout with French metadata
├── page.tsx                # Homepage
├── services/
│   ├── page.tsx           # Services overview
│   ├── seo/page.tsx       # Individual service pages
│   ├── sea/page.tsx
│   ├── email-marketing/page.tsx
│   ├── sites-web/page.tsx
│   └── landing-pages/page.tsx
├── a-propos/page.tsx      # About page
└── contact/page.tsx       # Contact page
```

### 2. Styling System

**Decision**: Tailwind CSS with shadcn/ui component library

**Rationale**:
- Utility-first approach enables rapid creative design iteration
- shadcn/ui provides accessible, customizable components
- No runtime CSS-in-JS overhead (better performance)
- Easy to implement responsive breakpoints
- Consistent design system without heavy framework

**Alternatives Considered**:
- Material UI: Too opinionated, harder to customize
- Chakra UI: Runtime overhead, not as performant
- Pure CSS Modules: More maintenance, less consistency

**Color Palette** (to be refined with client):
```typescript
// Suggested creative palette - can be adjusted
colors: {
  primary: '#...',      // Agency primary brand color
  secondary: '#...',    // Accent color
  accent: '#...',       // CTA and highlights
  neutral: {...},       // Grays for text and backgrounds
}
```

### 3. Form Handling Strategy

**Decision**: React Hook Form + Zod validation + Server Actions

**Rationale**:
- React Hook Form: Minimal re-renders, excellent performance
- Zod: Type-safe schema validation, shared between client/server
- Server Actions: Built-in Next.js API routes, simpler architecture
- Can easily integrate with email service (SendGrid, Resend, etc.)

**Alternatives Considered**:
- Formik: More boilerplate, slower performance
- Basic fetch to API route: Less type-safety
- Third-party form services: Less control, potential privacy issues

**Form Flow**:
1. User fills form with client-side validation (React Hook Form + Zod)
2. Submit triggers Server Action
3. Server validates again (security)
4. Send email notification or store in database
5. Return success/error to client
6. Display confirmation message

### 4. Component Architecture

**Decision**: Feature-based component organization with shared UI library

**Rationale**:
- Clear separation between page-specific and reusable components
- shadcn/ui components in `/components/ui`
- Shared layout components in `/components/shared`
- Page-specific sections in `/components/sections`

**Structure**:
```
components/
├── ui/                    # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── shared/               # Shared layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── mobile-menu.tsx
│   └── cta-button.tsx
└── sections/             # Page-specific sections
    ├── hero.tsx
    ├── services-grid.tsx
    ├── testimonials.tsx
    └── contact-form.tsx
```

### 5. French Content Strategy

**Decision**: Hardcoded French strings with proper escaping, prepare for future i18n

**Rationale**:
- Simple for single-language MVP
- No i18n overhead for performance
- Easy to migrate to i18n library later if multi-language needed
- Ensures proper French typography from start

**String Escaping Rules**:
```typescript
// ✅ CORRECT - Escaped apostrophes
<h1>L&apos;agence digitale qui booste votre croissance</h1>
<p>{"Nous vous accompagnons dans votre transformation digitale"}</p>

// ❌ WRONG - Unescaped apostrophes
<h1>L'agence digitale</h1>  // Build error!
```

**Future Migration Path**:
- Extract strings to JSON files
- Add next-intl or similar library
- Enable language switching if needed

### 6. SEO Optimization

**Decision**: Next.js Metadata API + structured data + semantic HTML

**Rationale**:
- Built-in metadata generation per page
- JSON-LD structured data for rich snippets
- Server-side rendering for crawlers
- Proper semantic HTML for accessibility and SEO

**Implementation**:
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Advantage - Agence Marketing Digital',
  description: 'Expertise en SEO, SEA, Email Marketing...',
  openGraph: {...},
  twitter: {...},
}

// Individual pages can override
// app/services/seo/page.tsx
export const metadata: Metadata = {
  title: 'Services SEO - Advantage',
  description: 'Optimisation pour les moteurs de recherche...',
}
```

### 7. Image Management

**Decision**: Next.js Image component with local images in `/public`

**Rationale**:
- Automatic optimization and lazy loading
- Responsive image srcsets
- WebP conversion
- Prevents layout shift with aspect ratios

**Guidelines**:
- Store service icons in `/public/icons`
- Store photos in `/public/images`
- Use appropriate formats (SVG for icons, WebP/AVIF for photos)
- Always specify width/height or fill mode

## Performance Strategy

### Optimization Techniques
1. **Server Components by default** - Minimize client-side JavaScript
2. **Dynamic imports** - Code-split client components
3. **Image optimization** - Next.js Image with proper sizing
4. **Font optimization** - Use next/font with font subsetting
5. **Lazy loading** - Below-the-fold content loads on scroll
6. **Minimal dependencies** - Only essential packages

### Performance Budget
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Total Bundle Size: < 200KB gzipped
- Lighthouse Performance: > 90

## Responsive Design Strategy

### Breakpoints (Tailwind defaults)
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (extra large)

### Mobile-First Approach
1. Design for mobile (375px width) first
2. Progressive enhancement for larger screens
3. Touch-friendly targets (minimum 44x44px)
4. Readable text sizes (minimum 16px body)
5. Hamburger menu for mobile, full nav for desktop

## Risks / Trade-offs

### Risk 1: French String Management
- **Impact**: Build failures from unescaped apostrophes
- **Mitigation**: ESLint rule for French strings, developer documentation, validation in PR reviews
- **Trade-off**: Slightly more verbose JSX syntax

### Risk 2: Form Spam
- **Impact**: Inbox flooding, wasted follow-up time
- **Mitigation**:
  - Client-side validation reduces accidental spam
  - Honeypot fields catch bots
  - Rate limiting on server actions
  - Consider adding reCAPTCHA if spam persists
- **Trade-off**: Additional complexity vs. clean UX

### Risk 3: Creative Design vs. Performance
- **Impact**: Complex animations could hurt performance scores
- **Mitigation**:
  - Use CSS transforms/opacity (GPU-accelerated)
  - Implement intersection observer for scroll animations
  - Lazy load animation libraries
  - Monitor Lighthouse scores continuously
- **Trade-off**: May need to simplify some creative effects

### Risk 4: GDPR Compliance
- **Impact**: Legal issues, user trust
- **Mitigation**:
  - Clear privacy policy
  - Explicit consent checkboxes
  - Minimal data collection
  - Secure data handling
  - Cookie consent if analytics added
- **Trade-off**: Additional legal review time

## Migration Plan

Not applicable (greenfield project). Deployment plan:

### Phase 1: Setup & Foundation
1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS and shadcn/ui
3. Set up project structure
4. Create base layout and navigation

### Phase 2: Core Pages
1. Build homepage with hero and services sections
2. Create services overview page
3. Build individual service pages
4. Create about page

### Phase 3: Forms & Polish
1. Implement contact form with validation
2. Add form submission handling
3. Polish responsive design
4. Optimize performance
5. Add SEO metadata

### Phase 4: Testing & Launch
1. Cross-browser testing
2. Mobile device testing
3. Performance audit
4. Accessibility audit
5. Deploy to Vercel

## Open Questions

1. **Email Service**: Which email service should we integrate for contact form submissions?
   - Options: SendGrid, Resend, Mailgun, Web3Forms
   - Recommendation: Resend (modern, developer-friendly, generous free tier)

2. **Analytics**: Should we include analytics tracking in MVP?
   - If yes, prefer privacy-friendly option (Plausible, Fathom)
   - Requires cookie consent implementation

3. **Brand Assets**: Are logo, colors, and fonts finalized?
   - Need: High-res logo (SVG preferred)
   - Need: Brand color palette (primary, secondary, accent)
   - Need: Font preferences or use system fonts

4. **Content**: Is French content copy finalized or should we use placeholder text?
   - Service descriptions
   - About page content
   - Value propositions and testimonials (if any)

5. **Hosting**: Vercel or alternative?
   - Vercel recommended for Next.js (zero-config)
   - Alternative: Netlify, AWS Amplify

6. **Domain**: What domain will be used?
   - Affects: Metadata, canonical URLs, email configuration
