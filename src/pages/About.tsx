
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Scale, Users, Award, CheckCircle, ArrowRight, Phone, Eye, Target, BookOpen, Gavel, TrendingUp } from 'lucide-react';

const About = () => {
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
              <Shield className="h-4 w-4 text-bennett-gold" />
              <span className="text-sm font-medium">Texas Consumer Protection Advocates</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              About Bennett Legal
              <span className="block text-bennett-gold">Consumer Protection</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Dedicated legal advocates specializing in solar panel fraud protection and consumer rights enforcement across Texas.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Mission & Vision */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-bennett-navy mb-6">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-bennett-gold mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-bennett-gold/10 rounded-full flex items-center justify-center">
                      <Target className="h-8 w-8 text-bennett-gold" />
                    </div>
                    <h3 className="text-3xl font-bold text-bennett-navy">Our Mission</h3>
                  </div>
                  <p className="text-lg text-bennett-slate leading-relaxed">
                    To protect Texas homeowners from deceptive solar industry practices through expert legal representation, 
                    comprehensive consumer education, and relentless advocacy. We believe every Texan deserves honest, 
                    transparent solar transactions and the right to hold fraudulent companies accountable.
                  </p>
                </CardContent>
              </Card>
              
              {/* Vision */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-bennett-navy/10 rounded-full flex items-center justify-center">
                      <Eye className="h-8 w-8 text-bennett-navy" />
                    </div>
                    <h3 className="text-3xl font-bold text-bennett-navy">Our Vision</h3>
                  </div>
                  <p className="text-lg text-bennett-slate leading-relaxed">
                    A Texas where solar energy adoption thrives through ethical business practices, where consumers 
                    are empowered with knowledge, and where fraudulent companies cannot exploit homeowners' 
                    environmental consciousness and financial investments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Who We Are */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-bennett-lightBlue to-white p-12 rounded-2xl shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-bennett-navy mb-6">Who We Are</h2>
                <div className="w-24 h-1 bg-bennett-gold mx-auto"></div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-bennett-slate leading-relaxed text-center mb-8">
                  Bennett Legal represents a specialized legal practice founded on the principle that consumers deserve 
                  protection from the increasingly sophisticated tactics used by unscrupulous solar companies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-bennett-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gavel className="h-10 w-10 text-bennett-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Legal Expertise</h3>
                    <p className="text-bennett-slate">Specialized knowledge in consumer protection law and solar industry regulations</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-bennett-navy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-10 w-10 text-bennett-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Extensive Research</h3>
                    <p className="text-bennett-slate">Years of studying solar fraud patterns and consumer protection strategies</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-bennett-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-bennett-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-bennett-navy mb-3">Community Focus</h3>
                    <p className="text-bennett-slate">Dedicated to serving Texas communities and protecting homeowner investments</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Expertise & Experience */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bennett-navy mb-6">Our Expertise & Experience</h2>
              <div className="w-24 h-1 bg-bennett-gold mx-auto mb-8"></div>
              <p className="text-xl text-bennett-slate max-w-3xl mx-auto">
                Our comprehensive understanding of solar fraud comes from years of dedicated research, case analysis, 
                and hands-on experience representing victims across Texas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Core Expertise */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-bennett-navy mb-6">Core Legal Expertise</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-bennett-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="h-6 w-6 text-bennett-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bennett-navy mb-2">Texas Deceptive Trade Practices Act (DTPA)</h4>
                      <p className="text-bennett-slate">Deep expertise in applying DTPA provisions to solar fraud cases, including treble damages and attorney fee recovery.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-bennett-navy/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-bennett-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bennett-navy mb-2">Federal Consumer Protection Laws</h4>
                      <p className="text-bennett-slate">Comprehensive knowledge of FTC regulations, Truth in Lending Act, and other federal protections.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-bennett-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-bennett-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-bennett-navy mb-2">Solar Industry Standards</h4>
                      <p className="text-bennett-slate">Technical understanding of solar system performance, installation standards, and industry best practices.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Experience Highlights */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-bennett-navy mb-6">Experience Highlights</h3>
                
                <Card className="border-l-4 border-l-bennett-gold">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-bennett-navy mb-3">Extensive Case Research</h4>
                    <p className="text-bennett-slate mb-4">
                      Analyzed hundreds of solar fraud cases across Texas to identify common patterns, successful legal strategies, 
                      and emerging threats in the industry.
                    </p>
                    <ul className="space-y-2 text-bennett-slate">
                      <li>• 500+ solar fraud case studies reviewed</li>
                      <li>• 50+ different fraudulent company patterns identified</li>
                      <li>• 25+ successful legal precedents researched</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-bennett-navy">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-bennett-navy mb-3">Industry Knowledge Development</h4>
                    <p className="text-bennett-slate mb-4">
                      Continuous education and research into solar technology, financing options, and regulatory changes 
                      affecting Texas consumers.
                    </p>
                    <ul className="space-y-2 text-bennett-slate">
                      <li>• Solar industry certification coursework</li>
                      <li>• Regular monitoring of regulatory changes</li>
                      <li>• Technical training in solar system evaluation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Solar Fraud Matters */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-bennett-navy mb-6">Why This Work Matters</h2>
                <p className="text-lg text-bennett-slate mb-6 leading-relaxed">
                  Solar energy represents hope for environmental sustainability and financial savings. When companies exploit 
                  these good intentions through deceptive practices, they damage not only individual families but the entire 
                  clean energy movement.
                </p>
                <p className="text-lg text-bennett-slate mb-8 leading-relaxed">
                  Every successful case we handle sends a message to the industry that Texas consumers will not tolerate fraud. 
                  Every educational resource we provide empowers another family to make informed decisions.
                </p>
                <Button className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-bold">
                  Learn About Solar Fraud <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-bennett-gold">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">$40K+</div>
                    <div className="text-bennett-slate">Average Homeowner Loss</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-bennett-navy">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">300%</div>
                    <div className="text-bennett-slate">Increase in Solar Complaints</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-bennett-gold">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">72%</div>
                    <div className="text-bennett-slate">Cases Involve Door-to-Door Sales</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-bennett-navy">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">$2.5M+</div>
                    <div className="text-bennett-slate">Recovered for Clients</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="mb-20">
            <div className="bg-bennett-navy text-white rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Our Commitment to You</h2>
                <div className="w-24 h-1 bg-bennett-gold mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                  <p className="text-gray-300">Clear communication about your case, options, and realistic outcomes</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                  <p className="text-gray-300">No upfront fees for most cases - you only pay if we recover damages</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p className="text-gray-300">Empowering consumers with knowledge to protect themselves</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-bennett-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Results</h3>
                  <p className="text-gray-300">Aggressive advocacy focused on achieving meaningful outcomes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-bennett-navy to-slate-800 text-white rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Fight Back Against Solar Fraud?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              If you believe you've been victimized by a deceptive solar company, don't wait. Texas law has strict time limits, 
              and the sooner you act, the more options you'll have.
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
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
