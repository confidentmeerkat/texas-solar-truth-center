
import React from 'react';
import PageTemplate from '@/components/layout/PageTemplate';
import StandardHero from '@/components/layout/StandardHero';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import SectionHeader from '@/components/ui/section-header';
import { Shield, Eye, FileText, Users, CheckCircle2, AlertTriangle, Clock, Star } from 'lucide-react';

const PreventionGuide = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '#' },
    { label: 'Prevention Guide', href: '/prevention-guide' }
  ];

  const heroStats = [
    {
      value: '90%',
      label: 'Of Scams Can Be Prevented',
      icon: <Shield className="h-6 w-6 text-green-400" />
    },
    {
      value: '72hrs',
      label: 'Cooling-off Period Available',
      icon: <Clock className="h-6 w-6 text-blue-400" />
    }
  ];

  const heroSection = (
    <StandardHero
      title="Prevention Guide: Protect Yourself"
      subtitle="Consumer Protection Education"
      description="Learn practical strategies and proven techniques to protect yourself from solar panel scams and make informed decisions about solar energy for your home."
      primaryCTA={{
        text: "Start Protecting Yourself",
        href: "#prevention-steps"
      }}
      secondaryCTA={{
        text: "Report Suspicious Activity",
        href: "/reporting-seeking-help"
      }}
      trustBadge={{
        text: "Expert Prevention Strategies"
      }}
      stats={heroStats}
      variant="gradient"
    />
  );

  const sidebarContent = (
    <>
      <EnhancedCard variant="glass" className="bg-green-50/80 border-green-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-8 w-8 text-green-600" />
          <h3 className="text-xl font-bold text-green-900">Prevention Tips</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="text-sm">Never sign on the first visit</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="text-sm">Get multiple quotes</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="text-sm">Verify all licensing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="text-sm">Read all contracts carefully</span>
          </div>
        </div>
      </EnhancedCard>

      <EnhancedCard variant="elevated" className="p-8">
        <h3 className="text-xl font-bold text-bennett-navy mb-6">Quick Reference</h3>
        <ul className="space-y-3">
          <li><a href="#prevention-steps" className="text-bennett-slate hover:text-bennett-navy transition-colors">Prevention Steps</a></li>
          <li><a href="#research-tips" className="text-bennett-slate hover:text-bennett-navy transition-colors">Research Tips</a></li>
          <li><a href="#red-flags" className="text-bennett-slate hover:text-bennett-navy transition-colors">Warning Signs</a></li>
          <li><a href="#smart-buying" className="text-bennett-slate hover:text-bennett-navy transition-colors">Smart Buying</a></li>
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
        <section id="prevention-steps">
          <SectionHeader
            title="Essential Prevention Steps"
            description="Follow these steps to protect yourself from solar panel fraud"
            size="md"
          />
          
          <div className="mt-12 space-y-8">
            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Research Before You Buy</h3>
                  <ul className="space-y-2 text-bennett-slate mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Check company licensing with Texas Department of Licensing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Look up Better Business Bureau ratings and reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Ask for local references from recent customers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-blue-500" />
                      <span>Verify insurance and bonding information</span>
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
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Get Everything in Writing</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-bennett-navy mb-2">Required Documentation</h4>
                      <ul className="text-sm text-bennett-slate space-y-1">
                        <li>• Detailed written estimate</li>
                        <li>• Equipment specifications</li>
                        <li>• Installation timeline</li>
                        <li>• Warranty information</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bennett-navy mb-2">Financial Details</h4>
                      <ul className="text-sm text-bennett-slate space-y-1">
                        <li>• Total system cost</li>
                        <li>• Financing terms</li>
                        <li>• Tax credit information</li>
                        <li>• Expected savings projections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Take Your Time</h3>
                  <p className="text-bennett-slate mb-4">
                    Never let salespeople pressure you into signing immediately. Texas law provides cooling-off periods for certain contracts.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="font-semibold text-green-800">Your Right to Cancel</span>
                    </div>
                    <p className="text-sm text-green-700">
                      You have 3 business days to cancel most door-to-door sales contracts in Texas.
                    </p>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="research-tips">
          <SectionHeader
            title="How to Research Solar Companies"
            description="Comprehensive guide to vetting solar installation companies"
            size="md"
          />
          
          <div className="prose prose-xl max-w-none mt-12">
            <EnhancedCard variant="glass" className="p-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-bennett-navy mb-3">Check Credentials</h3>
                  <ul className="text-bennett-slate text-sm space-y-1">
                    <li>• Texas electrical license</li>
                    <li>• NABCEP certification</li>
                    <li>• Business license</li>
                    <li>• Insurance verification</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-bennett-navy mb-3">Read Reviews</h3>
                  <ul className="text-bennett-slate text-sm space-y-1">
                    <li>• Google reviews</li>
                    <li>• BBB ratings</li>
                    <li>• Social media feedback</li>
                    <li>• Industry forums</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-bennett-navy mb-3">Get References</h3>
                  <ul className="text-bennett-slate text-sm space-y-1">
                    <li>• Recent customers</li>
                    <li>• Local installations</li>
                    <li>• Performance data</li>
                    <li>• Service experience</li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="red-flags">
          <SectionHeader
            title="Major Red Flags to Avoid"
            description="Warning signs that should make you walk away immediately"
            size="md"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <EnhancedCard variant="elevated" className="p-8 border-l-4 border-l-red-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Sales Pressure Tactics</h3>
                  <ul className="space-y-2 text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>"This offer expires today"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>"You're our last customer in this area"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-red-500" />
                      <span>"Sign now or lose this deal forever"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>

            <EnhancedCard variant="elevated" className="p-8 border-l-4 border-l-orange-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-3">Questionable Practices</h3>
                  <ul className="space-y-2 text-bennett-slate">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />
                      <span>Requesting large upfront payments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />
                      <span>No written contracts or estimates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 text-orange-500" />
                      <span>Refusing to provide credentials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </EnhancedCard>
          </div>
        </section>

        <section id="smart-buying">
          <SectionHeader
            title="Smart Solar Buying Guide"
            description="Make an informed decision about solar energy for your home"
            size="md"
          />
          
          <EnhancedCard variant="gradient" className="bg-gradient-to-br from-bennett-navy to-slate-800 text-white p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Before You Buy</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Get at least 3 written quotes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Understand your current energy usage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Research available tax incentives</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Calculate realistic payback period</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Questions to Ask</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>What's the total system cost?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>What warranties are included?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>Who handles permits and inspections?</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-bennett-gold" />
                    <span>What happens if I move?</span>
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

export default PreventionGuide;
