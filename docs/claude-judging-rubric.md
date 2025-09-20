# 🤖 Claude AI Judging Rubric - The Pink Blueberry Salon Hackathon

## Automated Scoring Algorithm

This document outlines the exact scoring criteria Claude will use to evaluate hackathon submissions. Each section includes specific checks and point allocations.

---

## 📊 Total Score Calculation

```
Base Score (100 points) + Bonus Points (up to 100 points) = Final Score (max 200 points)
```

---

## 1️⃣ Code Quality (20 points)

### File Organization (5 points)
```markdown
✓ Proper folder structure exists (2 pts)
  - Check: /js or /src folder exists
  - Check: /css or /styles folder exists
  - Check: index.html in root

✓ Logical file separation (3 pts)
  - Check: CSS separate from HTML
  - Check: JS separate from HTML
  - Check: No inline styles in HTML (>10 lines)
```

### Code Standards (5 points)
```markdown
✓ HTML validation (2 pts)
  - Check: <!DOCTYPE html> present
  - Check: <meta viewport> tag exists
  - Check: Proper HTML structure (head/body)

✓ JavaScript quality (3 pts)
  - Check: No "var" declarations (use let/const)
  - Check: Functions have descriptive names
  - Check: No console.error() in output
```

### Code Readability (5 points)
```markdown
✓ Meaningful names (2 pts)
  - Check: No single-letter variables (except loops)
  - Check: Function names describe action

✓ Comments present (2 pts)
  - Check: At least 5 comments in JS code
  - Check: Complex functions have descriptions

✓ Consistent formatting (1 pt)
  - Check: Consistent indentation (2 or 4 spaces)
```

### Error Handling (5 points)
```markdown
✓ No runtime errors (3 pts)
  - Check: Console has no errors on load
  - Check: All buttons/links work without errors

✓ Form validation exists (2 pts)
  - Check: Required fields validated
  - Check: Email format validation present
```

---

## 2️⃣ Design Implementation (20 points)

### Brand Compliance (8 points)
```markdown
✓ Pink color used (3 pts)
  - Check: #ec4899 or rgb(236, 72, 153) in CSS
  - Check: Pink visible on page

✓ Blue color used (3 pts)
  - Check: #3b82f6 or rgb(59, 130, 246) in CSS
  - Check: Blue visible on page

✓ Consistent styling (2 pts)
  - Check: Buttons have consistent style
  - Check: Cards/sections have consistent spacing
```

### Visual Hierarchy (6 points)
```markdown
✓ Clear headings (2 pts)
  - Check: H1 tag exists and is largest
  - Check: Proper heading hierarchy (h1 > h2 > h3)

✓ Readable typography (2 pts)
  - Check: Font-size >= 14px for body text
  - Check: Line-height >= 1.4

✓ Proper spacing (2 pts)
  - Check: Padding/margins consistent
  - Check: White space between sections
```

### Responsive Design (6 points)
```markdown
✓ Mobile responsive (3 pts)
  - Check: @media queries exist
  - Check: max-width or width: 100% used
  - Check: No horizontal scroll at 375px width

✓ Desktop optimized (3 pts)
  - Check: Content readable at 1920px
  - Check: Max-width constraint exists
  - Check: Multi-column layout on desktop
```

---

## 3️⃣ Feature Completeness (20 points)

### Homepage (4 points)
```markdown
✓ Hero section (1 pt)
  - Check: "Pink Blueberry" text exists
  - Check: Hero section identifiable

✓ Service display (2 pts)
  - Check: At least 3 services shown
  - Check: Prices displayed for each

✓ CTA present (1 pt)
  - Check: "Book" button/link exists
```

### Booking Flow (8 points)
```markdown
✓ Service selection (2 pts)
  - Check: Services selectable
  - Check: Selection state visible

✓ Stylist selection (2 pts)
  - Check: At least 2 stylists displayed
  - Check: Stylists selectable

✓ Date/Time selection (2 pts)
  - Check: Date input exists
  - Check: Time selection available

✓ Contact form (2 pts)
  - Check: Name, email, phone fields exist
  - Check: Form can be submitted
```

