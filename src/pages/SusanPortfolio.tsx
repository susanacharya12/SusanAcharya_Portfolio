import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Globe, Award, GraduationCap, Languages, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SusanPortfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Developed a fully functional e-commerce site with user authentication, shopping cart, and checkout features.",
      tech: ["Django", "Django REST Framework", "MySQL/PostgreSQL"],
      features: ["RESTful APIs", "Responsive UI", "Bootstrap"],
      icon: <Globe className="h-6 w-6" />,
      details: [
        "Designed and implemented RESTful APIs to support frontend and mobile app integration",
        "Built a responsive UI using HTML, CSS, and Bootstrap"
      ]
    },
    {
      title: "Student Management System (CRUD)",
      description: "Created a web app with admin dashboard for managing student records, including basic data visualization.",
      tech: ["Django", "SQLite3"],
      features: ["CRUD Operations", "Admin Dashboard", "Data Visualization"],
      icon: <Database className="h-6 w-6" />,
      details: []
    },
    {
      title: "E-Governance Web Portal",
      description: "Built a multilingual public service request portal with user forms, admin panel, and automated email notifications.",
      tech: ["Django", "Bootstrap", "i18n"],
      features: ["Multilingual", "Email Notifications", "Admin Panel"],
      icon: <Globe className="h-6 w-6" />,
      details: []
    },
    {
      title: "Urban Mobility App Prototype",
      description: "Collaborated in a team of 4 to design and deploy a live prototype of a real-time urban mobility app.",
      tech: ["MongoDB", "Mongoose", "OpenCage"],
      features: ["Real-time Data", "Team Collaboration", "Live Deployment"],
      icon: <Award className="h-6 w-6" />,
      details: ["Hackathon Project"]
    }
  ];

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    backend: ["Python", "Django", "Django REST Framework"],
    apis: ["RESTful API design & development"],
    databases: ["MySQL", "PostgreSQL", "SQLite3", "MongoDB"],
    tools: ["Git & GitHub", "VS Code", "PyCharm", "Postman", "Figma (basic)"],
    softSkills: ["Communication", "Teamwork", "Problem-solving", "Time Management", "Adaptability"]
  };

  const certificates = [
    {
      name: "Python Bootcamp",
      description: "Completed a hands-on training covering Python basics, data structures, and practical programming exercises."
    },
    {
      name: "Django Web Framework",
      description: "Learned to build dynamic web applications using Django, with experience in models, views, templates, and deployment."
    }
  ];

  const achievements = [
    "Top 15 Finalist - Code Yatra Hackathon 2024, contributing to the Urban Mobility App Prototype",
    "Completed multiple Django mini-projects during university coursework"
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Nepali", level: "Native" },
    { name: "Hindi", level: "Intermediate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-800/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-800/10 rounded-full animate-bounce" style={{ animationDuration: "6s" }}></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-cyan-200/25 dark:bg-cyan-800/15 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-20 animate-float opacity-20">
          <Code className="h-8 w-8 text-blue-500" />
        </div>
        <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: "1s" }}>
          <Database className="h-6 w-6 text-indigo-500" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float opacity-20" style={{ animationDelay: "3s" }}>
          <Globe className="h-7 w-7 text-cyan-500" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8ab75cab-7ad6-402c-8813-a757538bc869.png" 
              alt="Susan Acharya"
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-slate-700 animate-fade-in hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Hi I am Susan Acharya
          </h1>
          
          <p className="text-2xl text-black dark:text-white font-semibold mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Junior Django & Python Developer
          </p>
          
          <p className="text-lg text-black/80 dark:text-white/80 max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Motivated junior Python and web developer with hands-on experience building scalable, user-friendly web applications using Django and Python. Skilled in RESTful API design, modern web technologies, and responsive design. Strong problem solver and team player. Currently pursuing a BSc in Computer Science and Information Technology. Seeking opportunities to contribute and grow as a developer.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" />
              <span>susanacharya.sp@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="h-5 w-5" />
              <span>+977 9824562967</span>
            </div>
            <div className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <MapPin className="h-5 w-5" />
              <span>Nepal</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform text-black dark:text-white border-black/20 dark:border-white/20">
              <a href="https://www.linkedin.com/in/susan-acharya1618" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform text-black dark:text-white border-black/20 dark:border-white/20">
              <a href="https://github.com/susanacharya12" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform text-black dark:text-white border-black/20 dark:border-white/20">
              <a href="https://drive.google.com/file/d/1W_4u0fkNK7W7u5uY9lmeewPLZd0GnYAe/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                CV
              </a>
            </Button>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12 animate-fade-in">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 hover:border-blue-300 dark:hover:border-blue-600 animate-fade-in hover:scale-105`}
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors">
                      {project.icon}
                    </div>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 dark:text-white/80 mb-4">
                    {project.description}
                  </p>
                  
                  {project.details.length > 0 && (
                    <ul className="list-disc list-inside text-black/70 dark:text-white/70 mb-4 text-sm space-y-1">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>- {detail}</li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-black dark:text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black dark:text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12 animate-fade-in">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card 
                key={category} 
                className={`hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in hover:scale-105`}
                style={{ animationDelay: `${1.8 + index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-black dark:text-white capitalize">
                    {category === 'softSkills' ? 'Soft Skills' : category.replace(/([A-Z])/g, ' $1').trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education, Certificates, Achievements & Languages */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in hover:scale-105" style={{ animationDelay: "2.5s" }}>
            <CardHeader>
              <CardTitle className="text-black dark:text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-black dark:text-white">BSc. Computer Science and Information Technology (CSIT)</h3>
              <p className="text-black/80 dark:text-white/80">Bhaktapur Multiple Campus, Tribhuvan University</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in hover:scale-105" style={{ animationDelay: "2.7s" }}>
            <CardHeader>
              <CardTitle className="text-black dark:text-white flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-black dark:text-white">{language.name}</span>
                    <Badge variant="outline">{language.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certificates Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12 animate-fade-in">
            Certificates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in hover:scale-105"
                style={{ animationDelay: `${2.9 + index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-black dark:text-white">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 dark:text-white/80">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-fade-in hover:scale-105" style={{ animationDelay: "3.1s" }}>
            <CardHeader>
              <CardTitle className="text-black dark:text-white flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Achievements and Participation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-black/80 dark:text-white/80">
                {achievements.map((achievement, index) => (
                  <li key={index}>• {achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}