# 🫐 The Pink Blueberry Salon - 8-Hour Hackathon Challenge

## 🎯 Challenge Overview

**Duration:** 8 Hours  
**Judge:** Claude AI (Automated Code Review)  
**Objective:** Build a luxury salon booking and e-commerce web application that combines elegant design with intuitive user experience for both salon services and product sales

## 📝 Documentation Templates (Bonus Points)

### Requirements Document Template (requirements.md)
```markdown
# Requirements Document - The Pink Blueberry Salon

## User Stories

### Booking System
1. As a customer, I want to book an appointment online so that I don't have to call
   - **Acceptance Criteria:**
   - [ ] Can select from available services
   - [ ] Can choose preferred stylist
   - [ ] Can pick available date/time
   - [ ] Receives confirmation after booking

2. As a customer, I want to see service prices before booking
   - **Acceptance Criteria:**
   - [ ] Prices are clearly displayed
   - [ ] Total cost is calculated before confirmation

### E-Commerce
3. As a customer, I want to purchase hair products online
   - **Acceptance Criteria:**
   - [ ] Can browse product catalog
   - [ ] Can add items to cart
   - [ ] Can see cart total
   - [ ] Cart persists during session

## Functional Requirements
- [ ] System shall display minimum 3 services
- [ ] System shall allow date/time selection
- [ ] System shall calculate cart totals
- [ ] System shall be mobile responsive

## Non-Functional Requirements
- [ ] Page load time < 3 seconds
- [ ] Works on mobile devices
- [ ] Uses brand colors consistently
```

### Task Board Template (tasks.md)
```markdown
# Task Breakdown - Team [Name]

## ✅ Completed
- [x] Set up project repository
- [x] Create basic HTML structure

## 🚧 In Progress
- [ ] Implement booking flow - @teammate1
- [ ] Design service cards - @teammate2

## 📋 To Do
- [ ] Add shopping cart functionality
- [ ] Test on mobile devices
- [ ] Write documentation

## 🔥 Priority Order
1. Core booking functionality
2. Basic styling with brand colors
3. Shopping cart
4. Responsive design
5. Testing & documentation
```

### Test Plan Template (testing.md)
```markdown
# Test Plan - The Pink Blueberry Salon

## Unit Tests
- [ ] addToCart() function
- [ ] getCartTotal() calculation
- [ ] Form validation functions
- [ ] Date/time availability check

## Integration Tests
- [ ] Complete booking flow
- [ ] Add to cart → View cart → Checkout
- [ ] Navigation between pages

## User Acceptance Tests
| Test Case | Steps | Expected Result | Pass/Fail |
|## 🧪 Testing Examples (Bonus Points)

### Simple Unit Test Example (test.js)
```javascript
// Basic test suite without framework
function runTests() {
  console.log('Running Tests...');
  
  // Test 1: Cart Total Calculation
  testCartTotal();
  
  // Test 2: Add to Cart
  testAddToCart();
  
  // Test 3: Form Validation
  testFormValidation();
  
  console.log('Tests Complete!');
}

function testCartTotal() {
  const testCart = [
    { price: 28, quantity: 2 },
    { price: 12, quantity: 1 }
  ];
  
  const expected = 68;
  const result = testCart.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0);
  
  if (result === expected) {
    console.log('✅ Cart total calculation passed');
  } else {
    console.log('❌ Cart total test failed');
  }
}

function testAddToCart() {
  const cart = [];
  const product = { id: 1, name: 'Shampoo', price: 28 };
  
  // Simulate adding to cart
  cart.push({ ...product, quantity: 1 });
  
  if (cart.length === 1 && cart[0].quantity === 1) {
    console.log('✅ Add to cart test passed');
  } else {
    console.log('❌ Add to cart test failed');
  }
}

function testFormValidation() {
  // Test email validation
  const validEmail = 'test@example.com';
  const invalidEmail = 'notanemail';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(validEmail) && !emailRegex.test(invalidEmail)) {
    console.log('✅ Email validation test passed');
  } else {
    console.log('❌ Email validation test failed');
  }
}

