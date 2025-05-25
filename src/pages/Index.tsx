
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="max-w-4xl">
                <h1 className="sr-only">The Ultimate Guide to Understanding and Fighting Solar Panel Fraud in Texas</h1>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl md:text-2xl text-bennett-slate mb-12 leading-relaxed font-medium">
                    As solar energy gains popularity across Texas, unscrupulous companies are taking advantage of homeowners through deceptive sales tactics, substandard installations, and outright fraud. At Bennett Legal, we're dedicated to helping victims of solar fraud understand their rights and pursue justice.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12 hover:shadow-xl transition-shadow duration-300">
                  <AuthorInfo />
                </div>
                
                <div className="space-y-16">
                  <section className="animate-fade-in scroll-mt-24" id="growing-problem">
                    <GrowingProblem />
                  </section>
                  
                  <div className="transform hover:scale-[1.01] transition-transform duration-300">
                    <LawyerExpertiseCTA />
                  </div>
                  
                  <section className="animate-slide-up scroll-mt-24" id="victim-signs">
                    <VictimSigns />
                  </section>
                  
                  <div className="transform hover:scale-[1.01] transition-transform duration-300">
                    <ShareYourStoryCTA />
                  </div>
                  
                  <section className="animate-fade-in scroll-mt-24" id="consumer-rights">
                    <ConsumerRights />
                  </section>
                  
                  <section className="animate-slide-up scroll-mt-24" id="case-studies">
                    <CaseStudies />
                  </section>
                  
                  <section className="animate-fade-in scroll-mt-24" id="prevention">
                    <Prevention />
                  </section>
                  
                  <section className="animate-slide-up scroll-mt-24" id="how-we-help">
                    <HowWeHelp />
                  </section>
                  
                  <section className="animate-fade-in scroll-mt-24" id="faq">
                    <FAQ />
                  </section>
                </div>
                
                <div className="mt-16 transform hover:scale-[1.02] transition-transform duration-300">
                  <CallToAction />
                </div>
              </div>
            </div>
            
            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                  <TableOfContents />
                </div>
                <div className="bg-gradient-to-br from-bennett-navy to-slate-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                  <ContactForm />
                </div>
                
                {/* Trust Indicators */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                    <div className="text-sm text-green-700 font-medium">Clients Successfully Represented</div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">$60K+</div>
                    <div className="text-sm text-blue-700 font-medium">Average Case Recovery</div>
                  </div>
                </div>
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
