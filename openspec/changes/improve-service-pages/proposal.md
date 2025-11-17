# Proposal: Improve Service Pages Consistency and Visual Appeal

## Why

The service pages (both the overview page `/services` and individual service pages like `/services/seo`) have several inconsistencies and missing elements that reduce their effectiveness and professionalism:

**Problems:**
1. **Services Overview Page (`/services`)**: Hero section has NO call-to-action button, only title and description - missing opportunity for immediate user engagement
2. **Individual Service Pages**: Hero sections have only ONE button (primary CTA), no secondary action button
3. **Services Overview Page**: No hero images - relies only on placeholder icon backgrounds
4. **CTA Section Button Inconsistency**: Service page CTA sections use non-standard button styling (`bg-white dark:bg-gray-900 text-primary`) that doesn't match the homepage standard (`bg-black dark:bg-white text-white dark:text-black`)
5. **Visual Appeal**: Services overview page lacks the visual interest and credibility that images provide

**User Impact:**
- Reduced conversion rates due to missing CTAs on services overview page
- Inconsistent brand experience between homepage and service pages
- Lower perceived professionalism without hero images on services page
- Confusion about button hierarchy and actions due to non-standard styling
- Missed opportunities for users to take secondary actions on individual service pages

## What Changes

This proposal improves service pages across three key areas:

### 1. Add Images to Services Overview Page
- **Hero Image**: Add compelling hero image to `/services` page hero section (similar to homepage)
- **Layout**: Implement two-column grid layout with content left, image right
- **Responsive**: Ensure image is hidden on mobile, shown on desktop (lg:block)
- **Image Selection**: Professional marketing/digital workspace image from Unsplash
- **Service Section Images**: Replace gradient placeholders with actual images for each of the 5 services
  - SEO service: Analytics/search results dashboard image
  - SEA service: Google Ads campaign management image
  - Email Marketing service: Email campaign design/inbox image
  - Sites Web service: Modern website design/coding image
  - Landing Pages service: High-converting landing page design image
- **Current State**: Services currently show `bg-gradient-to-br from-primary/20 to-accent/20` placeholder divs
- **Target State**: Replace with Next.js Image components showing relevant service imagery

### 2. Add Missing CTA Buttons
- **Services Overview Hero**: Add primary CTA button ("Demandez un devis") to hero section
- **Individual Service Hero**: Add secondary CTA button ("Voir tous les services") to complement existing primary button
- **Button Styling**: Follow homepage button standards (black/white primary, outlined secondary)

### 3. Fix CTA Section Button Styling
- **Problem**: Current styling uses `bg-white dark:bg-gray-900 text-primary` which is non-standard
- **Solution**: Update to standard primary button styling: `bg-black dark:bg-white text-white dark:text-black`
- **Consistency**: Ensure all 5 individual service pages + overview page follow same pattern
- **Scope**: Update CTA sections in:
  - `components/service-page-seo.tsx`
  - `components/service-page-sea.tsx`
  - `components/service-page-email.tsx`
  - `components/service-page-sites-web.tsx`
  - `components/service-page-landing.tsx`
  - `components/services-page-content.tsx` (if CTA section exists)

## Impact

### Affected Specs
This change modifies existing capabilities:
- **MODIFIED**: `services-pages` - Add hero image requirements, CTA button requirements, button styling consistency
- **MODIFIED**: `visual-assets` - Add services page hero image to image inventory

### Affected Code
- `components/services-page-content.tsx` - Add hero image, service section images (5 images), and primary CTA button
- `components/service-page-seo.tsx` - Add secondary button to hero, fix CTA button styling
- `components/service-page-sea.tsx` - Add secondary button to hero, fix CTA button styling
- `components/service-page-email.tsx` - Add secondary button to hero, fix CTA button styling
- `components/service-page-sites-web.tsx` - Add secondary button to hero, fix CTA button styling
- `components/service-page-landing.tsx` - Add secondary button to hero, fix CTA button styling

### Implementation Considerations
- **Image Selection**: Use Unsplash placeholder initially, can be replaced with custom image later
- **Button Consistency**: Must follow existing `button-styling` spec for black/white scheme
- **Responsive Design**: Hero images should be hidden on mobile (< lg breakpoint)
- **Link Targets**: Ensure all CTAs link correctly to `/contact` or `/services`

### Risks & Mitigations
- **Risk**: Adding image to services page could impact load time
  - **Mitigation**: Use Next.js Image component with lazy loading, optimized formats
- **Risk**: Adding secondary button might clutter individual service page heros
  - **Mitigation**: Only add if there's clear value (navigation to services overview)
- **Risk**: Changing CTA button styling might break visual hierarchy
  - **Mitigation**: Test contrast on purple backgrounds, ensure accessibility maintained

### Success Criteria
1. Services overview page has hero image and primary CTA button
2. All 5 individual service pages have both primary and secondary buttons in hero
3. All CTA section buttons use standard black/white styling matching homepage
4. Button contrast ratios meet WCAG AA standards (7:1 minimum)
5. Responsive design maintains usability on mobile
6. Visual consistency across all service pages and homepage
