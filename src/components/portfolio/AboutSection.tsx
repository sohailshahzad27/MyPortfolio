
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Languages } from 'lucide-react';
import { UkFlagIcon } from '@/components/icons/UkFlagIcon';
import { PakistanFlagIcon } from '@/components/icons/PakistanFlagIcon';
import { motion } from 'framer-motion';

const languageProficiency = [
  { name: 'English', level: 'C1/C2', FlagIcon: UkFlagIcon },
  { name: 'Urdu', level: 'Native', FlagIcon: PakistanFlagIcon },
];

export function AboutSection() {
  const bioText = "I am a passionate Full Stack Developer dedicated to building robust, scalable, and user-centric web applications. With expertise across the entire development lifecycle, from conceptualization and design to deployment and maintenance, I leverage modern technologies to create seamless digital experiences. I enjoy tackling complex challenges and continuously learning to deliver high-quality solutions. Let's collaborate to bring your ideas to life!";

  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">A little bit about my journey and skills.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-xl h-full">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="assets\Profile.jpg"
                    alt="Sohail Shahzad"
                    width={80}
                    height={80}
                    data-ai-hint="profile picture"
                    className="rounded-full border-2 border-primary"
                  />
                  <div>
                    <CardTitle className="text-2xl">Sohail Shahzad</CardTitle>
                    <p className="text-primary">Full Stack Developer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {bioText}
                </p>
                <a
                  href="/my-cv.pdf"
                  download
                  className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary/10 w-full sm:w-auto px-4 py-2 rounded-md"
                  aria-label="Download CV"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>

              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Languages className="mr-3 h-6 w-6 text-primary" />
                  Language Proficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {languageProficiency.map((lang) => (
                  <motion.div
                    key={lang.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between p-4 bg-background rounded-lg shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <lang.FlagIcon className="h-6 w-auto rounded-sm" /> {/* Adjusted w-auto for potentially different aspect ratio */}
                      <span className="font-medium text-foreground">{lang.name}</span>
                    </div>
                    <span className="text-sm text-primary font-semibold px-2 py-1 bg-primary/10 rounded-full">{lang.level}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
