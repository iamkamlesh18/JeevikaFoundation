# Jeevika Foundation Website - Foundation-Themed Upgrade

## Overview

This portfolio website has been completely redesigned with a modern, foundation-focused theme. The upgrade includes a comprehensive design system, icons integration, improved components, and enhanced user experience across all pages.

## 🎯 Key Changes & Improvements

### 1. **Design System**
- **Color Palette**: Foundation-inspired colors with deep green (#1e7e34) as primary, orange (#f39c12) as secondary
- **Typography**: Professional font hierarchy with clear visual distinctions
- **Spacing System**: Consistent spacing scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- **Border Radius**: Modern rounded corners with multiple sizes
- **Shadows & Effects**: Professional depth with layered shadows

### 2. **Components Updated**

#### Navbar
- Icons integrated using react-icons (FiMenu, FiHome, FiInfo, etc.)
- Responsive mobile menu with smooth animations
- Active link indicators
- Sticky positioning with gradient background
- Better hover states and interactions

#### Footer
- Comprehensive multi-section layout
- Social media links with hover animations
- Quick links, focus areas, and contact information
- Newsletter subscription
- Responsive grid layout

#### Hero Section
- Gradient text animation
- Bounce animation on title
- Multiple CTA buttons with different styles
- Better typography hierarchy

#### Card System
- Border accent indicators
- Icon support
- Hover animations with transform effects
- Responsive grid layouts

### 3. **Pages Enhanced**

#### Home
- 6 core initiative cards with icons (Education, Livelihood, Community, Healthcare, Women, Relief)
- Impact statistics section with numbers
- 4 testimonial cards with ratings
- Enhanced CTA section

#### About
- Core values grid (6 values with icons)
- Origin story section
- Key achievements statistics
- Leadership team cards

#### Initiatives (Projects)
- 6 major initiatives with detailed descriptions
- Timeline showing organizational journey
- Measurable impact metrics
- Partnership call-to-action

#### Stories (Blog)
- 6 detailed impact stories across different categories
- Blog post listing with metadata
- Individual story pages with related content
- Share functionality
- Newsletter subscription

#### Contact
- 4 contact method cards
- 6 "Ways to Help" cards
- Contact form with validation
- FAQ section with 5 common questions
- Working hours and multiple ways to engage

### 4. **New Dependencies Added**
```json
"react-icons": "^5.0.0",
"framer-motion": "^10.16.4",
"aos": "^2.3.4"
```

### 5. **CSS Files Reorganized**

#### Global CSS (`global.css`)
- CSS Variables for colors, spacing, typography
- Reset and base styles
- Layout system with flexbox and grid
- Button system with variants
- Card system
- Utility classes
- Animation keyframes
- Responsive breakpoints

#### Component-Specific CSS
- **navbar.css**: Navigation styling with mobile responsiveness
- **hero.css**: Hero section animations
- **footer.css**: Footer layout and social links
- **features.css**: Card grid system
- **brands.css**: Focus areas section
- **cta.css**: Call-to-action sections
- **testimonials.css**: Testimonial cards
- **forms.css** (NEW): Form elements, inputs, alerts

### 6. **Icon Libraries**
Using react-icons with various icon sets:
- **FiIcons (Feather)**: Navigation, arrows, actions (Home, Info, Target, Book, Mail, etc.)
- **Emoji Icons**: Visual badges in cards (🎓, 💼, 🏥, etc.)

## 🎨 Design Features

### Color System
- **Primary**: #1e7e34 (Deep Green - Trust, Growth)
- **Primary Light**: #2ecc71 (Action, Positivity)
- **Primary Dark**: #0f5720 (Depth, Stability)
- **Secondary**: #f39c12 (Orange - Energy)
- **Accent**: #e74c3c (Red - Impact, Care)
- **Highlight**: #3498db (Blue - Trust)

### Typography Hierarchy
```
Display: 48px (h1)
Large: 40px (h2)
Main: 32px (h3)
Subheading: 24px (h4, h5)
Body: 16px (base)
Small: 14px (caption)
```

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- 2xl: 32px
- 3xl: 48px
- 4xl: 64px

## 🚀 Usage Guide

### Button Variants
```html
<!-- Primary Button -->
<button className="btn">Click Me</button>

<!-- Secondary Button -->
<button className="btn btn-secondary">Click Me</button>

<!-- Outline Button -->
<button className="btn btn-outline">Click Me</button>

<!-- Sizes -->
<button className="btn btn-small">Small</button>
<button className="btn btn-large">Large</button>

<!-- Block -->
<button className="btn btn-block">Full Width</button>
```

### Card System
```html
<!-- Basic Card -->
<div className="card">
  <h3>Title</h3>
  <p>Content</p>
</div>

<!-- Card with Accent -->
<div className="card card-accent">
  <div className="card-icon">🎓</div>
  <h3>Title</h3>
  <p>Content</p>
</div>
```

### Layout Utilities
```html
<!-- Flexbox -->
<div className="flex">Centered horizontally and vertically</div>
<div className="flex-col">Column direction</div>
<div className="flex-between">Space between</div>
<div className="flex-center">Centered</div>

<!-- Grid -->
<div className="grid grid-cols-2">2 columns</div>
<div className="grid grid-cols-3">3 columns</div>
<div className="grid grid-cols-4">4 columns</div>

<!-- Spacing -->
<div className="mt-lg">Margin top large</div>
<div className="mb-xl">Margin bottom extra large</div>
<div className="p-2xl">Padding 2xl</div>
```

### Forms
```html
<!-- Form Group -->
<div className="form-group">
  <label>Name</label>
  <input type="text" placeholder="Enter name" />
</div>

<!-- Form Row -->
<div className="form-row cols-2">
  <div className="form-group">...</div>
  <div className="form-group">...</div>
</div>

<!-- Checkboxes -->
<div className="checkbox-group">
  <div className="checkbox-item">
    <input type="checkbox" id="cb1" />
    <label for="cb1">Option 1</label>
  </div>
</div>

<!-- Alerts -->
<div className="alert alert-primary">Primary alert</div>
<div className="alert alert-success">Success alert</div>
<div className="alert alert-warning">Warning alert</div>
<div className="alert alert-danger">Danger alert</div>
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 992px and above
- **Tablet**: 768px to 991px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

### Responsive Classes
```html
<!-- Grid responsive -->
<div className="grid-cols-3">3 cols on desktop, 2 on tablet, 1 on mobile</div>

<!-- Flex responsive -->
<div className="flex-responsive">Column on mobile, row on desktop</div>
```

## 🎭 Animations

### Keyframes Available
- `fadeInUp`: Fade in with upward movement
- `fadeIn`: Simple fade in
- `slideInLeft`: Slide from left
- `slideInRight`: Slide from right
- `scaleIn`: Scale from small to normal
- `pulse`: Pulsing opacity
- `float`: Floating up and down

### Usage
```css
animation: fadeInUp 0.8s ease both;
```

## 🔧 Installation & Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Development Server**
```bash
npm run dev
```

3. **Build for Production**
```bash
npm run build
```

4. **Lint Code**
```bash
npm run lint
```

## 📊 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Future Enhancements
1. Add animation library (Framer Motion) for advanced animations
2. Implement dark mode toggle
3. Add multilingual support
4. Interactive impact dashboard
5. Volunteer/donation management system
6. Admin panel for content management
7. Blog comment system
8. Social sharing integration

## 📝 Content Structure

### Foundation-Focused Content
All content has been updated to reflect a social impact organization:
- **Education Programs**: Digital learning centers, scholarships
- **Livelihood Programs**: Skill training, employment support
- **Community Development**: Infrastructure, healthcare
- **Women Empowerment**: Financial independence, self-defense
- **Disaster Relief**: Emergency aid and rehabilitation

## 🎨 Design Inspiration
The design draws inspiration from:
- Modern non-profit websites (20+ foundation sites)
- Material Design principles
- Accessibility best practices (WCAG 2.1)
- Mobile-first approach
- Professional yet approachable aesthetic

## 📄 License
This website is part of Jeevika Foundation's digital presence and is used for social impact communications.

---

**Last Updated**: March 2026
**Version**: 2.0
**Theme**: Foundation-Focused Social Impact
