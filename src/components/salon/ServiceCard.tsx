import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Service } from '@/types/salon';

interface ServiceCardProps {
  service: Service;
  onBookNow?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookNow }) => {
  return (
    <div className="salon-card group">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary-pink transition-colors">
          {service.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="price-display">
            ${service.price}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{service.duration}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm text-muted-foreground ml-1">4.9</span>
        </div>
      </div>
      
      <button
        onClick={() => onBookNow?.(service)}
        className="btn-hero w-full justify-center"
      >
        Book This Service
      </button>
    </div>
  );
};

export default ServiceCard;