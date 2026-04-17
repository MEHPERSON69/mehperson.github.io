/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Box, 
  Search, 
  Sun, 
  Moon, 
  Github, 
  Twitter, 
  Mail, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#", color: "text-accent" },
  { name: "About", href: "#", color: "text-text-muted hover:text-accent" },
  { name: "Blog", href: "#", color: "text-text-muted hover:text-accent" },
];

const POSTS = [
  { date: "14 Aug 2023", title: "Example Cover Image" },
  { date: "22 Feb 2023", title: "A post of Markdown elements" },
  { date: "22 Feb 2023", title: "This post doesn't have any content" },
  { date: "1 Feb 2023", title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id" },
  { date: "30 Jan 2023", title: "Unique tags validation" },
  { date: "27 Jan 2023", title: "Example Social Image" },
  { date: "12 Jun 2022", title: "My Second Post" },
  { date: "13 May 2022", title: "Testing testing 123!" },
];

const TECHNOLOGIES = [
  { name: "Astro", desc: "Build fast websites, faster." },
  { name: "Astro Assets", desc: "Built-in optimized asset support." },
  { name: "Tailwind CSS", desc: "Rapidly build modern websites without ever leaving your HTML." },
  { name: "Markdown", desc: "Simple and easy-to-use markup language." },
  { name: "MDX", desc: "Markdown for the component era." },
  { name: "Satori", desc: "Generating png Open Graph images for blog posts." },
  { name: "Pagefind", desc: "A fully static search library." },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`${isDarkMode ? 'dark bg-bg-primary text-text-primary' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <div className="max-w-[700px] mx-auto px-6 py-12 flex flex-col gap-16 selection:bg-accent selection:text-bg-primary font-mono">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-text-primary rounded-xs">
            <Box className="w-8 h-8 text-bg-primary stroke-[1.5]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Astro Cactus</h1>
        </div>

        <div className="flex items-center gap-6 w-full sm:w-auto">
          <nav className="flex items-center text-sm font-medium">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className={`${link.color} flex items-center ${i < NAV_LINKS.length - 1 ? 'nav-dot' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <button className="p-2 hover:bg-white/5 rounded-md transition-colors text-text-muted hover:text-accent">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-white/5 rounded-md transition-colors text-text-muted hover:text-accent"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          Hello World!
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-muted leading-relaxed"
        >
          <p>
            Hi, I'm a theme for Astro, an example of how you can use this starter to create a personal blog. 
            If you want to know more about how you can customise me, add more posts, and make it your own, 
            click on one the github icon link below which will take you to my repo.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <span className="text-text-muted text-sm">Find me on</span>
          <div className="flex items-center gap-4">
            <a href="#" className="p-1 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="p-1 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-1 hover:text-accent transition-colors"><MessageSquare className="w-5 h-5" /></a>
            <a href="#" className="p-1 hover:text-accent transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </section>

      {/* Posts Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-xl font-bold border-b border-text-muted/20 pb-2 flex items-center gap-2">
          Posts
        </h2>
        
        <div className="flex flex-col gap-4">
          {POSTS.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 group"
            >
              <span className="text-text-muted text-sm w-[100px] shrink-0">{post.date}</span>
              <a href="#" className="text-text-primary hover:text-accent underline decoration-text-muted/30 underline-offset-4 hover:decoration-accent decoration-1">
                {post.title}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-xl font-bold border-b border-text-muted/20 pb-2">
          Technologies
        </h2>
        
        <ul className="flex flex-col gap-4">
          {TECHNOLOGIES.map((tech, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 group"
            >
              <a href="#" className="text-text-primary hover:text-accent border-b border-accent/0 hover:border-accent">
                {tech.name}
              </a>
              <span className="hidden sm:inline text-text-muted">:</span>
              <span className="text-text-muted flex-1 leading-relaxed">
                {tech.desc}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-16 border-t border-text-muted/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span>Copyright © 2026</span>
          <span className="inline-block animate-bounce">🚀</span>
          <a href="#" className="hover:text-accent">Astro Cactus</a>
        </div>
        
        <nav className="flex items-center gap-3">
          <a href="#" className="hover:text-accent border-r border-text-muted/30 pr-3">Home</a>
          <a href="#" className="hover:text-accent border-r border-text-muted/30 pr-3">About</a>
          <a href="#" className="hover:text-accent">Blog</a>
        </nav>
      </footer>
    </div>
    </div>
  );
}
