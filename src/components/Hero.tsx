import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import techWorkspace from '@/assets/tech-workspace.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Keerthana_Yadav_Resume.pdf';
    link.download = 'Keerthana_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${techWorkspace})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-neon/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm{' '}
            <span className="gradient-text-accent">
              Keerthana Yadav
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            <div className="mb-2">B.Tech CSE Student</div>
            <div className="text-lg text-white/80">
              Aspiring Software Engineer | AI & Web Enthusiast
            </div>
          </div>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. 
            Exploring the frontiers of AI, web development, and software engineering 
            to build impactful applications that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg backdrop-blur-sm"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
              <span className="block text-sm mt-2">Scroll to explore</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
    </section>
  );
};

export default Hero;