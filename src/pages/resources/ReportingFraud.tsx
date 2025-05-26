import React from 'react';
import PageTemplate from '@/components/layout/PageTemplate';
import StandardHero from '@/components/layout/StandardHero';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import SectionHeader from '@/components/ui/section-header';
import { Phone, FileText, AlertTriangle, Users, Clock, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

const ReportingFraud = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '#' },
    { label: 'Reporting Fraud', href: '/reporting-seeking-help' }
  ];

  const heroStats = [
    {
      value: '24/7',
      label: 'Emergency Legal Support',
      icon: <Clock className="h-6 w-6 text-blue-400" />
    },
    {
      value: '48hrs',
      label: 'Average Response Time',
      icon: <Phone className="h-6 w-6 text-green-400" />
    }
  ];

  const heroSection = (
    <StandardHero
      title="Reporting Fraud & Seeking Help"
      subtitle="Take Action Against Solar Scams"
      description="Step-by-step guidance on reporting solar panel fraud and getting the legal help you need to protect your rights and recover your losses."
      primaryCTA={{
        text: "Report Fraud Now",
        href: "#report-steps"
      }}
      secondaryCTA={{
        text: "Emergency Legal Help",
        href: "#emergency-contact"
      }}
      trustBadge={{
        text: "Immediate Response Available"
      }}
      stats={heroStats}
      variant="gradient"
    />
  );

  const sidebarContent = (
    <>
      <EnhancedCard variant="glass" className="bg-red-50/80 border-red-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <h3 className="text-xl font-bold text-red-900">Emergency Help</h3>
        </div>
        <p className="text-red-800 mb-4">
          If you're under pressure to sign or have already been victimized, contact us immediately.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-red-600" />
            <span className="font-semibold">(469) 253-7137</span>
          </div>
          <div className="text-sm text-red-700">Available 24/7 for urgent cases</div>
        </div>
      </EnhancedCard>

      <EnhancedCard variant="elevated" className="p-8">
        <h3 className="text-xl font-bold text-bennett-navy mb-6">Reporting Checklist</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Document everything</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Contact authorities</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Seek legal counsel</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-bennett-gold" />
            <span className="text-sm">Preserve evidence</span>
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
        <section id="report-steps">
          <SectionHeader
            title="How to Report Solar Panel Fraud"
            description="Take these immediate steps to protect yourself and help authorities"
            size="md"
          />
          
          <div className="mt-12 space-y-8">
            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Step 1: Document Everything</h3>
                  <ul className="space-y-2 text-bennett-slate mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Save all contracts, emails, and text messages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Take photos of any installation work</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Record dates, times, and names of representatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Step 2: Report to Authorities</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-bennett-navy mb-2">Texas Attorney General</h4>
                      <p className="text-sm text-bennett-slate mb-2">File a complaint online or call their consumer helpline</p>
                      <p className="text-sm font-semibold">1-800-621-0508</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bennett-navy mb-2">Better Business Bureau</h4>
                      <p className="text-sm text-bennett-slate mb-2">Report the company to warn other consumers</p>
                      <p className="text-sm font-semibold">bbb.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Step 3: Seek Legal Help</h3>
                  <p className="text-bennett-slate mb-4">
                    Contact Bennett Legal for a free consultation to understand your options and potential for recovery.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-800">Why choose Bennett Legal?</span>
                    </div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Specialized in consumer protection law</li>
                      <li>• No upfront costs - contingency fees only</li>
                      <li>• 50+ years combined experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="emergency-contact">
          <SectionHeader
            title="Get Immediate Help"
            description="Contact Bennett Legal for urgent legal assistance"
            size="md"
          />
          
          <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy to-slate-800 text-white p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Methods</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bennett-gold/20 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-bennett-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">(469) 253-7137</div>
                      <div className="text-gray-300">Available 24/7 for emergencies</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bennett-gold/20 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-bennett-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">info@bennettlegal.com</div>
                      <div className="text-gray-300">Email for non-urgent matters</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Case evaluation within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Clear explanation of your options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>No-pressure consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </EnhancedCard>
        </section>

        <section>
          <SectionHeader
            title="Share Your Story"
            description="Help protect other consumers by sharing your experience"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="glass" className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-bennett-navy mb-3">Written Testimonial</h3>
                <p className="text-bennett-slate text-sm mb-4">Share your written story to help warn other Texas homeowners about solar scams.</p>
                <button className="bg-bennett-navy text-white px-6 py-2 rounded-lg hover:bg-bennett-navy/90 transition-colors">
                  Submit Story
                </button>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="glass" className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-bennett-navy mb-3">Video Testimony</h3>
                <p className="text-bennett-slate text-sm mb-4">Record a video testimony to create a powerful warning for other consumers.</p>
                <button className="bg-bennett-gold text-bennett-navy px-6 py-2 rounded-lg hover:bg-bennett-gold/90 transition-colors">
                  Record Video
                </button>
              </div>
            </EnhancedCard>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default ReportingFraud;
