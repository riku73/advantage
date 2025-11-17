# Project Context

## Purpose
Advantage is a digital marketing agency website designed to showcase professional marketing services and generate qualified leads. The website serves as the primary online presence for a French-speaking digital marketing agency specializing in SEO, SEA, Email Marketing, Website Development, and Landing Page creation.

**Key Goals:**
- Establish strong online presence for the Advantage agency brand
- Clearly communicate service offerings to potential clients
- Generate qualified leads through strategic CTAs and contact forms
- Demonstrate expertise and credibility in the digital marketing space
- Provide seamless user experience for French-speaking audiences

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Vercel (recommended)
- **Package Manager**: npm/pnpm
- **Version Control**: Git

## Project Conventions

### Code Style
- TypeScript strict mode enabled
- Use functional components with React hooks
- Prefer named exports over default exports
- Use Prettier for code formatting (if configured)
- Use ESLint for linting (if configured)
- Component naming: PascalCase (e.g., `ServiceCard.tsx`)
- Utility naming: camelCase (e.g., `formatPhoneNumber.ts`)
- File organization: feature-based structure

### Architecture Patterns
- **App Router Structure**: Use Next.js 14+ App Router conventions
- **Component Structure**:
  - `/app` - Next.js pages and layouts (French content)
  - `/components` - Reusable UI components
  - `/lib` - Utility functions and helpers
  - `/public` - Static assets (images, fonts)
- **Styling**: Utility-first approach with Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **Performance**: Image optimization with Next.js `<Image>` component
- **SEO**: Use Next.js Metadata API for SEO optimization

### Language & Content
- **Primary Language**: French
- **Content Tone**: Professional, authoritative, results-oriented
- **Typography**: Clear hierarchy, readable font sizes
- **String Escaping**: Always escape French apostrophes in JSX (use `&apos;` or escaped quotes)

### Testing Strategy
- Manual testing for UI/UX validation
- Browser compatibility testing (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness testing on various device sizes
- Performance testing with Lighthouse

### Git Workflow
- Use descriptive commit messages in English
- Create feature branches for new sections/features
- Commit frequently with atomic changes
- Use conventional commit format (optional): `feat:`, `fix:`, `style:`, `docs:`

## Domain Context

### Digital Marketing Services
The Advantage agency offers the following core services:

1. **SEO (Référencement Naturel)**
   - On-page optimization
   - Technical SEO
   - Content strategy
   - Link building
   - Local SEO

2. **SEA (Référencement Payant)**
   - Google Ads campaigns
   - Display advertising
   - Retargeting campaigns
   - Budget optimization
   - ROI tracking

3. **Email Marketing**
   - Campaign design and execution
   - List segmentation
   - Automation workflows
   - A/B testing
   - Analytics and reporting

4. **Website Development**
   - Custom website design
   - E-commerce solutions
   - CMS integration
   - Performance optimization
   - Maintenance and support

5. **Landing Pages**
   - Conversion-optimized design
   - A/B testing
   - Lead capture forms
   - Analytics integration
   - Fast loading times

### Target Audience
- **Primary**: Small to medium businesses in French-speaking markets (France, Belgium, Switzerland, Quebec)
- **Secondary**: Startups and entrepreneurs seeking digital marketing expertise
- **User Personas**: Business owners, marketing managers, decision-makers looking for ROI-driven marketing solutions

### Key Value Propositions
- Expertise in French-speaking markets
- Data-driven approach to marketing
- Transparent reporting and ROI focus
- Full-service digital marketing capabilities
- Personalized service and strategy

## Important Constraints

### Language Requirements
- All user-facing content MUST be in French
- Proper use of French typography (guillemets, apostrophes, accents)
- Cultural sensitivity to French-speaking market preferences

### Performance Requirements
- First Contentful Paint (FCP) < 1.5s
- Time to Interactive (TTI) < 3.5s
- Lighthouse Performance score > 90
- Mobile-optimized with fast loading times

### Accessibility
- WCAG 2.1 Level AA compliance (target)
- Semantic HTML structure
- Keyboard navigation support
- Sufficient color contrast ratios
- Alt text for all images

### Browser Support
- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Legal & Privacy
- GDPR compliance for contact forms and data collection
- Cookie consent (if analytics implemented)
- Privacy policy and legal mentions pages

## External Dependencies

### Required Services (Future)
- **Form Handling**: Web3Forms, Formspree, or similar service
- **Analytics**: Google Analytics or privacy-friendly alternative (Plausible)
- **Email Service**: SendGrid, Mailgun, or similar for contact form submissions
- **CMS (Optional)**: Contentful, Sanity, or similar for content management

### Assets Needed
- Logo and brand assets (high-resolution)
- Service icons or illustrations
- Stock photography or custom photography
- Testimonial photos (if applicable)
- Case study assets

### Third-Party Libraries (Current/Planned)
- shadcn/ui components
- Lucide React (icons)
- Tailwind CSS
- React Hook Form (for forms)
- Zod (schema validation)

## Project Structure Conventions

```
advantage-v2/
├── app/
│   ├── layout.tsx          # Root layout (French meta)
│   ├── page.tsx            # Homepage
│   ├── services/           # Services pages
│   ├── contact/            # Contact page
│   └── a-propos/           # About page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections (Hero, Services, etc.)
│   └── shared/             # Shared components (Header, Footer)
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── images/             # Image assets
│   └── fonts/              # Custom fonts (if any)
└── openspec/               # OpenSpec documentation
```
