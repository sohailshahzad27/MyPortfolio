"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsData, type SkillCategory } from '@/lib/portfolio-data';
import { TechIcon } from '@/components/portfolio/TechIcon';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const skillCategories: SkillCategory[] = ["Using Now", "Learning", "Other Skills"];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Using Now");

  const filteredSkills = skillsData.filter(skill => skill.category === activeTab);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px hsla(var(--primary) / 0.2)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I work with.</p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as SkillCategory)} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-md mx-auto bg-secondary mb-8">
              {skillCategories.map(category => (
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

          {skillCategories.map(category => (
            <TabsContent key={category} value={category}>
              {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="h-full"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      custom={index} // For staggered animation
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Card className="bg-card text-card-foreground shadow-lg h-full flex flex-col items-center justify-center p-4 text-center hover:border-primary transition-all duration-300">
                        <CardHeader className="p-2">
                          <TechIcon name={skill.iconName} className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3" />
                          <CardTitle className="text-base sm:text-lg font-semibold">{skill.name}</CardTitle>
                        </CardHeader>
                        {skill.experience && (
                          <CardContent className="p-2 mt-auto">
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">{skill.experience}</Badge>
                          </CardContent>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  <Lightbulb className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                  <p>No skills listed in this category yet. Stay tuned!</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
