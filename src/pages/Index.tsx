
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <h1 className="sr-only">The Ultimate Guide to Understanding and Fighting Solar Panel Fraud in Texas</h1>
              
              <p className="text-lg md:text-xl text-bennett-slate mb-8 leading-relaxed">
                As solar energy gains popularity across Texas, unscrupulous companies are taking advantage of homeowners through deceptive sales tactics, substandard installations, and outright fraud. At Bennett Legal, we're dedicated to helping victims of solar fraud understand their rights and pursue justice.
              </p>
              
              <AuthorInfo />
              
              <div className="my-8">
                <GrowingProblem />
                <VictimSigns />
                <ShareYourStoryCTA />
                <ConsumerRights />
                <CaseStudies />
                <Prevention />
                <HowWeHelp />
                <FAQ />
              </div>
              
              <CallToAction />
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="sticky top-8">
                <TableOfContents />
                <ContactForm />
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
