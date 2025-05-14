
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const LawyerExpertiseCTA = () => {
  return (
    <section className="bg-bennett-lightGold border-l-4 border-bennett-gold p-8 rounded-lg my-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="shrink-0 relative hidden md:block">
            <div className="w-40 h-40 rounded-full border-2 border-bennett-gold overflow-hidden flex items-center justify-center bg-white">
              <div className="text-xs text-bennett-slate p-4 text-center leading-tight">
                Work with an Experienced Solar Fraud Attorney<br /><br />
                Charles Bennett has successfully represented over 200 solar fraud victims in Texas. He takes on new fraud cases with no upfront costs—you only pay if you win. Many of our clients have recovered up to $60,000 from fraudulent solar companies.
              </div>
            </div>
          </div>
          
          <div className="flex-grow">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-bennett-navy mb-6">
              Work with an Experienced Solar Fraud Attorney
            </h2>
            
            <p className="text-lg text-bennett-slate mb-8">
              Charles Bennett has successfully represented over 200 solar fraud victims in Texas. He takes on new fraud cases with no upfront costs—you only pay if you win. Many of our clients have recovered up to $60,000 from fraudulent solar companies.
            </p>
            
            <div className="bg-white p-6 rounded-lg mb-8 flex items-start">
              <Clock className="h-6 w-6 text-bennett-gold mr-4 flex-shrink-0 mt-1" />
              <p className="font-medium text-bennett-navy m-0">
                Important: The Texas Deceptive Trade Practices Act has a strict 2-year statute of limitations. Don't delay—call today to check if your case is eligible.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-bennett-navy hover:bg-bennett-navy/90 text-white font-medium py-6 px-8 rounded-md"
                onClick={() => window.location.href = '/reporting-seeking-help'}
              >
                Schedule Free Consultation
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-bennett-navy text-bennett-navy hover:bg-bennett-navy/10 font-medium py-6 px-8 rounded-md flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" /> Call (469) 253-7137
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerExpertiseCTA;
