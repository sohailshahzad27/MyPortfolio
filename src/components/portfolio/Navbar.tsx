"use client";

import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useScrollTo } from '@/hooks/useScrollTo';
import { motion } from 'framer-motion';
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton'; // Added import

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollTo(href.substring(1));
      setIsMobileMenuOpen(false); // Close mobile menu on navigation
    }
  };
  
  const NavLinkContent = ({ label, href }: {label: string, href: string}) => (
    <Link
      href={href}
      onClick={(e) => handleNavClick(e, href)}
      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  );


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 text-xl font-bold text-gradient">
            <Code className="h-7 w-7 text-primary" />
            <span>Sohail Shahzad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLinkContent key={item.label} label={item.label} href={item.href} />
            ))}
            <ThemeToggleButton /> {/* Added Theme Toggle Button */}
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center"> {/* Added flex and items-center */}
            <ThemeToggleButton /> {/* Added Theme Toggle Button for mobile */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2"> {/* Added margin */}
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-background p-6">
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between items-center">
                     <Link href="/" onClick={(e) => { handleNavClick(e, '#home'); setIsMobileMenuOpen(false);}} className="flex items-center gap-2 text-lg font-bold text-gradient">
                        <Code className="h-6 w-6 text-primary" />
                        <span>Sohail Shahzad</span>
                     </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  {navItems.map((item) => (
                     <SheetClose key={item.label} asChild>
                        <NavLinkContent label={item.label} href={item.href} />
                     </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
