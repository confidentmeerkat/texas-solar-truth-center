
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Shield, AlertTriangle, Search } from 'lucide-react';

const PreventionGuide = () => {
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
            Prevention Guide: Protect Yourself from Solar Panel Scams
          </h1>
          
          <div className="bg-bennett-lightBlue p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="mr-4 pt-1">
                <Shield className="h-6 w-6 text-bennett-navy" />
              </div>
              <p className="text-bennett-navy">
                This guide provides preventative measures to protect yourself from solar panel fraud in Texas. For information on what to do if you've already been scammed, see our <Link to="/reporting-seeking-help" className="text-bennett-navy underline hover:text-bennett-gold">Reporting Fraud & Seeking Legal Help</Link> guide.
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="lead text-lg">
              The best way to deal with a scam is to avoid it in the first place. This Prevention Guide is all about empowering Texas homeowners to make safe, informed decisions when considering solar panels. By taking some prudent steps and knowing what to watch out for, you can enjoy the benefits of solar energy while dramatically reducing the risk of falling victim to a fraud or bad deal.
            </p>
            
            <section id="researching-companies" className="mt-8">
              <h2 className="text-2xl font-bold text-bennett-navy">Researching Solar Companies: Licenses, Reviews, and Background Checks</h2>
              <p>Before signing any contract, investigate the solar company you're considering. Reputable companies will have proper credentials and positive track records. Here's how to vet a solar installer in Texas:</p>
              
              <Card className="my-6 bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Essential Research Steps:</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <Check className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <strong>Verify Licensing:</strong> In Texas, anyone performing solar panel installations must be a licensed electrical contractor. Ask for their Texas Electrical Contractor License number (TECL format) and verify it on the TDLR online database.
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <strong>Read Reviews and Complaints:</strong> Check the company on the Better Business Bureau website, Google Reviews, Yelp, and SolarReviews. Look for patterns in complaints and how the company responds.
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <strong>Search for News or Legal Actions:</strong> Do a web search for the company name plus words like "scam", "lawsuit", or "Attorney General" to discover if they've been involved in legal issues.
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <strong>Ask for References:</strong> Request contact information for previous customers and actually follow up with them about their experience.
                      </div>
                    </li>
                    <li className="flex">
                      <Check className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <strong>Verify Business Longevity:</strong> Check how long the company has been operating under its current name. Scammers often use fly-by-night companies that appear and disappear quickly.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
            
            <section id="contracts" className="mt-12">
              <h2 className="text-2xl font-bold text-bennett-navy">Decoding Solar Quotes and Contracts: What to Look For (and Avoid)</h2>
              <p>Solar proposals can be lengthy and full of technical and financial details. It's crucial to read the quote and contract thoroughly. Some key points and potential pitfalls include:</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-bennett-navy mb-4">Contract Elements to Examine:</h3>
                  <ul className="space-y-3">
                    <li><strong>Total System Cost:</strong> Make sure you see the full price, not just monthly payments.</li>
                    <li><strong>Payment Structure:</strong> Understand when payments are due and never pay 100% upfront.</li>
                    <li><strong>Financing Terms:</strong> Review interest rates, loan length, and any special conditions.</li>
                    <li><strong>Savings Estimates:</strong> Scrutinize the assumptions behind projected savings.</li>
                    <li><strong>Incentives and Rebates:</strong> Clarify who gets any tax credits or rebates.</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-bennett-navy mb-4">Additional Contract Considerations:</h3>
                  <ul className="space-y-3">
                    <li><strong>Scope of Work:</strong> Ensure equipment details, system size, and any additional work are clearly defined.</li>
                    <li><strong>Timeline:</strong> Get estimated dates for installation and completion in writing.</li>
                    <li><strong>Warranty and Maintenance:</strong> Understand what's covered, for how long, and by whom.</li>
                    <li><strong>Cancellation Rights:</strong> Verify your 3-day right to cancel is properly documented.</li>
                    <li><strong>No Blank Spaces:</strong> Ensure all blanks are filled in before signing anything.</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-bennett-navy mr-4 flex-shrink-0" />
                  <p className="text-bennett-navy">
                    Don't hesitate to ask for time to review a contract or have someone else look it over. A legitimate company will respect your diligence. Never succumb to "sign now, read later" pressure - that's a tactic used by scammers.
                  </p>
                </div>
              </div>
            </section>
            
            <section id="questions" className="mt-12">
              <h2 className="text-2xl font-bold text-bennett-navy">Top 10 Questions to Ask Before Signing a Solar Contract</h2>
              <p>When interviewing solar companies or reviewing a proposal, asking the right questions can reveal a lot about their honesty and competence:</p>
              
              <ol className="mt-6 space-y-6">
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">1. "Are you licensed and insured in Texas?"</strong>
                  <p className="mt-1 text-gray-700">A reputable installer will immediately provide proof of their Texas electrical contractor's license and insurance. This protects you if something goes wrong.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">2. "How long have you been in the solar business, and how many installations have you done in Texas?"</strong>
                  <p className="mt-1 text-gray-700">Experience matters. A company with years of operation and hundreds of installations is more likely to provide quality service and be around for support.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">3. "Can you provide references or examples of installations near me?"</strong>
                  <p className="mt-1 text-gray-700">Seeing real outcomes and talking to actual customers helps verify company claims. Hesitation to provide references is a warning sign.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">4. "What equipment will you install and why did you choose it?"</strong>
                  <p className="mt-1 text-gray-700">They should clearly explain their equipment choices. A trustworthy company will be transparent about component selection, not just provide vague claims.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">5. "Do you handle all permitting, inspections, and interconnection with the utility?"</strong>
                  <p className="mt-1 text-gray-700">The answer should be yes. If they expect you to handle these complex processes yourself, that's unusual and concerning.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">6. "Is there a monitoring system and what happens if my system underperforms?"</strong>
                  <p className="mt-1 text-gray-700">This reveals whether they plan to provide after-sales support. A good company stands by its work and will service issues throughout the warranty period.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">7. "What is the warranty on the system and your installation?"</strong>
                  <p className="mt-1 text-gray-700">Get clarity on panel warranty, inverter warranty, and installation warranty. Know who to call for each type of issue.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">8. "Can I see a copy of the contract and all disclosures now?"</strong>
                  <p className="mt-1 text-gray-700">Don't wait until signing day. A transparent company will have no problem letting you review their agreement in advance.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">9. "Do you subcontract any part of the work, or is it all done by your in-house team?"</strong>
                  <p className="mt-1 text-gray-700">If they use subcontractors, verify how they're vetted and who's responsible if problems arise. A single point of responsibility is best.</p>
                </li>
                <li className="bg-white p-5 rounded-md border">
                  <strong className="text-bennett-navy block">10. "What happens if I decide to cancel or if my financing doesn't go through?"</strong>
                  <p className="mt-1 text-gray-700">This tests transparency. A reputable company will explain your options clearly, including any potential costs.</p>
                </li>
              </ol>
              
              <p className="mt-6">
                Asking these questions signals that you're an informed consumer. Scammers may back off if they realize you're asking detailed questions they can't answer, while good companies will appreciate your thoroughness.
              </p>
            </section>
            
            <section id="sales-tactics" className="mt-12">
              <h2 className="text-2xl font-bold text-bennett-navy">Resisting High-Pressure Sales Tactics</h2>
              <p>Even after doing your homework, you might encounter high-pressure sales tactics. Remember, you control the purchase, not the salesperson. Here are strategies to handle pushy tactics:</p>
              
              <div className="bg-white p-6 rounded-lg border mt-6">
                <h3 className="text-lg font-semibold text-bennett-navy mb-4">Strategies to Handle Pushy Sales:</h3>
                <ul className="space-y-4">
                  <li>
                    <strong>Take Your Time:</strong> No legitimate "special deal" requires an immediate decision. Always take time to think it over, regardless of pressure.
                  </li>
                  <li>
                    <strong>Don't Sign When Emotional:</strong> Don't make decisions when you're excited or alarmed. Wait until you can think rationally.
                  </li>
                  <li>
                    <strong>Ask for Written Offers:</strong> If they claim a special limited-time deal, ask for it in writing. Their response will tell you a lot.
                  </li>
                  <li>
                    <strong>Remember the 3-Day Rule:</strong> You have a 3-day right to cancel door-to-door sales in Texas. Use it if needed.
                  </li>
                  <li>
                    <strong>Bring a Friend:</strong> Having someone else present makes it easier to resist pressure and provides a witness.
                  </li>
                  <li>
                    <strong>Flip the Script:</strong> Turn their pitch into a Q&A session. This puts you back in control.
                  </li>
                  <li>
                    <strong>Be Prepared to Walk Away:</strong> Practice saying "No, thank you. I'll reach out if I'm interested."
                  </li>
                  <li>
                    <strong>Report Aggressive Behavior:</strong> If a salesperson is extremely pushy or misleading, report them to protect others.
                  </li>
                </ul>
              </div>
              
              <div className="bg-bennett-lightBlue p-6 rounded-lg my-6">
                <p className="text-bennett-navy">
                  Remember: No legitimate solar incentive requires an immediate decision. The federal tax credit won't vanish overnight, and a reputable company will give you time to think through your decision.
                </p>
              </div>
            </section>
            
            <section id="financing" className="mt-12">
              <h2 className="text-2xl font-bold text-bennett-navy">Understanding Solar Financing Options</h2>
              <p>Solar can be purchased in different ways, and understanding the options helps you avoid financing traps:</p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-bennett-navy mb-2">Solar Loans</h3>
                  <p className="text-sm text-gray-500 mb-4">You own the system from day one</p>
                  <p className="mb-2"><strong>Pros:</strong> You get the tax credit and all long-term savings.</p>
                  <p className="mb-4"><strong>Cons:</strong> You take on debt and are responsible if the system underperforms.</p>
                  <p><strong>Watch for:</strong> Super-long terms with high interest, and hidden liens or UCC filings.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-bennett-navy mb-2">Solar Lease</h3>
                  <p className="text-sm text-gray-500 mb-4">You rent the panels, typically for 20-25 years</p>
                  <p className="mb-2"><strong>Pros:</strong> Little upfront cost; maintenance is the owner's responsibility.</p>
                  <p className="mb-4"><strong>Cons:</strong> No tax credit for you; can complicate home selling.</p>
                  <p><strong>Watch for:</strong> High annual escalators that outpace utility increases; restrictive buyout clauses.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-bennett-navy mb-2">Power Purchase Agreement (PPA)</h3>
                  <p className="text-sm text-gray-500 mb-4">You pay for the power produced, not the system itself</p>
                  <p className="mb-2"><strong>Pros:</strong> No upfront cost; you only pay for what's produced.</p>
                  <p className="mb-4"><strong>Cons:</strong> You must buy all produced power; complex home selling process.</p>
                  <p><strong>Watch for:</strong> Initial rates and escalation clauses that could make it costlier than utilities.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-bennett-navy mb-2">Cash Purchase</h3>
                  <p className="text-sm text-gray-500 mb-4">You pay upfront and own the system outright</p>
                  <p className="mb-2"><strong>Pros:</strong> No ongoing payments; maximum long-term savings; you get all incentives.</p>
                  <p className="mb-4"><strong>Cons:</strong> High initial investment; maintenance responsibility is yours.</p>
                  <p><strong>Watch for:</strong> Ensure warranties are properly documented since you're responsible long-term.</p>
                </div>
              </div>
              
              <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                <h3 className="text-lg font-semibold text-bennett-navy mb-2">How to protect yourself:</h3>
                <ul className="space-y-2">
                  <li>Identify which financing structure is being offered - loan, lease, or PPA.</li>
                  <li>Ask specific questions about terms, rates, escalations, and ownership.</li>
                  <li>Be skeptical of phrases like "free solar" or claims that "the government pays for it."</li>
                  <li>Compare financing from your bank or credit union to what the solar company offers.</li>
                  <li>Read all financing contracts separately from the solar contract.</li>
                </ul>
              </div>
            </section>
            
            <section id="conclusion" className="mt-12">
              <h2 className="text-2xl font-bold text-bennett-navy">Stay Vigilant, Stay Empowered</h2>
              <p>By following the guidelines in this Prevention Guide, you are stacking the odds in your favor that your solar experience will be positive and scam-free. To recap some of the most important preventative measures:</p>
              
              <ul className="my-6 space-y-2">
                <li>Thoroughly vet the company's background and credentials.</li>
                <li>Carefully read and understand the contract and financing terms before signing.</li>
                <li>Ask plenty of questions – a good company will welcome them.</li>
                <li>Never succumb to high-pressure tactics; take your time making a decision.</li>
                <li>Know the common tricks and steer clear of anyone who employs them.</li>
                <li>Understand your payment plan and its implications on your finances and home.</li>
              </ul>
              
              <p>Knowledge truly is power. Scammers prey on information gaps and consumer unfamiliarity. By educating yourself – which you've taken the time to do by reading this – you've taken away their advantage.</p>
              
              <div className="bg-bennett-lightBlue p-6 rounded-lg my-6">
                <p className="text-bennett-navy">
                  We encourage you to share these tips with neighbors, friends, and family who are considering solar. The more people know what to watch for, the fewer victims there will be. And remember, the Texas Solar Truth Center is here as an ongoing resource if you ever feel uncertain about a solar offer.
                </p>
              </div>
              
              <p>
                Solar energy should be a positive, empowering choice for your home. With the right precautions, you can enjoy clean energy savings and peace of mind. Stay vigilant, stay informed, and enjoy the sunshine – on your terms!
              </p>
            </section>
            
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <Link to="/reporting-seeking-help" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  ← Reporting Fraud & Seeking Legal Help
                </Link>
              </div>
              <div>
                <Link to="/" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  Back to Main Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PreventionGuide;
