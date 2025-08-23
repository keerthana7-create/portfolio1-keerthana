import { Code, Database, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import keerthanaHeadshot from '@/assets/keerthana-headshot.jpg';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Python, Java, JavaScript, C++',
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'React, Node.js, HTML/CSS, Tailwind',
      color: 'text-accent'
    },
    {
      icon: Database,
      title: 'Data Structures',
      description: 'Algorithms, DSA, Problem Solving',
      color: 'text-neon'
    },
    {
      icon: Brain,
      title: 'AI & ML',
      description: 'Machine Learning, Deep Learning, AI',
      color: 'text-primary'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, constantly learning and growing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-glow transition-all duration-500 hover:scale-105">
                <img
                  src={keerthanaHeadshot}
                  alt="Keerthana Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-xl opacity-30" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full blur-xl opacity-30" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Building Tomorrow's Solutions Today
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Keerthana Yadav, a passionate Computer Science Engineering student 
                  currently in my 2nd year at CMR Institute of Technology. With a strong 
                  foundation in programming and a keen interest in emerging technologies, 
                  I'm on a mission to create impactful software solutions.
                </p>
                <p>
                  My journey in tech began with curiosity about how applications work, 
                  which led me to explore various domains including web development, 
                  artificial intelligence, and mobile app development. I believe in 
                  the power of technology to solve real-world problems and improve lives.
                </p>
                <p>
                  Beyond coding, I actively participate in hackathons, Model United Nations, 
                  and various technical events that help me grow both professionally and personally. 
                  I'm always eager to learn new technologies and collaborate on innovative projects.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Enthusiast'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="hover-lift hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-primary/10 ${skill.color}`}>
                  <skill.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {skill.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;