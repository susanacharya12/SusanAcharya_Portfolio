import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Globe, Award, GraduationCap, Languages, Trophy, Download, Send, User, BookOpen, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function SusanPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const introText = "Hi I am Susan Acharya";

  useEffect(() => {
    setIsVisible(true);
    // Typing animation
    let index = 0;
    const typing = setInterval(() => {
      if (index < introText.length) {
        setTypedText(introText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 150);

    return () => clearInterval(typing);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Developed a fully functional e-commerce site with user authentication, shopping cart, and checkout features. Designed and implemented RESTful APIs to support frontend and mobile app integration. Built a responsive UI using HTML, CSS, and Bootstrap.",
      tech: ["Django", "Django REST Framework", "MySQL/PostgreSQL"],
      features: ["User Authentication", "Shopping Cart", "Checkout Features", "RESTful APIs", "Responsive UI"],
      icon: <ShoppingCart className="h-6 w-6" />,
      github: "https://github.com/susanacharya12/django-ecommerce.git",
      demo: "Coming Soon"
    },
    {
      title: "Student Management System",
      description: "Created a web app with admin dashboard for managing student records, including basic data visualization.",
      tech: ["Django", "SQLite3"],
      features: ["CRUD Operations", "Admin Dashboard", "Data Visualization"],
      icon: <Users className="h-6 w-6" />,
      github: "https://github.com/susanacharya12/student-management-system.git",
      demo: "Coming Soon"
    },
    {
      title: "E-Governance Portal",
      description: "Built a multilingual public service request portal with user forms, admin panel, and automated email notifications.",
      tech: ["Django", "Bootstrap", "i18n"],
      features: ["Multilingual Support", "Email Notifications", "Admin Panel", "User Forms"],
      icon: <BookOpen className="h-6 w-6" />,
      github: "https://github.com/susanacharya12",
      demo: "Coming Soon"
    },
    {
      title: "Python Projects",
      description: "A collection of simple Python-based projects created using pure Python (no external libraries or frameworks), including: Password Generator, Random Number Game, Rock Paper Scissors, Treasure Island Game.",
      tech: ["Python"],
      features: ["Password Generator", "Random Number Game", "Rock Paper Scissors", "Treasure Island Game"],
      icon: <Code className="h-6 w-6" />,
      github: "https://github.com/susanacharya12/Python-Project.git",
      demo: "Coming Soon"
    }
  ];

  const skills = {
    frontend: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "💫" },
      { name: "Bootstrap", icon: "📱" },
      { name: "Responsive Design", icon: "📐" }
    ],
    backend: [
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🚀" },
      { name: "Django REST Framework", icon: "🔗" },
      { name: "RESTful APIs", icon: "⚡" }
    ],
    databases: [
      { name: "MySQL", icon: "🗄️" },
      { name: "SQLite3", icon: "💾" }
    ],
    tools: [
      { name: "Git", icon: "📝" },
      { name: "GitHub", icon: "🔧" },
      { name: "Visual Studio Code", icon: "💻" }
    ],
    softSkills: [
      { name: "Problem Solving", icon: "🧠" },
      { name: "Team Collaboration", icon: "🤝" },
      { name: "Communication", icon: "🗣️" },
      { name: "Adaptability", icon: "🔄" }
    ]
  };

  const certificates = [
    {
      name: "🟩 Python Bootcamp",
      description: "Completed a hands-on training covering Python basics, data structures, and practical programming exercises.",
      link: "https://www.udemy.com/certificate/UC-0bffe5ad-cd58-40fd-ab5d-a536fd3c6837/"
    },
    {
      name: "🟦 Python for Beginners – Learns All The Basics Of Python",
      description: "Covered beginner-level topics including: Variables and data types, Functions and loops, Conditionals, Lists and dictionaries.",
      link: "https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/"
    },
    {
      name: "🟨 Python for Data Science – Real Time Exercises",
      description: "Focused on: Python fundamentals, Object-Oriented Programming (OOP), Use cases for data science.",
      link: "https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/"
    },
    {
      name: "🏅 Hackathon Certificate – CODEYATRA",
      description: "Awarded for actively participating in CODEYATRA, a 48-hour hackathon hosted at Himalayan College of Engineering.",
      link: "https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  const coreSubjects = [
    "Data Structures & Algorithms",
    "Web Technologies",
    "Operating Systems",
    "Software Engineering",
    "Object-Oriented Programming (Java, C++)",
    "Computer Networks",
    "Python Programming"
  ];

  const achievements = [
    "Participated in a 48-hour hackathon organized by CodeYaatra at Himalayan College of Engineering"
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Nepali", level: "Native" },
    { name: "Hindi", level: "Intermediate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient orbs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 dark:from-blue-800/20 dark:to-cyan-800/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-l from-indigo-200/20 to-purple-200/20 dark:from-indigo-800/10 dark:to-purple-800/10 rounded-full animate-bounce" style={{ animationDuration: "8s" }}></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-gradient-to-t from-cyan-200/25 to-sky-200/25 dark:from-cyan-800/15 dark:to-sky-800/15 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 animate-float opacity-20">
          <Code className="h-8 w-8 text-blue-500" />
        </div>
        <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: "1s" }}>
          <Database className="h-6 w-6 text-indigo-500" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float opacity-20" style={{ animationDelay: "3s" }}>
          <Globe className="h-7 w-7 text-cyan-500" />
        </div>
        <div className="absolute top-60 left-1/2 animate-float opacity-20" style={{ animationDelay: "2s" }}>
          <Award className="h-5 w-5 text-purple-500" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Enhanced Header Section with Typing Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8ab75cab-7ad6-402c-8813-a757538bc869.png" 
              alt="Susan Acharya"
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-slate-700 animate-fade-in hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent min-h-[80px] flex items-center justify-center">
              {typedText}<span className="animate-pulse">|</span>
            </h1>
          </div>
          
          <p className="text-2xl text-black dark:text-white font-semibold mb-2 animate-fade-in" style={{ animationDelay: "3s" }}>
            Junior Django & Python Developer
          </p>
          
          <p className="text-lg text-black/80 dark:text-white/80 max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "3.2s" }}>
            Motivated junior Python and web developer with hands-on experience building scalable, user-friendly web applications using Django and Python. Skilled in RESTful API design, modern web technologies, and responsive design. Strong problem solver and team player. Currently pursuing a BSc in Computer Science and Information Technology. Seeking opportunities to contribute and grow as a developer.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: "3.4s" }}>
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
          
          {/* Social Links & Resume */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "3.6s" }}>
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
            <Button variant="default" size="sm" asChild className="hover:scale-105 transition-transform bg-blue-600 hover:bg-blue-700">
              <a href="https://drive.google.com/file/d/13DoHYjq6JXhnMH5o8w0pyyZ7GnZaPRIw/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Enhanced Projects Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12 animate-fade-in">
            💻 Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 hover:border-blue-300 dark:hover:border-blue-600 animate-fade-in hover:scale-[1.02]`}
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
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-black dark:text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" disabled className="flex-1 opacity-60">
                      <Globe className="h-4 w-4 mr-2" />
                      {project.demo}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12 animate-fade-in">
            ⚙️ Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card 
                key={category} 
                className={`hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm animate-fade-in hover:scale-105`}
                style={{ animationDelay: `${2 + index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-black dark:text-white text-lg">
                    {category === 'frontend' && '🖥️ Frontend'}
                    {category === 'backend' && '🛠️ Backend'}
                    {category === 'databases' && '🗄️ Databases'}
                    {category === 'tools' && '🧰 Tools'}
                    {category === 'softSkills' && '💡 Soft Skills'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Education Section */}
        <section className="mb-20">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm animate-fade-in hover:scale-105" style={{ animationDelay: "2.5s" }}>
            <CardHeader>
              <CardTitle className="text-black dark:text-white flex items-center gap-2 text-2xl">
                <GraduationCap className="h-6 w-6" />
                🎓 Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">BSc. Computer Science and Information Technology (CSIT)</h3>
              <p className="text-black/80 dark:text-white/80 mb-4">Bhaktapur Multiple Campus, Tribhuvan University</p>
              
              <h4 className="font-semibold text-black dark:text-white mb-3">Core Subjects:</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {coreSubjects.map((subject, index) => (
                  <Badge key={index} variant="outline" className="justify-start p-2">
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Enhanced Certificates Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12 animate-fade-in">
            📜 Certificates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm animate-fade-in hover:scale-105 p-6"
                style={{ animationDelay: `${3 + index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-black dark:text-white text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/80 dark:text-white/80 mb-4">{cert.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      🔗 View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm animate-fade-in hover:scale-105" style={{ animationDelay: "3.5s" }}>
            <CardHeader>
              <CardTitle className="text-black dark:text-white flex items-center gap-2 text-2xl">
                <Trophy className="h-6 w-6" />
                🏆 Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-black/80 dark:text-white/80">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">⭐</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Languages Section */}
        <section className="mb-20">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm animate-fade-in hover:scale-105" style={{ animationDelay: "3.7s" }}>
            <CardHeader>
              <CardTitle className="text-black dark:text-white flex items-center gap-2 text-2xl">
                <Languages className="h-6 w-6" />
                🌐 Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="text-lg font-semibold text-black dark:text-white">{language.name}</span>
                    <Badge variant="secondary">{language.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm animate-fade-in hover:scale-105" style={{ animationDelay: "4s" }}>
            <CardHeader>
              <CardTitle className="text-black dark:text-white flex items-center gap-2 text-2xl">
                <Send className="h-6 w-6" />
                📬 Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-black dark:text-white">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-black dark:text-white">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-black dark:text-white">Subject</Label>
                    <Input id="subject" placeholder="Enter subject" className="mt-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="message" className="text-black dark:text-white">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="mt-1 min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}