
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield, Award, Users } from 'lucide-react';

const LawyerExpertiseCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-bennett-navy via-bennett-navy/95 to-bennett-navy/90 p-8 md:p-12 rounded-2xl my-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(201,154,46,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-bennett-gold/20 rounded-lg">
                <Shield className="h-6 w-6 text-bennett-gold" />
              </div>
              <span className="text-bennett-gold font-semibold text-sm uppercase tracking-wider">
                Experienced Legal Protection
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Work with an Experienced Solar Fraud Attorney
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Charles Bennett has successfully represented over 200 solar fraud victims in Texas. No upfront costs—you only pay if you win.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-bennett-gold/20 rounded-lg">
                  <Users className="h-5 w-5 text-bennett-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-300">Clients Represented</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-bennett-gold/20 rounded-lg">
                  <Award className="h-5 w-5 text-bennett-gold" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$60K+</div>
                  <div className="text-sm text-gray-300">Average Recovery</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/reporting-seeking-help'}
              >
                Schedule Free Consultation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" /> Call (469) 253-7137
              </Button>
            </div>
          </div>
          
          {/* Right Content - Important Notice */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-xl">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-2">Time-Sensitive Alert</h3>
                  <p className="text-bennett-slate leading-relaxed">
                    The Texas Deceptive Trade Practices Act has a strict 2-year statute of limitations. Don't delay—call today to check if your case is eligible.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-bennett-gold/10 to-bennett-gold/5 p-6 rounded-xl border-l-4 border-bennett-gold">
                <p className="text-sm font-medium text-bennett-navy">
                  <strong>Free Case Evaluation:</strong> No obligation consultation to review your solar contract and determine if you have a valid fraud claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerExpertiseCTA;
