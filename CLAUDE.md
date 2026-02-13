# West Linn Care - Development Guidelines

## Project Context

This is a multi-page marketing website for West Linn Care, an adult foster home in West Linn, Oregon. The site targets adult children researching care options for their aging parents and serves as a landing page for online advertising campaigns.

## Key Constraints

- **No libraries**: Use only vanilla HTML, CSS, and JavaScript
- **Multi-page**: 7 pages using subdirectory `index.html` pattern for clean URLs
- **Mobile-first**: Design and code for mobile phones first, enhance for larger screens
- **Accessibility first**: Semantic HTML, ARIA labels where needed, keyboard navigation
- **Performance**: Optimize images, minimize render-blocking resources

## Site Architecture

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.html` | Homepage with hero + condensed section previews |
| `/about` | `about/index.html` | Full about content, feature cards, benefits, daily life |
| `/services` | `services/index.html` | Full services grid with descriptions |
| `/our-home` | `our-home/index.html` | Full gallery, all images, amenities |
| `/contact` | `contact/index.html` | Contact info + tour request form |
| `/adult-foster-home-vs-assisted-living` | `adult-foster-home-vs-assisted-living/index.html` | SEO comparison page |
| `/areas-we-serve` | `areas-we-serve/index.html` | SEO geo page for surrounding areas |

### Navigation Structure
- **Main nav** (header): About | Services | Our Home | Contact | [Schedule a Tour button]
- **Footer**: All main nav links + Resources section with SEO pages
- SEO pages appear in footer only (not in main nav)

### Shared Patterns
- **Header/footer**: Duplicated HTML across all pages (no JS injection)
- **Asset paths**: All root-relative (`/images/...`, `/styles.css`, `/script.js`)
- **Active nav**: Current page's nav link gets `.nav-link.active` class
- **Subpage template**: page-header → breadcrumb → content → cta-banner → footer
- **Hash redirect**: Homepage has inline script redirecting old `/#section` URLs to new pages

## Mobile-First Responsive Design

**The primary viewing context is mobile phones.** Users will often find this site through mobile ads while researching care options for their parents.

### CSS Approach
```css
/* Base styles = mobile styles (no media query) */
.element {
  width: 100%;
  padding: 1rem;
}

/* Enhance for larger screens with min-width */
@media (min-width: 640px) {
  .element {
    width: 50%;
    padding: 2rem;
  }
}
```

### Mobile Requirements
- **Touch targets**: Minimum 44px for all interactive elements
- **Tap-to-call**: Phone numbers must use `tel:` links
- **No horizontal scroll**: Content must fit viewport width
- **Readable text**: Minimum 16px font size (prevents iOS zoom on input focus)
- **Single column**: Stack layouts vertically on mobile
- **Fast loading**: Optimize images, lazy load below-fold content

### Testing Priority
1. Test on mobile viewport FIRST (375px width - iPhone SE/standard)
2. Then tablet (768px - iPad)
3. Then desktop (1024px+)

## Color Palette

Use these exact colors derived from the logo:

```css
:root {
  --cream: #F5ECD7;
  --warm-cream: #FDF8F0;
  --brown: #6B5B4F;
  --dark-brown: #4A3F35;
  --terracotta: #C4A484;
  --terracotta-hover: #A8896E;
  --white: #FFFFFF;
}
```

## Design Principles

1. **Mobile-first**: Build for phones first - this is the primary viewing context
2. **Warm and inviting**: The design should feel welcoming, not clinical or institutional
3. **Trust-building**: Clean, professional appearance that reassures families
4. **Photo-forward**: Let the beautiful home photos do the selling
5. **Clear CTAs**: Phone number (tap-to-call) and tour form should be easy to find on mobile

## Content Source

All marketing copy is in `notes.md`. Use this content directly or adapt it while maintaining:
- Warm, reassuring tone
- Focus on family and personalized care
- Emphasis on "home" vs "facility"
- Benefits of small 5-resident maximum

## Images

All images are in `/images/`:
- `logo.jpeg` - Logo for header/footer
- `hero.png` - Exterior shot for hero section
- `living_room.jpeg` - Living room with piano
- `dining_room.jpeg` - Dining area with bay windows
- `bedroom_01.jpeg` - Bedroom with recliner
- `bedroom_02.jpeg` - Bedroom with artwork

