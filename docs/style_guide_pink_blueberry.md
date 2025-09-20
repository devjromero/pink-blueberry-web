# Style Guide: The Pink Blueberry Salon Web Application

## Color System

### Primary Color Palette

**Pink Spectrum**
```css
/* Primary Pink */
--pink-500: #ec4899;
--pink-400: #f472b6;
--pink-300: #f9a8d4;
--pink-200: #fbcfe8;
--pink-100: #fce7f3;
--pink-50: #fdf2f8;

/* Usage: Primary CTAs, brand accents, interactive elements */
```

**Blue Spectrum**
```css
/* Primary Blue */
--blue-600: #2563eb;
--blue-500: #3b82f6;
--blue-400: #60a5fa;
--blue-300: #93c5fd;
--blue-200: #bfdbfe;
--blue-100: #dbeafe;
--blue-50: #eff6ff;

/* Usage: Secondary CTAs, trust elements, professional accents */
```

**Gradient Combinations**
```css
/* Primary Gradient */
background: linear-gradient(135deg, #ec4899 0%, #3b82f6 100%);

/* Subtle Background Gradient */
background: linear-gradient(135deg, #fdf2f8 0%, #eff6ff 100%);

/* Hover State Gradient */
background: linear-gradient(135deg, #db2777 0%, #1d4ed8 100%);
```

### Neutral Color Palette

**Slate Spectrum**
```css
/* Text and UI Elements */
--slate-900: #0f172a; /* Primary text */
--slate-800: #1e293b; /* Headings */
--slate-700: #334155; /* Secondary text */
--slate-600: #475569; /* Muted text */
--slate-500: #64748b; /* Placeholder text */
--slate-400: #94a3b8; /* Disabled text */
--slate-300: #cbd5e1; /* Borders */
--slate-200: #e2e8f0; /* Light borders */
--slate-100: #f1f5f9; /* Background tints */
--slate-50: #f8fafc;  /* Page backgrounds */
```

### Semantic Colors

**Success States**
```css
--green-500: #10b981; /* Success messages, confirmations */
--green-100: #d1fae5; /* Success backgrounds */
```

**Warning States**
```css
--amber-500: #f59e0b; /* Warnings, attention */
--amber-100: #fef3c7; /* Warning backgrounds */
```

**Error States**
```css
--red-500: #ef4444; /* Error messages, validation */
--red-100: #fee2e2; /* Error backgrounds */
```

---

## Typography System

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```

### Type Scale

**Display Typography**
```css
/* Hero Headlines */
.text-display-xl {
  font-size: 4.5rem; /* 72px */
  line-height: 1.1;
  font-weight: 300;
  letter-spacing: -0.02em;
}

.text-display-lg {
  font-size: 3.75rem; /* 60px */
  line-height: 1.1;
  font-weight: 300;
  letter-spacing: -0.02em;
}

.text-display-md {
  font-size: 3rem; /* 48px */
  line-height: 1.2;
  font-weight: 300;
  letter-spacing: -0.01em;
}
```

**Heading Typography**
```css
/* Section Headings */
.text-heading-xl {
  font-size: 2.25rem; /* 36px */
  line-height: 1.3;
  font-weight: 500;
}

.text-heading-lg {
  font-size: 1.875rem; /* 30px */
  line-height: 1.3;
  font-weight: 500;
}

.text-heading-md {
  font-size: 1.5rem; /* 24px */
  line-height: 1.4;
  font-weight: 500;
}

.text-heading-sm {
  font-size: 1.25rem; /* 20px */
  line-height: 1.4;
  font-weight: 500;
}
```

**Body Typography**
```css
/* Body Text */
.text-body-xl {
  font-size: 1.25rem; /* 20px */
  line-height: 1.6;
  font-weight: 400;
}

.text-body-lg {
  font-size: 1.125rem; /* 18px */
  line-height: 1.6;
  font-weight: 400;
}

.text-body-md {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
  font-weight: 400;
}

.text-body-sm {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
  font-weight: 400;
}
```

**Caption Typography**
```css
/* Small Text */
.text-caption-lg {
  font-size: 0.875rem; /* 14px */
  line-height: 1.4;
  font-weight: 500;
}

.text-caption-md {
  font-size: 0.75rem; /* 12px */
  line-height: 1.4;
  font-weight: 500;
}

.text-caption-sm {
  font-size: 0.6875rem; /* 11px */
  line-height: 1.3;
  font-weight: 500;
}
```

---

## Spacing System

### Base Unit: 4px

```css
/* Spacing Scale */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

### Component Spacing Guidelines

**Buttons**
```css
/* Padding */
.btn-sm { padding: 0.5rem 1rem; }      /* 8px 16px */
.btn-md { padding: 0.75rem 1.5rem; }   /* 12px 24px */
.btn-lg { padding: 1rem 2rem; }        /* 16px 32px */
.btn-xl { padding: 1.25rem 2.5rem; }   /* 20px 40px */
```

**Cards**
```css
/* Padding */
.card-sm { padding: 1rem; }      /* 16px */
.card-md { padding: 1.5rem; }    /* 24px */
.card-lg { padding: 2rem; }      /* 32px */
.card-xl { padding: 3rem; }      /* 48px */
```

---

## Border Radius System

