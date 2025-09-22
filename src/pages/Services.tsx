
import React from 'react';
import PageTemplate from '@/components/layout/PageTemplate';
import StandardHero from '@/components/layout/StandardHero';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import SectionHeader from '@/components/ui/section-header';
import { Scale, Gavel, FileText, Users, Shield, CheckCircle2, Phone, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import AirtableFormDialog from '@/components/ui/airtable-form-dialog';
import { Button } from '@/components/ui/button';

const Services = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' }
  ];

  const heroStats = [
    {
      value: '50+',
      label: 'Years Combined Experience',
      icon: <Scale className="h-6 w-6 text-bennett-gold" />
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
      icon: <CheckCircle2 className="h-6 w-6 text-green-400" />
    }
  ];

  const heroSection = (
    <StandardHero
      title="Legal Services"
      subtitle="Comprehensive Solar Fraud Protection"
      description="Bennett Legal offers comprehensive legal services to protect Texas consumers from solar panel fraud and help victims recover their losses."
      primaryCTA={{
        text: "Free Case Review",
        component: (
          <AirtableFormDialog 
            title="Get Your Free Case Review" 
            description="Complete our form to receive a confidential consultation about your solar fraud case"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-bennett-gold to-yellow-500 hover:from-bennett-gold/90 hover:to-yellow-500/90 text-bennett-navy font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-bennett-gold/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <span className="flex items-center">
                Free Case Review
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </AirtableFormDialog>
        )
      }}
      secondaryCTA={{
        text: "Learn About Your Rights",
        href: "/legal-rights-protections"
      }}
      trustBadge={{
        text: "No Win, No Fee Guarantee"
      }}
      stats={heroStats}
      variant="gradient"
    />
  );

  const sidebarContent = (
    <>
      <EnhancedCard variant="glass" className="bg-green-50/80 border-green-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
          <h3 className="text-xl font-bold text-green-900 !m-0">No Win, No Fee</h3>
        </div>
        <p className="text-green-800 mb-4">
          You don't pay unless we win your case. Free consultation and case evaluation.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-600" />
            <span className="font-semibold">(214) 473-5897</span>
          </div>
          <div className="text-sm text-green-700">Call now for immediate help</div>
        </div>
      </EnhancedCard>

      <EnhancedCard variant="elevated" className="p-8">
        <h3 className="text-xl font-bold text-bennett-navy mb-6">Service Areas</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Solar Contract Review</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Fraud Investigation</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Damage Recovery</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Contract Cancellation</span>
          </li>
        </ul>
      </EnhancedCard>
    </>
  );

  return (
    <PageTemplate
      heroSection={heroSection}
      sidebarContent={sidebarContent}
      breadcrumbs={breadcrumbs}
      showReadingProgress={true}
    >
      <div className="space-y-24">
        <section>
          <SectionHeader
            title="Our Legal Services"
            description="Comprehensive protection against solar panel fraud"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bennett-navy !m-0">Contract Review & Analysis</h3>
                </div>
                <div>
                  <p className="text-bennett-slate mb-4">
                    We thoroughly review solar contracts to identify deceptive terms, hidden fees, and potential fraud indicators.
                  </p>
                  <ul className="space-y-2 text-sm text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Comprehensive contract analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Identification of deceptive practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Legal strategy development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bennett-navy !m-0">Fraud Investigation</h3>
                </div>
                
                <div>
                  <p className="text-bennett-slate mb-4">
                    Our team investigates solar companies to uncover fraudulent practices and build strong cases for our clients.
                  </p>
                  <ul className="space-y-2 text-sm text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>Company background investigation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>Evidence collection and preservation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>Expert witness consultation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row gap-2">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Scale className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bennett-navy !m-0">Damage Recovery</h3>
                </div>
                <div>
                  <p className="text-bennett-slate mb-4">
                    We fight to recover your financial losses, including actual damages, additional statutory damages, and attorney fees under multiple consumer protection laws.
                  </p>
                  <ul className="space-y-2 text-sm text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Economic damage calculation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>DTPA and other statutory claims</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span>Attorney fee recovery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Gavel className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bennett-navy !m-0">Litigation & Settlement</h3>
                </div>
                <div>
                  <p className="text-bennett-slate mb-4">
                    Whether through negotiation, arbitration, or filing a lawsuit, we pursue the best possible outcome for your case.
                  </p>
                  <ul className="space-y-2 text-sm text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-500" />
                      <span>Settlement negotiation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-500" />
                      <span>Lawsuit filing and trial representation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-500" />
                      <span>Arbitration proceedings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="case-review">
          <SectionHeader
            title="Free Case Review Process"
            description="How we evaluate your solar fraud case"
            size="md"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <EnhancedCard variant="glass" className="p-8 text-center">
              <div className="w-16 h-16 bg-bennett-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-bennett-gold" />
              </div>
              <h3 className="text-lg font-bold text-bennett-navy mb-3">1. Initial Consultation</h3>
              <p className="text-bennett-slate text-sm">
                Contact us for a free consultation to discuss your situation and determine if you have a valid case.
              </p>
            </EnhancedCard>

            <EnhancedCard variant="glass" className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-bennett-navy mb-3">2. Document Review</h3>
              <p className="text-bennett-slate text-sm">
                We analyze your contracts, communications, and other relevant documents to assess your case.
              </p>
            </EnhancedCard>

            <EnhancedCard variant="glass" className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-bennett-navy mb-3">3. Case Strategy</h3>
              <p className="text-bennett-slate text-sm">
                If you have a viable case, we develop a comprehensive legal strategy tailored to your situation.
              </p>
            </EnhancedCard>
          </div>
        </section>

        <section>
          <SectionHeader
            title="Why Choose Bennett Legal"
            description="Experience, dedication, and proven results"
            size="md"
          />
          
          <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy to-slate-800 text-white p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">Our Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>No upfront costs or hidden fees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Specialized expertise in consumer protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Aggressive representation and multiple legal strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Personalized attention to every case</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">Our Experience</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bennett-gold/20 rounded-xl flex items-center justify-center">
                      <Scale className="h-6 w-6 text-bennett-gold" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-gray-300 text-sm">Years Combined Experience</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bennett-gold/20 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-bennett-gold" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">Extensive</div>
                      <div className="text-gray-300 text-sm">Litigation & arbitration experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </EnhancedCard>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Services;
