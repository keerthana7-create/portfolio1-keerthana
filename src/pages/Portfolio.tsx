import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Keerthana Yadav. Designed & Built with ❤️ using React, TypeScript & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              All rights reserved. Made with passion for innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;