// Run tests
runTests();
```

### If Using Jest/Vitest (Advanced)
```javascript
// cart.test.js
describe('Shopping Cart', () => {
  test('adds product to cart', () => {
    const product = { id: 1, name: 'Shampoo', price: 28 };
    const cart = [];
    
    addToCart(product, cart);
    
    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(1);
  });
  
  test('calculates total correctly', () => {
    const cart = [
      { price: 28, quantity: 2 },
      { price: 12, quantity: 1 }
    ];
    
    expect(getCartTotal(cart)).toBe(68);
  });
});
```

-----------|-------|-----------------|-----------|
| Book appointment | 1. Select service 2. Choose stylist 3. Pick date | Booking confirmed | ✅ |
| Add to cart | 1. Click product 2. Click add to cart | Item in cart | ✅ |
| Mobile responsive | 1. Open on phone 2. Navigate site | All features work | ❌ |
```

## 🤖 Claude AI Judging Criteria

Claude will evaluate your repository based on these specific criteria:

### 1. **Code Quality (20 points)**
- Clean, readable code with proper formatting
- Meaningful variable/function names
- Component organization and structure
- Comments where necessary (complex logic)
- No console errors or warnings

### 2. **Design Implementation (20 points)**
- Adherence to Pink Blueberry brand colors
- Responsive design (mobile, tablet, desktop)
- Visual hierarchy and spacing consistency
- Professional appearance and polish
- Smooth transitions/animations (if implemented)

### 3. **Feature Completeness (20 points)**
- All MVP requirements functional
- Booking flow works end-to-end
- Shopping cart functionality works
- Data displays correctly
- Form validation present
- Navigation between pages/sections works

### 4. **User Experience (20 points)**
- Intuitive navigation
- Clear call-to-actions
- Loading states (where applicable)
- Error handling
- Mobile-friendly interface

### 5. **Documentation & Testing (20 points)**
- README with clear setup instructions
- Code comments for complex logic
- Test files (if present)
- Requirements documentation (if present)
- User acceptance criteria (if present)

---

## 📋 MVP Requirements (Must Complete)

### 1. **Homepage**
```markdown
Required Elements:
- [ ] Hero section with salon name "The Pink Blueberry"
- [ ] At least 3 service cards with prices
- [ ] "Book Now" call-to-action button
- [ ] Featured products section (minimum 3 products)
- [ ] Mobile responsive layout
```

### 2. **Booking Flow**
```markdown
Required Steps (can be single page or multi-step):
- [ ] Service Selection (minimum 3 services)
- [ ] Stylist Selection (minimum 2 stylists)
- [ ] Date & Time Selection
- [ ] Contact Information Form
- [ ] Booking Summary/Confirmation
```

### 3. **E-Commerce Shop**
```markdown
Required Elements:
- [ ] Product grid/list (minimum 4 products)
- [ ] Product cards with image, name, price
- [ ] "Add to Cart" buttons
- [ ] Shopping cart with item count
- [ ] Cart shows total price
```

### 4. **Design System**
```markdown
Required Implementation:
- [ ] Pink (#ec4899) and Blue (#3b82f6) colors used
- [ ] Consistent button styling
- [ ] Card components for services/stylists/products
- [ ] Readable typography
```

---

## 🚀 Bonus Points (If Time Permits)

### Quick Wins (5 points each, 15-30 min):
```markdown
- [ ] Animated logo or hero section
- [ ] Hover effects on cards
- [ ] Loading spinner/skeleton
- [ ] Custom favicon
- [ ] Footer with contact info
```

### Medium Effort (10 points each, 30-60 min):
```markdown
- [ ] Working service filter/search
- [ ] Price calculator
- [ ] Form validation with error messages
- [ ] "Back" navigation in booking flow
- [ ] Stylist rating display
- [ ] Local storage for booking/cart data
```

### High Value (15 points each, 45-90 min):
```markdown
- [ ] Test Suite (unit tests for core functions)
- [ ] Requirements Document (user stories & acceptance criteria)
- [ ] Dark mode toggle
- [ ] Review/testimonial section
```

### Excellence Awards (20 points each):
```markdown
- [ ] Comprehensive Test Coverage (>50% of functions tested)
- [ ] Complete Requirements Documentation with User Acceptance Criteria
- [ ] Task Board/Project Management Documentation
- [ ] Accessibility Testing Documentation (WCAG compliance check)
```

---

## ⏱ 8-Hour Timeline

### Hour 0-1: Setup & Planning
- Set up repository and development environment
- Review requirements and design docs
- Create project structure
- Install dependencies

### Hour 1-2: Core Structure
- Build homepage layout with hero
- Set up navigation between pages/sections
- Create data structures for services, stylists, products

### Hour 2-4: Booking Flow
- Build service selection
- Add stylist selection
- Create date/time picker
- Implement contact form

### Hour 4-6: E-Commerce Shop
- Create product grid layout
- Build product cards
- Implement shopping cart functionality
- Add cart total calculation

