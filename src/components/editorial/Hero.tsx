
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-bennett-navy via-bennett-navy/95 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(201,154,46,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm font-medium">Trusted by 200+ Texas Solar Fraud Victims</span>
            <div className="flex gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-bennett-gold text-bennett-gold" />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-bennett-gold mb-6">
            <AlertTriangle size={24} className="animate-pulse" />
            <span className="uppercase text-sm font-bold tracking-wider">Texas Solar Consumer Protection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Fight Solar Panel 
            <span className="block text-bennett-gold">Fraud in Texas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            As solar energy grows in popularity across Texas, so do deceptive practices and outright scams. 
            <span className="text-bennett-gold font-semibold"> Learn how to protect yourself</span> and what legal options are available if you've been victimized.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-bold px-10 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-bennett-gold/25 transition-all duration-300 hover:scale-105 group"
            >
              Get Free Case Review 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Learn Your Rights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">Trusted by leading consumer protection organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-xs font-semibold tracking-wider">TEXAS STATE BAR</div>
              <div className="text-xs font-semibold tracking-wider">CONSUMER PROTECTION</div>
              <div className="text-xs font-semibold tracking-wider">BBB ACCREDITED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
