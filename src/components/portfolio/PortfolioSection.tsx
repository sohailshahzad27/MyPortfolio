"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projectsData, type PortfolioFilterCategory } from '@/lib/portfolio-data';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const portfolioCategories: PortfolioFilterCategory[] = ["All", "Coded", "Designed"];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioFilterCategory>("All");

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeTab));

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
    hover: { 
      y: -5, 
      boxShadow: "0px 10px 20px hsla(var(--primary) / 0.3)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">My Portfolio</h2>
          <p className="text-lg text-muted-foreground">A selection of my recent work.</p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PortfolioFilterCategory)} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-md mx-auto bg-background mb-8">
              {portfolioCategories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // This key change triggers AnimatePresence
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="hover" // Apply hover animation here
                  layout // Enables smooth reordering if items change position
                >
                  <Card className="bg-card text-card-foreground shadow-xl h-full flex flex-col overflow-hidden group">
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={project.imageHint}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <p className="text-center text-sm text-white">{project.description}</p>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="flex-grow">
                      {/* Kept short description for overlay, can add more details here if needed */}
                    </CardContent>
                    <CardFooter className="mt-auto pt-4 border-t border-border/50">
                      <div className="flex items-center justify-start space-x-3 w-full">
                        {project.liveLink && (
                          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <Eye className="mr-2 h-4 w-4" /> Live
                            </a>
                          </Button>
                        )}
                        {project.repoLink && (
                          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-muted-foreground"
        >
          And many more to come!
        </motion.p>
      </div>
    </section>
  );
}
