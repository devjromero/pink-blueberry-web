import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Service, Stylist, BookingState } from '@/types/salon';
import { services, stylists, timeSlots } from '@/data/salonData';
import ServiceCard from '@/components/salon/ServiceCard';
import StylistCard from '@/components/salon/StylistCard';
import { useNavigate } from 'react-router-dom';
import { useCalendly } from '@/hooks/use-calendly';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: Service;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [booking, setBooking] = useState<BookingState>({
    service: initialService
  });
  const router = useNavigate()
  const { openCalendly } = useCalendly()
  if (!isOpen) return null;

  const steps = [
    'Select Service',
    'Choose Stylist', 
    'Pick Date & Time',
    'Your Information',
    'Confirmation'
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  
  const renderStepContent = () => {
    
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Select Your Stylist</h3>
            <div className="grid gap-4">
              {stylists.map((stylist) => (
                <StylistCard
                  key={stylist.id}
                  stylist={stylist}
                  isSelected={booking.stylist?.id === stylist.id}
                  onSelect={(stylist) =>{ 
                    setBooking({...booking, stylist}); 
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  // (window as any)?.Calendly?.initPopupWidget({
                  //     url: stylist.url
                  //   });
                    openCalendly(stylist.url)
                    onClose?.()
                }}
                />
              ))}
              <div 
                className={`salon-card cursor-pointer ${
                  booking.stylist?.id === 0 ? 'ring-2 ring-primary-pink' : ''
                }`}
                onClick={() => setBooking({...booking, stylist: { id: 0, name: 'No Preference', title: '', specialties: [], rating: 0, bio: '', url:"" }})}
              >
                <h4 className="font-semibold text-card-foreground">No Preference</h4>
                <p className="text-muted-foreground text-sm">Any available stylist</p>
              </div>
            </div>
          </div>
        )
        // return (
        //   <div>
        //     <h3 className="text-xl font-semibold mb-6">Choose Your Service</h3>
        //     <div className="grid gap-4">
        //       {services.map((service) => (
        //         <div 
        //           key={service.id}
        //           className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
        //             booking.service?.id === service.id 
        //               ? 'border-primary-pink bg-light-pink/10' 
        //               : 'border-border hover:border-primary-pink/50'
        //           }`}
        //           onClick={() => setBooking({...booking, service})}
        //         >
        //           <h4 className="font-semibold text-card-foreground">{service.name}</h4>
        //           <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
        //           <div className="flex items-center justify-between mt-3">
        //             <span className="price-display">${service.price}</span>
        //             <span className="text-sm text-muted-foreground">{service.duration}</span>
        //           </div>
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // );

      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Select Your Stylist</h3>
            <div className="grid gap-4">
              {stylists.map((stylist) => (
                <StylistCard
                  key={stylist.id}
                  stylist={stylist}
                  isSelected={booking.stylist?.id === stylist.id}
                  onSelect={(stylist) => setBooking({...booking, stylist})}
                />
              ))}
              <div 
                className={`salon-card cursor-pointer ${
                  booking.stylist?.id === 0 ? 'ring-2 ring-primary-pink' : ''
                }`}
                onClick={() => setBooking({...booking, stylist: { id: 0, name: 'No Preference', title: '', specialties: [], rating: 0, bio: '', url:"" }})}
              >
                <h4 className="font-semibold text-card-foreground">No Preference</h4>
                <p className="text-muted-foreground text-sm">Any available stylist</p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Choose Date & Time</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full p-3 border-2 border-border rounded-xl focus:outline-none focus:border-primary-pink"
                  value={booking.date || ''}
                  onChange={(e) => setBooking({...booking, date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Available Times</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      className={`p-3 text-sm border-2 rounded-lg transition-all ${
                        booking.time === time
                          ? 'border-primary-pink bg-primary-pink text-white'
                          : 'border-border hover:border-primary-pink'
                      }`}
                      onClick={() => setBooking({...booking, time})}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Your Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-border rounded-xl focus:outline-none focus:border-primary-pink"
                  value={booking.customerInfo?.name || ''}
                  onChange={(e) => setBooking({
                    ...booking, 
                    customerInfo: {...booking.customerInfo, name: e.target.value}
                  })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-border rounded-xl focus:outline-none focus:border-primary-pink"
                  value={booking.customerInfo?.email || ''}
                  onChange={(e) => setBooking({
                    ...booking, 
                    customerInfo: {...booking.customerInfo, email: e.target.value}
                  })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 border-2 border-border rounded-xl focus:outline-none focus:border-primary-pink"
                  value={booking.customerInfo?.phone || ''}
                  onChange={(e) => setBooking({
                    ...booking, 
                    customerInfo: {...booking.customerInfo, phone: e.target.value}
                  })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Special Notes (Optional)</label>
                <textarea
                  className="w-full p-3 border-2 border-border rounded-xl focus:outline-none focus:border-primary-pink"
                  rows={3}
                  value={booking.customerInfo?.notes || ''}
                  onChange={(e) => setBooking({
                    ...booking, 
                    customerInfo: {...booking.customerInfo, notes: e.target.value}
                  })}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Booking Confirmation</h3>
            <div className="salon-card mb-6">
              <h4 className="font-semibold text-lg mb-4">Appointment Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{booking.service?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stylist:</span>
                  <span className="font-medium">{booking.stylist?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{booking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-medium">{booking.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{booking.service?.duration}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-3">
                  <span>Total:</span>
                  <span className="price-display">${booking.service?.price}</span>
                </div>
              </div>
            </div>
            
            <div className="salon-card">
              <h4 className="font-semibold mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Name:</span> {booking.customerInfo?.name}</p>
                <p><span className="text-muted-foreground">Email:</span> {booking.customerInfo?.email}</p>
                <p><span className="text-muted-foreground">Phone:</span> {booking.customerInfo?.phone}</p>
                {booking.customerInfo?.notes && (
                  <p><span className="text-muted-foreground">Notes:</span> {booking.customerInfo.notes}</p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!booking.service;
      case 2: return !!booking.stylist;
      case 3: return !!booking.date && !!booking.time;
      case 4: return !!(booking.customerInfo?.name && booking.customerInfo?.email && booking.customerInfo?.phone);
      default: return true;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Book Appointment</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index + 1 === currentStep 
                    ? 'bg-primary-pink text-white' 
                    : index + 1 < currentStep 
                    ? 'bg-primary-pink/20 text-primary-pink' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-px ${
                    index + 1 < currentStep ? 'bg-primary-pink' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderStepContent()}
        </div>

        <div className="p-6 border-t border-border flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="btn-secondary px-6 py-2 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {currentStep < 5 ? (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="btn-hero px-6 py-2 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                alert('Booking confirmed! We will contact you soon.');
                onClose();
              }}
              className="btn-hero px-8 py-2"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;