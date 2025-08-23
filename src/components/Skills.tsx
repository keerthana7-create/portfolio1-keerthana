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
        { name: 'C++', level: 75, description: 'Competitive programming, DSA' },
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
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' },
      ]
    },
    {
      title: 'Database & Backend',
      icon: Database,
      color: 'neon',
      skills: [
        { name: 'MongoDB', level: 80, description: 'NoSQL database management' },
        { name: 'PostgreSQL', level: 75, description: 'Relational database design' },
        { name: 'Express.js', level: 82, description: 'RESTful API development' },
        { name: 'Firebase', level: 78, description: 'Backend-as-a-Service platform' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'primary',
      skills: [
        { name: 'TensorFlow', level: 70, description: 'Deep learning frameworks' },
        { name: 'Scikit-learn', level: 75, description: 'Machine learning algorithms' },
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
        { name: 'Docker', level: 60, description: 'Containerization technology' },
        { name: 'AWS', level: 55, description: 'Cloud computing platform' },
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

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Additional Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palette, title: 'UI/UX Design', description: 'Figma, Adobe XD, Design Systems' },
              { icon: Server, title: 'System Design', description: 'Scalable Architecture, Design Patterns' },
              { icon: Brain, title: 'Problem Solving', description: 'Algorithmic Thinking, Optimization' },
              { icon: GitBranch, title: 'Project Management', description: 'Agile, Scrum, Team Leadership' }
            ].map((skill, index) => (
              <Card
                key={skill.title}
                className="text-center hover-lift bg-card/30 backdrop-blur-sm border-0 shadow-md hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary/10 text-primary mb-4">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
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
      </div>
    </section>
  );
};

export default Skills;