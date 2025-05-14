
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink, FileText, Shield, Info, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/editorial/ContactForm';
import ShareYourStoryCTA from '@/components/editorial/ShareYourStoryCTA';

const ReportingFraud = () => {
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
            Reporting Fraud & Seeking Legal Help
          </h1>
          
          <div className="bg-bennett-lightBlue p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="mr-4 pt-1">
                <Info className="h-6 w-6 text-bennett-navy" />
              </div>
              <p className="text-bennett-navy">
                This guide explains how to report solar fraud in Texas and steps to take if you believe you've been scammed. For information on your legal protections, see our <Link to="/legal-rights-protections" className="text-bennett-navy underline hover:text-bennett-gold">Legal Rights & Protections</Link> guide.
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="lead text-lg">
              Discovering that you've been scammed by a solar panel company can be a shock – but you don't have to navigate the aftermath alone. This guide walks you through the steps to take if you've been a victim of solar fraud in Texas, from reporting to seeking legal help.
            </p>
            
            <p>
              Taking action not only helps you potentially recover your losses but also aids authorities in shutting down scammers and protecting others. We'll outline the entire process from documentation to resolution, and highlight ways you can share your story to empower your community.
            </p>

            <section id="evidence" className="my-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Step 1: Gather Evidence and Document Everything</h2>
              </div>
              
              <p>
                Before you start reporting or taking legal action, collect and organize evidence of the fraud. This will strengthen your case whether you're dealing with law enforcement, regulatory agencies, or attorneys.
              </p>
              
              <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">Key items to gather:</p>
                <ul className="list-disc pl-6 mb-0">
                  <li>
                    <strong>Contracts and Documents:</strong> Locate your signed contract, any loan/lease agreements, receipts, warranty papers, and the original promotional materials or proposals you were given.
                  </li>
                  <li>
                    <strong>Communications:</strong> Save emails, text messages, voicemails, and letters from the solar company or salesperson. If conversations happened by phone or in person, write down detailed notes of what was said (dates, times, who said what).
                  </li>
                  <li>
                    <strong>Photos and Records:</strong> Take photos of your installation (especially if there are visible problems like incomplete work or damage). If your system isn't performing, keep utility bills to show before-and-after usage or savings versus what was promised.
                  </li>
                  <li>
                    <strong>Witnesses:</strong> Note anyone else who was present during sales or installation (neighbors, family) who can later provide a statement if needed.
                  </li>
                  <li>
                    <strong>Timeline of Events:</strong> Write out a clear timeline – when were you first contacted, when did installation happen, when did you notice issues, who did you speak to when trying to resolve it, etc. This helps investigators or lawyers see the full story.
                  </li>
                </ul>
              </div>
              
              <p>
                Having this evidence ready will make the next steps more effective. You'll be able to provide specifics in your complaints and any legal filings, rather than just general accusations. Now, with your documentation in hand, let's move on to reporting the fraud.
              </p>
            </section>

            <section id="reporting" className="my-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Step 2: Reporting Solar Panel Fraud in Texas</h2>
              </div>
              
              <p>
                Reporting the scam accomplishes two things: it alerts authorities who can take action against the company, and it creates an official record of your complaint which can support your case. Here are the main places to report:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Texas Office of the Attorney General</CardTitle>
                    <CardDescription>Consumer Protection Division</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The Texas AG's office handles consumer complaints statewide. You can file a complaint online through their website or by mail. The AG's office tracks patterns of fraud and can sue companies on behalf of the state for violating consumer laws.
                    </p>
                    <a 
                      href="https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bennett-navy hover:text-bennett-gold flex items-center text-sm mt-2"
                    >
                      File a complaint <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Texas Department of Licensing and Regulation</CardTitle>
                    <CardDescription>For electrical and contractor issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      If your issue involves poor workmanship, code violations, or unlicensed activity, report it to TDLR. They regulate electricians and contractors and can sanction or fine companies for violations.
                    </p>
                    <a 
                      href="https://www.tdlr.texas.gov/complaints/ComplaintForm.aspx"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bennett-navy hover:text-bennett-gold flex items-center text-sm mt-2"
                    >
                      File a complaint <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Federal Trade Commission</CardTitle>
                    <CardDescription>ReportFraud.ftc.gov</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      While the FTC won't pursue individual cases, they aggregate data to identify fraud trends and can take nationwide action against companies that scam consumers, especially if operating across state lines.
                    </p>
                    <a 
                      href="https://reportfraud.ftc.gov/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bennett-navy hover:text-bennett-gold flex items-center text-sm mt-2"
                    >
                      Report fraud <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Better Business Bureau</CardTitle>
                    <CardDescription>Public record of complaints</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      File a complaint with the BBB for the region where the company operates. The BBB will forward your complaint to the business and demand a response, creating a public record of your issue.
                    </p>
                    <a 
                      href="https://www.bbb.org/file-a-complaint"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bennett-navy hover:text-bennett-gold flex items-center text-sm mt-2"
                    >
                      File a complaint <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-bennett-lightBlue p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">Additional reporting options:</p>
                <ul className="list-disc pl-6 mb-0">
                  <li>
                    <strong>Local Law Enforcement:</strong> For clear cases of criminal fraud, forgery, or theft, file a report with local police or sheriff's department.
                  </li>
                  <li>
                    <strong>Utility Companies:</strong> If the company claimed affiliation with your electric utility, report this to the utility directly.
                  </li>
                  <li>
                    <strong>State Representatives:</strong> Consider notifying your state legislators, especially if they're working on consumer protection legislation.
                  </li>
                </ul>
              </div>
              
              <p>
                When reporting, be concise but detailed. Stick to factual descriptions: what was promised versus what happened, key dates, amounts of money involved, and any laws you believe were broken. Attach copies of evidence if the platform allows.
              </p>
              
              <p>
                Don't be discouraged if these complaints don't yield an immediate solution. The goal is to create a paper trail and put pressure on the company from multiple angles. Often, just knowing that you've complained to authorities will make a fraudulent company take you more seriously when it comes to resolving the issue.
              </p>
            </section>

            <section id="legal-help" className="my-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Step 3: Finding the Right Solar Fraud Lawyer in Texas</h2>
              </div>
              
              <p>
                While reporting to agencies is important, getting your own legal advocate is often the key to recovering your money or holding the company accountable. A skilled attorney will know how to navigate the system, negotiate with the solar company or lender, and if needed, file a lawsuit or arbitration on your behalf.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Look for Experience and Expertise</h3>
              <p>
                Not all lawyers are familiar with solar panel fraud issues. You'll want an attorney who has handled consumer protection cases or construction fraud cases in Texas. Keywords to search for include "solar panel fraud lawyer Texas" or "consumer fraud attorney [Your City]". You might find lawyers who specifically advertise expertise in solar scams or home improvement fraud.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Questions to Ask a Prospective Lawyer</h3>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Experience:</strong> "Have you handled cases involving solar panel companies or similar home improvement scams?"
                </li>
                <li>
                  <strong>Approach:</strong> "What is your approach to these cases?" A good attorney should mention steps like sending a demand letter, possibly trying to mediate, and readiness to litigate if needed.
                </li>
                <li>
                  <strong>Consultation:</strong> "Do you offer a free consultation or case review?" Most consumer lawyers will review your case basics at no charge to see if it's viable.
                </li>
                <li>
                  <strong>Fees:</strong> "How do you charge?" Some may take the case on contingency (they get paid a percentage of any recovery), especially if your damages are substantial.
                </li>
                <li>
                  <strong>Expectations:</strong> "What outcome can I expect?" While no attorney can guarantee results, an experienced one can give you a range of possibilities.
                </li>
              </ul>
              
              <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">What to expect when working with a lawyer:</p>
                <ol className="list-decimal pl-6 mb-0">
                  <li>
                    <strong>Demand Letter:</strong> A formal letter to the solar company outlining your grievances, the laws violated, and what you demand.
                  </li>
                  <li>
                    <strong>Negotiation:</strong> The company might respond with an offer or denial, potentially leading to a settlement.
                  </li>
                  <li>
                    <strong>Legal Action:</strong> If negotiation fails, your lawyer will file a lawsuit in court or a claim in arbitration.
                  </li>
                  <li>
                    <strong>Guidance:</strong> Throughout the process, they'll advise you on decisions like whether to accept a settlement or keep fighting.
                  </li>
                </ol>
              </div>
              
              <p>
                Having the right legal help can turn a very stressful situation into a manageable one. It also sends a message to the fraudulent company that you mean business. Many solar scammers count on victims feeling helpless; when an attorney enters the picture, the dynamic shifts in your favor.
              </p>
            </section>

            <section id="legal-process" className="my-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Step 4: The Legal Process – From Complaint to Resolution</h2>
              </div>
              
              <p>
                If you proceed with legal action, it's helpful to understand the roadmap of a solar fraud case in Texas. Every case can vary, but here's a general step-by-step of how things often unfold:
              </p>
              
              <ol className="list-decimal pl-6">
                <li>
                  <strong>Pre-suit Demand:</strong> Your attorney sends a demand letter (required 60 days before a DTPA lawsuit). This might lead to a pre-suit settlement if the company wants to avoid litigation.
                </li>
                <li>
                  <strong>Filing the Lawsuit or Arbitration Claim:</strong> If there's no satisfactory response to the demand, the lawyer files a petition in state court or a claim with an arbitration forum.
                </li>
                <li>
                  <strong>Service and Response:</strong> The company (defendant) is formally served with the lawsuit and must respond, usually with an answer denying wrongdoing.
                </li>
                <li>
                  <strong>Discovery:</strong> Both sides exchange information. You may get to request the company's internal documents, answer written questions, or give a deposition.
                </li>
                <li>
                  <strong>Mediation:</strong> Texas courts often encourage mediation before trial. In arbitration, a similar settlement discussion can occur.
                </li>
                <li>
                  <strong>Trial or Arbitration Hearing:</strong> If no settlement, the case goes to trial (in court) or a final hearing (in arbitration).
                </li>
                <li>
                  <strong>Outcome:</strong> If you win, the court or arbitrator will decide the damages (money) you are awarded and any other relief (like canceling the contract).
                </li>
                <li>
                  <strong>Collection/Enforcement:</strong> The final step is making sure the company pays up or follows the order.
                </li>
              </ol>
              
              <p>
                Throughout this process, patience is necessary. Legal cases can take many months or even a year or more, especially if they go to trial. The solar company might try delay tactics. This is why having an attorney is invaluable – they handle the headaches, keep the case moving, and argue on your behalf.
              </p>
              
              <p>
                The good news is many cases resolve before trial. The combination of your strong evidence, the potential for hefty damages under Texas law, and pressure from authorities often motivate a scam company to settle and avoid further exposure.
              </p>
            </section>

            <ContactForm />

            <section id="sharing-story" className="my-8">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Sharing Your Story and Building Awareness</h2>
              </div>
              
              <p>
                Another powerful way to fight back is by sharing your experience. Solar scam artists rely on operating in the shadows – they don't want their misdeeds public. By coming forward with your story, you can help warn fellow Texans and add momentum to consumer protection efforts.
              </p>
              
              <div className="bg-bennett-lightBlue p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">Ways to share your experience:</p>
                <ul className="list-disc pl-6 mb-0">
                  <li>
                    <strong>Submit a Testimonial to Us:</strong> The Texas Solar Truth Center collects victim testimonials (anonymously if preferred) to help others know they're not alone.
                  </li>
                  <li>
                    <strong>Media and Social Media:</strong> Local news stations in Texas are increasingly interested in solar scam stories. Community forums like NextDoor can also spread awareness.
                  </li>
                  <li>
                    <strong>Join Advocacy Efforts:</strong> Organizations like AARP (if you're a senior) or consumer advocacy groups sometimes host fraud prevention events.
                  </li>
                  <li>
                    <strong>Review Websites:</strong> Leave honest reviews on platforms like Google, Yelp, BBB, or SolarReviews about the company that wronged you.
                  </li>
                  <li>
                    <strong>Legislative Outreach:</strong> Consider writing to your state representatives or senators about your experience to support consumer protection legislation.
                  </li>
                </ul>
              </div>
              
              <p>
                Sharing your story is cathartic too – many victims feel isolated or ashamed; knowing that you've helped even one person avoid the same trap can turn a bad experience into a positive force.
              </p>
              
              <p>
                Your story matters. By speaking up, you become part of the solution. Solar energy has great benefits, and with enough consumer voices, we can push for a market where those benefits aren't undermined by fraud.
              </p>
              
              <ShareYourStoryCTA />
            </section>

            <section id="bankruptcy" className="my-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">If Your Solar Company Goes Bankrupt: What Now?</h2>
              </div>
              
              <p>
                A challenging scenario is when the company that sold or installed your solar panels goes out of business. Unfortunately, this has happened to some solar companies amid a flood of complaints. If you find out the company has gone belly-up, here's what to do:
              </p>
              
              <ol className="list-decimal pl-6">
                <li>
                  <strong>Verify the Bankruptcy:</strong> First, confirm the company's status. Search the U.S. Bankruptcy Court records or news releases to understand if they filed Chapter 7 (liquidation) or Chapter 11 (reorganization).
                </li>
                <li>
                  <strong>File a Claim in Bankruptcy Court:</strong> When a company files for bankruptcy, creditors (including customers owed something) can file a proof of claim for money they're owed.
                </li>
                <li>
                  <strong>Check for Bond or Insurance Claims:</strong> Some contractors are required to have a surety bond or insurance that might cover unfinished work or damages.
                </li>
                <li>
                  <strong>Manufacturer Warranties:</strong> If your panels or inverters were installed, you may still have warranties from the manufacturers, even if the installer is gone.
                </li>
                <li>
                  <strong>Hire Another Installer:</strong> To make your system operational, you might need to hire a different solar company or electrician to finish or fix it. Keep all receipts for potential claims.
                </li>
                <li>
                  <strong>Seek Legal Advice:</strong> Consult with your lawyer on strategy. If a company is bankrupt, you usually can't sue them, but there might be other liable parties.
                </li>
                <li>
                  <strong>Join Community Efforts:</strong> Search online for other customers of the bankrupt company – joining forces can help share information and possibly pool resources for solutions.
                </li>
              </ol>
              
              <p>
                While a company bankruptcy can feel like a dead end, don't lose hope. You may not get every dollar back, but you can often still salvage the situation. Focus on getting your system completed or safely removed and ensuring you're not paying for something you never fully received.
              </p>
              
              <p>
                Then, chalk it up as hard-earned wisdom, share your story, and lean on community and legal support to move forward.
              </p>
            </section>
            
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <Link to="/legal-rights-protections" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  ← Your Legal Rights & Protections
                </Link>
              </div>
              <div>
                <Link to="/prevention-guide" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  Next: Prevention Guide: Protect Yourself →
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

export default ReportingFraud;
