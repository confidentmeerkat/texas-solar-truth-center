
import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, MessageSquare, ArrowRight } from 'lucide-react';

const ShareYourStoryCTA = () => {
  return (
    <section className="bg-bennett-lightGold p-6 rounded-lg my-12">
      <h3 className="text-xl font-serif font-bold text-bennett-navy mb-4">
        Victims of Solar Fraud in Texas: Share Your Story & Help Others
      </h3>
      
      <p className="text-bennett-slate mb-6">
        Have you been a victim of solar panel fraud in Texas? Your experience can help others avoid these traps. 
        We invite you to share your story about Texas solar scams, and if you're comfortable, send us a video detailing what happened.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          className="bg-bennett-navy hover:bg-bennett-navy/90 text-white"
          onClick={() => window.location.href = '/reporting-seeking-help'}
        >
          <Video className="mr-2 h-4 w-4" /> Submit Your Video
        </Button>
        
        <Button 
          variant="outline" 
          className="border-bennett-navy text-bennett-navy hover:bg-bennett-navy/10"
          onClick={() => window.location.href = '/reporting-seeking-help'}
        >
          <MessageSquare className="mr-2 h-4 w-4" /> Share Your Written Story
        </Button>
      </div>
    </section>
  );
};

export default ShareYourStoryCTA;
