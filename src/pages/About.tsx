
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Scale, Users, Award, CheckCircle, ArrowRight, Phone } from 'lucide-react';

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
              Fighting for Texas 
              <span className="block text-bennett-gold">Solar Consumers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Bennett Legal is dedicated to protecting Texas homeowners from deceptive solar companies and ensuring justice for victims of solar panel fraud.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Mission Statement */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bennett-navy mb-6">Our Mission</h2>
              <div className="w-24 h-1 bg-bennett-gold mx-auto mb-8"></div>
            </div>
            
            <div className="bg-gradient-to-r from-bennett-lightBlue to-white p-8 rounded-2xl shadow-lg">
              <p className="text-xl text-bennett-slate leading-relaxed text-center max-w-4xl mx-auto">
                As Texas leads the nation in solar energy adoption, we've witnessed a disturbing rise in predatory practices targeting homeowners. 
                Our mission is to level the playing field by providing expert legal representation to victims of solar fraud while educating 
                consumers about their rights and protections under Texas law.
              </p>
            </div>
          </section>

          {/* Why Solar Fraud Matters */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-bennett-navy mb-6">Why Solar Fraud Protection Matters</h2>
                <p className="text-lg text-bennett-slate mb-6 leading-relaxed">
                  Texas homeowners invest tens of thousands of dollars in solar systems, often representing their largest purchase after their home. 
                  When companies use deceptive practices, the financial and emotional toll can be devastating.
                </p>
                <p className="text-lg text-bennett-slate mb-8 leading-relaxed">
                  We've seen families lose their life savings, face foreclosure due to fraudulent liens, and struggle with damaged roofs while 
                  still paying for non-functioning solar systems. This is why specialized legal expertise in solar fraud is essential.
                </p>
                <Button className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-bold">
                  Learn About Solar Fraud <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-bennett-gold">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">200+</div>
                    <div className="text-bennett-slate">Texas Families Helped</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-bennett-navy">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">$2.5M+</div>
                    <div className="text-bennett-slate">Recovered for Clients</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-bennett-gold">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">45%</div>
                    <div className="text-bennett-slate">Increase in TX Solar Complaints</div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-bennett-navy">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-bennett-navy mb-2">98%</div>
                    <div className="text-bennett-slate">Client Satisfaction Rate</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Expertise */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bennett-navy mb-6">Our Expertise in Solar Consumer Protection</h2>
              <div className="w-24 h-1 bg-bennett-gold mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-bennett-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="h-8 w-8 text-bennett-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-4">Texas Consumer Protection Law</h3>
                  <p className="text-bennett-slate leading-relaxed">
                    Deep expertise in the Texas Deceptive Trade Practices Act and federal consumer protection laws as they apply to solar transactions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-bennett-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-bennett-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-4">Solar Industry Knowledge</h3>
                  <p className="text-bennett-slate leading-relaxed">
                    Technical understanding of solar systems, installation standards, and performance metrics to identify fraud and substandard work.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-bennett-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-bennett-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-bennett-navy mb-4">Client-Focused Approach</h3>
                  <p className="text-bennett-slate leading-relaxed">
                    Compassionate representation that understands the stress and financial strain solar fraud victims face.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-20">
            <div className="bg-bennett-navy text-white rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Our Approach to Solar Fraud Cases</h2>
                <div className="w-24 h-1 bg-bennett-gold mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-bennett-gold rounded-full flex items-center justify-center mx-auto mb-4 text-bennett-navy font-bold text-xl">1</div>
                  <h3 className="text-xl font-semibold mb-3">Investigation</h3>
                  <p className="text-gray-300">Thorough review of contracts, sales practices, and installation quality</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-bennett-gold rounded-full flex items-center justify-center mx-auto mb-4 text-bennett-navy font-bold text-xl">2</div>
                  <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                  <p className="text-gray-300">Building a comprehensive case with evidence of deceptive practices</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-bennett-gold rounded-full flex items-center justify-center mx-auto mb-4 text-bennett-navy font-bold text-xl">3</div>
                  <h3 className="text-xl font-semibold mb-3">Negotiation</h3>
                  <p className="text-gray-300">Aggressive advocacy to reach favorable settlements when possible</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-bennett-gold rounded-full flex items-center justify-center mx-auto mb-4 text-bennett-navy font-bold text-xl">4</div>
                  <h3 className="text-xl font-semibold mb-3">Litigation</h3>
                  <p className="text-gray-300">Court representation when necessary to achieve justice</p>
                </div>
              </div>
            </div>
          </section>

          {/* Commitment */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-bennett-navy mb-6">Our Commitment to Texas Solar Consumers</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-bennett-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-bennett-navy mb-2">No Upfront Fees</h3>
                      <p className="text-bennett-slate">We work on contingency for most solar fraud cases - you only pay if we win.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-bennett-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-bennett-navy mb-2">Clear Communication</h3>
                      <p className="text-bennett-slate">Regular updates and plain-English explanations of your case progress.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-bennett-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-bennett-navy mb-2">Aggressive Advocacy</h3>
                      <p className="text-bennett-slate">We fight tirelessly against companies that take advantage of Texas consumers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-bennett-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-bennett-navy mb-2">Consumer Education</h3>
                      <p className="text-bennett-slate">Empowering Texans with knowledge to avoid solar fraud and understand their rights.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-bennett-lightGold to-bennett-gold/20 p-8 rounded-2xl">
                <Award className="h-16 w-16 text-bennett-gold mb-6" />
                <h3 className="text-2xl font-bold text-bennett-navy mb-4">Recognition & Results</h3>
                <ul className="space-y-3 text-bennett-slate">
                  <li>• Texas State Bar Member in Good Standing</li>
                  <li>• Better Business Bureau A+ Rating</li>
                  <li>• Featured in Texas Consumer Protection Publications</li>
                  <li>• Successfully Represented 200+ Solar Fraud Victims</li>
                  <li>• Recovered Over $2.5 Million for Clients</li>
                </ul>
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
