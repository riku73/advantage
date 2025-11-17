# Visual Assets Specification Deltas

## MODIFIED Requirements

### Requirement: Services overview page SHALL have dedicated images for hero and each service

The services overview page currently lacks images in two areas: the hero section and individual service sections (which show gradient placeholders). A total of 6 images MUST be added to the image inventory and implemented.

#### Scenario: Services page hero image is defined and sourced
**Given** the services overview page needs a hero image
**When** selecting the image
**Then** it must be a professional marketing/digital workspace scene
**And** it must be sourced from Unsplash or equivalent stock photography
**And** the image URL must be defined in the services-page-content.tsx component
**And** the image must have dimensions of at least 800x800px
**And** the image must work well in both light and dark modes (no dark mode variant needed initially)

#### Scenario: Services page hero image is optimized for performance
**Given** the services page hero image is implemented
**When** the page loads
**Then** the image must use Next.js Image component
**And** it must have proper width and height attributes (800x800)
**And** it must have lazy loading enabled (default behavior)
**And** it must have appropriate alt text describing the content
**And** it must have object-cover class for proper aspect ratio
**And** it must have transition-transform and hover:scale-105 for interaction

#### Scenario: Services page hero image enhances layout without breaking responsive design
**Given** the services page with hero image
**When** viewing on desktop (>= lg breakpoint)
**Then** the image must be visible in the right column of a two-column grid
**And** the image must have rounded-2xl and shadow-xl classes for polish
**When** viewing on mobile (< lg breakpoint)
**Then** the image must be hidden with hidden lg:block classes
**And** the content must take full width and remain readable

#### Scenario: Each service section has a contextually relevant image
**Given** the services list section needs images for 5 services
**When** implementing the images
**Then** 5 service-specific images must be sourced from Unsplash
**And** SEO image must show analytics/search results dashboard (e.g., photo-1562577309)
**And** SEA image must show Google Ads or PPC campaign management
**And** Email image must show email design or inbox management
**And** Web image must show website design or coding workspace
**And** Landing image must show landing page design or conversion optimization
**And** each image must be stored in the services array with a unique URL

#### Scenario: Service section images are optimized and styled correctly
**Given** each service section image is implemented
**When** the page renders
**Then** each image must use Next.js Image component
**And** each image must have width=600 height=600 attributes
**And** each image must have object-cover for proper aspect ratio
**And** each image must have aspect-square rounded-2xl shadow-xl classes
**And** each image must have transition-transform hover:scale-105 for interaction
**And** each image must have descriptive alt text matching the service
**And** images must maintain visual consistency across all 5 services
