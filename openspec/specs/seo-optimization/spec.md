# seo-optimization Specification

## Purpose
TBD - created by archiving change add-advantage-marketing-website. Update Purpose after archive.
## Requirements
### Requirement: Page Metadata
The system SHALL provide comprehensive SEO metadata for all pages using Next.js Metadata API.

#### Scenario: Title tags
- **WHEN** any page is rendered
- **THEN** page includes unique, descriptive title tag
- **AND** title includes relevant keywords in French
- **AND** title length is 50-60 characters
- **AND** agency name is included (e.g., "Service SEO - Advantage")

#### Scenario: Meta descriptions
- **WHEN** any page is rendered
- **THEN** page includes unique meta description in French
- **AND** description is 150-160 characters
- **AND** description includes primary keywords naturally
- **AND** description includes call-to-action when appropriate

#### Scenario: Open Graph metadata
- **WHEN** page is shared on social media
- **THEN** Open Graph tags are present (og:title, og:description, og:image, og:url)
- **AND** og:image includes appropriate preview image
- **AND** og:type is set correctly (website, article, etc.)
- **AND** preview renders correctly on Facebook, LinkedIn

#### Scenario: Twitter Card metadata
- **WHEN** page is shared on Twitter/X
- **THEN** Twitter Card meta tags are present
- **AND** twitter:card type is set (summary_large_image)
- **AND** preview renders correctly with image and text

### Requirement: Semantic HTML Structure
The system SHALL use proper semantic HTML elements for improved accessibility and SEO.

#### Scenario: Document structure
- **WHEN** page HTML is generated
- **THEN** proper HTML5 semantic elements are used:
  - `<header>` for site header
  - `<nav>` for navigation
  - `<main>` for main content
  - `<section>` for content sections
  - `<article>` for standalone content (if applicable)
  - `<aside>` for sidebars
  - `<footer>` for site footer

#### Scenario: Heading hierarchy
- **WHEN** page content is structured
- **THEN** single H1 per page (main heading)
- **AND** heading levels are not skipped (no H1 → H3)
- **AND** headings create logical content outline
- **AND** headings include relevant keywords naturally

### Requirement: Structured Data
The system SHALL implement JSON-LD structured data for rich search results.

#### Scenario: Organization schema
- **WHEN** homepage is rendered
- **THEN** Organization schema is included with:
  - name: "Advantage"
  - @type: "MarketingAgency" or "ProfessionalService"
  - description of services
  - contact information
  - address (if applicable)
  - social media profiles

#### Scenario: Service schema
- **WHEN** service pages are rendered
- **THEN** Service schema is included for each service
- **AND** schema includes service name, description, provider, category
- **AND** schema validates with Google Rich Results Test

#### Scenario: LocalBusiness schema (if applicable)
- **WHEN** agency has physical location
- **THEN** LocalBusiness schema is included
- **AND** schema includes address, phone, opening hours
- **AND** schema includes geo coordinates if available

### Requirement: French Language Declaration
The system SHALL properly declare French language for search engines and browsers.

#### Scenario: HTML lang attribute
- **WHEN** page HTML is generated
- **THEN** `<html lang="fr">` is set in root layout
- **AND** regional variations use appropriate codes (fr-FR, fr-BE, fr-CH, fr-CA)

#### Scenario: Content language
- **WHEN** metadata is generated
- **THEN** Content-Language header or meta tag indicates French
- **AND** all user-facing content is in French

### Requirement: URL Structure
The system SHALL use SEO-friendly URL structure with descriptive, keyword-rich paths.

#### Scenario: URL format
- **WHEN** pages are created
- **THEN** URLs are lowercase with hyphens
- **AND** URLs include descriptive keywords in French
- **AND** URLs are kept concise but meaningful
- **AND** URLs follow pattern: /services/seo, /a-propos, /contact

#### Scenario: URL consistency
- **WHEN** pages are accessed
- **THEN** trailing slash handling is consistent
- **AND** no duplicate content issues from URL variations
- **AND** canonical URLs are specified where needed

### Requirement: Image SEO
The system SHALL optimize images for search engines with proper alt text and file naming.

