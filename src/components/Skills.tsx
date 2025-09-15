import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  GitBranch,
  Server,
  Palette
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'primary',
      skills: [
        { name: 'Python', level: 90, description: 'Data Science, Web Development, AI/ML' },
        { name: 'Java', level: 85, description: 'Object-oriented programming, DSA' },
        { name: 'JavaScript', level: 88, description: 'Frontend & Backend development' },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'accent',
      skills: [
        { name: 'React.js', level: 90, description: 'Modern frontend development' },
        { name: 'Node.js', level: 80, description: 'Backend API development' },
        { name: 'HTML/CSS', level: 95, description: 'Semantic markup, responsive design' },
      ]
    },
    {
      title: 'Database & Backend',
      icon: Database,
      color: 'neon',
      skills: [
        { name: 'MongoDB', level: 80, description: 'NoSQL database management' },
        { name: 'Express.js', level: 82, description: 'RESTful API development' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'primary',
      skills: [
        { name: 'Pandas', level: 80, description: 'Data manipulation and analysis' },
        { name: 'NumPy', level: 85, description: 'Numerical computing' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'accent',
      skills: [
        { name: 'React Native', level: 75, description: 'Cross-platform mobile apps' },
        { name: 'Flutter', level: 65, description: 'Cross-platform development' },
        { name: 'Android Studio', level: 70, description: 'Native Android development' },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: GitBranch,
      color: 'neon',
      skills: [
        { name: 'Git/GitHub', level: 90, description: 'Version control systems' },
        { name: 'VS Code', level: 95, description: 'Integrated Development Environment' },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary bg-primary/10 border-primary/20',
      accent: 'text-accent bg-accent/10 border-accent/20',
      neon: 'text-neon bg-neon/10 border-neon/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="hover-lift bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 ${getColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-medium ${getColorClasses(category.color).split(' ')[0]}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                      
                      <p className="text-xs text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;