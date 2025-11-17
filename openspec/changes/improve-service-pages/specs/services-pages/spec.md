# Services Pages Specification Deltas

## MODIFIED Requirements

### Requirement: Services overview page SHALL include compelling images

The services overview page (`/services`) currently lacks images in two critical areas: the hero section and the individual service sections. Images MUST be added to enhance visual appeal, credibility, and user engagement.

#### Scenario: Services overview hero displays image on desktop
**Given** the user visits `/services` on a desktop device (>= lg breakpoint)
**When** they view the hero section
**Then** a hero image must be displayed in the right column
**And** the image must be a professional marketing/digital workspace scene
**And** the image must use Next.js Image component with width=800, height=800
**And** the layout must use a two-column grid (lg:grid-cols-2)

#### Scenario: Services overview hero hides image on mobile
**Given** the user visits `/services` on a mobile device (< lg breakpoint)
**When** they view the hero section
**Then** the hero image must be hidden
**And** the content must take full width
**And** the layout must remain readable and well-structured

#### Scenario: Each service section displays relevant image
**Given** the user scrolls through the services list on `/services`
**When** they view each service section (SEO, SEA, Email Marketing, Sites Web, Landing Pages)
**Then** each service must display a relevant image in the visual column
**And** the image must replace the current gradient placeholder (`bg-gradient-to-br from-primary/20 to-accent/20`)
**And** the image must use Next.js Image component with width=600 height=600
**And** the image must have aspect-square, rounded-2xl, and object-cover classes
**And** the image must have shadow-xl for visual depth
**And** the image must have transition-transform hover:scale-105 for interaction

#### Scenario: Service section images are contextually relevant
**Given** each service on `/services` has an image
**When** reviewing the image content
**Then** SEO service must show analytics/search dashboard imagery
**And** SEA service must show Google Ads campaign management imagery
**And** Email Marketing service must show email campaign/inbox imagery
**And** Sites Web service must show modern website design/coding imagery
**And** Landing Pages service must show high-converting page design imagery
**And** all images must have descriptive alt text for accessibility

### Requirement: Services overview page hero SHALL include primary CTA button

The services overview page hero section currently has NO call-to-action button, which misses a critical conversion opportunity. It MUST include a primary CTA button.

#### Scenario: Services overview hero includes "Demandez un devis" button
**Given** the user views the `/services` page hero section
**When** they see the hero content
**Then** a primary CTA button must be visible below the description
**And** the button must say "Demandez un devis gratuit" or similar
**And** the button must link to `/contact`
**And** the button must use standard primary button styling (bg-black dark:bg-white text-white dark:text-black)
**And** the button must include an ArrowRight icon
**And** the button must have hover scale animation (hover:scale-105)

### Requirement: Individual service page heroes SHALL include secondary CTA button

Individual service pages (`/services/seo`, `/services/sea`, etc.) currently have only ONE button in the hero. They MUST include a secondary button for alternative actions.

#### Scenario: Service page hero has both primary and secondary buttons
**Given** the user visits any individual service page (/services/seo, /services/sea, /services/email-marketing, /services/sites-web, /services/landing-pages)
**When** they view the hero section
**Then** TWO buttons must be visible
**And** the first button must be primary style (existing "Audit gratuit" or similar)
**And** the second button must be secondary style (outlined)
**And** the secondary button must say "Voir tous les services" or similar
**And** the secondary button must link to `/services`
**And** both buttons must be in a flex container with gap-4

#### Scenario: Secondary button uses standard outline styling
**Given** the secondary button on a service page hero
**When** viewing in light mode
**Then** it must have transparent background (bg-transparent)
**And** it must have 2px black border (border-2 border-black)
**And** it must have black text (text-black)
**When** viewing in dark mode
**Then** it must have 2px white border (dark:border-white)
**And** it must have white text (dark:text-white)

### Requirement: Service page CTA sections SHALL use standard primary button styling

Service page CTA sections currently use non-standard button styling (`bg-white dark:bg-gray-900 text-primary`) that doesn't match the homepage standard. They MUST use the standard primary button styling for consistency.

#### Scenario: Service page CTA button uses standard black/white scheme
**Given** any service page CTA section (in service-page-seo.tsx, service-page-sea.tsx, service-page-email.tsx, service-page-sites-web.tsx, service-page-landing.tsx)
**When** viewing the CTA button
**Then** it must use standard primary button styling
**And** in light mode: bg-black text-white
**And** in dark mode: dark:bg-white dark:text-black
**And** it must NOT use text-primary or bg-gray-900 classes
**And** it must maintain hover states: hover:bg-gray-900 dark:hover:bg-gray-100

#### Scenario: CTA button maintains accessibility on purple background
**Given** the CTA section has a purple background (bg-primary)
**When** measuring contrast ratio in light mode
**Then** black button with white text must achieve at least 7:1 contrast against purple
**When** measuring contrast ratio in dark mode
**Then** white button with black text must achieve at least 7:1 contrast against purple
**And** if contrast is insufficient, the purple background shade must be adjusted
