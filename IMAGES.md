# Image Assets Guide

This document describes the image assets for the Advantage marketing website.

## ✅ Current Status

**Updated**: The website now uses **Unsplash professional images** for all hero sections! All 7 hero images have been integrated with Next.js Image component for optimal performance.

### Integrated Images

All images are served from Unsplash CDN with automatic optimization via Next.js:

1. **Homepage Hero** - Digital marketing workspace with analytics dashboard
2. **SEO Service** - SEO analytics and search optimization dashboard
3. **SEA Service** - Google Ads and PPC advertising campaign dashboard
4. **Email Marketing** - Email marketing campaign with newsletter design
5. **Sites Web** - Website development with code and responsive design
6. **Landing Pages** - Landing page conversion optimization and A/B testing
7. **About Page** - Team collaboration and professionals working together

### Image Features
- ✅ Next.js Image component for automatic optimization
- ✅ Responsive sizing (800x800px base)
- ✅ Lazy loading (except homepage hero with `priority`)
- ✅ Hover zoom effect (scale 1.05, 700ms transition)
- ✅ Shadow and rounded corners for visual appeal
- ✅ Configured in `next.config.js` for Unsplash domain

## Optional: Replace with Custom Images

While the current Unsplash images are professional and production-ready, you may want to replace them with branded/custom images.

## Current Unsplash Images

### Hero Images (All Integrated)

Current Unsplash images and their locations:

- **Homepage Hero** (`components/sections/hero.tsx`)
  - ✅ Current: `https://images.unsplash.com/photo-1460925895917-afdab827c52f`
  - Description: Digital marketing workspace with analytics dashboard
  - Alt text: "Digital marketing workspace with analytics dashboard"

- **SEO Service Page** (`components/service-page-seo.tsx`)
  - ✅ Current: `https://images.unsplash.com/photo-1562577309-4932fdd64cd1`
  - Description: SEO analytics and search engine optimization dashboard
  - Alt text: "SEO analytics and search engine optimization dashboard"

- **SEA Service Page** (`components/service-page-sea.tsx`)
  - ✅ Current: `https://images.unsplash.com/photo-1553877522-43269d4ea984`
  - Description: Google Ads and PPC advertising campaign dashboard
  - Alt text: "Google Ads and PPC advertising campaign dashboard"

- **Email Marketing Page** (`components/service-page-email.tsx`)
  - ✅ Current: `https://images.unsplash.com/photo-1596526131083-e8c633c948d2`
  - Description: Email marketing campaign with newsletter design
  - Alt text: "Email marketing campaign with newsletter design"

- **Sites Web Page** (`components/service-page-sites-web.tsx`)
  - ✅ Current: `https://images.unsplash.com/photo-1547658719-da2b51169166`
  - Description: Website development with code and responsive design
  - Alt text: "Website development with code and responsive design"

- **Landing Pages** (`components/service-page-landing.tsx`)
  - ✅ Current: `https://images.unsplash.com/photo-1551288049-bebda4e38f71`
  - Description: Landing page conversion optimization and A/B testing
  - Alt text: "Landing page conversion optimization and A/B testing"

- **About Page** (`components/about-page-content.tsx`)
  - ✅ Current: `https://images.unsplash.com/photo-1522071820081-009f0129c71c`
  - Description: Team collaboration and professionals working together
  - Alt text: "Team collaboration and digital marketing professionals working together"

### 2. Service Icons/Illustrations

Current: Using Lucide React icons (Search, MousePointerClick, Mail, Globe, Target)

**Optional Enhancement**: Replace with custom SVG illustrations for brand consistency
- Location: `components/sections/services-grid.tsx`
- Recommended: Create custom icon set with consistent style
- Format: SVG (scalable, small file size)

### 3. Background Patterns (Optional)

The site uses animated gradient blobs for visual interest. Additional patterns can be added:
- Subtle geometric patterns
- Wave patterns for section dividers
- Abstract shapes for visual depth

## Image Specifications

### Format Recommendations:
- **Photos**: WebP format (80-85% quality)
- **Illustrations/Icons**: SVG (vector, infinitely scalable)
- **Fallback**: JPEG/PNG for older browser support

### Size Guidelines:
- Hero images: < 150KB (after compression)
- Service illustrations: < 50KB each
- Icons: < 10KB each (SVG)

### Optimization Tools:
- WebP conversion: `cwebp` command-line tool or online converters
- Image compression: TinyPNG, ImageOptim, Squoosh
- SVG optimization: SVGO, SVGOMG

## Implementation Steps

### 1. Create Directory Structure

```bash
mkdir -p public/images/hero
mkdir -p public/images/services
mkdir -p public/images/patterns
```

### 2. Add Images

Place optimized images in the appropriate directories following this naming convention:
- `public/images/hero/homepage.webp`
- `public/images/hero/seo.webp`
- `public/images/hero/sea.webp`
- `public/images/hero/email-marketing.webp`
- `public/images/hero/sites-web.webp`
- `public/images/hero/landing-pages.webp`
- `public/images/hero/about.webp`

### 3. Update Components

Replace gradient placeholders with Next.js Image components:

```tsx
import Image from "next/image";

// Replace this:
<div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />

// With this:
<div className="relative aspect-square rounded-2xl overflow-hidden">
  <Image
    src="/images/hero/homepage.webp"
    alt="Digital marketing workspace"
    fill
    className="object-cover"
    priority  // For above-fold images
    placeholder="blur"
    blurDataURL="data:image/..." // Generate with plaiceholder or similar
  />
</div>
```

### 4. Dark Mode Considerations

For images that need to adapt to dark mode:

```tsx
<div className="relative aspect-square rounded-2xl overflow-hidden">
  <Image
    src="/images/hero/homepage.webp"
    alt="..."
    fill
    className="object-cover opacity-90 dark:opacity-70"  // Reduce opacity in dark mode
  />
</div>
```

## Performance Best Practices

1. **Use `priority` prop** for above-the-fold images (homepage hero)
2. **Lazy load** all other images (default Next.js behavior)
3. **Generate blur placeholders** to prevent layout shift
4. **Responsive images**: Next.js automatically generates multiple sizes
5. **Monitor metrics**: LCP should stay < 2.5s, CLS < 0.1

## Testing Checklist

After adding images:
- [ ] Run Lighthouse audit (Performance score >= 90)
- [ ] Check LCP (Largest Contentful Paint)
- [ ] Check CLS (Cumulative Layout Shift)
- [ ] Test image loading on slow 3G connection
- [ ] Verify images visible in both light and dark modes
- [ ] Check alt text for accessibility
- [ ] Verify no broken image links

## Resources

- **Stock Photos**: Unsplash, Pexels, Pixabay (free)
- **Illustrations**: unDraw, Storyset, DrawKit (free)
- **Icons**: Heroicons, Lucide, Feather Icons (free)
- **Compression**: TinyPNG, Squoosh, ImageOptim
- **WebP Converter**: Squoosh.app, cwebp CLI tool

## Questions?

Contact the development team for assistance with image sourcing, optimization, or implementation.
