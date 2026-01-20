# West Linn Care Website Specification

## Project Overview

A single-page marketing website for West Linn Care, an adult foster home in West Linn, Oregon. The site serves as a landing page for online ad campaigns targeting adult children researching care options for aging parents.

## Technical Requirements

- **Single page**: All content on one scrollable page with anchor navigation
- **Vanilla only**: No JavaScript or CSS libraries/frameworks
- **Mobile-first responsive**: Design and build for mobile phones first, then enhance for larger screens
- **Accessible**: Semantic HTML, proper heading hierarchy, alt text, keyboard navigation
- **Performance**: Optimized images, minimal JavaScript

## Mobile-First Responsive Design

**Primary target: Mobile phones.** Many users will discover this site through mobile ads or while researching on their phones. The site must look and function excellently on small screens first.

### Mobile-First Approach
1. **Write CSS for mobile first** - Base styles target phones (< 640px)
2. **Use min-width media queries** - Add complexity for larger screens, not the reverse
3. **Touch-friendly targets** - Buttons and links minimum 44px tap target
4. **Readable without zooming** - 16px minimum font size, adequate line height
5. **Single-column layouts** - Stack content vertically on mobile
6. **Collapsible navigation** - Hamburger menu on mobile, expanded on desktop

### Mobile Considerations
- Hero text must be readable over image on small screens
- Phone number should be tap-to-call (`tel:` link)
- Form fields should be full-width and easy to tap
- Images should scale appropriately and not slow page load
- Avoid horizontal scrolling at any viewport width

## Color Palette (derived from logo)

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#F5ECD7` | Primary background |
| Warm Cream | `#FDF8F0` | Alternate section background |
| Brown/Taupe | `#6B5B4F` | Primary text, headings, borders |
| Dark Brown | `#4A3F35` | Strong emphasis, footer |
| Terracotta | `#C4A484` | Accent color, buttons, links |
| Terracotta Hover | `#A8896E` | Button hover states |
| White | `#FFFFFF` | Card backgrounds, form fields |

## Typography

- **Headings**: System serif stack (Georgia, Times New Roman, serif)
- **Body**: System sans-serif stack (system-ui, -apple-system, sans-serif)
- **Base size**: 16px with responsive scaling

## Page Structure

### 1. Header/Navigation
- Fixed/sticky header on scroll
- Logo (left)
- Navigation links: About, Services, Our Home, Contact
- "Schedule a Tour" CTA button (right)

### 2. Hero Section
- Full-width hero image (hero.png - exterior of home)
- Overlay with welcome text
- Headline: "Compassionate Care in a True Home Setting"
- Subheadline: Welcome text from notes
- Primary CTA: "Schedule a Tour" button
- Secondary: Phone number prominently displayed
- **Availability badge**: "Now Accepting Residents"

### 3. What is an Adult Foster Home?
- Section explaining adult foster homes
- Content from notes.md
- Key differentiators in card/grid layout:
  - Intimate Setting (5 residents max)
  - True Home Environment
  - Consistent Caregivers
  - Family Atmosphere

### 4. Our Services
- Alternating layout: image left/text right, then text left/image right
- Services list with icons (CSS-only icons or simple shapes):
  - Home-Cooked Meals
  - Medication Management
  - Activities & Engagement
  - Personal Care Assistance
  - Housekeeping & Laundry
  - Companionship
- Use living_room.jpeg in this section

### 5. Daily Life & Activities
- Content from notes.md about daily activities
- Emphasis on personalization and respect for individual preferences

### 6. Our Home / Photo Gallery
- Alternating sections showcasing each room
- Images with captions:
  - Living Room (living_room.jpeg): "Comfortable spaces for relaxing and socializing"
  - Dining Room (dining_room.jpeg): "Where we gather for home-cooked meals"
  - Bedroom examples (bedroom_01.jpeg, bedroom_02.jpeg): "Private rooms for rest and privacy"
- Amenity highlights:
  - Private rooms with half bath
  - Large outdoor space
  - Home-like environment

### 7. Contact / Schedule a Tour
- Section ID: `#contact`
- Two-column layout:
  - Left: Contact information (placeholders)
  - Right: Tour request form

#### Contact Information (Placeholders)
- Phone: `[Phone Number]`
- Email: `[Email Address]`
- Address: `[Street Address], West Linn, Oregon [ZIP]`

