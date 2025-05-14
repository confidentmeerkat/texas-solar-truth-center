
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock } from 'lucide-react';

const LawyerExpertiseCTA = () => {
  return (
    <section className="bg-bennett-lightGold border-l-4 border-bennett-gold p-8 rounded-lg my-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="shrink-0">
            <div className="rounded-full border-2 border-bennett-gold overflow-hidden h-24 w-24">
              <img 
                src="/lovable-uploads/d7dff2f2-c2d6-4b50-a5bb-0266705d4bf9.png" 
                alt="Charles Bennett" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-bennett-navy mb-4">
              Work with an Experienced Solar Fraud Attorney
            </h3>
            
            <p className="text-bennett-slate mb-0">
              Charles Bennett has successfully represented over 200 solar fraud victims in Texas. He takes on new fraud cases with no upfront costs—you only pay if you win. Many of our clients have recovered up to $60,000 from fraudulent solar companies.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-md mb-6 border border-bennett-gold/30 flex items-center">
          <Clock className="h-5 w-5 text-bennett-gold mr-3 flex-shrink-0" />
          <p className="text-sm font-medium text-bennett-navy m-0">
            Important: The Texas Deceptive Trade Practices Act has a strict 2-year statute of limitations. Don't delay—call today to check if your case is eligible.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-bennett-navy hover:bg-bennett-navy/90 text-white font-medium py-6 px-6"
            onClick={() => window.location.href = '/reporting-seeking-help'}
          >
            Schedule Free Consultation
          </Button>
          
          <Button 
            variant="outline" 
            className="border-bennett-navy text-bennett-navy hover:bg-bennett-navy/10 font-medium py-6 px-6"
          >
            <Phone className="mr-2 h-5 w-5" /> Call (469) 253-7137
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LawyerExpertiseCTA;
