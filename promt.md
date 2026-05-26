STEP 4 — CREATE IMAGE GRID SECTION
Create a premium masonry gallery using the real Benjaly Rocks installation images.

Requirements:
- Pinterest-inspired layout
- Large image cards
- Smooth hover zoom
- Rounded corners
- Spacious gaps
- Dark premium aesthetic

Focus on:
- Tile textures
- Interlock patterns
- Outdoor paving
- Parking tiles
- Symmetry

The gallery should feel like a luxury architecture portfolio.
STEP 5 — PRODUCT CARD PROMPT
Create premium product cards using the real product images.

Each card should include:
- Large image
- Product title
- Minimal specifications
- Elegant hover effect
- Explore button

Style:
- Architectural materials catalogue
- Premium construction brand
- Minimal clean typography
- Large spacing
STEP 6 — MAKE SITE LOOK PREMIUM

This is the IMPORTANT prompt.

Refine the entire website using the real Benjaly Rocks imagery.

Improve:
- Image cropping
- Section spacing
- Visual hierarchy
- Typography scale
- Contrast
- Layout balance

Make the website feel:
- Premium
- Local but modern
- Architectural
- Trustworthy
- Clean
- Expensive

Avoid:
- Generic AI template appearance
- Crowded layouts
- Excessive animations
- Random colors
NOW IMPORTANT DESIGN DECISION

Your site should NOT look like:
❌ a hardware shop
❌ a construction contractor
❌ a local directory listing

It SHOULD look like:
✅ premium tile/interlock brand
✅ architectural materials company
✅ modern showroom catalogue

###

Upgrade the Benjaly Rocks website into a premium architectural materials brand experience.

Add the following advanced sections and improvements:

1. Completed Works Section
- Showcase real completed installations
- Large cinematic image cards
- Categories:
  - House pathways
  - Parking areas
  - Courtyard paving
  - Outdoor walkways
- Add subtle overlay labels
- Premium portfolio-style layout

2. Popular Designs Section
- Highlight best-selling tile/interlock patterns
- Modern horizontal slider or grid
- Focus on textures and symmetry
- Include:
  - Red-black interlocks
  - Geometric tiles
  - Gray outdoor pavers
  - Modern parking patterns

3. Available Colors & Finishes
- Elegant color swatch display
- Concrete textures
- Matte finishes
- Stone-inspired patterns
- Minimal luxury styling

4. Applications Section
Display where products are used:
- Residential
- Parking Areas
- Commercial Spaces
- Garden Pathways
- Outdoor Landscapes
- Modern Villas

Use premium icon cards with architectural styling.

5. Premium Statistics Section
Add elegant animated counters:
- 20+ Years Experience
- 1000+ Completed Works
- Large Product Variety
- Trusted Local Brand

6. Improve Overall Visual Experience
- More cinematic image presentation
- Better whitespace
- Refined typography hierarchy
- Premium hover effects
- Smooth scroll transitions
- Better mobile responsiveness

7. Add Premium Interaction Details
- Magnetic buttons
- Smooth image zoom
- Soft parallax sections
- Elegant card transitions
- Glassmorphism only where subtle

8. Make the Website Feel Like:
- A premium tile showroom
- A modern architecture materials company
- A luxury construction catalogue
- A high-end local brand

Avoid:
- Hardware shop aesthetic
- Generic AI layouts
- Crowded sections
- Cheap gradients
- Over-animation
- Too much text

The final website should feel modern, clean, cinematic, premium, and trustworthy.


STEP 22 — CURSOR HOVER EFFECT

Add this JS BELOW cursor JS:

const hoverTargets = document.querySelectorAll(
  'a, button, .catalogue-card, .project-card'
);

hoverTargets.forEach((target) => {

  target.addEventListener('mouseenter', () => {

    cursor.style.width = '60px';
    cursor.style.height = '60px';
    cursor.style.background = 'rgba(197,168,128,0.15)';

  });

  target.addEventListener('mouseleave', () => {

    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'transparent';

  });

});
STEP 23 — ADD IMAGE GRAIN TEXTURE

Luxury websites use subtle noise texture.

Add this CSS
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.035;
  z-index: 9999;

  background-image:
    url('https://grainy-gradients.vercel.app/noise.svg');
}
STEP 24 — ADD GLASS NAVBAR

Find navbar CSS.

REPLACE with:

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(10,11,13,0.6);
  backdrop-filter: blur(20px);

  border-bottom: 1px solid rgba(255,255,255,0.05);

  transition: all 0.4s ease;
}
STEP 25 — NAVBAR SCROLL EFFECT

Add to app.js

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      'rgba(10,11,13,0.85)';

    navbar.style.backdropFilter =
      'blur(24px)';

  } else {

    navbar.style.background =
      'rgba(10,11,13,0.6)';
  }

});
STEP 26 — PREMIUM LOADING SCREEN

Inside <body> FIRST:

<div class="loader">

  <div class="loader-logo">
    BENJALY ROCKS
  </div>

</div>
CSS
.loader {
  position: fixed;
  inset: 0;
  background: #0a0b0d;
  z-index: 100000;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 1s ease;
}

.loader-logo {
  font-size: 2rem;
  letter-spacing: 10px;
  color: #c5a880;
}
JS
window.addEventListener('load', () => {

  const loader = document.querySelector('.loader');

  setTimeout(() => {

    loader.style.opacity = '0';

    setTimeout(() => {

      loader.style.display = 'none';

    }, 1000);

  }, 1200);

});
STEP 27 — ADD STAGGERED HERO ANIMATIONS

Add CSS:

.animate-fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s forwards;
}

.animate-fade-in:nth-child(1) {
  animation-delay: 0.2s;
}

.animate-fade-in:nth-child(2) {
  animation-delay: 0.4s;
}

.animate-fade-in:nth-child(3) {
  animation-delay: 0.6s;
}

.animate-fade-in:nth-child(4) {
  animation-delay: 0.8s;
}

@keyframes fadeUp {

  to {
    opacity: 1;
    transform: translateY(0);
  }

}