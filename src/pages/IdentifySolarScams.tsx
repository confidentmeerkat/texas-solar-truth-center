import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight, ExternalLink, Play, Phone, Clock, FileText, CheckCircle, Info } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const IdentifySolarScams = () => {
  return (
    <>
      <Helmet>
        <title>How to Identify Solar Panel Scams in Texas | Texas Solar Truth Center</title>
        <meta name="description" content="Learn to recognize common solar panel scams in Texas. Protect yourself from deceptive sales tactics, false promises, and predatory financing in solar installations." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Identifying Solar Panel Scams in Texas: Warning Signs & Prevention",
            "description": "Comprehensive guide to recognizing common solar panel scams in Texas, including deceptive sales tactics, false promises, and predatory financing.",
            "image": "https://lovable.dev/opengraph-image-p98pqg.png",
            "author": {
              "@type": "Organization",
              "name": "Bennett Legal"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Texas Solar Truth Center",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lovable.dev/opengraph-image-p98pqg.png"
              }
            },
            "datePublished": "2024-05-14",
            "dateModified": "2024-05-14",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://solarlegalhelp.com/identifying-solar-scams"
            }
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-bennett-navy to-bennett-navy/90 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-bennett-gold mb-4">
                <AlertTriangle size={20} />
                <span className="uppercase text-sm font-semibold tracking-wider">Consumer Protection Guide</span>
              </div>
              <h1 className="text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Identifying Solar Panel Scams in Texas: Warning Signs & Prevention
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl">
                Learn how to spot deceptive practices, manipulative sales tactics, and false promises from solar scam companies targeting Texas homeowners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-medium">
                  Get a Free Solar Fraud Case Review <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Report a Solar Scam <AlertTriangle className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="bg-bennett-lightBlue p-6 rounded-lg mb-10">
                  <h2 className="text-lg font-semibold mb-4 text-bennett-navy">On This Page</h2>
                  <ul className="space-y-3">
                    <li>
                      <a href="#introduction" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>Introduction: The Rise of Solar Fraud in Texas</span>
                      </a>
                    </li>
                    <li>
                      <a href="#high-pressure" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>High-Pressure Pitches & Deceptive Sales Tactics</span>
                      </a>
                    </li>
                    <li>
                      <a href="#false-promises" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>False Promises of Huge Savings and Incentives</span>
                      </a>
                    </li>
                    <li>
                      <a href="#hidden-fees" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>Hidden Fees, Complex Contracts & Financing Traps</span>
                      </a>
                    </li>
                    <li>
                      <a href="#shoddy-workmanship" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>Shoddy Workmanship & Installation Scams</span>
                      </a>
                    </li>
                    <li>
                      <a href="#forgery" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>Forgery, Identity Theft & Unauthorized Accounts</span>
                      </a>
                    </li>
                    <li>
                      <a href="#vulnerable" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>Targeting the Elderly and Non-English Speakers</span>
                      </a>
                    </li>
                    <li>
                      <a href="#next-steps" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
                        <span className="mr-2">•</span>
                        <span>Next Steps if You Suspect a Scam</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="prose prose-lg max-w-none">
                  <section id="introduction" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">Introduction: The Rise of Solar Panel Fraud in Texas</h2>
                    
                    <p>
                      Texas has seen a rapid rise in residential solar installations – and unfortunately, a parallel spike in solar panel scams and fraud targeting homeowners. In fact, consumer complaints about solar companies in Texas have skyrocketed in recent years, increasing by 818% at the Attorney General's office from 2018 to 2023.
                    </p>
                    <p>
                      This troubling trend highlights the importance of knowing how to spot solar panel scams in Texas before you become a victim. In this guide, we'll walk through common red flags with solar panel companies – from deceptive sales tactics and misleading energy claims to predatory financing traps – so you can recognize a scam before signing a contract.
                    </p>
                    <p className="text-sm">
                      <em>(For a comprehensive overview of solar fraud and how it impacts Texans, see our <a href="/" className="text-bennett-navy hover:text-bennett-gold font-medium">Ultimate Guide to Fighting Solar Panel Fraud in Texas</a> on our site, which links to all related topics.)</em>
                    </p>
                  </section>

                  <section id="high-pressure" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">High-Pressure Pitches & Deceptive Sales Tactics</h2>
                    
                    <p>
                      One hallmark of solar panel scams is the high-pressure sales pitch. Scam solar companies often use door-to-door sales agents or telemarketers who create a false sense of urgency. They might claim "limited-time offers" or insist you sign up immediately to lock in a special deal.
                    </p>
                    
                    <p>
                      Reputable solar installers will give you time to make an informed decision; scammers, on the other hand, want to rush you. Be wary if a salesperson refuses to leave behind written information or pressures you to commit on the spot.
                    </p>
                    
                    <p>
                      Another common deceptive tactic is impersonation or false affiliation. Some scammers claim to be affiliated with the government or your utility company, saying you've been "selected" for a program or that they're doing a free energy audit.
                    </p>
                    
                    <p>
                      The Federal Trade Commission warns that if someone knocks on your door promising "free" solar panels or saying government programs will cover the cost so you'll never pay another electricity bill, it's likely a scam. Honest solar companies won't pretend to be government-backed, and they'll be upfront about costs and savings.
                    </p>
                    
                    <div className="bg-rose-50 border-l-4 border-rose-500 p-4 my-6">
                      <p className="font-semibold text-bennett-navy">Red Flag:</p>
                      <p className="mb-0">
                        If a solar salesperson uses aggressive, pushy tactics or makes too-good-to-be-true claims about "free" solar installations, step back. Legitimate companies encourage questions and research; scammers rely on pressure and confusion to make a quick sale. Always take your time and get multiple quotes – don't let anyone guilt or scare you into signing a contract without due diligence.
                      </p>
                    </div>
                  </section>

                  <section id="false-promises" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">False Promises of Huge Savings and Incentives</h2>
                    
                    <p>
                      Scam solar deals often hinge on misleading promises – particularly about how much money you'll save. You might hear claims like "Cut your electric bill by 80%!" or "Solar will eliminate your bill entirely!" In reality, while solar can significantly reduce your utility costs, no installer can guarantee specific savings without a detailed analysis of your home's energy use. Exaggerated savings claims are a major warning sign.
                    </p>
                    
                    <p>
                      In a recent investigation of shady solar sales in Texas, many homeowners were told they would get huge monthly savings or big rebates and tax credits, but a lot of those promises never materialized. Some Texans even found their electric bills went up after going solar because the system was poorly designed.
                    </p>
                    
                    <p>
                      Be especially cautious about how federal tax credits or rebates are presented. Scammers have been known to misrepresent the solar investment tax credit (ITC) – a federal credit (30% of system cost) that qualifying homeowners can claim at tax time. Dishonest sales reps might pitch it as an instant rebate or discount off the price, or imply everyone will get a big check from the government.
                    </p>
                    
                    <p>
                      The truth is, not all homeowners qualify for the full tax credit (for example, you need enough tax liability to use it, and you won't see that money until you file your taxes). If a salesperson says "the government will pay you to go solar" or that you're guaranteed certain incentives, that's false. As the FTC cautions, "going solar isn't free" – reputable companies will tell you exactly what the system will cost and how incentives work.
                    </p>
                    
                    <p>
                      Other false promises involve non-existent programs or phony guarantees. Watch out for lines like "special state program for free solar" (there is no such blanket program) or guaranteed performance claims (e.g. "your system will produce X amount of power no matter what" – weather and equipment quality can affect output).
                    </p>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-bennett-navy">Tip:</p>
                      <p className="mb-0">
                        If it sounds too good to be true, it likely is. Always ask for promises in writing. Scammers often rely on verbal assurances that they won't put in the contract.
                      </p>
                    </div>
                  </section>

                  <section id="hidden-fees" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">Hidden Fees, Complex Contracts & Financing Traps</h2>
                    
                    <p>
                      Another area ripe for fraud is the solar contract and financing. Texas homeowners have reported contracts loaded with hidden fees, confusing terms, or even pages that the salesperson skipped over during signing. A common scam involves slipping in clauses that commit you to costly financing agreements without full explanation.
                    </p>
                    
                    <p>
                      For instance, some companies advertise "$0 down solar" – but in reality, they sign you up for a high-interest loan or lease. Later, you might discover a lien placed on your home as collateral for a $50,000+ solar loan you didn't fully understand.
                    </p>
                    
                    <p>
                      In one case, a Houston family alleges an elderly relative with memory issues was scammed into a $98,000 solar panel debt, complete with a lien on the home, for panels that never even became operational. This illustrates how predatory some financing arrangements can be.
                    </p>
                    
                    <p className="font-semibold">Beware of predatory lending tactics:</p>
                    
                    <p>
                      Some solar installers partner with financing companies to offer loans or leases. There's nothing wrong with financing solar if done ethically – but fraudulent operators might forge your signature on loan documents or run credit checks without your permission (identity theft is a growing issue in solar scams).
                    </p>
                    
                    <p>
                      Texas Appleseed found increasing complaints about forged signatures and unauthorized financing in solar deals targeting vulnerable people. Always insist on reviewing every document. If the seller rushes you through electronic signing on a tablet, ask for paper copies or take screenshots.
                    </p>
                    
                    <p>
                      Look out for balloon payments, escalator clauses (payments that rise over time), or steep prepayment penalties buried in the fine print.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-bennett-navy mt-8 mb-4">Key contract elements to verify:</h3>
                    
                    <ul className="list-disc pl-5 space-y-3">
                      <li>
                        <strong>Total Cost and Payment Schedule:</strong> Make sure the contract spells out the full price of the system and any financing terms. Hidden costs like installation fees, permit fees, or high interest over time can make "$0 down" extremely expensive in the long run.
                      </li>
                      <li>
                        <strong>Performance or Savings Claims:</strong> Does the contract guarantee a certain output or electric bill reduction? If so, what happens if that isn't met? Vague language here is a red flag.
                      </li>
                      <li>
                        <strong>Cancellation Terms:</strong> Texas law provides a 3-day right to cancel if you signed the contract through a door-to-door sale or in-home presentation. A legitimate company must inform you of this right. If they didn't (or refuse to honor a cancellation within 3 days), that's illegal and a sign of a scam.
                      </li>
                      <li>
                        <strong>Warranty and Maintenance:</strong> Reputable contracts include equipment warranties (often 20-25 years for panels) and workmanship warranties. Scammers may avoid promising anything, leaving you no recourse if the system fails.
                      </li>
                      <li>
                        <strong>Liens or UCC filings:</strong> Understand if the financing involves a lien on your home or a UCC-1 filing on the equipment. Many solar loans do this. It's not inherently fraudulent, but you should know about it upfront.
                      </li>
                    </ul>
                    
                    <div className="bg-bennett-lightBlue p-6 rounded-lg my-8">
                      <p className="font-semibold text-bennett-navy">Important:</p>
                      <p className="mb-0">
                        Always read every page of the agreement. If you don't understand something, ask questions or have an attorney review it before signing. A legitimate solar provider will not hide or misrepresent contract terms; a scammer will gloss over the details.
                      </p>
                    </div>
                  </section>

                  <section id="shoddy-workmanship" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">Shoddy Workmanship & Installation Scams</h2>
                    
                    <p>
                      Not all solar scams happen at the sales stage; some become apparent during or after installation. In Texas, many homeowners have complained about defective or incomplete installations – effectively being scammed into paying for a solar system that doesn't work properly.
                    </p>
                    
                    <p className="font-semibold">Common installation-related frauds include:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="text-lg font-semibold text-bennett-navy mb-2">Damaged Roofs or Property</h4>
                          <p className="text-sm">
                            Inexperienced or unlicensed installers can cause roof leaks, electrical hazards, or other damage to your home. Once they've been paid, scam companies may disappear without fixing the damage. In Texas consumer complaints, unsatisfactory workmanship and failure to make promised repairs are frequently cited issues.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="text-lg font-semibold text-bennett-navy mb-2">Non-Functional Systems</h4>
                          <p className="text-sm">
                            Some victims end up with solar panels on the roof that aren't even operational – for example, not being connected to the grid or configured correctly. You might not realize for months that your expensive system isn't producing power at the promised level (or at all). By then, the rogue installer is long gone.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="text-lg font-semibold text-bennett-navy mb-2">Unpermitted Work</h4>
                          <p className="text-sm">
                            Scam installers might skip the required permits or inspections to cut corners. This can leave the homeowner on the hook for code violations. Always ensure your installer pulls permits and that the system passes city inspection. In Texas, any solar installation involves electrical work, which must be done by a licensed electrician and contractor under state law.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="text-lg font-semibold text-bennett-navy mb-2">Vanishing Contractors</h4>
                          <p className="text-sm">
                            There have been cases where a solar company takes a large down payment, starts a partial installation (like mounting some equipment), and then disappears or declares bankruptcy before completion. The homeowner is left with an unusable system and a big financial loss. (Always be cautious about paying a large sum upfront.)
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-bennett-navy">How to Protect Yourself:</p>
                      <p>
                        Verify the credentials of anyone installing solar on your home. Ask if the installer is certified (for example, NABCEP certified, a respected solar technician certification) and licensed in Texas. You can use the TDLR's online database to check if the contractor holds an active Texas Electrical Contractor's license. An ethical solar company will have no issue with you verifying their license number.
                      </p>
                      <p className="mb-0">
                        Also, discuss the installation process – how will they avoid roof damage? Who is responsible if there's an issue? Insist on final inspection and documentation that the system is operational before you make final payment. If you suspect poor workmanship or have been left high and dry, document everything. This can become evidence in holding the company accountable (see our page on Reporting Fraud & Seeking Legal Help in Texas for steps to take).
                      </p>
                    </div>
                  </section>

                  <section id="forgery" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">Forgery, Identity Theft & Unauthorized Accounts</h2>
                    
                    <p>
                      A more insidious form of solar scam involves forgery and identity theft. This might occur in conjunction with the financing traps mentioned earlier. For example, a dishonest salesperson might forge your signature on a contract or loan document you never agreed to, in order to push the sale through and earn their commission.
                    </p>
                    
                    <p>
                      They may also use your personal information (from a credit application or utility bill) to run credit checks or open a financing account without clear permission. Texas regulators have noted a growing number of complaints where consumers allege their signatures were faked or they were signed up for loans they didn't consent to.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-bennett-navy mt-8 mb-4">Signs of possible forgery/ID theft in a solar transaction:</h3>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>You get a notice from a lender about a loan or credit check you don't recognize.</li>
                      <li>The installer asks for copies of your ID and then strange accounts or credit inquiries appear on your report.</li>
                      <li>The contract you receive after signing has different terms or higher amounts than you remember agreeing to – indicating someone altered the paperwork after you signed.</li>
                    </ul>
                    
                    <p>
                      To protect yourself, always keep copies of anything you sign and any emails or messages with the sales rep. If they send you a DocuSign or electronic contract, save the PDF. After signing, request a countersigned copy for your records. This way, if someone tries to alter or add to the contract later, you have evidence.
                    </p>
                    
                    <p>
                      Also, monitor your credit report after seeking solar quotes – if you see unauthorized hard inquiries or new accounts, investigate immediately.
                    </p>
                    
                    <div className="bg-bennett-navy text-white p-4 rounded-md my-6">
                      <p className="font-semibold">Important Note:</p>
                      <p className="mb-0">
                        If you believe a solar company forged your signature or misused your identity, this is not just a civil matter but potentially a criminal fraud. You should report it to law enforcement in addition to regulatory agencies. (Refer to Reporting Fraud & Seeking Legal Help for guidance on reporting to the Texas Attorney General, FTC, etc.)
                      </p>
                    </div>
                    
                    <p>
                      Remember: no legitimate business will ever sign documents on your behalf without consent. Any such behavior is a glaring sign of a scam operation.
                    </p>
                  </section>

                  <section id="vulnerable" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">Targeting the Elderly and Non-English Speakers</h2>
                    
                    <p>
                      Unfortunately, solar scammers often prey on the most vulnerable Texans. Elderly homeowners, those who live alone, and individuals who aren't fluent in English have been prime targets. According to a 2024 Texas Appleseed report, many harmful solar sales practices "targeted older Texans and people who are not native English speakers", tricking them with false promises like the elimination of electric bills or fake government incentives.
                    </p>
                    
                    <p>
                      Scammers assume these groups may be less familiar with solar technology or less likely to read the fine print, making them easier to swindle.
                    </p>
                    
                    <p>
                      For instance, a senior citizen might be told "Your electric bill will be $0 if you sign up – this is a special program for seniors". In reality, no such program exists, and the senior could end up with a costly loan.
                    </p>
                    
                    <p>
                      Language barriers can also be exploited: there have been cases of sales reps presenting contracts in English to Spanish-speaking homeowners and misrepresenting what the terms say, or failing to mention key details.
                    </p>
                    
                    <div className="bg-bennett-lightGold p-6 rounded-lg my-6">
                      <p>
                        Always insist on having contracts and brochures in your primary language, and involve a trusted family member or friend in discussions if you're not 100% comfortable.
                      </p>
                      
                      <p className="mb-0">
                        If you have older relatives or neighbors, talk to them about these scams. Community awareness is key – scammers thrive when victims feel isolated or embarrassed. Let them know it's okay to say "I need to think about it" or "I want my son/daughter to review this" when a salesperson is pushing them.
                      </p>
                    </div>
                    
                    <p>
                      The Texas Solar Truth Center is also here to help educate and protect vulnerable communities – part of our mission is advocacy and outreach to ensure everyone, regardless of age or language, can benefit from solar energy safely.
                    </p>
                    
                    <div className="bg-rose-50 border-l-4 border-rose-500 p-4 my-6">
                      <p className="font-semibold text-bennett-navy">Red flags for vulnerable-targeted scams:</p>
                      <p className="mb-0">
                        Unsolicited home visits with grand promises, salespeople who refuse to provide translations or let someone else review the deal, and any attempt to isolate the homeowner (e.g. "You don't need to ask anyone else, they'll just confuse you – this is a simple deal just for you"). These are manipulative tactics; do not fall for them.
                      </p>
                    </div>
                  </section>

                  <section id="next-steps" className="scroll-mt-16 mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy mb-6">Next Steps if You Suspect a Scam</h2>
                    
                    <p>
                      Knowledge is your best defense against solar fraud. By recognizing these warning signs – from high-pressure sales and false claims to shady contracts and poor workmanship – you can avoid most solar panel scams in Texas.
                    </p>
                    
                    <p>
                      Trust your instincts: if something feels off or you catch a whiff of dishonesty, pause the process. It's better to delay installation than to get entangled in a bad deal that could cost you tens of thousands of dollars.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-bennett-navy mt-8 mb-4">What should you do if you realize you've encountered a potential scam?</h3>
                    
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>First, stop communication with the suspect company until you get advice.</li>
                      <li>Document everything (save emails, take notes of conversations).</li>
                      <li>Then, report the incident. You can file complaints with the Texas Attorney General's Office, the Texas Department of Licensing & Regulation, and the FTC – this helps authorities crack down on bad actors (see our guide on <a href="/reporting-seeking-help" className="text-bennett-navy hover:text-bennett-gold font-medium">Reporting Fraud & Seeking Legal Help in Texas</a> for details on how to report).</li>
                      <li>You may also have the right to cancel contracts and seek refunds.</li>
                    </ol>
                    
                    <p>
                      Most importantly, remember that help is available. The Texas Solar Truth Center was founded to assist consumers just like you. If you think you've been scammed or just want a second opinion on a solar offer, reach out to us for a free case review. Our team will evaluate your situation at no cost, explain your rights and options, and connect you with further resources.
                    </p>
                    
                    <div className="bg-bennett-lightBlue p-6 rounded-lg my-6">
                      <p className="font-semibold text-bennett-navy mb-4">We're Here To Help</p>
                      <p>
                        There's no risk and no obligation – our priority is simply to protect Texas homeowners and hold fraudulent solar companies accountable. By staying informed and cautious, you can still enjoy the benefits of solar energy while avoiding the "wolves in sheep's clothing."
                      </p>
                      <p className="mb-0">
                        Always do your homework, and don't hesitate to tap into consumer protection resources (like our organization and the legal safeguards we discuss in the next section). Solar power should bring you savings and peace of mind – not headaches and scams. Stay safe out there!
                      </p>
                    </div>
                  </section>
                </div>

                {/* Call to Action */}
                <section className="bg-bennett-navy text-white py-10 md:py-14 px-4 md:px-8 rounded-lg mt-16">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                      Think You Might Be Dealing with a Solar Panel Scam in Texas?
                    </h2>
                    
                    <p className="text-lg text-gray-100 mb-8">
                      Our team of experienced Texas consumer protection attorneys is ready to evaluate your case and help you understand your legal options. Contact us today for legal help with solar panel fraud in Texas.
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                      <Button 
                        size="lg" 
                        className="bg-bennett-gold hover:bg-bennett-gold/90 text-bennett-navy font-medium w-full md:w-auto"
                      >
                        Schedule Free Consultation <Clock className="ml-2 h-4 w-4" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white/10 w-full md:w-auto"
                      >
                        <Phone className="mr-2 h-4 w-4" /> Call (469) 253-7137
                      </Button>
                    </div>
                    
                    <p className="text-sm text-gray-300">
                      <em>Time is critical - Remember that the DTPA has a 2-year statute of limitations from date of discovery</em>
                    </p>
                  </div>
                </section>

                {/* Related Resources */}
                <section className="mt-16">
                  <h2 className="text-2xl font-serif font-bold text-bennett-navy mb-6">Related Resources</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-bennett-navy mb-3">Your Legal Rights & Protections</h3>
                      <p className="text-sm text-bennett-slate mb-4">Learn about the laws that protect Texas homeowners from solar fraud and how to use them.</p>
                      <Link to="/legal-rights-protections" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center font-medium text-sm">
                        Read the guide <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-bennett-navy mb-3">Reporting Fraud & Seeking Help</h3>
                      <p className="text-sm text-bennett-slate mb-4">Step-by-step guidance on how to report solar scams to authorities and get legal assistance.</p>
                      <Link to="/reporting-seeking-help" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center font-medium text-sm">
                        Read the guide <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-semibold text-bennett-navy mb-3">Prevention Guide</h3>
                      <p className="text-sm text-bennett-slate mb-4">Proactive steps to protect yourself from becoming a victim of solar panel fraud in Texas.</p>
                      <Link to="/prevention-guide" className="text-bennett-navy hover:text-bennett-gold inline-flex items-center font-medium text-sm">
                        Read the guide <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IdentifySolarScams;
