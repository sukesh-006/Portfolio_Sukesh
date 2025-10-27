import { GraduationCap, Award, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CoursesSection = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Stanford University (Coursera)",
      instructor: "Andrew Ng",
      completion: "2024",
      status: "Completed",
      grade: "98%",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Deep Learning"],
      credentialUrl: "#"
    },
    {
      title: "Deep Learning Specialization",
      provider: "DeepLearning.AI (Coursera)",
      instructor: "Andrew Ng",
      completion: "2024",
      status: "Completed",
      grade: "96%",
      skills: ["CNN", "RNN", "LSTM", "GANs", "Transformers"],
      credentialUrl: "#"
    },
    {
      title: "AWS Certified Machine Learning - Specialty",
      provider: "Amazon Web Services",
      completion: "2024",
      status: "Completed",
      grade: "Pass",
      skills: ["AWS SageMaker", "AWS ML Services", "MLOps", "Model Deployment"],
      credentialUrl: "#"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      provider: "Google (Coursera)",
      completion: "2023",
      status: "Completed",
      grade: "95%",
      skills: ["SQL", "Tableau", "R", "Data Visualization", "Statistics"],
      credentialUrl: "#"
    },
    {
      title: "Web Development",
      provider: "Corizo",
      completion: "2024",
      status: "Completed",
      grade: "Pass",
      skills: ["Front end", "Back end", "Version Control", "Database management", "Deployment"],
      credentialUrl: "#"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      provider: "Microsoft",
      completion: "2023",
      status: "Completed",
      grade: "Pass",
      skills: ["Azure AI", "Cognitive Services", "Machine Learning", "Bot Framework"],
      credentialUrl: "#"
    }
  ];

  const ongoingCourses = [
    {
      title: "Prompt Engineering for GenAI",
      provider: "Internshala",
      progress: 75,
      expectedCompletion: "December 2025",
      skills: ["Communication", "Critical Thinking", "NLP", "Problem-Solving"]
    },
    {
      title: "Core Java with AI",
      provider: "w3schools",
      progress: 60,
      expectedCompletion: "January 2026",
      skills: ["OOPS", "Error-Handling", "Multi-Threading", "Jr JAVA Developer"]
    }
  ];

  const academicCourses = [
    {
      title: "Data Structures and Algorithms",
      semester: "Semester 3",
      grade: "A+",
      credits: 4,
      
    },
    {
      title: "Machine Learning",
      semester: "Semester 4",
      grade: "A+",
      credits: 4,
      
    },
    {
      title: "Database Management Systems",
      semester: "Semester 4",
      grade: "A",
      credits: 3,
      
    },
    {
      title: "Artificial Intelligence",
      semester: "Semester 4",
      grade: "A+",
      credits: 4,
      
    },
    {
      title: "Computer Networks",
      semester: "Semester 4",
      grade: "In Progress",
      credits: 3,
     
    },
    {
      title: "Big Data Analytics",
      semester: "Semester 6",
      grade: "In Progress",
      credits: 4,
     
    },

    {
      title: "Data and Information Security",
      semester: "Semester 6",
      grade: "In Progress",
      credits: 4,
     
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Courses & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through professional certifications, specialized courses, 
            and academic coursework to stay current with industry trends.
          </p>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <Award className="mr-3 text-primary" size={28} />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-bold text-foreground">{cert.title}</CardTitle>
                    <CheckCircle className="text-green-500" size={20} />
                  </div>
                  <p className="text-primary font-medium">{cert.provider}</p>
                  {cert.instructor && (
                    <p className="text-sm text-muted-foreground">Instructor: {cert.instructor}</p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Completed:</span>
                      <span className="font-medium">{cert.completion}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Grade:</span>
                      <Badge variant="outline">{cert.grade}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <Clock className="mr-3 text-tech" size={28} />
            Currently Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingCourses.map((course, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">{course.title}</CardTitle>
                  <p className="text-primary font-medium">{course.provider}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Expected Completion:</span>
                      <span className="font-medium">{course.expectedCompletion}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Courses */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
            <GraduationCap className="mr-3 text-primary" size={28} />
            Academic Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicCourses.map((course, index) => (
              <Card key={index} className="bg-card border shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">{course.title}</CardTitle>
                  <p className="text-muted-foreground">{course.semester}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Grade:</span>
                      <Badge 
                        variant={course.grade === 'A+' ? 'default' : course.grade === 'A' ? 'secondary' : 'outline'}
                      >
                        {course.grade}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Credits:</span>
                      <span className="font-medium">{course.credits}</span>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;