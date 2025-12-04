# Design Guidelines - Huelic Service One-Page Website

## Design Approach
**Minimalist Corporate & Warm** - Clean, spacious design emphasizing professionalism in food service industry with generous whitespace and full-width photography sections.

## Color Palette
- **Base White**: #FFFFFF (main background)
- **Light Gray**: #F7F7F7 (alternating section backgrounds)
- **Primary Brand Green**: #1e8449 (Dark green/leaf - symbolizes health and growth)
- **Accent CTA Yellow**: #F4D03F (Mustard/soft gold - for buttons and urgency elements)

## Typography
**Headers/Titles**: 
- Poppins Bold or Montserrat Black
- Large, authoritative sizing for section headers
- Use bold weights to establish hierarchy

**Body Text**:
- Poppins Regular or Roboto Light
- Clean, highly legible for detailed descriptions
- Ample line-height for easy reading

## Layout System
**Spacing Philosophy**: Generous padding and margins throughout - let content breathe
- Section padding: Very generous vertical spacing (py-16 to py-24 on desktop, py-12 on mobile)
- Container max-width: max-w-7xl for content, but images go full-width
- Card spacing: Ample gaps between elements (gap-8 to gap-12)

**Grid Strategy**: Use CSS Grid and Flexbox for responsive layouts
- Values cards: 3-column grid on desktop, stack on mobile
- Logo grid: 4 columns desktop, 2 columns tablet, 1 column mobile

## Page Structure & Sections

### 1. Header/Navigation
- Fixed navigation with smooth scroll links to all sections
- Clean, minimal design with brand presence
- Links: Nosotros, Servicios, Clientes, Contacto

### 2. Hero Section
- Full-width impactful image showing well-lit food/professional kitchen
- Large headline overlay with company value proposition
- Yellow mustard CTA button (#F4D03F) with blur backdrop
- Ample vertical space to create strong first impression

### 3. Nosotros (About) Section
- Large section title
- Brief company history emphasizing "15+ years of experience"
- Three value cards in grid layout:
  - **Calidad** (Quality) with large icon
  - **Higiene** (Hygiene) with large icon  
  - **Nutrición** (Nutrition) with large icon
- Each card with icon, title, brief description
- CTA button to view Quality Policy
- Background: Light gray (#F7F7F7) for contrast

### 4. Servicios (Services) Section
- Title introducing services
- Service cards with:
  - High-quality photos of dishes/installations/staff
  - Service name and description
  - Fade-in animation on scroll (CSS-based)
- Images should be large and impactful
- White background

### 5. Clientes (Trust/Clients) Section
- **Testimonials Carousel**: 
  - CSS-only slider with 3 testimonial blocks
  - Each with quote, client name, and company
  - Clean, minimal design with quotation styling
  
- **Client Logos Grid**:
  - 8 client company logos
  - Displayed in grayscale for corporate aesthetic
  - Responsive grid (4 cols desktop → 2 tablet → 1 mobile)
  - Subtle hover effect on logos
- Background: Light gray (#F7F7F7)

### 6. Contacto (Contact) Section
- Functional contact form
- Company contact information
- Map or location details if applicable
- Yellow CTA button for form submission
- White background

### 7. Footer
- Company information
- Additional links
- Professional, minimal design
- Dark green background (#1e8449) with white text

## Interactive Elements
- **Smooth Scroll**: Implement smooth scrolling for all navigation links
- **Hover Effects**: Subtle transitions on buttons and cards
- **Fade-in Animations**: Services cards animate into view on scroll
- **Button States**: Yellow CTA buttons with hover states
- **Logo Interaction**: Client logos with subtle hover transitions

## Images Requirements
**Critical - No Generic Stock Photos**:
- Well-lit, professional food photography
- Staff photos showing hygiene equipment and friendly service
- Clean, bright installation photos
- Images serve as visual section separators
- Full-width treatment for maximum impact
- High resolution, properly optimized

**Image Placement**:
- Hero: Large full-width hero image
- Services: Multiple service-related photos
- About section: Optional supporting imagery
- All images must convey professionalism, cleanliness, and quality

## Responsive Design
- Mobile-first approach using Flexbox and CSS Grid
- Breakpoints: Mobile (base), Tablet (md:), Desktop (lg:)
- All grids collapse to single column on mobile
- Maintain generous spacing at all viewport sizes
- Touch-friendly interactive elements on mobile

## Design Principles
- Emphasize **whitespace** - generous padding creates breathing room
- **Full-width sections** alternate backgrounds (white/light gray)
- **Photography-driven** - large, impactful images
- **Corporate warmth** - professional yet approachable through green/yellow palette
- **Trust signals** - client logos, testimonials, years of experience