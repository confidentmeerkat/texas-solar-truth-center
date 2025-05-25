
import React from 'react';
import PageTemplate from '@/components/layout/PageTemplate';
import StandardHero from '@/components/layout/StandardHero';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import SectionHeader from '@/components/ui/section-header';
import { Scale, Users, Award, TrendingUp, Shield, CheckCircle2 } from 'lucide-react';

const About = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ];

  const heroStats = [
    {
      value: '50+',
      label: 'Years Combined Legal Experience',
      icon: <Award className="h-6 w-6 text-bennett-gold" />
    },
    {
      value: '200+',
      label: 'Clients Successfully Represented',
      icon: <Users className="h-6 w-6 text-blue-400" />
    },
    {
      value: '$2.5M+',
      label: 'Recovered for Fraud Victims',
      icon: <TrendingUp className="h-6 w-6 text-green-400" />
    },
    {
      value: '95%',
      label: 'Client Satisfaction Rate',
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />
    }
  ];

  const heroSection = (
    <StandardHero
      title="About Bennett Legal"
      subtitle="Texas Consumer Protection Attorneys"
      description="For over 50 years, Bennett Legal has been at the forefront of consumer protection in Texas, specializing in solar panel fraud, deceptive business practices, and fighting for justice on behalf of homeowners."
      primaryCTA={{
        text: "Get Free Consultation",
        href: "#contact"
      }}
      secondaryCTA={{
        text: "View Our Cases",
        href: "/services"
      }}
      trustBadge={{
        text: "Texas State Bar Certified"
      }}
      stats={heroStats}
    />
  );

  const sidebarContent = (
    <>
      <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy via-slate-800 to-bennett-navy text-white p-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-bennett-gold" />
            <h3 className="text-xl font-bold">Quick Contact</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-bennett-gold">Phone</div>
              <div>(469) 253-7137</div>
            </div>
            <div>
              <div className="font-semibold text-bennett-gold">Email</div>
              <div>info@bennettlegal.com</div>
            </div>
            <div>
              <div className="font-semibold text-bennett-gold">Address</div>
              <div>12770 Coit Rd Suite 720<br />Dallas, TX 75251</div>
            </div>
          </div>
        </div>
      </EnhancedCard>

      <EnhancedCard variant="glass" className="p-8">
        <h3 className="text-xl font-bold text-bennett-navy mb-6">Practice Areas</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span>Solar Panel Fraud</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span>Consumer Protection</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span>Deceptive Trade Practices</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span>Breach of Contract</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span>Arbitration & Trial</span>
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
            title="Our Story"
            description="Dedicated to protecting Texas consumers from fraud and deceptive practices"
            size="md"
          />
          
          <div className="prose prose-xl max-w-none mt-12">
            <p className="text-xl leading-relaxed text-bennett-slate">
              Bennett Legal was founded with a simple mission: to protect Texas consumers from fraud and deceptive business practices. Over the years, we've seen how unscrupulous companies take advantage of hardworking families, particularly in the rapidly growing solar energy sector.
            </p>
            
            <p>
              Our team brings more than 50 years of combined experience in consumer protection law, with a particular focus on solar panel fraud cases. We understand the complex regulations governing the energy industry and know how to hold companies accountable when they engage in deceptive practices.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader
            title="Why Choose Bennett Legal?"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bennett-gold/20 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-bennett-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Proven Track Record</h3>
                  <p className="text-bennett-slate">We've successfully recovered over $2.5 million for fraud victims across Texas, with an average case recovery of $60,000+.</p>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Client-Focused Approach</h3>
                  <p className="text-bennett-slate">We believe every client deserves personalized attention and clear communication throughout their case.</p>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">No Win, No Fee</h3>
                  <p className="text-bennett-slate">We work on a contingency basis, meaning you don't pay attorney fees unless we win your case.</p>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Texas Expertise</h3>
                  <p className="text-bennett-slate">Deep understanding of Texas consumer protection laws and the unique challenges facing Texan homeowners.</p>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default About;
