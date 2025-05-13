
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-bennett-navy to-bennett-navy/90 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-bennett-gold mb-4">
            <AlertTriangle size={20} />
            <span className="uppercase text-sm font-semibold tracking-wider">Consumer Protection</span>
          </div>
          <h1 className="text-white mb-6 leading-tight">
            Empowering Texas Consumers: Understanding and Combating Solar Panel Fraud
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl">
            As solar energy grows in popularity across Texas, so do deceptive practices and outright scams. 
            Learn how to protect yourself and what legal options are available if you've been victimized.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-medium">
              Free Case Review
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn About Your Rights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
