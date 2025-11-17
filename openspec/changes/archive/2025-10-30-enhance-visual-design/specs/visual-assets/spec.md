# Visual Assets Specification

## ADDED Requirements

### Requirement: Hero Image Integration
The system SHALL display professional hero images on homepage and service pages using Next.js Image optimization.

#### Scenario: Homepage hero image
- **WHEN** user visits homepage
- **THEN** hero section displays professional marketing image
- **AND** image is optimized (WebP/AVIF format)
- **AND** image loads with blur placeholder
- **AND** image is above-the-fold with priority loading

#### Scenario: Service page hero images
- **WHEN** user visits any service detail page
- **THEN** unique hero image relevant to that service is displayed
- **AND** images maintain aspect ratio across all devices
- **AND** images load efficiently without layout shift

### Requirement: Service Illustrations
The system SHALL display custom icons or illustrations for each of the five services throughout the site.

#### Scenario: Service grid illustrations
- **WHEN** service cards are displayed (homepage, services page)
- **THEN** each service shows unique custom illustration or icon
- **AND** illustrations are vector-based (SVG) for scalability
- **AND** illustrations maintain visual consistency

#### Scenario: Illustration accessibility
- **WHEN** illustrations are rendered
- **THEN** appropriate alt text describes the illustration
- **AND** illustrations work in both light and dark modes
- **AND** illustrations don't interfere with text readability

### Requirement: Background Patterns
The system SHALL include decorative background patterns and gradients for visual interest.

#### Scenario: Decorative elements
- **WHEN** sections are rendered
- **THEN** subtle background patterns enhance visual depth
- **AND** patterns don't distract from content
- **AND** patterns adapt to light and dark modes
- **AND** patterns are performant (SVG or CSS)

#### Scenario: Gradient overlays
- **WHEN** hero sections are displayed
- **THEN** gradient overlays create depth and hierarchy
- **AND** gradients don't affect text contrast/readability
- **AND** gradients transition smoothly between color stops

### Requirement: Image Optimization
The system SHALL optimize all images for web performance using Next.js Image component.

#### Scenario: Automatic optimization
- **WHEN** images are served
- **THEN** Next.js automatically optimizes format and size
- **AND** responsive srcset provides appropriate sizes for viewport
- **AND** lazy loading is applied to below-the-fold images
- **AND** blur placeholders prevent layout shift

#### Scenario: Image performance
- **WHEN** page loads with images
- **THEN** Largest Contentful Paint (LCP) remains under 2.5s
- **AND** Cumulative Layout Shift (CLS) remains under 0.1
- **AND** images contribute minimal to bundle size

### Requirement: Image Dark Mode Adaptation
The system SHALL ensure all images work well in both light and dark themes.

#### Scenario: Image visibility in dark mode
- **WHEN** dark mode is active
- **THEN** images remain visible and clear
- **AND** images may have subtle opacity adjustment if needed
- **AND** images don't create harsh contrast
- **AND** text over images remains readable in both themes

### Requirement: Image Storage Organization
The system SHALL organize images in logical directory structure within /public/images.

#### Scenario: Directory organization
- **WHEN** images are stored
- **THEN** hero images are in /public/images/hero/
- **AND** service illustrations are in /public/images/services/
- **AND** background patterns are in /public/images/patterns/
- **AND** all images follow consistent naming convention
