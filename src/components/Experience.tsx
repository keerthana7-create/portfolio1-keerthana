import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'B.Tech Computer Science Engineering',
      organization: 'CMR Institute of Technology',
      location: 'Hyderabad, TS, India',
      period: '2023 - 2027',
      description: 'Currently pursuing my Bachelor\'s degree with a focus on software engineering, data structures, and emerging technologies.',
      achievements: [
        'Current CGPA: 8.5/10',
        'Dean\'s List for Academic Excellence',
        'Active member of coding club'
      ],
      icon: BookOpen,
      color: 'primary'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and hands-on experiences that shaped my skills
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-px"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-${exp.color} shadow-lg border-2 border-background`}>
                    <div className={`w-full h-full rounded-full bg-${exp.color} animate-glow`}></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'}`}>
                  <Card className="hover-lift bg-card/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-${exp.color}/10`}>
                            <exp.icon className={`h-5 w-5 text-${exp.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium">
                              {exp.organization}
                            </p>
                          </div>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`bg-${exp.color}/10 text-${exp.color} border-${exp.color}/20`}
                        >
                          {exp.type === 'education' ? 'Education' : 'Experience'}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mr-2 flex-shrink-0`}></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;