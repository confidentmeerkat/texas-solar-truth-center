
import React from 'react';
import { Button } from '@/components/ui/button';
import { Video, MessageSquare, ArrowRight, Youtube } from 'lucide-react';

const ShareYourStoryCTA = () => {
  return (
    <section className="bg-bennett-lightGold p-6 rounded-lg my-12">
      <div className="mb-6 border-b border-bennett-gold pb-4">
        <div className="flex items-center gap-2 mb-3">
          <Youtube className="text-bennett-navy h-5 w-5" />
          <h4 className="text-lg font-serif font-bold text-bennett-navy">
            We talked to a Lawyer in Dallas to find out more about the Fraud
          </h4>
        </div>
        <div className="aspect-video w-full sm:w-4/5 mx-auto bg-gray-100 rounded overflow-hidden">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Interview with Dallas Lawyer about Solar Fraud" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      
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
