
import React from 'react';
import PageTemplate from '@/components/layout/PageTemplate';
import StandardHero from '@/components/layout/StandardHero';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import SectionHeader from '@/components/ui/section-header';
import ServicesFAQ from '@/components/editorial/ServicesFAQ';
import ProcessOverview from '@/components/editorial/ProcessOverview';
import { Scale, Zap, FileText, Users, Shield, AlertTriangle, CheckCircle2, DollarSign } from 'lucide-react';

const Services = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' }
  ];

  const heroStats = [
    {
      value: '$60K+',
      label: 'Average Case Recovery',
      icon: <DollarSign className="h-6 w-6 text-green-400" />
    },
    {
      value: '95%',
      label: 'Success Rate',
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />
    }
  ];

  const heroSection = (
    <StandardHero
      title="Legal Services"
      subtitle="Consumer Protection Specialists"
      description="Comprehensive legal services to protect Texas consumers from solar panel fraud and deceptive business practices. We fight for your rights and recovery."
      primaryCTA={{
        text: "Get Free Case Review",
        href: "#contact"
      }}
      secondaryCTA={{
        text: "Learn About Solar Fraud",
        href: "/identifying-solar-scams"
      }}
      trustBadge={{
        text: "No Win, No Fee Guarantee"
      }}
      stats={heroStats}
    />
  );

  const sidebarContent = (
    <>
      <EnhancedCard variant="glass" className="p-8">
        <h3 className="text-xl font-bold text-bennett-navy mb-6">Free Consultation</h3>
        <div className="space-y-4">
          <p className="text-bennett-slate">Get a free case evaluation to understand your rights and options.</p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
              <span className="text-sm">No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
              <span className="text-sm">Confidential discussion</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
              <span className="text-sm">Expert legal advice</span>
            </div>
          </div>
        </div>
      </EnhancedCard>

      <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy to-slate-800 text-white p-8">
        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div>
            <div className="font-semibold text-bennett-gold">Phone</div>
            <div>(469) 253-7137</div>
          </div>
          <div>
            <div className="font-semibold text-bennett-gold">Office Hours</div>
            <div>Mon-Fri: 8AM - 6PM<br />Sat: 9AM - 2PM</div>
          </div>
        </div>
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
            description="Comprehensive protection for Texas consumers facing fraud and deceptive practices"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="elevated" className="p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Solar Panel Fraud</h3>
                  <p className="text-bennett-slate mb-4">Specialized representation for homeowners victimized by deceptive solar sales practices, installation fraud, and contract violations.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Door-to-door sales scams</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Installation defects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Financing misrepresentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Consumer Protection</h3>
                  <p className="text-bennett-slate mb-4">Broad consumer protection services under the Texas Deceptive Trade Practices Act and federal consumer laws.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>False advertising claims</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Breach of warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Unfair business practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Contract Disputes</h3>
                  <p className="text-bennett-slate mb-4">Expert handling of contract disputes, breach of contract claims, and contractual fraud cases.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Contract review & analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Breach of contract claims</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Contract cancellation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Scale className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Litigation & Arbitration</h3>
                  <p className="text-bennett-slate mb-4">Experienced trial attorneys ready to take your case to court or arbitration when necessary.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Trial representation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Arbitration proceedings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-bennett-gold" />
                      <span>Settlement negotiations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <ProcessOverview />
        <ServicesFAQ />
      </div>
    </PageTemplate>
  );
};

export default Services;
