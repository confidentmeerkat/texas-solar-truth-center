import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/editorial/ContactForm';
import CallToAction from '@/components/editorial/CallToAction';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink, Shield, GavelIcon, FileText, AlertTriangle, Clock } from 'lucide-react';

const LegalRights = () => {
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
            Your Legal Rights & Protections in Texas
          </h1>
          
          <div className="bg-bennett-lightBlue p-6 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="mr-4 pt-1">
                <Shield className="h-6 w-6 text-bennett-navy" />
              </div>
              <p className="text-bennett-navy">
                This guide outlines the legal protections available to Texas consumers who have been victims of solar fraud. For information on identifying scams before they happen, see our <Link to="/identifying-solar-scams" className="text-bennett-navy underline hover:text-bennett-gold">Identifying Solar Panel Scams</Link> guide.
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="lead text-lg">
              If you've fallen victim to a solar panel scam or suspect that a solar company deceived you, it's critical to know that you have legal rights and protections as a Texas consumer. The Lone Star State has robust consumer protection laws – most notably the Texas Deceptive Trade Practices Act (DTPA) – that give you the power to fight back against fraud, misrepresentation, and bad business practices.
            </p>
            
            <p>
              This page will walk you through your rights under the law, what legal options you can pursue (from suing a solar company to canceling a contract), and special protections Texas homeowners have when it comes to solar installations. We'll also cover practical points like time limits for taking action (statutes of limitations) and what to do if your contract has tricky clauses like arbitration.
            </p>
            
            <p>
              By understanding your rights, you'll be better equipped to seek justice and recovery if you've been wronged.
            </p>

            <section id="dtpa" className="my-8">
              <div className="flex items-center mb-4">
                <GavelIcon className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">The Texas Deceptive Trade Practices Act (DTPA): Your Shield Against Fraud</h2>
              </div>
              
              <p>
                The Texas Deceptive Trade Practices-Consumer Protection Act (DTPA) is the primary law that protects consumers from fraudulent and misleading business behavior in Texas. If a solar company lied to you, made false promises, or engaged in deceptive practices, the DTPA is likely to apply.
              </p>
              
              <p>
                Under this law, you have the right to sue for damages and even recover additional penalties in certain cases. The Texas Attorney General's office emphasizes that if you win a DTPA lawsuit and prove the company "knowingly" deceived you, you could be eligible for up to three times your damages as punishment to the offender.
              </p>

              <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">What kinds of solar scam behaviors fall under the DTPA?</p>
                <ul className="list-disc pl-6 mb-0">
                  <li>
                    <strong>False advertising or misrepresentation:</strong> Example – The company advertised "50% off your energy bills guaranteed" or claimed you'd get a certain tax credit which was false.
                  </li>
                  <li>
                    <strong>Failure to deliver services as promised:</strong> Example – You signed a contract for a 10 kW solar system, but the company only installed 5 kW, or never finished the job.
                  </li>
                  <li>
                    <strong>Breach of express or implied warranties:</strong> If the company assured you the system would be high quality or backed by a warranty, and it turned out to be defective with no support.
                  </li>
                  <li>
                    <strong>Unconscionable actions:</strong> This is a term in the law meaning the company took gross advantage of you and you had significantly unequal bargaining power.
                  </li>
                </ul>
              </div>
              
              <p>
                It's important to note that the DTPA has a time limit for taking action – generally, you must file a lawsuit within 2 years of when you discovered (or should have discovered) the deceptive practice. This statute of limitations can sometimes be extended if the conduct was knowingly concealed, but don't count on extra time.
              </p>
              
              <p>
                Also, the DTPA requires that before you file a lawsuit, you send the solar company a written notice of your complaint and damages at least 60 days in advance. This is called a DTPA demand letter. It gives the company a chance to offer a settlement. Many solar fraud cases resolve at this stage.
              </p>
              
              <p>
                In summary, the DTPA is a powerful tool for Texas consumers. It's essentially your legal "sword and shield" against solar scammers, providing remedies that go beyond just getting your money back.
              </p>
            </section>

            <section id="breach-of-contract" className="my-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Breach of Contract in Solar Agreements</h2>
              </div>
              
              <p>
                Aside from specific consumer protection laws, basic contract law is on your side as well. When you sign a contract with a solar installer, both you and the company are legally obligated to follow its terms.
              </p>
              
              <p>
                If the company fails to do what it agreed – whether it's not completing the installation, not delivering the quality or specifications promised, or otherwise breaching the contract – you have the right to seek remedies for that breach.
              </p>

              <div className="bg-bennett-lightBlue p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">Examples of contract breaches in solar installations:</p>
                <ul className="list-disc pl-6 mb-0">
                  <li>
                    <strong>Incomplete Work:</strong> The contract stipulated a full system installation, but the crew never finished or left major components uninstalled.
                  </li>
                  <li>
                    <strong>Missing or Subpar Equipment:</strong> You were promised Tier-1 400-watt solar panels and a 10 kW inverter, but they installed cheaper, lower-capacity equipment.
                  </li>
                  <li>
                    <strong>Project Timeline Violations:</strong> The contract said the system would be operational by a certain date, but months have passed with no result.
                  </li>
                  <li>
                    <strong>Violation of Contract Terms:</strong> The contract says any change in scope must be approved in writing, yet the company made changes without telling you.
                  </li>
                </ul>
              </div>
              
              <p>
                When a breach happens, you can potentially sue for breach of contract. Remedies may include monetary damages and sometimes cancellation of the contract. In some cases, you might prefer to rescind the contract – essentially undo the deal and get a refund – if the breach is serious enough to defeat the purpose of the contract.
              </p>
              
              <p>
                Keep in mind the statute of limitations for breach of contract in Texas is typically 4 years (longer than for DTPA or fraud). However, if you're pursuing both DTPA and contract claims together (which is common), you'd likely adhere to the shorter 2-year window to be safe.
              </p>
            </section>

            <section id="arbitration" className="my-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Understanding Arbitration Clauses: Can You Still Sue?</h2>
              </div>
              
              <p>
                When reviewing your solar contract, you might come across a clause titled "Arbitration" or "Dispute Resolution." An arbitration clause means that you (and the company) agree to resolve disputes outside of court, through a private arbitration process, waiving the right to a jury trial.
              </p>
              
              <p>
                Many solar companies include arbitration clauses and even class-action waivers (preventing you from joining other consumers in a group lawsuit) to shield themselves from courtroom litigation.
              </p>

              <div className="bg-bennett-lightBlue p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">What you should know about arbitration:</p>
                <ul className="list-disc pl-6 mb-0">
                  <li>
                    <strong>Arbitration Process:</strong> You would initiate a claim in arbitration rather than court. Arbitration is typically run by organizations like AAA or JAMS.
                  </li>
                  <li>
                    <strong>Enforceability:</strong> In general, Texas courts do enforce arbitration clauses if they're properly drafted. However, if an arbitration clause is truly unfair or was hidden, you could argue it's "unconscionable" and challenge it in court.
                  </li>
                  <li>
                    <strong>Limits on Rights:</strong> Arbitration can limit some consumer rights – for example, you might not be able to claim triple damages under DTPA in arbitration if the arbitrator doesn't allow punitive damages.
                  </li>
                  <li>
                    <strong>No Public Record:</strong> Arbitrations are private, so the company avoids public scrutiny. This means other potential victims won't easily learn about your case.
                  </li>
                </ul>
              </div>
              
              <p>
                Bottom line: If you see an arbitration clause, know that you likely agreed not to sue in court. But you still have the right to pursue your claims through arbitration. You should consult a lawyer experienced in dealing with arbitration clauses.
              </p>
              
              <p>
                Even with an arbitration clause, always report fraud to regulators (Attorney General, etc.). Arbitration only affects your private dispute resolution, not the ability of authorities to investigate or sue the company.
              </p>
            </section>

            <section id="damages" className="my-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Recovering Your Losses: Damages and Remedies</h2>
              </div>
              
              <p>
                Victims of solar panel fraud often ask: "What can I actually get out of this if I take legal action? Is it worth it?" The answer depends on your specific case, but there are several types of damages and remedies you may recover:
              </p>
              
              <ul className="list-disc pl-5">
                <li>
                  <strong>Actual Monetary Losses:</strong> This includes the money you paid out-of-pocket.
                </li>
                <li>
                  <strong>Cost of Repairs or Completion:</strong> If the system was shoddily installed, you might hire another reputable contractor to fix or finish it.
                </li>
                <li>
                  <strong>Difference in Value (Benefit of the Bargain):</strong> You can claim the difference between what was promised and what was delivered.
                </li>
                <li>
                  <strong>Cancellation of Contract & Refund:</strong> As a remedy, especially under DTPA, the court or settlement might result in canceling the contract.
                </li>
                <li>
                  <strong>Non-Economic Damages:</strong> Texas allows claims for mental anguish in some DTPA cases if the conduct was committed knowingly.
                </li>
                <li>
                  <strong>Punitive Damages:</strong> Under DTPA (and fraud common law), if the company acted intentionally or with gross negligence, you might get exemplary damages.
                </li>
                <li>
                  <strong>Attorney's Fees and Court Costs:</strong> The DTPA specifically allows a prevailing consumer to recover their reasonable attorney's fees.
                </li>
              </ul>
              
              <p>
                It's not just about money either. Sometimes lawsuits lead to other remedies like injunctions (court orders stopping the company from certain practices). And your action may help others by prompting authorities to crack down on the fraud.
              </p>
            </section>

            <section id="limitations" className="my-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Statute of Limitations: Don't Wait Too Long</h2>
              </div>
              
              <p>
                Timing matters. Texas law sets deadlines for filing lawsuits known as statutes of limitations. Missing these can bar you from recovery, no matter how strong your case was. Here are the key timelines in context:
              </p>
              
              <ul className="list-disc pl-5">
                <li>
                  <strong>DTPA Claims:</strong> Usually 2 years from when you discovered or should have discovered the deceptive act.
                </li>
                <li>
                  <strong>Fraud/Misrepresentation (common law):</strong> Also 2 years in Texas generally.
                </li>
                <li>
                  <strong>Breach of Contract:</strong> 4 years from the breach.
                </li>
                <li>
                  <strong>Personal Injury (if applicable):</strong> Typically 2 years for injury or property damage claims.
                </li>
              </ul>
              
              <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                <p className="font-semibold mb-0">
                  The safest approach: consult an attorney as soon as you suspect a serious problem. The clock might be ticking without you realizing. Even if you're trying to work things out amicably with the installer, keep an eye on those dates.
                </p>
              </div>
            </section>

            <section id="homeowner-protections" className="my-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Homeowner Protections: Liens, Warranties, and Standards</h2>
              </div>
              
              <p>
                Texas homeowners have some additional protections and rights specific to home improvements and solar projects:
              </p>
              
              <h3 className="text-xl font-semibold mt-6">3-Day Right to Cancel (Home Solicitation Sales)</h3>
              <p>
                If a solar sale took place at your home (or anywhere that isn't the seller's normal place of business), you typically have until midnight of the 3rd business day to cancel, no questions asked. The contract should include a notice of this right and a form to send in if you choose to cancel.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Liens and the Texas Property Code</h3>
              <p>
                Solar installations often involve what's called a mechanic's or materialman's lien. Contractors and subcontractors who work on your property can file a lien if they aren't paid. If you do get a lien notice because the solar installer didn't pay the electrician, you have rights under the Texas Property Code.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Warranties – Implied and Express</h3>
              <p>
                Texas law implies certain warranties in services, like a warranty of good and workmanlike performance. Even if your contract didn't specify a warranty, the installer by default should perform work in a skilled manner. If they didn't, that breach can be remedied.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Building Codes and Licensing Standards</h3>
              <p>
                Texas requires that solar panel installations be done by licensed electrical contractors and electricians (under TDLR oversight). Work must comply with electrical codes. These requirements are in place for your safety. If a company cut corners here, they not only put you at risk but also violated regulations.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Utility Interconnection Rights</h3>
              <p>
                Once your system is installed, it usually must be connected to the grid through your utility with a proper interconnection agreement. If a scam company left you without submitting interconnection paperwork, you have rights to get that sorted out.
              </p>
            </section>

            <section id="taking-action" className="my-8">
              <div className="flex items-center mb-4">
                <GavelIcon className="h-6 w-6 mr-2 text-bennett-navy" />
                <h2 className="text-2xl font-bold text-bennett-navy m-0">Empowering Yourself: Taking Action</h2>
              </div>
              
              <p>
                Navigating the legal landscape can feel daunting, especially after the stress of being defrauded. But you are not alone. Your rights as a consumer are real, and there are professionals and organizations ready to help you assert them. Here's a brief action plan:
              </p>
              
              <ul className="list-disc pl-5">
                <li>
                  <strong>Consult a Consumer Protection Attorney:</strong> Many attorneys in Texas offer a free initial consultation, especially for clear-cut fraud cases.
                </li>
                <li>
                  <strong>Gather Your Documentation:</strong> Your contract, any brochures or emails, receipts of payments, photos of the installation, communications – all of these will be crucial evidence.
                </li>
                <li>
                  <strong>Leverage Government Agencies:</strong> File a complaint with the Texas Attorney General's Consumer Protection Division, and copy it to the company.
                </li>
                <li>
                  <strong>Time is of the Essence:</strong> If you're within that 2-year window, don't delay taking legal steps.
                </li>
                <li>
                  <strong>Stay Informed:</strong> Continue learning about your rights (our site's resources can help). Knowledge truly is power.
                </li>
              </ul>
              
              <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                <p className="font-semibold mb-2">Need Help With Your Case?</p>
                <p className="mb-0">
                  Consider reaching out to the Texas Solar Truth Center for support. As a nonprofit-oriented organization, we provide free case reviews for victims of solar scams in Texas. Our team can help evaluate your situation and connect you with vetted legal experts who understand solar fraud.
                </p>
              </div>
              
              <p>
                Your rights and protections are there for a reason – don't hesitate to use them. By holding fraudulent companies accountable, you're not only seeking justice for yourself but also helping protect other Texans from suffering the same fate.
              </p>
            </section>
            
            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-between">
              <div>
                <Link to="/identifying-solar-scams" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  ← Identifying Solar Panel Scams
                </Link>
              </div>
              <div>
                <Link to="/reporting-seeking-help" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center">
                  Next: Reporting Fraud & Seeking Legal Help →
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

export default LegalRights;
