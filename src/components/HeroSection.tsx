import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  const downloadResume = () => {
    // Create a sample resume download
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/12nUZVG_ytrPi3b2IBuIGYp1HezimmoXP/view?usp=sharing"; // You can replace this with actual resume URL
    link.download = 'R_SUKESH_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow rounded-full filter blur-3xl animate-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech rounded-full filter blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-foreground shadow-strong">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-20 transition-smooth"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-primary-glow to-tech bg-clip-text text-transparent">R SUKESH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4">
            Pre-Final Year B.Tech AI & Data Science Student
          </p>
          
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Passionate about artificial intelligence, machine learning, and data science. 
            Building innovative solutions and contributing to cutting-edge research in AI.
            Also skilled in web development and software engineering.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium transition-bounce"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium transition-bounce"
              onClick={downloadResume}
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/sukesh-006" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sukesh-r-68a786326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="sukeshvsb@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;