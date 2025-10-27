import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Customer Sentiment Analysis",
      description: "Developed a machine learning model to analyze customer reviews and feedback using natural language processing. Achieved 92% accuracy in sentiment classification using BERT and transformer models.",
      technologies: ["Python", "BERT", "TensorFlow", "Pandas", "Streamlit"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2024",
      image: "🤖",
      status: "Completed"
    },
    {
      title: "Smart Traffic Management System",
      description: "Created an intelligent traffic management system using computer vision and IoT sensors. The system optimizes traffic flow and reduces congestion by 30% in simulation environments.",
      technologies: ["OpenCV", "YOLOv5", "IoT", "Python", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2024",
      image: "🚦",
      status: "Completed"
    },
    {
      title: "Predictive Healthcare Analytics Platform",
      description: "Built a comprehensive healthcare analytics platform that predicts disease outbreaks and patient readmission rates using ensemble learning methods and real-time data processing.",
      technologies: ["Scikit-learn", "Apache Kafka", "React", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023",
      image: "🏥",
      status: "Completed"
    },
    {
      title: "Automated Code Review Assistant",
      description: "Developing an AI assistant that automatically reviews code for bugs, security vulnerabilities, and performance issues using static analysis and machine learning techniques.",
      technologies: ["AST", "Machine Learning", "Python", "Git", "CI/CD"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2024",
      image: "💻",
      status: "In Progress"
    },
    {
      title: "Blockchain-based Supply Chain Tracker",
      description: "Implemented a transparent supply chain tracking system using blockchain technology to ensure product authenticity and reduce counterfeiting in pharmaceutical industry.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "React", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023",
      image: "⛓️",
      status: "Completed"
    },
    {
      title: "Real-time Object Detection for Autonomous Vehicles",
      description: "Created a real-time object detection system for autonomous vehicles using advanced computer vision techniques. Optimized for edge computing with 95% accuracy at 30 FPS.",
      technologies: ["PyTorch", "OpenCV", "CUDA", "TensorRT", "ROS"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2024",
      image: "🚗",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating practical applications of AI, 
            machine learning, and data science in solving real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-smooth transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-4">{project.image}</div>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="ml-2"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 group/btn">
                    <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-smooth" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 group/btn">
                    <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-12 transition-smooth" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>  

        <div className="text-center mt-12">
          <div className="text-center mt-12">
          <a href="https://github.com/sukesh-006" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="transition-bounce hover:scale-105">
            View All Projects on GitHub 
          </Button>   
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;