# Buransh Tourist Lodge - Design Guidelines

## Design Approach: Reference-Based (Hospitality & Adventure Tourism)

**Primary References:** Airbnb's visual storytelling + Booking.com's functional clarity with authentic Himalayan cultural influences

**Design Principles:**
- Immersive visual experience showcasing Himalayan grandeur
- Warm, welcoming atmosphere balancing adventure and spirituality
- Bilingual design harmony (English-Hindi integration)
- Trust-building through authentic imagery and cultural authenticity

## Core Design Elements

### A. Color Palette

**Primary Colors (Dark Mode):**
- Mountain Slate: 215 20% 15% (backgrounds, headers)
- Snow White: 0 0% 98% (primary text)
- Forest Deep: 140 30% 20% (secondary backgrounds)

**Primary Colors (Light Mode):**
- Himalayan Sky: 210 60% 95% (backgrounds)
- Deep Slate: 215 25% 25% (text)
- Mountain Stone: 30 10% 40% (secondary text)

**Accent Colors:**
- Buransh Orange: 15 85% 60% (CTAs, highlights - inspired by Buransh flowers)
- Sacred Saffron: 35 80% 55% (spiritual elements, Hindi text highlights)
- Alpine Blue: 200 65% 45% (links, trust indicators)

**Avoid:** Generic purple-blue gradients; use natural Himalayan color transitions (dawn oranges to mountain blues)

### B. Typography

**Primary Font:** "Poppins" (Google Fonts) - modern, clean, supports Devanagari script
- Headers: 600-700 weight
- Body: 400-500 weight

**Secondary/Accent Font:** "Noto Serif Devanagari" for Hindi text and spiritual quotes
- Creates cultural authenticity
- 500-600 weight for emphasis

**Scale:**
- Hero Headlines: text-5xl to text-7xl (responsive)
- Section Headers: text-3xl to text-4xl
- Body Text: text-base to text-lg
- Hindi Subtext: text-sm to text-base (slightly larger for readability)

### C. Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-6 to gap-12
- Container max-width: max-w-7xl

**Viewport Management:**
- Hero: 85vh (allows scroll hint visibility)
- Content sections: Natural height with consistent py-20 rhythm
- No forced 100vh sections except hero

### D. Component Library

**Navigation:**
- Sticky header with subtle backdrop blur (backdrop-blur-md)
- Bilingual menu items (English primary, Hindi subtitle in smaller text)
- Mountain silhouette subtle divider

**Hero Section:**
- Full-width hero image (Himalayan peaks, lodge exterior, or trek scenery)
- Centered content overlay with blurred background card
- Bilingual headline (English + Hindi translation below)
- Dual CTA buttons: "Book Your Stay" (solid) + "Explore Trek" (outline with blurred bg)

**Trek Info Cards:**
- Icon-based difficulty indicators (elevation, distance, duration)
- Gradient overlays on route imagery
- Expandable route stages with altitude charts

**Room Cards:**
- Large imagery (4:3 ratio)
- Overlay gradient for text readability
- Price, capacity, amenities as quick-view icons

**Booking Form:**
- Two-column layout (md:grid-cols-2) - form + location context
- Date pickers with trek season highlights
- WhatsApp/Phone quick contact options

**Gallery:**
- Masonry grid layout (Pinterest-style) for varied imagery
- Categories: Trek Views, Lodge Interiors, Local Culture, Seasons
- Lightbox modal for full-size viewing

**Footer:**
- Three-column layout (About, Quick Links, Contact)
- Trek season indicator with icon
- Social media with mountain-themed icons
- Hindi tagline alongside copyright

### E. Images Strategy

**Hero Image:** 
- Large, high-impact panoramic shot of Chaukhamba peaks or lodge with mountain backdrop
- Alternative: Buransh flowers in foreground with mountains
- Dimension: Full-width, 1920x1080 minimum

**Content Images:**
- Trek scenery: Coniferous forests, alpine meadows, temple views
- Room interiors: Warm lighting, traditional Garhwali elements
- Cultural elements: Local architecture, spiritual symbols
- Action shots: Trekkers on route, sunrise at temple

**Placement:**
- Homepage hero: Full-width panoramic
- About section: 2-column layout with lodge history image
- Rooms: Grid of 3-4 room type images
- Trek info: Route map illustration + milestone photos
- Gallery: 12-20 curated images in masonry layout

### F. Multi-Column Strategy

**Use Multi-Columns:**
- Trek highlights: 3-column grid (difficulty, distance, altitude)
- Room types: 2-3 column cards
- Contact page: 2-column (form + map/directions)
- Footer: 3-column information architecture

**Single Column:**
- Hero messaging (centered)
- About narrative (max-w-4xl centered)
- Booking confirmation/testimonials

### G. Cultural & Spiritual Elements

- Subtle mandala patterns as section dividers
- Sanskrit/Hindi quotes in decorative typography
- Saffron accent for spiritual content (temple info, puja timings)
- Traditional Garhwali border patterns (minimal, as accents)

### H. Animations (Minimal)

- Subtle parallax on hero image (slow scroll effect)
- Fade-in on scroll for trek milestone cards
- Hover scale (1.05) on room/gallery images
- No distracting transitions; prioritize performance

## Key Design Distinctions

**Avoid Generic Patterns:**
- No centered three-icon feature grids
- No generic "Subscribe" footer without context
- Replace standard testimonials with pilgrim journey stories

**Unique Elements:**
- Trek difficulty visualization using mountain peak metaphor
- Seasonal availability calendar with weather icons
- "Distance from Lodge" indicator for trek waypoints
- Hindi poetry/spiritual verses as section introductions

**Accessibility:**
- High contrast ratios (WCAG AA minimum)
- Bilingual screen reader support
- Clear focus states for keyboard navigation
- Consistent dark mode across all inputs

## Final Polish

- Every section serves a clear purpose (no filler content)
- Balance adventure imagery with serene spiritual moments
- Mobile-first responsive (trek info accessible on-the-go)
- Performance optimized (lazy load images, CDN fonts)
- Trust signals: Contact info, trek permits, safety guidelines prominently displayed