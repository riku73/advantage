# Implementation Tasks: Service Pages Improvements

## Phase 1: Services Overview Page Enhancements

- [ ] 1. Add hero image to services overview page
  - Update `components/services-page-content.tsx`
  - Change hero section from single-column to two-column grid (lg:grid-cols-2)
  - Add FadeIn wrapper for image column with direction="right" delay={0.2}
  - Add Next.js Image component with Unsplash URL
  - Image specs: width=800 height=800 object-cover rounded-2xl shadow-xl
  - Add proper alt text: "Digital marketing services dashboard and analytics"
  - Apply hidden lg:block to image wrapper for responsive design
  - Test on desktop and mobile to ensure layout integrity
  - **Validation**: Image visible on desktop, hidden on mobile, no layout shift

- [ ] 2. Add images to each service section on services overview page
  - Update `components/services-page-content.tsx` services array
  - Add `image` property to each service object with Unsplash URL
  - SEO: Use analytics/dashboard image (e.g., "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=600&fit=crop&q=80")
  - SEA: Use Google Ads/PPC campaign image
  - Email: Use email campaign/inbox design image
  - Web: Use website design/coding workspace image
  - Landing: Use landing page conversion optimization image
  - Update Visual section (line 156-159) to replace gradient div with Next.js Image
  - Apply: width={600} height={600} object-cover aspect-square rounded-2xl shadow-xl
  - Add transition-transform hover:scale-105 duration-700 classes
  - Add descriptive alt text for each service image
  - **Validation**: All 5 services display relevant images, no gradient placeholders remain

- [ ] 3. Add primary CTA button to services overview hero
  - Update `components/services-page-content.tsx` hero section
  - Add button container below description: `<div className="mt-8">`
  - Add Link component with href="/contact"
  - Apply standard primary button classes: bg-black dark:bg-white text-white dark:text-black
  - Include shadow-lg, hover:bg-gray-900 dark:hover:bg-gray-100, hover:scale-105
  - Button text: "Demandez un devis gratuit"
  - Add ArrowRight icon with group-hover:translate-x-1 animation
  - **Validation**: Button visible, links to /contact, follows homepage button style

## Phase 2: Individual Service Page Hero Enhancements

- [ ] 4. Add secondary button to SEO service page hero
  - Update `components/service-page-seo.tsx` hero section (around line 76-84)
  - Modify button container to include TWO buttons with flex gap-4
  - Add second Link component after existing button
  - Link href="/services" with text "Voir tous les services"
  - Apply secondary button classes: border-2 border-black dark:border-white text-black dark:text-white bg-transparent
  - Include hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105
  - **Validation**: Two buttons visible, secondary has outline style, both work correctly

- [ ] 4. Add secondary button to SEA service page hero
  - Update `components/service-page-sea.tsx`
  - Apply same changes as task #3
  - **Validation**: Button layout and styling matches SEO page

- [ ] 5. Add secondary button to Email Marketing service page hero
  - Update `components/service-page-email.tsx`
  - Apply same changes as task #3
  - **Validation**: Button layout and styling matches SEO page

- [ ] 6. Add secondary button to Sites Web service page hero
  - Update `components/service-page-sites-web.tsx`
  - Apply same changes as task #3
  - **Validation**: Button layout and styling matches SEO page

- [ ] 7. Add secondary button to Landing Pages service page hero
  - Update `components/service-page-landing.tsx`
  - Apply same changes as task #3
  - **Validation**: Button layout and styling matches SEO page

## Phase 3: Fix CTA Section Button Styling

