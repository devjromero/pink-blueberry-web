import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  image?: string;
}

interface ReviewsSectionProps {
  onBookingClick?: () => void;
}

const mockReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Color Transformation",
    rating: 5,
    review: "Absolutely amazing experience! The stylists at Pink Blueberry are true artists. My balayage came out even better than I imagined. The salon has such a luxurious feel and the staff made me feel so pampered.",
    date: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1494790108755-2616b169c6f4?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Emily Chen",
    service: "Signature Cut & Style",
    rating: 5,
    review: "I've been going to Pink Blueberry for over a year now and they never disappoint! James gave me the perfect cut that works with my lifestyle. The booking system is so convenient too.",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    service: "Luxury Hair Treatment",
    rating: 5,
    review: "The luxury treatment was incredible! My hair feels so soft and healthy. The pink and blue themed salon is so Instagram-worthy too. Definitely booking my next appointment soon!",
    date: "3 days ago", 
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Jessica Williams",
    service: "Wedding Package",
    rating: 5,
    review: "Pink Blueberry made my wedding day perfect! The team was professional, punctual, and created exactly the look I dreamed of. All my bridesmaids looked stunning too. Highly recommend!",
    date: "1 month ago",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Amanda Thompson",
    service: "Hair Extensions",
    rating: 5,
    review: "The quality of service here is unmatched. My extensions look so natural and the color match is perfect. The stylists really know what they're doing. Love the luxury experience!",
    date: "5 days ago",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Lisa Park",
    service: "Keratin Treatment",
    rating: 5,
    review: "Best decision ever! My hair is so much more manageable now. The treatment was relaxing and the results are amazing. The salon atmosphere is so calming and beautiful.",
    date: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="salon-card h-full flex flex-col">
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-primary-pink opacity-50" />
        <StarRating rating={review.rating} />
      </div>
      
      {/* Review Text */}
      <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
        "{review.review}"
      </p>
      
      {/* Customer Info */}
      <div className="flex items-center space-x-3 mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-pink to-primary-blue">
          {review.image ? (
            <img 
              src={review.image} 
              alt={review.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white font-semibold">
              {review.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.service}</p>
          <p className="text-xs text-muted-foreground opacity-75">{review.date}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onBookingClick }) => {
  const averageRating = mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length;
  const totalReviews = mockReviews.length;

  return (
    <section className="py-16 bg-background" id="reviews">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Don't just take our word for it - hear from our satisfied clients about their Pink Blueberry experience
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <StarRating rating={Math.floor(averageRating)} />
            <span className="text-2xl font-bold text-foreground">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">({totalReviews} reviews)</span>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary-pink rounded-full"></div>
              <span>Real Customers</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockReviews.map((review) => (
            <div key={review.id} className="animate-fade-in-up">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-pink/10 to-primary-blue/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Ready to Experience Pink Blueberry?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied clients and book your luxury salon experience today
            </p>
            <button 
              className="btn-hero"
              onClick={onBookingClick}
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
