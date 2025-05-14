
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const LawyerExpertiseCTA = () => {
  return (
    <section className="bg-bennett-lightGold border-l-4 border-bennett-gold p-6 rounded-lg my-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="shrink-0">
            <Avatar className="h-24 w-24 border-2 border-bennett-gold">
              <AvatarImage src="/lovable-uploads/c2f6a088-e5ec-429d-aee4-419e9df7b8c2.png" alt="Charles Bennett" />
              <AvatarFallback className="bg-bennett-navy text-white text-xl">CB</AvatarFallback>
            </Avatar>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-bennett-navy mb-4">
              Work with an Experienced Solar Fraud Attorney
            </h3>
            
            <p className="text-bennett-slate mb-6">
              Charles Bennett has successfully represented over 200 solar fraud victims in Texas. He takes on new fraud cases with no upfront costs—you only pay if you win. Many of our clients have recovered up to $60,000 from fraudulent solar companies.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-md mb-4 border border-bennett-gold/30">
          <p className="text-sm font-medium text-bennett-navy flex items-center">
            <Clock className="inline-block mr-2 h-4 w-4 text-bennett-gold" />
            Important: The Texas Deceptive Trade Practices Act has a strict 2-year statute of limitations. Don't delay—call today to check if your case is eligible.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-bennett-navy hover:bg-bennett-navy/90 text-white"
            onClick={() => window.location.href = '/reporting-seeking-help'}
          >
            Schedule Free Consultation
          </Button>
          
          <Button 
            variant="outline" 
            className="border-bennett-navy text-bennett-navy hover:bg-bennett-navy/10"
          >
            <Phone className="mr-2 h-4 w-4" /> Call (469) 253-7137
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LawyerExpertiseCTA;
