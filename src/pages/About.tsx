
import React from 'react';
import PageTemplate from '@/components/layout/PageTemplate';
import StandardHero from '@/components/layout/StandardHero';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import SectionHeader from '@/components/ui/section-header';
import { Scale, Users, Award, CheckCircle2, Phone, Mail, Clock, Shield } from 'lucide-react';

const About = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ];

  const heroStats = [
    {
      value: '35+',
      label: 'Years Combined Experience',
      icon: <Award className="h-6 w-6 text-bennett-gold" />
    },
    {
      value: 'Proven',
      label: 'Track Record',
      icon: <Users className="h-6 w-6 text-green-400" />
    }
  ];

  const heroSection = (
    <StandardHero
      title="About Bennett Legal"
      subtitle="Experienced Consumer Protection Attorneys"
      description="With over 35 years of combined experience, Bennett Legal is dedicated to protecting Texas consumers from solar panel fraud and deceptive business practices through comprehensive legal advocacy."
      primaryCTA={{
        text: "Free Consultation",
        href: "#contact"
      }}
      secondaryCTA={{
        text: "Our Services",
        href: "/services"
      }}
      trustBadge={{
        text: "Texas State Bar Certified"
      }}
      stats={heroStats}
      variant="gradient"
    />
  );

  const sidebarContent = (
    <>
      <EnhancedCard variant="glass" className="bg-blue-50/80 border-blue-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Scale className="h-8 w-8 text-blue-600" />
          <h3 className="text-xl font-bold text-blue-900">Legal Expertise</h3>
        </div>
        <p className="text-blue-800 mb-4">
          Experienced in consumer protection law, fraud cases, arbitration, trials, and Texas regulations.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-blue-600" />
            <span className="font-semibold">(214) 473-5897</span>
          </div>
          <div className="text-sm text-blue-700">Schedule your consultation</div>
        </div>
      </EnhancedCard>

      <EnhancedCard variant="elevated" className="p-8">
        <h3 className="text-xl font-bold text-bennett-navy mb-6">Practice Areas</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Solar Panel Fraud</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Consumer Protection</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Deceptive Trade Practices</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Contract Disputes</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Litigation & Arbitration</span>
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
            title="Our Mission"
            description="Protecting Texas families from solar panel fraud and deceptive business practices"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bennett-gold/20 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-bennett-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Consumer Protection</h3>
                  <p className="text-bennett-slate">
                    We fight for homeowners who have been victimized by solar panel scams, helping them understand their legal options and pursue various claims for recovery under multiple consumer protection laws.
                  </p>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Legal Excellence</h3>
                  <p className="text-bennett-slate">
                    Our team combines decades of experience in consumer law, litigation, arbitration, and trial advocacy with a deep understanding of emerging industry practices and their potential for consumer harm.
                  </p>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section>
          <SectionHeader
            title="Our Team"
            description="Experienced attorneys dedicated to consumer protection and litigation"
            size="md"
          />
          
          <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy to-slate-800 text-white p-12 mt-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-bennett-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-12 w-12 text-bennett-gold" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Legal Expertise</h3>
                <p className="text-gray-300">Over 35 years of combined experience in consumer protection law, fraud cases, arbitration, and trial advocacy</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-bennett-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-bennett-gold" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Client Focus</h3>
                <p className="text-gray-300">Dedicated to achieving the best possible outcomes through comprehensive legal advocacy and multiple claim strategies</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-bennett-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-bennett-gold" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-gray-300">Extensive experience with litigation, arbitration, and trial advocacy in consumer protection matters</p>
              </div>
            </div>
          </EnhancedCard>
        </section>

        <section id="contact">
          <SectionHeader
            title="Contact Bennett Legal"
            description="Get the legal help you need to fight solar panel fraud"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="glass" className="p-8">
              <h3 className="text-xl font-bold text-bennett-navy mb-6">Office Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-bennett-gold" />
                  <span className="font-semibold">(214) 473-5897</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-bennett-gold" />
                  <span>cbennett@bennettlegal.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="h-5 w-5 text-bennett-gold mt-1" />
                  <div>
                    <div>1409 S. Lamar Street Suite 24</div>
                    <div>Dallas, TX 75215</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-bennett-gold" />
                  <span>Available for urgent consumer protection matters</span>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <h3 className="text-xl font-bold text-bennett-navy mb-6">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>No upfront costs - contingency fees only</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Extensive litigation and arbitration experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Multiple legal claim strategies</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Personalized attention to every case</span>
                </li>
              </ul>
            </EnhancedCard>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default About;
