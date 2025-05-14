import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/editorial/ContactForm';
import CallToAction from '@/components/editorial/CallToAction';

const IdentifySolarScams = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/" className="text-bennett-navy hover:text-bennett-gold">
              ← Back to Main Guide
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-bennett-navy mb-4">
            How to Identify Solar Panel Scams in Texas
          </h1>
          
          <div className="bg-bennett-lightBlue p-6 rounded-lg mb-8">
            <p className="text-bennett-navy">
              This guide helps you recognize the warning signs of solar panel fraud in Texas. For information on your legal protections, see our <Link to="/legal-rights-protections" className="text-bennett-navy underline hover:text-bennett-gold">Legal Rights & Protections</Link> guide.
            </p>
          </div>
          
          <div className="prose max-w-none">
            <p className="lead text-lg">
              Solar energy offers tremendous benefits, but the industry's rapid growth has attracted unscrupulous operators looking to take advantage of Texas homeowners. Learning to spot the warning signs of solar scams can save you from financial loss and heartache.
            </p>
            
            <section id="common-scams" className="my-8">
              <h2 className="text-2xl font-bold text-bennett-navy">Common Solar Panel Scams in Texas</h2>
              <p>
                Solar scams come in many forms, but they typically share common elements designed to separate you from your money while delivering less than promised. Here are the most prevalent scams we're seeing across Texas:
              </p>
              
              <div className="my-6 space-y-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">The "Free Solar" Bait and Switch</h3>
                  <p>
                    Salespeople claim you'll get "free solar panels" through a government program, but in reality, you're signing up for a long-term lease or loan with unfavorable terms. There are legitimate incentives for solar, but no program provides completely free systems.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">Inflated Energy Savings Promises</h3>
                  <p>
                    Scammers present unrealistic projections about how much you'll save on electricity, often claiming your system will eliminate your bill entirely. They may use manipulated data or ignore factors like shading, roof orientation, or local weather patterns.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">Fake Utility Partnerships</h3>
                  <p>
                    Some fraudsters claim to be "working with" or "partnered with" your local utility company. They may wear clothing with similar colors or logos to create confusion. In reality, most utilities don't directly sell or install residential solar systems.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">Disappearing Tax Credit Scams</h3>
                  <p>
                    Creating false urgency by claiming tax incentives are about to expire when they're not. While the federal solar tax credit is scheduled to step down over time, scammers often misrepresent the timeline to pressure quick decisions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">Phantom Incentives</h3>
                  <p>
                    Promising special rebates or incentives that don't actually exist. Texas has fewer state-level solar incentives than some other states, but scammers may claim otherwise to make their offer seem more attractive.
                  </p>
                </div>
              </div>
            </section>
            
            <section id="red-flags" className="my-8">
              <h2 className="text-2xl font-bold text-bennett-navy">10 Red Flags That Should Set Off Alarm Bells</h2>
              <p>
                When considering solar, watch for these warning signs that suggest you might be dealing with a fraudulent company:
              </p>
              
              <ol className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                  <div>
                    <strong>High-pressure sales tactics</strong> - Pushing for same-day decisions or claiming "today only" special pricing.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                  <div>
                    <strong>Reluctance to provide credentials</strong> - Hesitation when asked for licensing information, insurance details, or contractor registration.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                  <div>
                    <strong>Vague or confusing contracts</strong> - Documents with unclear terms, blank spaces to be filled in later, or missing total costs.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                  <div>
                    <strong>Demands for large upfront payments</strong> - Requesting full payment before installation begins or demanding cash payments.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</span>
                  <div>
                    <strong>No physical address</strong> - Companies that only provide a P.O. box or have no verifiable business location in Texas.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">6</span>
                  <div>
                    <strong>Unsolicited contact</strong> - Cold calls or door-to-door salespeople who specifically target seniors or non-English speakers.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">7</span>
                  <div>
                    <strong>No engineering assessment</strong> - Offering quotes without properly evaluating your roof's condition, orientation, or shading.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">8</span>
                  <div>
                    <strong>Too-good-to-be-true pricing</strong> - Quotes significantly lower than competitors without clear explanation.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">9</span>
                  <div>
                    <strong>Poor online presence</strong> - No website, very new website, or numerous negative reviews and complaints.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">10</span>
                  <div>
                    <strong>Unwillingness to provide references</strong> - Reluctance to connect you with previous customers in your area.
                  </div>
                </li>
              </ol>
            </section>
            
            <section id="case-studies" className="my-8">
              <h2 className="text-2xl font-bold text-bennett-navy">Real-Life Examples: Texas Solar Scam Cases</h2>
              <p>
                These anonymized cases from our legal practice illustrate how solar scams have affected real Texans:
              </p>
              
              <div className="my-6 space-y-6">
                <div className="bg-bennett-lightGold p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">Case Study: The Vanishing Installer</h3>
                  <p className="mb-4">
                    A Houston family paid a $10,000 deposit to a solar company that promised installation within 30 days. After multiple delays and excuses, the company stopped responding to calls. Investigation revealed the company had closed its Texas office and moved operations to another state, leaving dozens of customers with paid deposits and no solar panels.
                  </p>
                  <p className="text-sm italic">
                    <strong>Outcome:</strong> Through legal action, we were able to help the family recover most of their deposit by filing a claim against the company's contractor bond.
                  </p>
                </div>
                
                <div className="bg-bennett-lightGold p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">Case Study: The Hidden Loan</h3>
                  <p className="mb-4">
                    An elderly couple in San Antonio thought they were signing up for a government program that would pay for their solar installation. Instead, they were unknowingly enrolled in a 20-year loan with a 7.99% interest rate. The salesperson had them sign digital documents without explaining the terms, telling them they were just "approval forms."
                  </p>
                  <p className="text-sm italic">
                    <strong>Outcome:</strong> We helped the couple file a DTPA claim based on deceptive trade practices, resulting in the contract being voided and a full refund of their payments.
                  </p>
                </div>
                
                <div className="bg-bennett-lightGold p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-bennett-navy mb-2">Case Study: The Oversold System</h3>
                  <p className="mb-4">
                    A Dallas homeowner was sold a solar system that was significantly larger than needed for his home's energy consumption. The company used manipulated usage data to justify the oversized system, resulting in the homeowner paying $15,000 more than necessary. The system produced excess energy that was sold back to the grid at a fraction of the cost to produce it.
                  </p>
                  <p className="text-sm italic">
                    <strong>Outcome:</strong> Through negotiation and the threat of legal action, we secured a partial refund and system modification to better match the home's actual needs.
                  </p>
                </div>
              </div>
            </section>
            
            <section id="verification" className="my-8">
              <h2 className="text-2xl font-bold text-bennett-navy">How to Verify a Solar Company's Legitimacy</h2>
              <p>
                Before signing any contract, take these steps to verify you're working with a legitimate solar provider:
              </p>
              
              <div className="bg-white p-6 rounded-lg border my-6">
                <h3 className="text-lg font-semibold text-bennett-navy mb-4">Verification Checklist:</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Check licensing:</strong> In Texas, solar installers should have an electrical contractor license. Verify through the Texas Department of Licensing and Regulation (TDLR).
                  </li>
                  <li>
                    <strong>Research the company:</strong> Look for established history, physical location, and membership in industry associations like the Solar Energy Industries Association (SEIA).
                  </li>
                  <li>
                    <strong>Read reviews:</strong> Check Better Business Bureau ratings, Google reviews, and solar-specific review sites like SolarReviews or EnergySage.
                  </li>
                  <li>
                    <strong>Ask for references:</strong> Request contact information for recent customers in your area and actually call them.
                  </li>
                  <li>
                    <strong>Verify insurance:</strong> Ensure the company carries general liability insurance and workers' compensation coverage.
                  </li>
                  <li>
                    <strong>Get multiple quotes:</strong> Compare at least three proposals to understand pricing and system recommendations.
                  </li>
                  <li>
                    <strong>Research equipment:</strong> Verify that proposed panels and inverters are from reputable manufacturers with solid warranties.
                  </li>
                </ul>
              </div>
              
              <p>
                Remember that legitimate solar companies will welcome your due diligence and provide transparent information. If a company seems annoyed by your questions or reluctant to provide verification, consider that a warning sign.
              </p>
            </section>
            
            <section id="next-steps" className="my-8">
              <h2 className="text-2xl font-bold text-bennett-navy">What To Do If You Suspect a Scam</h2>
              <p>
                If you believe you're dealing with a solar scammer, take these immediate steps:
              </p>
              
              <ol className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
                  <div>
                    <strong>End contact with the company</strong> - Don't sign anything or make any payments.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
                  <div>
                    <strong>Document everything</strong> - Save all communications, brochures, and take notes about verbal claims.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
                  <div>
                    <strong>Report the company</strong> - File complaints with the Texas Attorney General's Consumer Protection Division, the Better Business Bureau, and the Federal Trade Commission.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
                  <div>
                    <strong>Alert your community</strong> - Warn neighbors and post on community forums to prevent others from falling victim.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bennett-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</span>
                  <div>
                    <strong>Consult a consumer protection attorney</strong> - If you've already signed contracts or paid money, seek legal advice immediately.
                  </div>
                </li>
              </ol>
              
              <p className="mt-6">
                For more detailed information on reporting fraud and seeking legal help, see our <Link to="/reporting-seeking-help" className="text-bennett-navy underline hover:text-bennett-gold">Reporting Fraud & Seeking Legal Help</Link> guide.
              </p>
            </section>
            
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <Link to="/" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  ← Back to Main Guide
                </Link>
              </div>
              <div>
                <Link to="/legal-rights-protections" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  Next: Your Legal Rights & Protections →
                </Link>
              </div>
            </div>
            
            <ContactForm />
            
            <CallToAction />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IdentifySolarScams;