#### Scenario: Alt text
- **WHEN** images are rendered
- **THEN** all content images have descriptive alt text in French
- **AND** alt text describes image content and context
- **AND** decorative images use empty alt attribute (alt="")
- **AND** alt text is concise (< 125 characters)

#### Scenario: Image file names
- **WHEN** images are stored
- **THEN** file names are descriptive with keywords
- **AND** file names use lowercase with hyphens
- **AND** file names avoid generic names like "image1.jpg"
- **EXAMPLE**: "agence-marketing-digital-seo.jpg"

### Requirement: Internal Linking
The system SHALL implement strategic internal linking to improve site crawlability and distribute page authority.

#### Scenario: Navigation links
- **WHEN** site navigation is rendered
- **THEN** all main pages are linked from header/footer
- **AND** links use descriptive anchor text in French
- **AND** navigation structure is shallow (max 3 clicks to any page)

#### Scenario: Contextual links
- **WHEN** page content is displayed
- **THEN** related pages are linked within content
- **AND** service pages cross-link to related services
- **AND** anchor text clearly describes destination page

#### Scenario: Breadcrumb navigation
- **WHEN** user is on deep page (e.g., service detail)
- **THEN** breadcrumb navigation is displayed
- **AND** breadcrumbs are marked up with schema.org BreadcrumbList
- **AND** breadcrumbs improve navigation and SEO

### Requirement: Performance SEO Factors
The system SHALL meet Core Web Vitals requirements as ranking factors.

#### Scenario: Largest Contentful Paint
- **WHEN** page loads
- **THEN** LCP occurs within 2.5 seconds
- **AND** main content is visible quickly

#### Scenario: First Input Delay
- **WHEN** user interacts with page
- **THEN** FID is less than 100 milliseconds
- **AND** page is responsive to input immediately

#### Scenario: Cumulative Layout Shift
- **WHEN** page loads and user scrolls
- **THEN** CLS score is less than 0.1
- **AND** no unexpected layout shifts occur
- **AND** image dimensions are specified to prevent shifts

### Requirement: Mobile-First Indexing
The system SHALL ensure mobile version is optimized as primary indexing target for Google.

#### Scenario: Mobile responsiveness
- **WHEN** site is crawled by Google mobile bot
- **THEN** all content is accessible on mobile
- **AND** text is readable without zooming
- **AND** tap targets are appropriately sized
- **AND** mobile UX is equivalent to desktop

#### Scenario: Mobile performance
- **WHEN** site is tested on mobile
- **THEN** Core Web Vitals pass on mobile devices
- **AND** mobile Lighthouse score is > 90

### Requirement: Robots and Sitemap
The system SHALL provide robots.txt and XML sitemap for search engine crawling.

#### Scenario: robots.txt
- **WHEN** /robots.txt is accessed
- **THEN** file allows crawling of public pages
- **AND** file blocks crawling of admin or private areas (if any)
- **AND** file references XML sitemap location

#### Scenario: XML sitemap
- **WHEN** /sitemap.xml is accessed
- **THEN** sitemap lists all public pages
- **AND** sitemap includes lastmod dates
- **AND** sitemap includes priority and changefreq (optional)
- **AND** sitemap is submitted to Google Search Console

### Requirement: Canonical URLs
The system SHALL specify canonical URLs to prevent duplicate content issues.

#### Scenario: Canonical tags
- **WHEN** pages are rendered
- **THEN** canonical link tag specifies preferred URL
- **AND** canonical URL is absolute (includes domain)
- **AND** canonical prevents duplicate content penalties

### Requirement: Social Media Integration
The system SHALL include social media links and sharing optimization for extended reach.

#### Scenario: Social media links
- **WHEN** footer is displayed
- **THEN** links to social media profiles are included (if applicable)
- **AND** social links open in new tab
- **AND** social links include appropriate rel attributes

#### Scenario: Share buttons (optional)
- **WHEN** service pages or blog posts are viewed
- **THEN** social sharing buttons may be included
- **AND** share buttons use Open Graph metadata for rich previews
- **AND** sharing is tracked for analytics (if applicable)

