import React from 'react';
import PageTemplate from '@/components/layout/PageTemplate';
import StandardHero from '@/components/layout/StandardHero';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import SectionHeader from '@/components/ui/section-header';
import RedFlagsChecklist from '@/components/editorial/RedFlagsChecklist';
import { AlertTriangle, Shield, Eye, Phone, FileText, CheckCircle2 } from 'lucide-react';

const IdentifySolarScams = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '#' },
    { label: 'Identifying Solar Scams', href: '/identifying-solar-scams' }
  ];

  const heroSection = (
    <StandardHero
      title="Identifying Solar Panel Scams"
      subtitle="Consumer Protection Guide"
      description="Learn how to recognize and protect yourself from solar panel fraud and deceptive sales practices targeting Texas homeowners."
      primaryCTA={{
        text: "Report Solar Fraud",
        href: "#contact"
      }}
      secondaryCTA={{
        text: "Free Case Review",
        href: "/services"
      }}
      trustBadge={{
        text: "Expert Consumer Protection Guidance"
      }}
      variant="gradient"
    />
  );

  const sidebarContent = (
    <>
      <EnhancedCard variant="glass" className="bg-red-50/80 border-red-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <h3 className="text-xl font-bold text-red-900">Immediate Help</h3>
        </div>
        <p className="text-red-800 mb-4">
          If you believe you're a victim of solar fraud, don't wait. Contact us immediately for a free consultation.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-red-600" />
            <span className="font-semibold">(214) 473-5897</span>
          </div>
          <div className="text-sm text-red-700">Available 24/7 for emergencies</div>
        </div>
      </EnhancedCard>

      <EnhancedCard variant="elevated" className="p-8">
        <h3 className="text-xl font-bold text-bennett-navy mb-6">Quick Reference</h3>
        <ul className="space-y-3">
          <li><a href="#warning-signs" className="text-bennett-slate hover:text-bennett-navy transition-colors">Warning Signs</a></li>
          <li><a href="#common-tactics" className="text-bennett-slate hover:text-bennett-navy transition-colors">Common Tactics</a></li>
          <li><a href="#protection-tips" className="text-bennett-slate hover:text-bennett-navy transition-colors">Protection Tips</a></li>
          <li><a href="#next-steps" className="text-bennett-slate hover:text-bennett-navy transition-colors">What to Do Next</a></li>
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
        <section id="warning-signs">
          <SectionHeader
            title="Warning Signs of Solar Scams"
            description="Recognize these red flags to protect yourself from fraudulent solar companies"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">High-Pressure Sales Tactics</h3>
                  <ul className="space-y-2 text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>"Sign today or lose this deal"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>Unsolicited door-to-door visits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>Refusing to leave detailed information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Misleading Claims</h3>
                  <ul className="space-y-2 text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />
                      <span>"Free" solar panels (they're never free)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />
                      <span>Guaranteed energy savings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />
                      <span>Government rebate misrepresentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="common-tactics">
          <RedFlagsChecklist />
        </section>

        <section id="protection-tips">
          <SectionHeader
            title="How to Protect Yourself"
            description="Essential steps to avoid becoming a victim of solar panel fraud"
            size="md"
          />
          
          <div className="prose prose-xl max-w-none mt-12">
            <EnhancedCard variant="glass" className="p-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-bennett-navy mb-3">Research First</h3>
                  <p className="text-bennett-slate text-sm">Always research companies thoroughly before signing any contracts. Check BBB ratings and online reviews.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-bennett-navy mb-3">Read Everything</h3>
                  <p className="text-bennett-slate text-sm">Never sign contracts without reading every detail. Take time to understand all terms and conditions.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-bennett-navy mb-3">Get Legal Help</h3>
                  <p className="text-bennett-slate text-sm">Consult with an attorney if something seems suspicious or if you've already been victimized.</p>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="next-steps">
          <SectionHeader
            title="What to Do If You've Been Scammed"
            description="Immediate steps to take if you believe you're a victim of solar panel fraud"
            size="md"
          />
          
          <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy to-slate-800 text-white p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Immediate Actions</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-bennett-gold rounded-full flex items-center justify-center text-bennett-navy font-bold text-sm">1</span>
                    <span>Document everything - contracts, communications, receipts</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-bennett-gold rounded-full flex items-center justify-center text-bennett-navy font-bold text-sm">2</span>
                    <span>Stop all payments if possible</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 bg-bennett-gold rounded-full flex items-center justify-center text-bennett-navy font-bold text-sm">3</span>
                    <span>Contact Bennett Legal for immediate consultation</span>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Legal Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Contract cancellation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Monetary recovery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Punitive damages</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Attorney fees recovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </EnhancedCard>
        </section>
      </div>
    </PageTemplate>
  );
};

export default IdentifySolarScams;
