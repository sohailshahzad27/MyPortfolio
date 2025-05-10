
import type { LucideIcon } from "lucide-react";
import { CodeXml, Orbit, Braces, Type, Figma, GitFork, Database, Cloud, Package, ServerCog, PenTool, Brain, Palette, Gamepad2, Sigma } from 'lucide-react';

export type SkillCategory = "Using Now" | "Learning" | "Other Skills";

export interface Skill {
  name: string;
  iconName: keyof typeof TechIconMap; // Reference to a key in TechIconMap
  experience?: string;
  category: SkillCategory;
}

export const TechIconMap = {
  HTML5: CodeXml,
  CSS3: Palette,
  JavaScript: Braces,
  TypeScript: Type,
  React: Orbit,
  NextJS: Orbit, 
  NodeJS: ServerCog,
  Python: Brain,
  CPP: Sigma,
  C: Sigma, 
  DSA: Brain, 
  MongoDB: Database,
  Git: GitFork,
  Figma: Figma,
  SQL: Database,
  Firebase: Cloud, 
  Gaming: Gamepad2,
};

export const skillsData: Skill[] = [
  // Using Now
  { name: "HTML5", iconName: "HTML5", experience: "1+ years", category: "Using Now" },
  { name: "CSS3", iconName: "CSS3", experience: "1+ years", category: "Using Now" },
  { name: "JavaScript", iconName: "JavaScript", experience: "1+ years", category: "Using Now" },
  { name: "React", iconName: "React", experience: "1+ years", category: "Using Now" },
  { name: "Next.js", iconName: "NextJS", experience: "1+ years", category: "Using Now" },
  { name: "Node.js", iconName: "NodeJS", experience: "1+ years", category: "Using Now" },
  { name: "MongoDB", iconName: "MongoDB", category: "Using Now" },
  { name: "C++", iconName: "CPP",experience: "3+ years", category: "Using Now" },
  { name: "C", iconName: "C", experience: "3+ years",category: "Using Now" },
  
  // Learning
  { name: "TypeScript", iconName: "TypeScript", category: "Learning" },
  { name: "DSA", iconName: "DSA", category: "Learning" },
  { name: "Python", iconName: "Python", category: "Learning" },
  { name: "SQL", iconName: "SQL", experience: "2+ years", category: "Learning" }, // Moved to Learning
  { name: "Firebase", iconName: "Firebase", category: "Learning" }, // Moved to Learning

  // Other Skills
  { name: "Git", iconName: "Git", experience: "5+ years", category: "Other Skills" },
  { name: "Gaming", iconName: "Gaming", category: "Other Skills" },
  { name: "Figma", iconName: "Figma", experience: "4+ years", category: "Other Skills" },
];

export type PortfolioFilterCategory = "All" | "Coded" | "Designed";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  categories: PortfolioFilterCategory[];
  liveLink?: string;
  repoLink?: string;
  tags?: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "GradeWise",
    description: "Student Learning Management System with a focus on performance and user experience.",
    imageUrl: "/assets/gradewise.png",
    imageHint: "LMS Website",
    categories: ["Coded", "Designed"],
    tags: ["HTML", "CSS", "UI/UX", "JavaScript"],
    liveLink: "https://sohailshahzad27.github.io/GradeWise/",
    repoLink: "https://github.com/sohailshahzad27/GradeWise",
  },
  {
    id: "2",
    title: "HamQadam",
    description: '"Rehmat, Raabta, Rasta", A community platform for all the people who are looking for help in their life."',
    imageUrl: "/assets/hamqadam.png",
    imageHint: "security app",
    categories: ["Coded", "Designed"],
    tags: ["React", "UI/UX", "Node.js", "tailwind"],
    liveLink: "https://hamqadam.netlify.app/",
    repoLink: "https://github.com/sohailshahzad27/HamQadam",
  },
  {
    id: "3",
    title: "Unknown",
    description: "Under Working",
    imageUrl: "https://picsum.photos/seed/ecom/600/400",
    imageHint: "Figma Design",
    categories: ["Designed"],
    tags: ["Figma", "UI/UX"],
    liveLink: "",
    repoLink: "https://www.figma.com/@sohailshahzad",
  }
];