### Hour 6-7: Styling & Polish
- Apply brand colors and typography
- Make responsive layouts
- Add hover states and transitions
- Fix spacing and alignment

### Hour 7-8: Testing & Documentation
- Test complete booking flow
- Test shopping cart functionality
- Fix bugs
- Write README
- Final commit and push

---

## 🛠 Tech Stack Options

### Option 1: Simple (Recommended for 8 hours)
```bash
# Vanilla HTML/CSS/JS
mkdir pink-blueberry-salon
cd pink-blueberry-salon
touch index.html styles.css script.js
# Start coding immediately!
```

### Option 2: Modern
```bash
# React + Vite (if you're comfortable)
npm create vite@latest pink-blueberry-salon -- --template react
cd pink-blueberry-salon
npm install
npm run dev
```

---

## 📁 Required Repository Structure

Your repository MUST include:

```
pink-blueberry-salon/
├── README.md           # REQUIRED: How to run your project
├── index.html          # Entry point
├── /src or /js         # JavaScript files
├── /styles or /css     # CSS files
├── /images or /assets  # Images (if any)
└── package.json        # (If using npm/build tools)
```

## README.md Template
```markdown
# The Pink Blueberry Salon

## Team Name: [Your Team Name]
## Team Members: [Names]

## How to Run
[Clear instructions on how to run your project]

## Features Implemented
- [ ] Homepage with hero section
- [ ] Service catalog
- [ ] Booking flow
- [ ] Product shop with cart
- [ ] Responsive design
- [ ] [Any bonus features]

## Technologies Used
- HTML/CSS/JavaScript
- [Any frameworks/libraries]

## Known Issues
- [Any bugs or incomplete features]

## Screenshots
[Optional: Add screenshots of your app]
```

---

## 🎨 Essential Design Resources

### Copy-Paste CSS Variables
```css
:root {
  /* REQUIRED: Use these colors */
  --pink-primary: #ec4899;
  --pink-light: #f9a8d4;
  --blue-primary: #3b82f6;
  --blue-light: #93c5fd;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --white: #ffffff;
  --gray-light: #f1f5f9;
  
  /* Spacing */
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Border Radius */
  --radius: 12px;
}
```

### Essential Components

**Button (Copy-Paste Ready):**
```css
.btn-primary {
  background: linear-gradient(135deg, var(--pink-primary), var(--blue-primary));
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}
```

**Service Card:**
```css
.service-card {
  background: white;
  border-radius: var(--radius);
  padding: var(--space-lg);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}
```

**Product Card:**
```css
.product-card {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.product-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: var(--gray-light);
}

.product-info {
  padding: var(--space-md);
}

.product-price {
  color: var(--pink-primary);
  font-size: 20px;
  font-weight: bold;
}
```

**Shopping Cart:**
```css
.cart-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--pink-primary);
  color: white;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--blue-primary);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
```

---

## 📊 Sample Data (Copy-Paste Ready)

```javascript
const services = [
  {
    id: 1,
    name: "Signature Cut & Style",
    price: 85,
    duration: "60 min",
    description: "Precision cut with professional styling"
  },
  {
    id: 2,
    name: "Full Color",
    price: 150,
    duration: "120 min",
    description: "Complete color transformation"
  },
  {
    id: 3,
    name: "Balayage Highlights",
    price: 200,
    duration: "180 min",
    description: "Hand-painted highlights"
  },
  {
    id: 4,
    name: "Deep Conditioning",
    price: 45,
    duration: "30 min",
    description: "Intensive hair treatment"
  }
];

const stylists = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Stylist",
    specialties: ["Color", "Balayage"],
    rating: 4.9
  },
  {
    id: 2,
    name: "James Chen",
    title: "Style Director",
    specialties: ["Cuts", "Styling"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Maria Garcia",
    title: "Color Specialist",
    specialties: ["Color Correction", "Highlights"],
    rating: 5.0
  }
];

const products = [
  {
    id: 1,
    name: "Moisture Lock Shampoo",
    category: "Hair Care",
    price: 28,
    description: "Hydrating shampoo with argan oil",
    image: "shampoo.jpg"
  },
  {
    id: 2,
    name: "Silk Repair Conditioner",
    category: "Hair Care",
    price: 32,
    description: "Deep conditioning treatment",
    image: "conditioner.jpg"
  },
  {
    id: 3,
    name: "Lavender Dreams Soap",
    category: "Organic Soap",
    price: 12,
    description: "Handcrafted organic lavender soap",
    image: "lavender-soap.jpg"
  },
  {
    id: 4,
    name: "Honey Oat Exfoliating Bar",
    category: "Organic Soap",
    price: 14,
    description: "Natural exfoliating soap with honey",
    image: "honey-soap.jpg"
  },
  {
    id: 5,
    name: "Heat Defense Spray",
    category: "Hair Care",
    price: 24,
    description: "Thermal protection for styling",
    image: "heat-spray.jpg"
  },
  {
    id: 6,
    name: "Rose Garden Soap Set",
    category: "Organic Soap",
    price: 35,
    description: "Set of 3 rose-scented organic soaps",
    image: "rose-soap-set.jpg"
  }
];

// Shopping Cart Example
let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCartDisplay();
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
```

