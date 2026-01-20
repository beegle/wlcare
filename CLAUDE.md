# West Linn Care - Development Guidelines

## Project Context

This is a single-page marketing website for West Linn Care, an adult foster home in West Linn, Oregon. The site targets adult children researching care options for their aging parents and serves as a landing page for online advertising campaigns.

## Key Constraints

- **No libraries**: Use only vanilla HTML, CSS, and JavaScript
- **Single page**: All content on index.html with anchor navigation
- **Mobile-first**: Design and code for mobile phones first, enhance for larger screens
- **Accessibility first**: Semantic HTML, ARIA labels where needed, keyboard navigation
- **Performance**: Optimize images, minimize render-blocking resources

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

The contact form uses Formspree. To activate:
1. Create account at formspree.io
2. Create new form
3. Replace `[YOUR_FORM_ID]` in the form action URL

## Testing Checklist

Before considering complete:

### Mobile Testing (PRIMARY - test first)
- [ ] Page looks correct at 375px width (iPhone SE)
- [ ] Page looks correct at 390px width (iPhone 14)
- [ ] Hamburger menu opens/closes correctly
- [ ] Phone number is tap-to-call
- [ ] All touch targets are minimum 44px
- [ ] No horizontal scrolling at any point
- [ ] Form is easy to fill out on mobile
- [ ] Text is readable without zooming

### Tablet Testing
- [ ] Page looks correct at 768px width (iPad)
- [ ] Layouts transition smoothly from mobile

### Desktop Testing
- [ ] Page looks correct at 1024px+ width
- [ ] Navigation displays expanded (no hamburger)
- [ ] Multi-column layouts display correctly

### General
- [ ] All navigation links work (smooth scroll)
- [ ] Form validates required fields
- [ ] Form submits to Formspree (or shows placeholder success)
- [ ] All images load with appropriate alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Page loads without JavaScript errors

## Hosting

- **Platform**: GitHub Pages
- **Domain**: westlinncare.com
- **Deployment**: Push to main branch auto-deploys
- **Constraints**: Static files only, no server-side code

## File Structure

```
index.html    - Single page with all content
styles.css    - All styles written mobile-first (base = mobile, min-width queries for larger)
script.js     - Minimal JS for interactivity
CNAME         - Custom domain file (contains: westlinncare.com)
/images/      - All image assets
```

## Placeholder Content

These items need real values before launch:
- Phone number: `[Phone Number]`
- Email: `[Email Address]`
- Street address: `[Street Address]`
- ZIP code: `[ZIP]`
- Formspree form ID: `[YOUR_FORM_ID]`

## Deployment Checklist

Before going live:
- [ ] Create CNAME file with `westlinncare.com`
- [ ] Configure DNS records at domain registrar
- [ ] Enable GitHub Pages in repo settings
- [ ] Verify HTTPS is working
- [ ] Replace all placeholder contact info
- [ ] Set up Formspree and update form action URL
- [ ] Test form submission on live site

## Do Not

- Add CSS or JS libraries (Bootstrap, jQuery, etc.)
- Create multiple HTML pages
- Add features not in SPEC.md without approval
- Use generic stock photos - only use provided images
- Make it feel institutional or clinical
- Write desktop-first CSS (no `max-width` media queries)
- Use fixed widths that break on mobile
- Create touch targets smaller than 44px
