
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, Scale } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-bennett-navy">
            <a href="/" className="flex items-center gap-3">
              <div className="p-2 bg-bennett-gold rounded-xl">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-bennett-gold">Solar Panel</span>
                <span className="block text-lg leading-tight">Consumer Resources</span>
              </div>
            </a>
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-8 items-center">
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-all duration-300 font-medium hover:scale-105">About</a></li>
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-all duration-300 font-medium hover:scale-105">Services</a></li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100/50 focus:bg-transparent data-[state=open]:bg-gray-100/50 text-bennett-slate hover:text-bennett-navy transition-all duration-300 font-medium">
                        Resources
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[320px] gap-3 p-6 md:w-[450px] bg-white/95 backdrop-blur-md border border-gray-200/20 shadow-xl rounded-2xl">
                          <ListItem href="/identifying-solar-scams" title="Identifying Solar Panel Scams">
                            Learn how to spot common solar panel fraud tactics in Texas
                          </ListItem>
                          <ListItem href="/legal-rights-protections" title="Your Legal Rights & Protections">
                            Understand the laws that protect Texas consumers from solar fraud
                          </ListItem>
                          <ListItem href="/reporting-seeking-help" title="Reporting Fraud & Seeking Help">
                            Step-by-step guide on reporting fraud and getting legal assistance
                          </ListItem>
                          <ListItem href="/prevention-guide" title="Prevention Guide: Protect Yourself">
                            Practical tips to avoid falling victim to solar panel scams
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-all duration-300 font-medium hover:scale-105">Contact</a></li>
            </ul>
          </nav>
          <Button className="bg-bennett-navy hover:bg-bennett-navy/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Phone className="mr-2 h-4 w-4" /> (469) 253-7137
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="sm" className="hover:bg-gray-100/50 rounded-xl">
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-bennett-gold/10 hover:to-bennett-navy/5 hover:scale-105 border border-transparent hover:border-bennett-gold/20",
            className
          )}
          {...props}
        >
          <div className="text-base font-semibold leading-none text-bennett-navy">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-bennett-slate">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