---

## ✅ Claude's Evaluation Checklist

Claude will check for these specific items:

### Functionality Tests
```markdown
1. Homepage loads without errors
2. All navigation links work
3. Service selection captures user choice
4. Stylist selection captures user choice
5. Date/time can be selected
6. Form accepts user input
7. Booking flow can be completed
8. Products display with prices
9. Add to cart functionality works
10. Cart shows correct item count
11. Cart calculates total correctly
12. Mobile responsive (viewport meta tag present)
```

### Code Quality Checks
```markdown
1. HTML is valid and semantic
2. CSS uses the brand colors
3. JavaScript has no console errors
4. Code is organized in logical files
5. README has clear instructions
6. Cart state management is implemented
7. Test files exist and run
8. Documentation is comprehensive
```

### Design Evaluation
```markdown
1. Pink (#ec4899) color is visible
2. Blue (#3b82f6) color is visible
3. Text is readable (good contrast)
4. Buttons are clearly clickable
5. Product cards show images/placeholders
6. Shopping cart is visible
7. Layout works on mobile (max-width: 480px)
8. Layout works on desktop (min-width: 1024px)
```

---

## 🚫 Common Mistakes to Avoid

1. **Don't overcomplicate** - 8 hours is short, focus on working features
2. **Don't skip mobile testing** - Open DevTools and check mobile view
3. **Don't forget the README** - Claude needs instructions to run your code
4. **Don't hardcode everything** - Use the sample data arrays
5. **Don't skip the brand colors** - Pink and blue are required

---

## 💡 Quick Win Strategies

1. **Use CSS Grid/Flexbox** - Faster than positioning everything manually
2. **Copy the provided CSS** - Don't waste time writing from scratch
3. **Single Page App** - Avoid complex routing, use sections
4. **Focus on Flow** - Make sure booking works before adding extras
5. **Test Often** - Check your work every 30 minutes

---

## 📤 Submission Requirements

### Your GitHub repository must include:

1. **All source code** pushed to main branch
2. **README.md** with run instructions
3. **No node_modules** folder (add .gitignore)
4. **Final commit** before deadline

### Repository Naming Convention:
```
pink-blueberry-[teamname]
Example: pink-blueberry-teamawesome
```

### Submission Form Fields:
- GitHub Repository URL
- Team Name
- Team Members
- Any special run instructions

---

## 🏆 Winning Strategy

**Focus on these in order:**

1. ✅ Get something working (even if ugly)
2. ✅ Complete the booking flow
3. ✅ Add shopping cart functionality
4. ✅ Add brand colors
5. ✅ Make it responsive
6. 📝 Write tests for core functions (BONUS)
7. 📋 Document requirements & tasks (BONUS)
8. ✨ Polish and add additional features

**Pro Tip:** Teams that document their process and write tests often score highest with Claude's evaluation!

**Remember:** A working ugly app with tests and documentation beats a beautiful broken app!

---

## 🆘 Quick Help

### If booking flow seems complex:
```javascript
// Simple state management
let booking = {
  service: null,
  stylist: null,
  date: null,
  time: null,
  name: '',
  email: '',
  phone: ''
};

// Update booking
function selectService(serviceId) {
  booking.service = serviceId;
  showNextStep();
}
```

### If responsive design is confusing:
```css
/* Mobile First Approach */
.container {
  padding: 16px;
  max-width: 100%;
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
  }
}
```

---

## 🎉 Good Luck!

**Remember:** Claude will judge based on working features, clean code, and proper use of brand colors. Focus on delivering a complete, functional booking system rather than perfect but incomplete features.

**Deadline:** [Insert exact time]  
**Submission:** [Insert submission link/form]

---

*May your code compile and your booking flow be smooth! 🫐✨*