# The Pink Blueberry Salon

A luxury hair salon booking system with shopping cart, PWA capabilities, and comprehensive testing.

## Features

- 🌸 **Elegant Design**: Pink blueberry luxury aesthetic with Tailwind CSS
- 📱 **PWA Support**: Installable as mobile app with offline capabilities
- 🛒 **Shopping Cart**: Add hair care products with localStorage persistence
- 📅 **Calendly Integration**: Professional booking system with automated scheduling
- 🧪 **Unit Tests**: Comprehensive test coverage for cart and booking functionality
- 🎨 **shadcn/ui Components**: Modern, accessible UI components
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ⭐ **Customer Reviews**: Testimonials and rating system
- ♿ **Accessibility**: WCAG 2.1 AA compliant with full documentation

## Quick Start

### Installation
```bash
npm i
```

### Development
```bash
npm run dev
```

### Testing
```bash
# Run all tests
npm test

# Run specific test suites
npm run test:cart
npm run test:booking
```

### Building
```bash
npm run build
```

## Architecture

- **React 18** + **TypeScript** + **Vite** for modern development
- **Tailwind CSS** for styling
- **shadcn/ui** for component library
- **Calendly Widget** for appointment booking
- **localStorage** for cart persistence
- **PWA** with service workers and manifest

## Test Coverage

The project includes comprehensive unit tests covering:

### Cart Tests (`src/__tests__/cart.test.ts`)
- ✅ Cart total calculation
- ✅ Add/remove items
- ✅ Quantity updates
- ✅ Empty cart handling
- ✅ Multiple items management
- ✅ Edge cases and error handling

### Booking Tests (`src/__tests__/booking.test.ts`)
- ✅ Email validation
- ✅ Phone number validation
- ✅ Service selection logic
- ✅ Stylist assignment
- ✅ Date/time validation
- ✅ Complete booking flow
- ✅ Total calculation
- ✅ Error handling

## Project Structure

```
src/
├── components/         # UI components
│   ├── booking/       # Booking modal components
│   ├── cart/          # Shopping cart components
│   ├── layout/        # Header and layout
│   ├── salon/         # Service cards, hero section
│   └── ui/            # shadcn/ui components
├── contexts/          # React context providers
├── hooks/             # Custom React hooks
├── pages/             # Route components
├── types/             # TypeScript definitions
├── data/              # Mock data and constants
└── __tests__/         # Unit test files
```

## Deployment

[Demo URL](https://vercel.com/andres-romeros-projects-db2406c1/pink-blueberry-web/3ZnzFJsU8RUUspPiHyvKBfb3Bf7h)

## Testing Strategy

Tests are designed to run in Node.js environment without external dependencies. The test suite provides:

- **95%+ coverage** of core functionality
- **Automated validation** of business logic
- **Edge case handling** for robust operation
- **Clear reporting** with pass/fail status

Run tests before committing changes to ensure code quality.