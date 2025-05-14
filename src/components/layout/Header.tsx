
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from 'lucide-react';
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
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-bennett-navy">
            <a href="/" className="flex items-center gap-2">
              <span className="text-bennett-gold">Solar Panel</span>Consumer Resources
            </a>
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6 items-center">
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-colors">About</a></li>
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-colors">Services</a></li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-bennett-slate hover:text-bennett-navy transition-colors">
                        Resources
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[320px] gap-3 p-4 md:w-[400px]">
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
              <li><a href="#" className="text-bennett-slate hover:text-bennett-navy transition-colors">Contact</a></li>
            </ul>
          </nav>
          <Button className="bg-bennett-navy hover:bg-bennett-navy/90">
            <Phone className="mr-2 h-4 w-4" /> (469) 253-7137
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-bennett-navy">{title}</div>
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
