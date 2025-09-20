import React, { useState } from 'react';
import { Sparkles, Star, Users, Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/salon/HeroSection';
import ServiceCard from '@/components/salon/ServiceCard';
import ProductCard from '@/components/salon/ProductCard';
import StylistCard from '@/components/salon/StylistCard';
import ReviewsSection from '@/components/salon/ReviewsSection';
import ShoppingCart from '@/components/cart/ShoppingCart';
import BookingModal from '@/components/booking/BookingModal';
import { services, products, stylists } from '@/data/salonData';
import { Service } from '@/types/salon';
import { useCalendly } from '@/hooks/use-calendly';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | undefined>();
  const { openCalendly } = useCalendly();
  const openBooking = (service?: Service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  

  return (
    <div className="min-h-screen bg-background">
      <Header onBookingClick={() => openBooking()} />
      <ShoppingCart />
      
      <main>
        {/* Hero Section */}
        <HeroSection onBookingClick={() => openBooking()} />
        
        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-px bg-primary-pink"></div>
                <Sparkles className="w-6 h-6 text-primary-pink mx-4" />
                <div className="w-12 h-px bg-primary-pink"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience luxury treatments with organic, eco-friendly products
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServiceCard 
                    service={service} 
                    onBookNow={openBooking}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-20 px-4 bg-gradient-to-br from-light-pink/10 to-light-blue/10">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-px bg-primary-blue"></div>
                <Star className="w-6 h-6 text-primary-blue mx-4" />
                <div className="w-12 h-px bg-primary-blue"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take the salon experience home with our curated collection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 6).map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="btn-secondary px-8 py-3">
                View All Products
              </button>
            </div>
          </div>
        </section>

        {/* Stylists Section */}
        <section id="stylists" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-px bg-primary-pink"></div>
                <Users className="w-6 h-6 text-primary-pink mx-4" />
                <div className="w-12 h-px bg-primary-pink"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Stylists</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert professionals dedicated to bringing out your natural beauty
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {stylists.map((stylist, index) => (
                <div 
                  key={stylist.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <StylistCard 
                    stylist={stylist}
                    onSelect={() => openCalendly(stylist.url)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection onBookingClick={() => openBooking()} />

        {/* Call to Action Section */}
        <section className="py-20 px-4 hero-bg">
          <div className="container mx-auto text-center relative z-10">
            <div className="animate-fade-in-up">
              <Award className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Your Transformation?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Book your appointment today and discover the luxury beauty experience 
                you deserve at The Pink Blueberry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openBooking()}
                  className="btn-hero text-lg px-8 py-4"
                >
                  Book Your Appointment
                </button>
                <button className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary-pink">
                  Call Us: (555) 123-PINK
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-pink to-primary-blue flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
                  The Pink Blueberry
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Where luxury meets natural beauty. Experience premium salon services 
                in our welcoming environment.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hair Cuts & Styling</li>
                <li>Color Services</li>
                <li>Organic Treatments</li>
                <li>Bridal Packages</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Hair Care Products</li>
                <li>Organic Soaps</li>
                <li>Gift Cards</li>
                <li>Beauty Accessories</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>123 Beauty Lane</li>
                <li>Salon City, SC 12345</li>
                <li>(555) 123-PINK</li>
                <li>hello@pinkblueberry.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 The Pink Blueberry Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
};

export default Index;
