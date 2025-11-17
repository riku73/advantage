# Button Styling Specification

## Purpose

Define high-contrast, theme-aware button styling that ensures maximum visibility, clear visual hierarchy, and WCAG AAA accessibility compliance across light and dark modes.

## ADDED Requirements

### Requirement: Primary buttons SHALL use high-contrast black/white color scheme

Primary buttons are the most important call-to-action elements on the page and MUST stand out with maximum visibility in both light and dark modes.

#### Scenario: Primary button in light mode
**Given** the user is viewing the site in light mode
**When** they see a primary CTA button
**Then** the button must have a black background (`bg-black`)
**And** the button must have white text (`text-white`)
**And** the button must maintain these colors on all pages (homepage, services, about, contact, CTA sections)

#### Scenario: Primary button in dark mode
**Given** the user is viewing the site in dark mode
**When** they see a primary CTA button
**Then** the button must have a white background (`bg-white` or `dark:bg-white`)
**And** the button must have black text (`text-black` or `dark:text-black`)
**And** the button must maintain these colors on all pages

#### Scenario: Primary button hover state
**Given** a user hovers over a primary button
**When** the hover state is triggered
**Then** the button must maintain its black/white color scheme
**And** the button may darken/lighten slightly (e.g., `hover:bg-gray-900` in light mode, `hover:bg-gray-100` in dark mode)
**And** the existing scale animation (`hover:scale-105`) must be preserved

### Requirement: Secondary buttons SHALL use outline style with consistent 2px borders

Secondary buttons provide alternative actions and MUST be clearly distinguishable from primary buttons while maintaining high visibility.

#### Scenario: Secondary button in light mode
**Given** the user is viewing the site in light mode
**When** they see a secondary button
**Then** the button must have a transparent background (`bg-transparent`)
**And** the button must have a 2px black border (`border-2 border-black`)
**And** the button must have black text (`text-black`)
**And** the border thickness must be exactly 2px, not 3px

#### Scenario: Secondary button in dark mode
**Given** the user is viewing the site in dark mode
**When** they see a secondary button
**Then** the button must have a transparent background (`bg-transparent` or `dark:bg-transparent`)
**And** the button must have a 2px white border (`border-2 dark:border-white`)
**And** the button must have white text (`dark:text-white`)

#### Scenario: Secondary button hover state
**Given** a user hovers over a secondary button
**When** the hover state is triggered
**Then** the background must fill with the border color (black in light mode, white in dark mode)
**And** the text must invert to maintain contrast (white text in light mode, black text in dark mode)
**And** the existing scale animation (`hover:scale-105`) must be preserved

### Requirement: Button styles SHALL be consistent across all page types

All instances of primary and secondary buttons across the website MUST follow the same styling rules to ensure a cohesive user experience.

#### Scenario: Consistency across homepage buttons
**Given** the user navigates to the homepage
**When** they view the hero section
**Then** primary buttons ("Demandez un devis gratuit") must use the black/white scheme
**And** secondary buttons ("Découvrir nos services") must use the outline style
**And** buttons in the CTA section must follow the same patterns

#### Scenario: Consistency across service page buttons
**Given** the user navigates to any service page (SEO, SEA, Email, Sites Web, Landing Pages)
**When** they view the hero section or CTA section
**Then** all primary buttons must use identical styling
**And** all secondary buttons must use identical styling
**And** no button may deviate from the specification

#### Scenario: Consistency across about and contact pages
**Given** the user navigates to the about page or contact page
**When** they view CTA sections
**Then** all buttons must follow the same primary/secondary styling rules

### Requirement: Buttons SHALL maintain accessibility standards

Button text and backgrounds MUST provide sufficient contrast to meet WCAG accessibility guidelines.

#### Scenario: Contrast ratio compliance in light mode
**Given** a button is displayed in light mode
**When** measuring the contrast ratio
**Then** primary buttons (black bg, white text) must achieve 21:1 contrast (WCAG AAA)
**And** secondary buttons (black border/text) must achieve at least 7:1 contrast against the background
**And** all text must remain readable on all background colors

#### Scenario: Contrast ratio compliance in dark mode
**Given** a button is displayed in dark mode
**When** measuring the contrast ratio
**Then** primary buttons (white bg, black text) must achieve 21:1 contrast (WCAG AAA)
**And** secondary buttons (white border/text) must achieve at least 7:1 contrast against the background

### Requirement: CTA section buttons SHALL use standardized black/white color scheme

CTA section buttons MUST follow the same primary/secondary styling patterns as all other buttons for consistency.

#### Scenario: CTA section buttons in light mode
**Given** the user views a CTA section in light mode
**When** they see the primary button
**Then** it must use black background with white text
**When** they see the secondary button
**Then** it must use transparent background with 2px black border and black text

#### Scenario: CTA section buttons in dark mode
**Given** the user views a CTA section in dark mode
**When** they see the primary button
**Then** it must use white background with black text
**When** they see the secondary button
**Then** it must use transparent background with 2px white border and white text

### Requirement: Tailwind dark mode configuration SHALL support explicit color utilities

The Tailwind CSS v4 configuration MUST include explicit color definitions and dark mode variant configuration to ensure `dark:` prefixed utilities work correctly.

#### Scenario: Tailwind CSS globals.css includes color theme configuration
**Given** the application uses Tailwind CSS v4
**When** reviewing `app/globals.css`
**Then** it must include `@theme` block with `--color-black` and `--color-white` definitions
**And** it must include `@variant dark (&:where(.dark, .dark *))` configuration
**And** the `dark:` prefix must correctly apply styles when HTML has `class="dark"`
