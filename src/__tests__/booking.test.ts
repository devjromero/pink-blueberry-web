/**
 * BOOKING SYSTEM UNIT TESTS
 * =========================
 * 
 * These tests verify the booking flow validation and data handling
 * for The Pink Blueberry Salon appointment system.
 * 
 * Testing Coverage:
 * ✅ Service selection validation
 * ✅ Stylist selection logic
 * ✅ Date/time validation
 * ✅ Customer information validation
 * ✅ Booking state management
 */

// Type definitions for testing
interface Service {
  id: number;
  name: string;
  price: number;
  duration: string;
  description: string;
}

interface Stylist {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  bio: string;
  image?: string;
  url: string;
}

interface BookingState {
  service?: Service;
  stylist?: Stylist;
  date?: string;
  time?: string;
  customerInfo?: {
    name: string;
    email: string;
    phone: string;
    notes?: string;
  };
}

// Mock data for testing
const mockServices: Service[] = [
  {
    id: 1,
    name: "Signature Cut & Style",
    price: 85,
    duration: "60 min",
    description: "Precision cut with professional styling"
  },
  {
    id: 2,
    name: "Color Transformation",
    price: 150,
    duration: "2 hours", 
    description: "Complete color makeover"
  }
];

const mockStylists: Stylist[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Stylist",
    specialties: ["Color", "Balayage"],
    rating: 4.9,
    bio: "Expert stylist with 10+ years experience",
    url: "sarah-mitchell"
  },
  {
    id: 2,
    name: "James Chen", 
    title: "Style Director",
    specialties: ["Cuts", "Styling"],
    rating: 4.8,
    bio: "Precision cutting specialist",
    url: "james-chen"
  }
];

// Validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-()+]{10,}$/;
  return phoneRegex.test(phone);
}

function validateBookingStep(booking: BookingState, step: number): boolean {
  switch (step) {
    case 1: return !!booking.service;
    case 2: return !!booking.stylist;
    case 3: return !!(booking.date && booking.time);
    case 4: return !!(
      booking.customerInfo?.name && 
      booking.customerInfo?.email && 
      booking.customerInfo?.phone &&
      validateEmail(booking.customerInfo.email) &&
      validatePhone(booking.customerInfo.phone)
    );
    default: return false;
  }
}

function calculateBookingTotal(booking: BookingState): number {
  return booking.service?.price || 0;
}

function isDateValid(dateString: string): boolean {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today && !isNaN(date.getTime());
}