- [ ] 8. Update CTA button styling in SEO service page
  - Update `components/service-page-seo.tsx` CTA section (around line 222-228)
  - Change button classes from: `bg-white dark:bg-gray-900 text-primary border-2 border-white dark:border-gray-900`
  - Change to: `bg-black dark:bg-white text-white dark:text-black`
  - Update hover states: `hover:bg-gray-900 dark:hover:bg-gray-100`
  - Remove border classes (primary buttons don't have borders)
  - **Validation**: Button uses standard black/white styling, maintains hover animation

- [ ] 9. Update CTA button styling in SEA service page
  - Update `components/service-page-sea.tsx` CTA section
  - Apply same changes as task #8
  - **Validation**: Button styling matches standard and SEO page

- [ ] 10. Update CTA button styling in Email Marketing service page
  - Update `components/service-page-email.tsx` CTA section
  - Apply same changes as task #8
  - **Validation**: Button styling matches standard and SEO page

- [ ] 11. Update CTA button styling in Sites Web service page
  - Update `components/service-page-sites-web.tsx` CTA section
  - Apply same changes as task #8
  - **Validation**: Button styling matches standard and SEO page

- [ ] 12. Update CTA button styling in Landing Pages service page
  - Update `components/service-page-landing.tsx` CTA section
  - Apply same changes as task #8
  - **Validation**: Button styling matches standard and SEO page

## Phase 4: Testing and Validation

- [ ] 13. Test services overview page in light and dark modes
  - Visit /services in light mode
  - Verify hero image is visible on desktop
  - Verify primary CTA button uses black background + white text
  - Toggle dark mode
  - Verify hero image remains visible
  - Verify primary CTA button uses white background + black text
  - Test on mobile: verify image is hidden, button remains visible
  - **Validation**: All elements display correctly in both themes and all viewports

- [ ] 14. Test all 5 individual service pages in light and dark modes
  - Visit each service page (/services/seo, /services/sea, /services/email-marketing, /services/sites-web, /services/landing-pages)
  - Verify hero has TWO buttons (primary + secondary)
  - Verify primary button uses black/white scheme
  - Verify secondary button uses outline style
  - Toggle dark mode and verify both buttons invert colors correctly
  - Scroll to CTA section and verify button uses black/white scheme (not text-primary)
  - **Validation**: All 5 pages have consistent button styling and layout

- [ ] 15. Test button contrast ratios on CTA sections
  - Open browser DevTools contrast checker
  - Check CTA section background color (purple)
  - Test black button on purple in light mode (should be >= 7:1)
  - Test white button on purple in dark mode (should be >= 7:1)
  - If contrast is insufficient, note which pages need purple shade adjustment
  - **Validation**: All CTA buttons meet WCAG AA standards (7:1 minimum)

- [ ] 16. Test all button click interactions
  - Click services overview hero button → should navigate to /contact
  - Click each service page primary button → should navigate to /contact
  - Click each service page secondary button → should navigate to /services
  - Click each service page CTA button → should navigate to /contact
  - Verify no console errors
  - **Validation**: All buttons navigate correctly with no errors

- [ ] 17. Run production build
  - Run `npm run build`
  - Verify zero TypeScript errors
  - Verify zero build warnings
  - Check bundle size hasn't increased significantly
  - **Validation**: Clean build output

- [ ] 18. Cross-browser testing
  - Test in Chrome (light + dark)
  - Test in Firefox (light + dark)
  - Test in Safari (light + dark)
  - Verify button styling consistency
  - Verify image loading performance
  - **Validation**: Consistent appearance and performance across browsers

## Dependencies

- Tasks 1-2 can be done in parallel (services overview page)
- Tasks 3-7 can be done in parallel (individual service pages hero)
- Tasks 8-12 can be done in parallel (CTA sections)
- Tasks 13-18 must be done sequentially after all code changes

## Estimated Effort

- Phase 1: ~30 minutes (3 tasks: hero image + 5 service images + CTA button)
- Phase 2: ~30 minutes (5 tasks, 5 files, similar changes)
- Phase 3: ~30 minutes (5 tasks, 5 files, similar changes)
- Phase 4: ~45 minutes (6 testing tasks, sequential)
- **Total**: ~2.25 hours
