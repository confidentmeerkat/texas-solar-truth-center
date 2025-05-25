
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, DollarSign, FileX, Zap, Clock, Shield } from 'lucide-react';

const RedFlagsChecklist = () => {
  const categories = [
    {
      icon: DollarSign,
      title: "Financial Red Flags",
      color: "text-red-600",
      bgColor: "bg-red-100",
      flags: [
        "Promises to eliminate your electric bill completely",
        "Pressure to sign financing before seeing final costs",
        "Hidden fees discovered after signing",
        "Loan payments higher than promised savings",
        "Claims about tax credits that seem too good to be true"
      ]
    },
    {
      icon: Clock,
      title: "Sales Pressure Tactics",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      flags: [
        "Door-to-door salespeople creating false urgency",
        "Refusing to leave until you sign",
        "Claims that prices/incentives expire 'today only'",
        "High-pressure phone calls after initial contact",
        "Discouraging you from getting second opinions"
      ]
    },
    {
      icon: FileX,
      title: "Contract & Documentation Issues",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      flags: [
        "Verbal promises not included in written contract",
        "Refusing to provide contracts for review",
        "Complex contracts with confusing terms",
        "Automatic escalation clauses hidden in fine print",
        "Difficulty canceling within cooling-off period"
      ]
    },
    {
      icon: Zap,
      title: "Installation & Performance Problems",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      flags: [
        "System producing much less energy than promised",
        "Roof damage from improper installation",
        "Electrical issues or safety hazards",
        "Use of low-quality or refurbished equipment",
        "Installation not matching original design"
      ]
    },
    {
      icon: Shield,
      title: "Company & Service Red Flags",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      flags: [
        "Company becomes unresponsive after installation",
        "No local office or licensed contractors",
        "Refusing to honor warranty commitments",
        "Poor online reviews or BBB ratings",
        "Company name frequently changes or has multiple aliases"
      ]
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-6">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <span className="text-sm font-medium text-red-800">Warning Signs</span>
        </div>
        <h2 className="text-4xl font-bold text-bennett-navy mb-6">Solar Fraud Red Flags Checklist</h2>
        <div className="w-24 h-1 bg-bennett-gold mx-auto mb-8"></div>
        <p className="text-lg text-bennett-slate max-w-3xl mx-auto">
          Recognize the warning signs of solar panel fraud. If you've experienced any of these red flags, 
          you may have grounds for legal action.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-bennett-navy">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.flags.map((flag, flagIndex) => (
                  <li key={flagIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-bennett-slate leading-relaxed">{flag}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-xl font-bold text-red-800 mb-2">Experienced Multiple Red Flags?</h4>
            <p className="text-red-700 mb-4">
              If you've encountered several of these warning signs, you may be entitled to compensation. 
              The more red flags present in your case, the stronger your potential claim may be.
            </p>
            <p className="text-sm text-red-600 font-semibold">
              Don't wait - there are time limits for taking legal action. Contact us today for a free evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedFlagsChecklist;
