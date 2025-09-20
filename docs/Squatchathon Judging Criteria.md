# 🫐 The Pink Blueberry Salon - 8-Hour Hackathon Challenge

## 🎯 Challenge Overview

**Duration:** 8 Hours  
**Judge:** Claude AI (Automated Code Review)  
**Objective:** Build a luxury salon booking web application that combines elegant design with intuitive user experience

---

## 🤖 Claude AI Judging Criteria

Claude will evaluate your repository based on these specific criteria:

### 1. **Code Quality (25 points)**
- Clean, readable code with proper formatting
- Meaningful variable/function names
- Component organization and structure
- Comments where necessary (complex logic)
- No console errors or warnings

### 2. **Design Implementation (25 points)**
- Adherence to Pink Blueberry brand colors
- Responsive design (mobile, tablet, desktop)
- Visual hierarchy and spacing consistency
- Professional appearance and polish
- Smooth transitions/animations (if implemented)

### 3. **Feature Completeness (25 points)**
- All MVP requirements functional
- Booking flow works end-to-end
- Data displays correctly
- Form validation present
- Navigation between pages/sections works

### 4. **User Experience (25 points)**
- Intuitive navigation
- Clear call-to-actions
- Loading states (where applicable)
- Error handling
- Mobile-friendly interface

---

## 📋 MVP Requirements (Must Complete)

### 1. **Homepage**
```markdown
Required Elements:
- [ ] Hero section with salon name "The Pink Blueberry"
- [ ] At least 3 service cards with prices
- [ ] "Book Now" call-to-action button
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

### 3. **Design System**
```markdown
Required Implementation:
- [ ] Pink (#ec4899) and Blue (#3b82f6) colors used
- [ ] Consistent button styling
- [ ] Card components for services/stylists
- [ ] Readable typography
```

---

## 🚀 Bonus Points (If Time Permits)

Each bonus feature adds 5 points to your score:

```markdown
Quick Wins (15-30 min each):
- [ ] Animated logo or hero section
- [ ] Hover effects on cards
- [ ] Loading spinner/skeleton
- [ ] Custom favicon
- [ ] Footer with contact info

Medium Effort (30-60 min each):
- [ ] Working service filter/search
- [ ] Price calculator
- [ ] Form validation with error messages
- [ ] "Back" navigation in booking flow
- [ ] Stylist rating display

Advanced (60+ min):
- [ ] Local storage for booking data
- [ ] Dark mode toggle
- [ ] Product shop page
- [ ] Review/testimonial section
```

---

## ⏱ 8-Hour Timeline

### Hour 0-1: Setup & Planning
- Set up repository and development environment
- Review requirements and design docs
- Create project structure
- Install dependencies

### Hour 1-3: Core Structure
- Build homepage layout
- Create service and stylist data
- Implement routing/navigation
- Set up component structure

### Hour 3-5: Booking Flow
- Build service selection
- Add stylist selection
- Create date/time picker
- Implement contact form

### Hour 5-7: Styling & Polish
- Apply brand colors and typography
- Make responsive layouts
- Add hover states and transitions
- Fix spacing and alignment

### Hour 7-8: Testing & Documentation
- Test complete booking flow
- Fix bugs
- Write README
- Clean up code
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

### README.md Template
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
8. Mobile responsive (viewport meta tag present)
```

### Code Quality Checks
```markdown
1. HTML is valid and semantic
2. CSS uses the brand colors
3. JavaScript has no console errors
4. Code is organized in logical files
5. README has clear instructions
```

### Design Evaluation
```markdown
1. Pink (#ec4899) color is visible
2. Blue (#3b82f6) color is visible
3. Text is readable (good contrast)
4. Buttons are clearly clickable
5. Layout works on mobile (max-width: 480px)
6. Layout works on desktop (min-width: 1024px)
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
3. ✅ Add brand colors
4. ✅ Make it responsive
5. ✅ Polish and add bonuses

**Remember:** A working ugly app beats a beautiful broken app!

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