```css
/* Border Radius Scale */
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-3xl: 2rem;     /* 32px */
--radius-full: 9999px;  /* Fully rounded */
```

### Component Border Radius

```css
/* Buttons */
.btn { border-radius: var(--radius-lg); }

/* Cards */
.card { border-radius: var(--radius-2xl); }

/* Input Fields */
.input { border-radius: var(--radius-md); }

/* Badges */
.badge { border-radius: var(--radius-full); }
```

---

## Shadow System

```css
/* Shadow Scale */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Colored Shadows */
--shadow-pink: 0 25px 50px -12px rgb(236 72 153 / 0.25);
--shadow-blue: 0 25px 50px -12px rgb(59 130 246 / 0.25);
```

### Component Shadows

```css
/* Cards */
.card-default { box-shadow: var(--shadow-lg); }
.card-hover { box-shadow: var(--shadow-xl); }

/* Buttons */
.btn-primary { box-shadow: var(--shadow-pink); }
.btn-secondary { box-shadow: var(--shadow-md); }

/* Modals */
.modal { box-shadow: var(--shadow-2xl); }
```

---

## Component Specifications

### Buttons

**Primary Button**
```css
.btn-primary {
  background: linear-gradient(135deg, #ec4899 0%, #3b82f6 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  box-shadow: 0 4px 15px 0 rgba(236, 72, 153, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #db2777 0%, #1d4ed8 100%);
  box-shadow: 0 8px 25px 0 rgba(236, 72, 153, 0.4);
  transform: translateY(-2px);
}
```

**Secondary Button**
```css
.btn-secondary {
  background: transparent;
  color: #ec4899;
  border: 2px solid #ec4899;
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #ec4899;
  color: white;
  box-shadow: 0 4px 15px 0 rgba(236, 72, 153, 0.3);
}
```

### Cards

**Standard Card**
```css
.card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### Form Elements

**Input Fields**
```css
.input {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #ec4899;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}
```

**Textarea**
```css
.textarea {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
}

.textarea:focus {
  outline: none;
  border-color: #ec4899;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}
```

---

## Animation Guidelines

### Transition Timing

```css
/* Standard Transitions */
--transition-fast: 150ms ease;
--transition-normal: 300ms ease;
--transition-slow: 500ms ease;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### Common Animations

**Fade In**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
```

**Slide Up**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}
```

**Scale In**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}
```

---

## Responsive Breakpoints

```css
/* Mobile First Breakpoints */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Responsive Typography

```css
/* Fluid Typography */
.text-responsive-xl {
  font-size: clamp(2rem, 5vw, 4rem);
}

.text-responsive-lg {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.text-responsive-md {
  font-size: clamp(1.25rem, 3vw, 2rem);
}
```

---

## Accessibility Guidelines

### Color Contrast Ratios

**Text Contrast Requirements:**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Verified Combinations:**
```css
/* High Contrast */
color: #1e293b; /* slate-800 */
background: #ffffff; /* Ratio: 12.6:1 */

/* Medium Contrast */
color: #475569; /* slate-600 */
background: #f8fafc; /* Ratio: 7.2:1 */

/* Minimum Contrast */
color: #64748b; /* slate-500 */
background: #ffffff; /* Ratio: 4.6:1 */
```

### Focus States

```css
/* Focus Ring */
.focus-ring:focus {
  outline: 2px solid #ec4899;
  outline-offset: 2px;
}

/* Focus Within */
.focus-within:focus-within {
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}
```

---

## Icon System

### Icon Sizing

```css
/* Icon Sizes */
.icon-xs { width: 12px; height: 12px; }
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
```

### Icon Usage Guidelines

**Button Icons:**
- Use 16px icons for small buttons
- Use 20px icons for medium buttons
- Use 24px icons for large buttons

**Navigation Icons:**
- Use 20px icons for primary navigation
- Use 16px icons for secondary navigation

**Decorative Icons:**
- Use 32px+ icons for feature highlights
- Use 48px+ icons for empty states

---

## Grid System

### Container Widths

```css
/* Container Sizes */
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1536px; }
```

### Grid Layouts

```css
/* Common Grid Patterns */
.grid-1 { grid-template-columns: 1fr; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive Grid */
.grid-responsive {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

---

## Implementation Notes

### CSS Custom Properties Usage

```css
:root {
  /* Use semantic naming */
  --color-primary: var(--pink-500);
  --color-secondary: var(--blue-500);
  --color-text: var(--slate-800);
  --color-text-muted: var(--slate-600);
  
  /* Component-specific variables */
  --btn-padding-x: 1.5rem;
  --btn-padding-y: 0.75rem;
  --btn-border-radius: 0.75rem;
  
  /* Layout variables */
  --header-height: 5rem;
  --sidebar-width: 16rem;
  --content-max-width: 1280px;
}
```

### Performance Considerations

**CSS Optimization:**
- Use CSS custom properties for theming
- Minimize specificity conflicts
- Group related properties together
- Use shorthand properties when possible

**Animation Performance:**
- Prefer `transform` and `opacity` for animations
- Use `will-change` sparingly and remove after animation
- Avoid animating layout properties (width, height, padding)

---

This style guide serves as the definitive reference for implementing The Pink Blueberry design system. All measurements, colors, and specifications should be followed precisely to maintain design consistency across the application.

