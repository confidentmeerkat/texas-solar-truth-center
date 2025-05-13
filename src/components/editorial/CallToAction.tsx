
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-bennett-navy text-white py-12 md:py-16 px-4 md:px-8 rounded-lg mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
          Don't Let Solar Panel Fraud Compromise Your Financial Future
        </h2>
        
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          Our team of experienced consumer protection attorneys is ready to evaluate your case and help you understand your legal options. Contact us today for a free, no-obligation consultation.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button 
            size="lg" 
            className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-medium w-full md:w-auto"
          >
            Schedule Free Consultation
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 w-full md:w-auto"
          >
            <Phone className="mr-2 h-4 w-4" /> Call (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
