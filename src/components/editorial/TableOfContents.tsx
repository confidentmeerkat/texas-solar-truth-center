
import React from 'react';

const TableOfContents = () => {
  return (
    <aside className="bg-bennett-lightBlue p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold mb-4 text-bennett-navy">In This Article</h3>
      <ul className="space-y-3">
        <li>
          <a href="#growing-problem" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
            <span className="mr-2">•</span>
            <span>The Growing Problem of Solar Panel Fraud in Texas</span>
          </a>
        </li>
        <li>
          <a href="#victim-signs" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
            <span className="mr-2">•</span>
            <span>Am I a Victim? Identifying the Signs of a Solar Panel Scam</span>
          </a>
        </li>
        <li>
          <a href="#consumer-rights" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
            <span className="mr-2">•</span>
            <span>Your Rights as a Texas Consumer</span>
          </a>
        </li>
        <li>
          <a href="#case-studies" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
            <span className="mr-2">•</span>
            <span>Case Studies & Scenarios</span>
          </a>
        </li>
        <li>
          <a href="#how-we-help" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
            <span className="mr-2">•</span>
            <span>How Bennett Legal Fights for Victims of Solar Fraud</span>
          </a>
        </li>
        <li>
          <a href="#faq" className="text-bennett-navy hover:text-bennett-gold transition-colors flex items-center">
            <span className="mr-2">•</span>
            <span>Frequently Asked Questions</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default TableOfContents;