#### Tour Request Form
Functional form using Formspree (or similar service)

Fields:
1. **Name** (required) - text input
2. **Email** (required) - email input
3. **Phone** (optional) - tel input
4. **Preferred Contact Method** (required) - radio buttons: Email / Phone
5. **Preferred Tour Date** (optional) - date input (min: tomorrow)
6. **Message** (optional) - textarea

Submit button: "Request a Tour"
Success message: "Thank you for your interest in West Linn Care! We'll be in touch within 24 hours to confirm your tour."

### 8. Footer
- Logo
- Quick links
- Contact info summary
- Copyright notice

## Assets

### Images (in /images/)
| File | Description | Usage |
|------|-------------|-------|
| logo.jpeg | Line art logo with house, tree, heart | Header, footer |
| hero.png | Exterior photo of home | Hero section background |
| living_room.jpeg | Living room with piano, skylights | Services section, gallery |
| dining_room.jpeg | Dining area with bay windows | Gallery section |
| bedroom_01.jpeg | Bedroom with recliner, window | Gallery section |
| bedroom_02.jpeg | Bedroom with art, closet | Gallery section |

### Content
- All marketing copy available in notes.md
- Tone: Warm, reassuring, family-focused
- Target audience: Adult children researching care for aging parents

## Interaction & JavaScript

Minimal vanilla JavaScript for:
1. **Smooth scroll**: Anchor link smooth scrolling
2. **Mobile menu**: Hamburger menu toggle for mobile
3. **Form validation**: Client-side validation before submission
4. **Form submission**: Handle Formspree submission and show success message
5. **Sticky header**: Add shadow/style change on scroll (optional, CSS-only preferred)

## Responsive Breakpoints

Use `min-width` media queries to progressively enhance from mobile:

```css
/* Base styles: Mobile phones (default, no media query needed) */

/* Tablet and up */
@media (min-width: 640px) { }

/* Desktop and up */
@media (min-width: 1024px) { }

/* Large desktop (optional) */
@media (min-width: 1280px) { }
```

- **Mobile (base)**: < 640px - Single column, hamburger nav, stacked content
- **Tablet**: 640px - 1024px - Two-column layouts begin, larger typography
- **Desktop**: > 1024px - Full multi-column layouts, expanded navigation

## SEO Considerations

- Semantic HTML5 elements
- Descriptive title tag
- Meta description
- Open Graph tags for social sharing
- Alt text on all images
- Proper heading hierarchy (single H1)

## File Structure

```
/wlcare
├── index.html
├── styles.css
├── script.js
├── CNAME              (contains: westlinncare.com)
├── images/
│   ├── logo.jpeg
│   ├── hero.png
│   ├── living_room.jpeg
│   ├── dining_room.jpeg
│   ├── bedroom_01.jpeg
│   └── bedroom_02.jpeg
├── notes.md
├── SPEC.md
└── CLAUDE.md
```

## Hosting

The site will be hosted on **GitHub Pages** with a custom domain.

- **Domain**: westlinncare.com
- **Hosting**: GitHub Pages (static files only)
- **SSL**: Automatic via GitHub Pages (free HTTPS)
- **Deployment**: Push to main branch triggers deploy

### GitHub Pages Setup
1. Enable GitHub Pages in repository settings
2. Set source to main branch
3. Add custom domain: westlinncare.com
4. Create `CNAME` file in repo root containing: `westlinncare.com`
5. Configure DNS with domain registrar:
   - A records pointing to GitHub Pages IPs
   - Or CNAME record for www subdomain

### Constraints from Static Hosting
- No server-side processing (PHP, Node, etc.)
- Forms must use third-party service (Formspree)
- All assets served as static files

## Form Integration

The contact form will use [Formspree](https://formspree.io/) for handling submissions:
- Free tier: 50 submissions/month
- No backend required
- Email notifications on submission
- Setup requires creating a Formspree account and updating the form action URL

Placeholder form action: `https://formspree.io/f/[YOUR_FORM_ID]`

## Out of Scope (for initial version)

- Testimonials/reviews section
- Licensing/certification badges
- Blog or news section
- Multiple language support
- Chat widget
- Analytics integration (can be added later)
