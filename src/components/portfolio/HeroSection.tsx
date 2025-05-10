
"use client";

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollTo = useScrollTo();

  const handleRevisMoreClick = () => {
    scrollTo('about');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-background to-slate-900/90 overflow-hidden">
      {/* Subtle geometric patterns - example using pseudo-elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroPattern" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="scale(1) rotate(45)">
              <path d="M25 0 L50 25 L25 50 L0 25 Z" fill="hsl(var(--primary) / 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4"
        >
          <span className="text-gradient">Hi, I’m Sohail Shahzad</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8"
        >
          Full Stack Developer
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex items-center space-x-4">
            <hr className="w-16 sm:w-24 border-primary/50" />
            <span className="text-sm sm:text-base text-primary font-semibold tracking-wider">IT BERRIES</span>
            <hr className="w-16 sm:w-24 border-primary/50" />
          </div>

          <Button 
            size="lg" 
            onClick={handleRevisMoreClick}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            REVIS MORE
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-8 w-8 text-primary/70 animate-bounce" />
      </motion.div>
    </section>
  );
}
