# Implementation Tasks

## Phase 1: Update Primary Button Styling (8 components)

- [x] 1. **Update hero section primary button (components/sections/hero.tsx)**
   - Change `bg-primary` to `bg-black dark:bg-white`
   - Change `text-primary-foreground` to `text-white dark:text-black`
   - Update hover state to `hover:bg-gray-900 dark:hover:bg-gray-100`
   - Verify button text "Demandez un devis gratuit" displays correctly
   - **Validation**: Visual check in both light/dark modes

- [x] 2. **Update CTA section primary button (components/sections/cta-section.tsx)**
   - Keep `bg-white dark:bg-white` (on purple background)
   - Keep `text-primary` (purple text on white)
   - Update hover to `hover:bg-gray-100 dark:hover:bg-gray-100`
   - **Validation**: Verify contrast on purple background

- [x] 3. **Update SEO service page primary button (components/service-page-seo.tsx)**
   - Change `bg-primary` to `bg-black dark:bg-white`
   - Change `text-primary-foreground` to `text-white dark:text-black`
   - Update hover state
   - **Validation**: Check hero section button

- [x] 4. **Update SEA service page primary button (components/service-page-sea.tsx)**
   - Apply same changes as SEO page
   - **Validation**: Check hero section button

- [x] 5. **Update Email Marketing service page primary button (components/service-page-email.tsx)**
   - Apply same changes as SEO page
   - **Validation**: Check hero section button

- [x] 6. **Update Sites Web service page primary button (components/service-page-sites-web.tsx)**
   - Apply same changes as SEO page
   - **Validation**: Check hero section button

- [x] 7. **Update Landing Pages service page primary button (components/service-page-landing.tsx)**
   - Apply same changes as SEO page
   - **Validation**: Check hero section button

- [x] 8. **Update contact form submit button (components/sections/contact-form.tsx)**
   - Change `bg-primary` to `bg-black dark:bg-white`
   - Change `text-primary-foreground` to `text-white dark:text-black`
   - Maintain disabled states
   - **Validation**: Test form submission button visibility

## Phase 2: Update Secondary Button Styling (6 components)

- [x] 9. **Update hero section secondary button (components/sections/hero.tsx)**
   - Change `border-[3px]` to `border-2`
   - Keep `border-black dark:border-white`
   - Keep `text-black dark:text-white`
   - Update hover: `hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`
   - **Validation**: Verify 2px border thickness and text visibility

- [x] 10. **Update CTA section secondary button (components/sections/cta-section.tsx)**
    - Keep `border-2 border-primary-foreground` (white on purple)
    - Keep `bg-transparent`
    - Keep `text-primary-foreground`
    - Update hover states
    - **Validation**: Check on purple CTA background

- [x] 11. **Update about page CTA button (components/about-page-content.tsx)**
    - Currently uses `bg-white dark:bg-white` - this is a primary button style
    - Verify if this should remain as-is (on purple background) or follow standard
    - **Validation**: Check visibility on purple background

- [x] 12. **Update SEO service CTA button (components/service-page-seo.tsx)**
    - Change from `bg-white dark:bg-gray-900` to `bg-white dark:bg-white`
    - Ensure consistent with CTA section pattern (white on purple)
    - **Validation**: Check CTA section at bottom of page

- [x] 13. **Update SEA service CTA button (components/service-page-sea.tsx)**
    - Apply same pattern as SEO
    - **Validation**: Check CTA section

- [x] 14. **Update Email service CTA button (components/service-page-email.tsx)**
    - Apply same pattern as SEO
    - **Validation**: Check CTA section

- [x] 15. **Update Sites Web service CTA button (components/service-page-sites-web.tsx)**
    - Apply same pattern as SEO
    - **Validation**: Check CTA section

- [x] 16. **Update Landing Pages service CTA button (components/service-page-landing.tsx)**
    - Apply same pattern as SEO
    - **Validation**: Check CTA section

## Phase 3: Verification & Testing

17. **Visual regression testing in light mode**
    - Navigate to all 11 pages
    - Verify all primary buttons have black background + white text
    - Verify all secondary buttons have 2px black border + black text
    - Take screenshots for documentation
    - **Validation**: All buttons clearly visible

18. **Visual regression testing in dark mode**
    - Toggle dark mode
    - Navigate to all 11 pages
    - Verify all primary buttons have white background + black text
    - Verify all secondary buttons have 2px white border + white text
    - Take screenshots for documentation
    - **Validation**: All buttons clearly visible

19. **Accessibility testing**
    - Use browser contrast checker on all buttons
    - Verify primary buttons: 21:1 contrast ratio
    - Verify secondary buttons: >= 7:1 contrast ratio
    - Test keyboard navigation to all buttons
    - **Validation**: WCAG AAA compliance achieved

20. **Cross-browser testing**
    - Test in Chrome (light + dark)
    - Test in Firefox (light + dark)
    - Test in Safari (light + dark)
    - **Validation**: Consistent appearance across browsers

- [x] 21. **Production build validation**
    - Run `npm run build`
    - Verify zero TypeScript errors
    - Verify zero build warnings
    - Check for any CSS purging issues
    - **Validation**: Clean build output

22. **Performance check**
    - Run Lighthouse audit on homepage
    - Verify Performance score remains >= 90
    - Check that button styling doesn't impact LCP
    - **Validation**: No performance regression

## Dependencies

- Tasks 1-8 can be done in parallel (primary buttons)
- Tasks 9-16 can be done in parallel (secondary buttons)
- Tasks 17-22 must be done sequentially after all code changes

## Estimated Effort

- Phase 1: ~30 minutes (parallel execution possible)
- Phase 2: ~30 minutes (parallel execution possible)
- Phase 3: ~45 minutes (sequential testing required)
- **Total**: ~1.75 hours
