import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onBookingClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookingClick }) => {
  return (
    <section className="hero-bg relative min-h-[600px] flex items-center justify-center text-white py-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-white/80 mr-4" />
            <div className="w-16 h-px bg-white/50"></div>
            <Sparkles className="w-8 h-8 text-white/60 mx-4" />
            <div className="w-16 h-px bg-white/50"></div>
            <Sparkles className="w-12 h-12 text-white/80 ml-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Pink Blueberry
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Where Luxury Meets Natural Beauty
          </p>
          
          <p className="text-lg mb-10 text-white/80 max-w-xl mx-auto">
            Experience premium salon services with organic, eco-friendly products 
            in our luxurious and welcoming environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBookingClick}
              className="btn-hero text-lg px-8 py-4 flex items-center space-x-3"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Appointment</span>
            </button>
            
            <button className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary-pink">
              View Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-white/30"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-white/40"></div>
    </section>
  );
};

export default HeroSection;