### E-Commerce (8 points)
```markdown
✓ Product display (3 pts)
  - Check: At least 4 products shown
  - Check: Product names and prices visible

✓ Cart functionality (3 pts)
  - Check: "Add to Cart" buttons exist
  - Check: Cart updates when items added
  - Check: Item count displays

✓ Cart total (2 pts)
  - Check: Total price calculated
  - Check: Total updates with items
```

---

## 4️⃣ User Experience (20 points)

### Navigation (5 points)
```markdown
✓ Clear navigation (3 pts)
  - Check: Menu or navigation exists
  - Check: All links functional
  - Check: Current section identifiable

✓ User flow (2 pts)
  - Check: Can complete booking flow
  - Check: Can add items to cart
```

### Interactivity (5 points)
```markdown
✓ Hover states (2 pts)
  - Check: Buttons have :hover styles
  - Check: Links have :hover styles

✓ Visual feedback (3 pts)
  - Check: Active states visible
  - Check: Selected items highlighted
  - Check: Loading or transition animations
```

### Usability (5 points)
```markdown
✓ Touch-friendly (2 pts)
  - Check: Buttons >= 44px height on mobile
  - Check: Links have adequate spacing

✓ Readable content (3 pts)
  - Check: Contrast ratio adequate
  - Check: Text not overlapping
  - Check: Images have alt text
```

### Error Prevention (5 points)
```markdown
✓ Form validation (3 pts)
  - Check: Required fields marked
  - Check: Invalid input shows errors
  - Check: Success messages shown

✓ User guidance (2 pts)
  - Check: Placeholder text or labels
  - Check: Help text where needed
```

---

## 5️⃣ Documentation & Testing (20 points)

### README Quality (5 points)
```markdown
✓ Setup instructions (2 pts)
  - Check: "How to Run" section exists
  - Check: Clear steps provided

✓ Feature list (2 pts)
  - Check: Implemented features listed
  - Check: Technologies mentioned

✓ Team info (1 pt)
  - Check: Team name and members listed
```

### Testing (7 points)
```markdown
✓ Test files exist (3 pts)
  - Check: /tests folder or test.js file
  - Check: At least 3 test functions

✓ Tests run (4 pts)
  - Check: Test execution command in README
  - Check: Tests actually execute
  - Check: At least 50% tests pass
```

### Requirements Documentation (8 points)
```markdown
✓ Requirements file (3 pts)
  - Check: requirements.md exists
  - Check: User stories present
  - Check: Acceptance criteria defined

✓ Task tracking (2 pts)
  - Check: tasks.md exists
  - Check: Tasks marked complete/in-progress

✓ Test documentation (3 pts)
  - Check: Test plan documented
  - Check: Test results recorded
  - Check: UAT criteria defined
```

---

## 🎯 Bonus Points Scoring

### Quick Wins (5 points each)
```markdown
□ Animated elements - Check: CSS animations or transitions
□ Custom favicon - Check: favicon.ico or link tag
□ Footer present - Check: <footer> tag with content
□ Loading states - Check: Spinner or skeleton screens
□ Hover effects - Check: :hover pseudo-class used
```

### Medium Features (10 points each)
```markdown
□ Search/Filter - Check: Input filters products/services
□ Price calculator - Check: Dynamic price updates
□ Form validation - Check: Real-time validation feedback
□ Back navigation - Check: Previous step functionality
□ Ratings display - Check: Star ratings visible
□ Local storage - Check: localStorage used for persistence
```

### High Value (15 points each)
```markdown
□ Test suite - Check: >5 tests written and passing
□ Requirements doc - Check: Complete user stories with AC
□ Dark mode - Check: Toggle switches theme
□ Reviews section - Check: Testimonials displayed
```

### Excellence (20 points each)
```markdown
□ Test coverage >50% - Check: Majority of functions tested
□ Complete documentation - Check: All docs comprehensive
□ Task management - Check: Full project board documented
□ Accessibility - Check: WCAG compliance documented
```

