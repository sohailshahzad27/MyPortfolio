"use client";

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollTo = useScrollTo();
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    scrollTo('home'); // Assuming 'home' is the ID of your hero section or top of the page
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }} // Delay ensures it appears after content
      className="py-8 bg-slate-900/50 text-muted-foreground border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <Button
            variant="ghost"
            onClick={handleBackToTop}
            className="text-sm text-primary hover:text-primary/80 hover:bg-primary/10"
            aria-label="Back to top"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Sohail Shahzad. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Designed & Developed by Sohail Shahzad.
        </p>
      </div>
    </motion.footer>
  );
}