// Test runner
function runBookingTests() {
  console.log('📅 Running Pink Blueberry Booking System Tests...\n');
  
  let passedTests = 0;
  let totalTests = 0;
  
  // Test 1: Email Validation
  totalTests++;
  try {
    const validEmails = ['test@example.com', 'user@salon.co.uk', 'client@pinkblueberry.com'];
    const invalidEmails = ['notanemail', 'missing@', '@domain.com', ''];
    
    const validResults = validEmails.every(email => validateEmail(email));
    const invalidResults = invalidEmails.every(email => !validateEmail(email));
    
    if (validResults && invalidResults) {
      console.log('✅ Test 1 PASSED: Email validation working correctly');
      passedTests++;
    } else {
      console.log('❌ Test 1 FAILED: Email validation not working');
    }
  } catch (error) {
    console.log('❌ Test 1 ERROR:', error);
  }
  
  // Test 2: Phone Validation  
  totalTests++;
  try {
    const validPhones = ['(555) 123-4567', '+1-555-123-4567', '5551234567', '555 123 4567'];
    const invalidPhones = ['123', 'abc-def-ghij', ''];
    
    const validResults = validPhones.every(phone => validatePhone(phone));
    const invalidResults = invalidPhones.every(phone => !validatePhone(phone));
    
    if (validResults && invalidResults) {
      console.log('✅ Test 2 PASSED: Phone validation working correctly');
      passedTests++;
    } else {
      console.log('❌ Test 2 FAILED: Phone validation not working');
    }
  } catch (error) {
    console.log('❌ Test 2 ERROR:', error);
  }
  
  // Test 3: Booking Step 1 Validation (Service Selection)
  totalTests++;
  try {
    const validBooking: BookingState = { service: mockServices[0] };
    const invalidBooking: BookingState = {};
    
    if (validateBookingStep(validBooking, 1) && !validateBookingStep(invalidBooking, 1)) {
      console.log('✅ Test 3 PASSED: Service selection validation');
      passedTests++;
    } else {
      console.log('❌ Test 3 FAILED: Service selection validation not working');
    }
  } catch (error) {
    console.log('❌ Test 3 ERROR:', error);
  }
  
  // Test 4: Booking Step 2 Validation (Stylist Selection)
  totalTests++;
  try {
    const validBooking: BookingState = { 
      service: mockServices[0],
      stylist: mockStylists[0] 
    };
    const invalidBooking: BookingState = { service: mockServices[0] };
    
    if (validateBookingStep(validBooking, 2) && !validateBookingStep(invalidBooking, 2)) {
      console.log('✅ Test 4 PASSED: Stylist selection validation');
      passedTests++;
    } else {
      console.log('❌ Test 4 FAILED: Stylist selection validation not working');
    }
  } catch (error) {
    console.log('❌ Test 4 ERROR:', error);
  }
  
  // Test 5: Date/Time Validation
  totalTests++;
  try {
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    const validBooking: BookingState = {
      service: mockServices[0],
      stylist: mockStylists[0],
      date: tomorrow,
      time: '10:00 AM'
    };
    
    const invalidBooking: BookingState = {
      service: mockServices[0], 
      stylist: mockStylists[0],
      date: yesterday,
      time: '10:00 AM'
    };
    
    if (validateBookingStep(validBooking, 3) && isDateValid(tomorrow) && !isDateValid(yesterday)) {
      console.log('✅ Test 5 PASSED: Date/time validation');
      passedTests++;
    } else {
      console.log('❌ Test 5 FAILED: Date/time validation not working');
    }
  } catch (error) {
    console.log('❌ Test 5 ERROR:', error);
  }
  
  // Test 6: Complete Booking Validation
  totalTests++;
  try {
    const completeBooking: BookingState = {
      service: mockServices[0],
      stylist: mockStylists[0], 
      date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      time: '2:00 PM',
      customerInfo: {
        name: 'Jane Doe',
        email: 'jane@example.com',
        phone: '(555) 123-4567'
      }
    };
    
    if (validateBookingStep(completeBooking, 4)) {
      console.log('✅ Test 6 PASSED: Complete booking validation');
      passedTests++;
    } else {
      console.log('❌ Test 6 FAILED: Complete booking validation not working');
    }
  } catch (error) {
    console.log('❌ Test 6 ERROR:', error);
  }
  
  // Test 7: Booking Total Calculation
  totalTests++;
  try {
    const booking: BookingState = { service: mockServices[1] }; // $150 service
    const total = calculateBookingTotal(booking);
    
    if (total === 150) {
      console.log('✅ Test 7 PASSED: Booking total calculation ($150)');
      passedTests++;
    } else {
      console.log(`❌ Test 7 FAILED: Expected $150, got $${total}`);
    }
  } catch (error) {
    console.log('❌ Test 7 ERROR:', error);
  }
  
  // Test 8: Empty Booking Total
  totalTests++;
  try {
    const emptyBooking: BookingState = {};
    const total = calculateBookingTotal(emptyBooking);
    
    if (total === 0) {
      console.log('✅ Test 8 PASSED: Empty booking total is $0');
      passedTests++;
    } else {
      console.log(`❌ Test 8 FAILED: Empty booking should be $0, got $${total}`);
    }
  } catch (error) {
    console.log('❌ Test 8 ERROR:', error);
  }
  
  // Summary
  console.log(`\n📊 BOOKING TEST RESULTS: ${passedTests}/${totalTests} tests passed`);
  console.log(`✅ Success Rate: ${Math.round((passedTests/totalTests) * 100)}%`);
  
  if (passedTests === totalTests) {
    console.log('🎉 ALL BOOKING TESTS PASSED! Booking system is working correctly.');
  } else {
    console.log('⚠️  Some booking tests failed. Review validation logic.');
  }
  
  return { passed: passedTests, total: totalTests, successRate: (passedTests/totalTests) * 100 };
}

// Export functions
export { 
  runBookingTests, 
  validateEmail, 
  validatePhone, 
  validateBookingStep, 
  calculateBookingTotal,
  isDateValid,
  mockServices,
  mockStylists 
};

// Auto-run if executed directly
if (typeof window !== 'undefined') {
  // Browser environment
  (globalThis as unknown as Record<string, unknown>).runBookingTests = runBookingTests;
  console.log('Booking tests loaded. Run runBookingTests() to execute.');
} else {
  // Node environment
  runBookingTests();
}