---

## 🔧 Claude Evaluation Script

```javascript
// Pseudocode for Claude's evaluation process

function evaluateSubmission(repoUrl) {
  let score = {
    codeQuality: 0,
    design: 0,
    features: 0,
    ux: 0,
    documentation: 0,
    bonus: 0
  };
  
  // 1. Clone and analyze repository
  const repo = analyzeRepository(repoUrl);
  
  // 2. Check file structure
  score.codeQuality += checkFileOrganization(repo);
  
  // 3. Parse and validate HTML
  const html = parseHTML(repo.indexHTML);
  score.design += checkBrandColors(html, repo.css);
  
  // 4. Test functionality
  score.features += testBookingFlow(html);
  score.features += testShoppingCart(html);
  
  // 5. Evaluate UX
  score.ux += checkResponsiveness(html, repo.css);
  score.ux += checkAccessibility(html);
  
  // 6. Review documentation
  score.documentation += evaluateREADME(repo.readme);
  score.documentation += checkTests(repo.tests);
  
  // 7. Calculate bonus points
  score.bonus = calculateBonusPoints(repo);
  
  return {
    total: Object.values(score).reduce((a, b) => a + b, 0),
    breakdown: score,
    feedback: generateFeedback(score)
  };
}
```

---

## 📝 Sample Evaluation Output

```markdown
## Team: Awesome Coders
## Repository: pink-blueberry-awesome

### Score: 142/200

#### Breakdown:
- Code Quality: 17/20 ✅
- Design Implementation: 18/20 ✅
- Feature Completeness: 16/20 ✅
- User Experience: 15/20 ✅
- Documentation & Testing: 18/20 ✅
- Bonus Points: 58/100

#### Strengths:
✅ Excellent documentation with clear user stories
✅ Brand colors properly implemented
✅ Shopping cart fully functional
✅ 8 passing tests covering core functionality

#### Areas for Improvement:
⚠️ Mobile responsiveness needs work (horizontal scroll at 375px)
⚠️ Date/time picker not fully functional
⚠️ Missing error handling in checkout flow

#### Bonus Points Earned:
+ Custom favicon (5 pts)
+ Search functionality (10 pts)
+ Local storage implementation (10 pts)
+ Test suite with 8 tests (15 pts)
+ Complete requirements document (15 pts)
+ Accessibility documentation (3 pts)
```

---

## 🏆 Ranking Algorithm

```javascript
function rankTeams(allScores) {
  return allScores
    .sort((a, b) => {
      // Primary sort by total score
      if (b.total !== a.total) return b.total - a.total;
      
      // Tiebreaker 1: Documentation & Testing
      if (b.documentation !== a.documentation) 
        return b.documentation - a.documentation;
      
      // Tiebreaker 2: Feature Completeness
      if (b.features !== a.features) 
        return b.features - a.features;
      
      // Tiebreaker 3: Code Quality
      return b.codeQuality - a.codeQuality;
    })
    .map((team, index) => ({
      rank: index + 1,
      ...team
    }));
}
```

---

## 🚨 Automatic Disqualification Criteria

```markdown
❌ Repository is private or inaccessible
❌ No index.html file in repository
❌ Code is clearly plagiarized or AI-generated without modification
❌ Malicious code detected
❌ Submission after deadline
```

---

## 📋 Claude's Evaluation Checklist

```markdown
Pre-Flight Checks:
□ Repository accessible
□ README exists
□ index.html exists
□ No security violations

Core Evaluation:
□ Run automated tests
□ Check responsive design at 375px, 768px, 1920px
□ Validate HTML structure
□ Parse CSS for brand colors
□ Test booking flow completion
□ Test cart functionality
□ Count and run test files
□ Evaluate documentation completeness

Final Steps:
□ Calculate total score
□ Generate feedback report
□ Rank against other submissions
□ Flag any concerns for human review
```

---

*This rubric ensures consistent, fair, and transparent evaluation of all hackathon submissions.*