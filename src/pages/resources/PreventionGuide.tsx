
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PreventionGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="text-bennett-navy hover:text-bennett-gold">
              ← Back to Main Guide
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-bennett-navy mb-4">
            Prevention Guide: Protect Yourself
          </h1>
          
          <div className="bg-bennett-lightBlue p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="mr-4 pt-1">
                <svg className="h-6 w-6 text-bennett-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-bennett-navy">
                This guide provides preventative measures to protect yourself from solar panel fraud in Texas. For information on what to do if you've already been scammed, see our <Link to="/reporting-seeking-help" className="text-bennett-navy underline hover:text-bennett-gold">Reporting Fraud & Seeking Legal Help</Link> guide.
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p>Coming soon: Detailed prevention strategies to protect yourself from solar panel scams in Texas.</p>
            
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <Link to="/reporting-seeking-help" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  ← Reporting Fraud & Seeking Legal Help
                </Link>
              </div>
              <div>
                <Link to="/" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  Back to Main Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PreventionGuide;
