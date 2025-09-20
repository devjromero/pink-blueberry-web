import React from 'react';
import { Star, Award } from 'lucide-react';
import { Stylist } from '@/types/salon';
import { useNavigate } from 'react-router-dom';
import { useCalendly } from '@/hooks/use-calendly';

interface StylistCardProps {
  stylist: Stylist;
  onSelect?: (stylist: Stylist) => void;
  isSelected?: boolean;
}

const StylistCard: React.FC<StylistCardProps> = ({ stylist, onSelect, isSelected }) => {
  const naviate = useNavigate()
  const {openCalendly} = useCalendly()  
  return (
    <div className={`salon-card group cursor-pointer transition-all ${
      isSelected ? 'ring-2 ring-primary-pink shadow-salon-card-hover' : ''
    }`}
    onClick={() => onSelect?.(stylist)}>
      
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-pink to-primary-blue flex items-center justify-center mr-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary-pink transition-colors">
            {stylist.name}
          </h3>
          <p className="text-primary-pink text-sm font-medium">{stylist.title}</p>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-muted-foreground ml-1">{stylist.rating}</span>
          </div>
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {stylist.bio}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {stylist.specialties.map((specialty, index) => (
          <span 
            key={index}
            className="text-xs px-3 py-1 bg-light-pink/20 text-primary-pink rounded-full"
          >
            {specialty}
          </span>
        ))}
      </div>
      
      {!isSelected && (
        <button className="btn-secondary w-full justify-center" onClick={() => openCalendly(stylist.url)}>
          Book Now
        </button>
      )}
{/*       
      {isSelected && (
        <div className="text-center text-primary-pink font-medium">
          Book Now
        </div>
      )} */}
    </div>
  );
};

export default StylistCard;