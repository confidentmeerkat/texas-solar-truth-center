
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/editorial/Hero';
import TableOfContents from '@/components/editorial/TableOfContents';
import GrowingProblem from '@/components/editorial/GrowingProblem';
import VictimSigns from '@/components/editorial/VictimSigns';
import ConsumerRights from '@/components/editorial/ConsumerRights';
import CaseStudies from '@/components/editorial/CaseStudies';
import Prevention from '@/components/editorial/Prevention';
import HowWeHelp from '@/components/editorial/HowWeHelp';
import FAQ from '@/components/editorial/FAQ';
import ContactForm from '@/components/editorial/ContactForm';
import CallToAction from '@/components/editorial/CallToAction';
import AuthorInfo from '@/components/editorial/AuthorInfo';
import ShareYourStoryCTA from '@/components/editorial/ShareYourStoryCTA';
import LawyerExpertiseCTA from '@/components/editorial/LawyerExpertiseCTA';
import ScrollToTop from '@/components/ui/scroll-to-top';
import ReadingProgress from '@/components/ui/reading-progress';
import { EnhancedCard } from '@/components/ui/enhanced-card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <ReadingProgress />
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="max-w-5xl">
                <h1 className="sr-only">The Ultimate Guide to Understanding and Fighting Solar Panel Fraud in Texas</h1>
                
                {/* Enhanced intro section */}
                <div className="mb-20">
                  <div className="prose prose-xl max-w-none">
                    <p className="text-2xl md:text-3xl text-bennett-slate mb-12 leading-relaxed font-light bg-gradient-to-r from-bennett-slate via-gray-600 to-bennett-slate bg-clip-text text-transparent">
                      As solar energy gains popularity across Texas, unscrupulous companies are taking advantage of homeowners through deceptive sales tactics, substandard installations, and outright fraud. At Bennett Legal, we're dedicated to helping victims of solar fraud understand their rights and pursue justice.
                    </p>
                  </div>
                  
                  <EnhancedCard variant="glass" className="p-10 mb-16 group">
                    <AuthorInfo />
                  </EnhancedCard>
                </div>
                
                {/* Enhanced content sections with better spacing */}
                <div className="space-y-24">
                  <section className="scroll-mt-24" id="growing-problem">
                    <div className="animate-fade-in">
                      <GrowingProblem />
                    </div>
                  </section>
                  
                  <div className="transform hover:scale-[1.01] transition-all duration-500">
                    <EnhancedCard variant="gradient" className="overflow-hidden">
                      <LawyerExpertiseCTA />
                    </EnhancedCard>
                  </div>
                  
                  <section className="scroll-mt-24" id="victim-signs">
                    <div className="animate-slide-up">
                      <VictimSigns />
                    </div>
                  </section>
                  
                  <div className="transform hover:scale-[1.01] transition-all duration-500">
                    <EnhancedCard variant="elevated" className="overflow-hidden">
                      <ShareYourStoryCTA />
                    </EnhancedCard>
                  </div>
                  
                  <section className="scroll-mt-24" id="consumer-rights">
                    <div className="animate-fade-in">
                      <ConsumerRights />
                    </div>
                  </section>
                  
                  <section className="scroll-mt-24" id="case-studies">
                    <div className="animate-slide-up">
                      <CaseStudies />
                    </div>
                  </section>
                  
                  <section className="scroll-mt-24" id="prevention">
                    <div className="animate-fade-in">
                      <Prevention />
                    </div>
                  </section>
                  
                  <section className="scroll-mt-24" id="how-we-help">
                    <div className="animate-slide-up">
                      <HowWeHelp />
                    </div>
                  </section>
                  
                  <section className="scroll-mt-24" id="faq">
                    <div className="animate-fade-in">
                      <FAQ />
                    </div>
                  </section>
                </div>
                
                <div className="mt-24 transform hover:scale-[1.02] transition-all duration-500">
                  <CallToAction />
                </div>
              </div>
            </div>
            
            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <EnhancedCard variant="glass" className="p-8 hover:shadow-2xl transition-all duration-500">
                  <TableOfContents />
                </EnhancedCard>
                
                <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy via-slate-800 to-bennett-navy text-white p-8 hover:shadow-2xl transition-all duration-500">
                  <ContactForm />
                </EnhancedCard>
                
                {/* Enhanced Trust Indicators */}
                <EnhancedCard variant="glass" className="bg-gradient-to-br from-green-50/80 via-blue-50/80 to-green-50/80 p-8 border-2 border-green-200/50">
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">200+</div>
                      <div className="text-sm text-green-700 font-semibold">Clients Successfully Represented</div>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">$60K+</div>
                      <div className="text-sm text-blue-700 font-semibold">Average Case Recovery</div>
                    </div>
                  </div>
                </EnhancedCard>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
