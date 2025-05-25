
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Scale, CheckCircle, Phone, Mail, ArrowRight, AlertTriangle, Gavel, FileText, Users, Target, Eye } from 'lucide-react';
import ContactForm from '@/components/editorial/ContactForm';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bennett-navy via-bennett-navy/95 to-slate-900 text-white py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(201,154,46,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Gavel className="h-4 w-4 text-bennett-gold" />
              <span className="text-sm font-medium">Solar Panel Fraud Legal Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Victim of Solar Panel
              <span className="block text-bennett-gold">Fraud? You Have Legal Options.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              Bennett Legal fights for your rights against deceptive solar companies. 
              Expert legal representation to recover your losses and hold fraudulent companies accountable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-bold px-10 py-6 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (469) 253-7137
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bennett-navy font-bold px-10 py-6 text-lg">
                Free Case Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* The Promise vs Reality */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bennett-navy mb-6">The Promise of Solar vs. The Reality of Fraud</h2>
              <div className="w-24 h-1 bg-bennett-gold mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-bennett-slate mb-6 leading-relaxed">
                  Going solar should be an empowering decision, leading to energy independence and environmental responsibility. 
                  Unfortunately, for a growing number of homeowners and businesses, the dream of solar energy turns into a 
                  nightmare due to deceptive sales tactics, faulty installations, and outright fraud.
                </p>
                <p className="text-lg text-bennett-slate mb-8 leading-relaxed">
                  At Bennett Legal, we understand the frustration and financial strain caused by solar panel fraud. 
                  You were promised savings, efficiency, and quality, but instead, you may be facing serious problems.
                </p>
              </div>
              
              <Card className="border-l-4 border-l-red-500 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                    <h3 className="text-2xl font-bold text-bennett-navy">Common Problems You May Face</h3>
                  </div>
                  <ul className="space-y-3 text-bennett-slate">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Underperforming or non-functional solar systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Inflated energy bills despite your solar investment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Unexpectedly high loan payments or unfair lease terms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Damage to your property from improper installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Unresponsive or defunct solar companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Worthless warranties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How We Help */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-bennett-lightBlue to-white p-12 rounded-2xl shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-bennett-navy mb-6">You Don't Have to Face This Alone</h2>
                <div className="w-24 h-1 bg-bennett-gold mx-auto mb-6"></div>
                <p className="text-xl text-bennett-slate max-w-4xl mx-auto">
                  Our experienced consumer protection attorneys are dedicated to holding fraudulent solar companies 
                  accountable and helping victims recover their losses. We have a deep understanding of the solar 
                  industry, common scam tactics, and the complex legal landscape surrounding these cases.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bennett-gold/20 rounded-full flex items-center justify-center mb-4">
                      <Eye className="h-8 w-8 text-bennett-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Case Evaluation & Investigation</h3>
                    <p className="text-bennett-slate">Thorough review of your solar contract, sales materials, system performance data, and communications to assess your claim.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bennett-navy/20 rounded-full flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-bennett-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Identifying Deceptive Practices</h3>
                    <p className="text-bennett-slate">We pinpoint specific instances of misrepresentation, fraud, breach of contract, or negligence by solar companies.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bennett-gold/20 rounded-full flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-bennett-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Demand Letters & Negotiation</h3>
                    <p className="text-bennett-slate">Often achieve favorable settlements by directly engaging with the solar company, its financiers, or insurers.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bennett-navy/20 rounded-full flex items-center justify-center mb-4">
                      <Gavel className="h-8 w-8 text-bennett-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Litigation & Arbitration</h3>
                    <p className="text-bennett-slate">When negotiation isn't enough, we aggressively represent your interests in court or arbitration proceedings.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bennett-gold/20 rounded-full flex items-center justify-center mb-4">
                      <Scale className="h-8 w-8 text-bennett-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Consumer Rights Advocacy</h3>
                    <p className="text-bennett-slate">Help you understand and exercise your rights under federal and state consumer protection laws.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bennett-navy/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-bennett-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Personalized Attention</h3>
                    <p className="text-bennett-slate">Work directly with experienced attorneys who listen to your story and tailor legal strategy to your situation.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Types of Cases */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bennett-navy mb-6">Common Types of Solar Fraud Cases We Handle</h2>
              <div className="w-24 h-1 bg-bennett-gold mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-bennett-gold shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-bennett-navy mb-4">Misrepresentation of Savings & Performance</h3>
                  <p className="text-bennett-slate mb-4">
                    Promises of eliminating your electric bill or achieving unrealistic energy production levels that never materialize.
                  </p>
                  <ul className="text-bennett-slate space-y-2">
                    <li>• False claims about energy savings</li>
                    <li>• Exaggerated system performance projections</li>
                    <li>• Misleading information about tax incentives</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-bennett-navy shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-bennett-navy mb-4">High-Pressure Sales & False Promises</h3>
                  <p className="text-bennett-slate mb-4">
                    Salespeople making verbal guarantees not in contracts or rushing you into signing complex agreements.
                  </p>
                  <ul className="text-bennett-slate space-y-2">
                    <li>• Door-to-door high-pressure tactics</li>
                    <li>• False urgency about government incentives</li>
                    <li>• Verbal promises not in written contracts</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-bennett-gold shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-bennett-navy mb-4">Defective Installation & Quality Issues</h3>
                  <p className="text-bennett-slate mb-4">
                    Shoddy workmanship leading to roof leaks, electrical hazards, or systems that fail prematurely.
                  </p>
                  <ul className="text-bennett-slate space-y-2">
                    <li>• Roof damage from improper installation</li>
                    <li>• Electrical safety hazards</li>
                    <li>• Use of substandard equipment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-bennett-navy shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-bennett-navy mb-4">Complex & Unfair Contracts</h3>
                  <p className="text-bennett-slate mb-4">
                    Hidden fees, unfavorable terms, and predatory clauses buried in lengthy documents.
                  </p>
                  <ul className="text-bennett-slate space-y-2">
                    <li>• Hidden fees and escalating payments</li>
                    <li>• Unfair lease and PPA terms</li>
                    <li>• Predatory lending schemes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why Choose Bennett Legal */}
          <section className="mb-20">
            <div className="bg-bennett-navy text-white rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Bennett Legal?</h2>
                <div className="w-24 h-1 bg-bennett-gold mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Focused Expertise</h3>
                  <p className="text-gray-300">Dedicated focus on solar panel fraud and consumer protection law</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Proven Advocacy</h3>
                  <p className="text-gray-300">Committed to vigorously pursuing the best possible outcome for our clients</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Personalized Attention</h3>
                  <p className="text-gray-300">Every case is unique - we tailor legal strategy to your specific situation</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Commitment to Justice</h3>
                  <p className="text-gray-300">Fraudulent solar companies must be held accountable for the harm they cause</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <ContactForm />

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-bennett-navy to-slate-800 text-white rounded-2xl p-12 mt-12">
            <h2 className="text-4xl font-bold mb-6">Your Path to Resolution Starts Here</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              If you suspect you've been a victim of solar panel fraud, don't wait for the situation to get worse. 
              There are time limits for taking legal action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button size="lg" className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-bold px-10 py-6 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (469) 253-7137
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bennett-navy font-bold px-10 py-6 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Email Consultation
              </Button>
            </div>
            
            <p className="text-gray-300 text-sm">
              During your consultation, we will discuss the details of your situation, explain your legal options, 
              and outline how we can assist you.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. This information 
              is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. 
              Please consult an attorney for advice regarding your individual situation. Attorney Advertising.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
