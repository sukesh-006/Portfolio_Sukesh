import { Code, Brain, Database, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence & Data Science",
      description: "Machine Learning, Deep Learning, Neural Networks, Computer Vision, Data Analysis, Statistical Modeling, Data Visualization, Big Data"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Full Stack Development & Databases",
      description: "Front-End, Back-End, Database Layer, Version Control and Deployment, SQL Databases"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Python, R, SQL, JavaScript, TensorFlow, PyTorch, Scikit-learn"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Research",
      description: "Academic Research, Innovation, Problem Solving, Technical Writing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Pre-Final year B.Tech student specializing in Artificial Intelligence and Data Science, 
            with a passion for innovation and research in emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently pursuing my Bachelor's degree in AI & Data Science, I've been fascinated by the 
                potential of artificial intelligence to solve real-world problems and transform industries.
              </p>
              <p>
                Through my academic journey, I've gained hands-on experience in machine learning algorithms, 
                data analysis techniques,web development and software development. I'm particularly interested in areas like 
                computer vision, natural language processing, website development and predictive analytics.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technological advancements. 
                My goal is to contribute meaningfully to the field of AI and make a positive impact through innovation.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="text-primary mb-3">{skill.icon}</div>
                    <h4 className="font-semibold text-foreground mb-2">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Education</h3>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-primary pl-8 pb-8">
              <div className="relative">
                <div className="absolute -left-[2.75rem] w-6 h-6 bg-primary rounded-full"></div>
                <h4 className="text-xl font-semibold text-foreground">B.Tech in Artificial Intelligence & Data Science</h4>
                <p className="text-primary font-medium">V.S.B College of Engineering Technical Campus</p>
                <p className="text-muted-foreground">2023 - 2027 (Expected)</p>
                <p className="text-muted-foreground mt-2">Current CGPA: 8.5/10.0</p>
                <p className="text-muted-foreground mt-2">
                  Relevant Coursework: Full Stack Developing, Machine Learning, Data Structures & Algorithms, 
                  Database Management Systems, Computer Vision, Natural Language Processing, 
                  Statistics, Linear Algebra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;