## Form Setup

The contact form uses Formspree (on `/contact` page). Currently configured with form ID `xojjkjar`.

## Testing Checklist

Before considering complete:

### Mobile Testing (PRIMARY - test first)
- [ ] All 7 pages look correct at 375px width (iPhone SE)
- [ ] All 7 pages look correct at 390px width (iPhone 14)
- [ ] Hamburger menu opens/closes correctly on every page
- [ ] Phone number is tap-to-call on every page
- [ ] All touch targets are minimum 44px
- [ ] No horizontal scrolling at any point on any page
- [ ] Form is easy to fill out on mobile (contact page)
- [ ] Text is readable without zooming

### Tablet Testing
- [ ] All pages look correct at 768px width (iPad)
- [ ] Layouts transition smoothly from mobile

### Desktop Testing
- [ ] All pages look correct at 1024px+ width
- [ ] Navigation displays expanded (no hamburger)
- [ ] Multi-column layouts display correctly

### General
- [ ] All navigation links work across all pages
- [ ] Active nav state highlights correctly on each page
- [ ] Hash redirects work (e.g., `/#about` → `/about`)
- [ ] Form validates required fields
- [ ] Form submits to Formspree
- [ ] All images load with appropriate alt text from all pages
- [ ] Color contrast meets WCAG AA standards
- [ ] No JavaScript errors on any page
- [ ] Each page has unique title, meta description, canonical URL, and OG tags
- [ ] Breadcrumbs display correctly on subpages

## SEO

- **Sitemap**: `sitemap.xml` lists all 7 pages
- **Robots**: `robots.txt` allows all, references sitemap
- **Structured data**: JSON-LD LocalBusiness on homepage
- **Canonical URLs**: Every page has `<link rel="canonical">`
- **OG tags**: Every page has Open Graph meta tags

## Hosting

- **Platform**: GitHub Pages
- **Domain**: westlinncare.com
- **Deployment**: Push to main branch auto-deploys
- **Constraints**: Static files only, no server-side code

## File Structure

```
index.html                                      - Homepage (hero + previews)
styles.css                                      - All styles (mobile-first)
script.js                                       - Minimal JS for interactivity
sitemap.xml                                     - XML sitemap for search engines
robots.txt                                      - Robots directives
CNAME                                           - Custom domain (westlinncare.com)
/images/                                        - All image assets
/about/index.html                               - About page
/services/index.html                            - Services page
/our-home/index.html                            - Our Home page
/contact/index.html                             - Contact page (with form)
/adult-foster-home-vs-assisted-living/index.html - AFH vs Assisted Living (SEO)
/areas-we-serve/index.html                      - Areas We Serve (SEO)
```

## Deployment Checklist

Before going live:
- [x] Create CNAME file with `westlinncare.com`
- [ ] Configure DNS records at domain registrar
- [ ] Enable GitHub Pages in repo settings
- [ ] Verify HTTPS is working
- [x] Contact info populated (phone, email, address)
- [x] Formspree form configured
- [ ] Test form submission on live site
- [ ] Verify all pages load correctly on live domain

## Conventions for Adding New Pages

1. Create `page-name/index.html` in root
2. Use root-relative asset paths (`/styles.css`, `/images/...`)
3. Copy header/footer from an existing subpage
4. Set the correct `.nav-link.active` class (or none for non-nav pages)
5. Include: gtag, unique `<title>`, `<meta description>`, canonical URL, OG tags
6. Follow subpage template: page-header → breadcrumb → content → cta-banner
7. Add the page to `sitemap.xml`
8. If it should appear in navigation, update header nav on ALL pages

## Do Not

- Add CSS or JS libraries (Bootstrap, jQuery, etc.)
- Add features not in SPEC.md without approval
- Use generic stock photos - only use provided images
- Make it feel institutional or clinical
- Write desktop-first CSS (no `max-width` media queries)
- Use fixed widths that break on mobile
- Create touch targets smaller than 44px
- Use relative asset paths (always use root-relative `/...`)
