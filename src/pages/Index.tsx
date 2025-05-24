
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
                  <AuthorInfo />
                </div>
                
                <div className="space-y-16">
                  <section className="animate-fade-in">
                    <GrowingProblem />
                  </section>
                  
                  <LawyerExpertiseCTA />
                  
                  <section className="animate-slide-up">
                    <VictimSigns />
                  </section>
                  
                  <ShareYourStoryCTA />
                  
                  <section className="animate-fade-in">
                    <ConsumerRights />
                  </section>
                  
                  <section className="animate-slide-up">
                    <CaseStudies />
                  </section>
                  
                  <section className="animate-fade-in">
                    <Prevention />
                  </section>
                  
                  <section className="animate-slide-up">
                    <HowWeHelp />
                  </section>
                  
                  <section className="animate-fade-in">
                    <FAQ />
                  </section>
                </div>
                
                <div className="mt-16">
                  <CallToAction />
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <TableOfContents />
                </div>
                <div className="bg-gradient-to-br from-bennett-navy to-slate-800 rounded-2xl shadow-xl p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
