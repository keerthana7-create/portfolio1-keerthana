import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import medicoApp from '@/assets/medico-app.jpg';
import bookExchange from '@/assets/book-exchange.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Medico - Personalized Healthcare Assistant',
      description: 'Medico is a web-based medical assistant that empowers users to get personalized AI-driven medical advice and tablet information using Optical Character Recognition (OCR). It\'s designed with accessibility in mind — including multi-language voice output — to help even illiterate users understand medicine details clearly.',
      image: medicoApp,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Google Gemini API', 'Tesseract.js'],
      githubUrl: 'https://github.com/keerthana7-create/Medico',
      liveUrl: 'https://keerthana7-create.github.io/Medico/',
      category: 'Healthcare AI',
      highlights: [
        'Patient Profile with local storage',
        'AI Medical Query Assistant',
        'Tablet Scanner with OCR + AI',
        'Multi-language Voice Output',
        'Built-in Safety Warnings',
        'Accessibility for visually impaired users'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative healthcare solution using AI, OCR, and accessibility features
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="group hover-lift bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl overflow-hidden animate-fade-in max-w-2xl">
            <div className="relative overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Badge
                variant="secondary"
                className="absolute top-4 left-4 bg-white/90 text-primary font-medium"
              >
                {projects[0].category}
              </Badge>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {projects[0].title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {projects[0].description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {projects[0].highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <Code className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[0].technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/20 text-primary bg-primary/5 hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  asChild
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <a
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/20 text-primary hover:bg-primary/10"
                >
                  <a
                    href={projects[0].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;