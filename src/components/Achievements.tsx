import { Trophy, Award, FileText, Star, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      category: 'Hackathons',
      icon: Trophy,
      color: 'primary',
      items: [
        {
          title: 'CMRIT TechFest Hackathon',
          description: 'Won first place for innovative web application addressing campus connectivity',
          achievement: '1st Place Winner',
          date: '2024',
          level: 'College'
        },
        {
          title: 'Google Developer Challenge',
          description: 'Developed mobile app solution for local business digitization',
          achievement: 'Top 50 Finalist',
          date: '2023',
          level: 'Regional'
        }
      ]
    },
    {
      category: 'Academic Excellence',
      icon: Star,
      color: 'accent',
      items: [
        {
          title: 'Dean\'s List Recognition',
          description: 'Achieved outstanding academic performance with CGPA of 8.5+',
          achievement: 'Dean\'s List',
          date: '2023-2024',
          level: 'College'
        },
        {
          title: 'Best Project Award',
          description: 'Recognized for innovative machine learning project in Data Science course',
          achievement: 'Best Project',
          date: '2024',
          level: 'Department'
        },
        {
          title: 'Programming Excellence',
          description: 'Scored 95+ in Data Structures and Algorithms course',
          achievement: 'Academic Excellence',
          date: '2023',
          level: 'Course'
        }
      ]
    },
    {
      category: 'Certifications',
      icon: FileText,
      color: 'neon',
      items: [
        {
          title: 'AWS Cloud Practitioner',
          description: 'Certified in Amazon Web Services cloud computing fundamentals',
          achievement: 'AWS Certified',
          date: '2024',
          level: 'Professional'
        },
        {
          title: 'Google AI/ML Certification',
          description: 'Completed comprehensive machine learning specialization program',
          achievement: 'Google Certified',
          date: '2024',
          level: 'Professional'
        },
        {
          title: 'Meta React Developer',
          description: 'Advanced React.js development skills certification',
          achievement: 'Meta Certified',
          date: '2023',
          level: 'Professional'
        }
      ]
    },
    {
      category: 'Leadership',
      icon: Users,
      color: 'primary',
      items: [
        {
          title: 'Tech Club President',
          description: 'Led college technical club with 200+ members, organized multiple events',
          achievement: 'Leadership Role',
          date: '2024',
          level: 'College'
        }
      ]
    }
  ];

  const stats = [
    { number: '15+', label: 'Projects Completed', icon: Target },
    { number: '3+', label: 'Hackathons Participated', icon: Trophy },
    { number: '6+', label: 'Certifications Earned', icon: FileText },
    { number: '200+', label: 'Students Mentored', icon: Users }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10 border-primary/20',
      accent: 'text-accent bg-accent/10 border-accent/20',
      neon: 'text-neon bg-neon/10 border-neon/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getLevelBadgeColor = (level: string) => {
    const levelMap = {
      'National': 'bg-primary text-primary-foreground',
      'Professional': 'bg-accent text-accent-foreground',
      'Regional': 'bg-neon/80 text-white',
      'College': 'bg-secondary text-secondary-foreground',
      'Department': 'bg-muted text-muted-foreground',
      'Course': 'bg-subtle text-foreground'
    };
    return levelMap[level as keyof typeof levelMap] || levelMap.College;
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that mark my journey in technology and leadership
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center hover-lift bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary/10 text-primary mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 ${getColorClasses(category.color)}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="hover-lift bg-card/30 backdrop-blur-sm border-0 shadow-md hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-foreground">
                          {item.title}
                        </h4>
                        <div className="flex gap-2">
                          <Badge
                            variant="secondary"
                            className={getLevelBadgeColor(item.level)}
                          >
                            {item.level}
                          </Badge>
                        </div>
                      </div>

                      <div className="mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getColorClasses(category.color)}`}>
                          <Award className="h-4 w-4 mr-1" />
                          {item.achievement}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary/5 backdrop-blur-sm border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Ready for New Challenges
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                These achievements represent my commitment to excellence and continuous learning. 
                I'm always seeking new opportunities to grow, contribute, and make a meaningful impact 
                in the technology industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;