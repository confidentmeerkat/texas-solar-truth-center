
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-bennett-navy">
            <a href="/" className="flex items-center gap-2">
              <span className="text-bennett-gold">Bennett</span>Legal
            </a>
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-colors">About</a></li>
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-colors">Services</a></li>
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-colors">Resources</a></li>
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-colors">Contact</a></li>
            </ul>
          </nav>
          <Button className="bg-bennett-navy hover:bg-bennett-navy/90">
            <Phone className="mr-2 h-4 w-4" /> (555) 123-4567
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
