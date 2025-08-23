import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import medicoApp from '@/assets/medico-app.jpg';
import bookExchange from '@/assets/book-exchange.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Medico App',
      description: 'A comprehensive healthcare application that connects patients with healthcare providers, featuring appointment booking, medical records management, and telemedicine capabilities.',
      image: medicoApp,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Firebase'],
      githubUrl: 'https://github.com/keerthana/medico-app',
      liveUrl: 'https://medico-app-demo.com',
      category: 'Mobile App',
      highlights: [
        'Real-time chat with doctors',
        'Secure medical data storage',
        'Push notifications for appointments',
        'Multi-language support'
      ]
    },
    {
      title: 'Book Exchange Platform',
      description: 'A web platform that enables students to exchange textbooks, creating a sustainable and cost-effective solution for academic resources with rating and review systems.',
      image: bookExchange,
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
      githubUrl: 'https://github.com/keerthana/book-exchange',
      liveUrl: 'https://book-exchange-platform.com',
      category: 'Web App',
      highlights: [
        'Smart book matching algorithm',
        'User rating and review system',
        'Location-based exchange',
        'Wishlist and notifications'
      ]
    },
    {
      title: 'AI Recipe Generator',
      description: 'An intelligent recipe suggestion system that uses machine learning to recommend personalized recipes based on available ingredients, dietary preferences, and nutritional goals.',
      image: bookExchange, // Reusing for now
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'MongoDB'],
      githubUrl: 'https://github.com/keerthana/ai-recipe-generator',
      liveUrl: 'https://ai-recipe-gen.com',
      category: 'AI/ML',
      highlights: [
        'Ingredient-based recipe matching',
        'Nutritional analysis',
        'Dietary restriction filters',
        'User preference learning'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my latest work in web development, mobile apps, and AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover-lift bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge
                  variant="secondary"
                  className="absolute top-4 left-4 bg-white/90 text-primary font-medium"
                >
                  {project.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <Code className="h-3 w-3 mr-2 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary bg-primary/5 hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-muted text-muted-foreground"
                      >
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 text-primary hover:bg-primary/10"
                  >
                    <a
                      href={project.liveUrl}
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/20 text-primary hover:bg-primary/10"
          >
            <a
              href="https://github.com/keerthana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;