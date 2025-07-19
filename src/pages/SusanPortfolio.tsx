import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Code, Database, Globe, Award, GraduationCap, Languages, Trophy, Download, Send, User, BookOpen, ShoppingCart, Users, Monitor, Server, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import studentManagementImage from "@/assets/student-management-project.jpg";
import egovernanceImage from "@/assets/egovernance-project.jpg";
import pythonProjectsImage from "@/assets/python-projects.jpg";

export default function SusanPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const introText = "Susan Acharya";

  useEffect(() => {
    setIsVisible(true);
    // Enhanced typing animation
    let index = 0;
    const typing = setInterval(() => {
      if (index < introText.length) {
        setTypedText(introText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const navigationSections = [
    { id: "projects", label: "Featured Projects" },
    { id: "skills", label: "Skills & Technologies" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "achievements", label: "Achievements" },
    { id: "connect", label: "Let's Connect" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Developed a fully functional e-commerce site with user authentication, shopping cart, and checkout features. Designed and implemented RESTful APIs to support frontend and mobile app integration. Built a responsive UI using HTML, CSS, and Bootstrap.",
      tech: ["Django", "Django REST Framework", "MySQL/PostgreSQL"],
      features: ["User Authentication", "Shopping Cart", "Checkout Features", "RESTful APIs", "Responsive UI"],
      icon: <ShoppingCart className="h-6 w-6" />,
      github: "https://github.com/susanacharya12/django-ecommerce.git",
      demo: "Coming Soon",
      image: ecommerceImage
    },
    {
      title: "Student Management System (CRUD)",
      description: "Created a web app with admin dashboard for managing student records, including basic data visualization.",
      tech: ["Django", "SQLite3"],
      features: ["CRUD Operations", "Admin Dashboard", "Data Visualization"],
      icon: <Users className="h-6 w-6" />,
      github: "https://github.com/susanacharya12/student-management-system.git",
      demo: "Coming Soon",
      image: studentManagementImage
    },
    {
      title: "E-Governance Web Portal",
      description: "Built a multilingual public service request portal with user forms, admin panel, and automated email notifications.",
      tech: ["Django", "Bootstrap", "i18n"],
      features: ["Multilingual Support", "Email Notifications", "Admin Panel", "User Forms"],
      icon: <BookOpen className="h-6 w-6" />,
      github: "https://github.com/susanacharya12",
      demo: "Coming Soon",
      image: egovernanceImage
    },
    {
      title: "Python Projects",
      description: "A collection of simple Python-based projects created using pure Python (no external libraries or frameworks), including: Password Generator, Random Number Game, Rock Paper Scissors, Treasure Island Game.",
      tech: ["Python"],
      features: ["Password Generator", "Random Number Game", "Rock Paper Scissors", "Treasure Island Game"],
      icon: <Code className="h-6 w-6" />,
      github: "https://github.com/susanacharya12/Python-Project.git",
      demo: "Coming Soon",
      image: pythonProjectsImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden" style={{fontFamily: 'Inter, sans-serif'}}>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-black hover:text-[#00bcd4] transition-colors duration-300 font-medium text-sm md:text-base"
                style={{fontFamily: 'Inter, sans-serif'}}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-cyan-100/30 to-blue-100/20 animate-pulse-slow"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-br from-teal-200/35 to-cyan-200/35 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        {/* Animated particles */}
        <div className="absolute top-60 left-1/2 animate-float opacity-30" style={{animationDelay: '3s'}}>
          <Code className="h-8 w-8 text-blue-400" />
        </div>
        <div className="absolute top-80 right-32 animate-float opacity-30" style={{animationDelay: '1.5s'}}>
          <Database className="h-6 w-6 text-cyan-400" />
        </div>
        
        {/* Flowing lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-6 pt-32 pb-20">
        {/* Enhanced Header Section with Word-by-Word Animation */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <img 
              src="/lovable-uploads/8ab75cab-7ad6-402c-8813-a757538bc869.png" 
              alt="Susan Acharya"
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white animate-fade-in hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Animated Name */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 min-h-[80px] flex items-center justify-center animate-fade-in" 
                style={{animationDelay: '0.2s', fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
              {typedText.split(' ').map((word, index) => (
                <span key={index} className="inline-block animate-fade-in mr-3" style={{animationDelay: `${0.2 + index * 0.3}s`}}>
                  {word}
                </span>
              ))}
              <span className="animate-pulse text-[#00bcd4]">|</span>
            </h1>
          </div>
          
          <h2 className="text-2xl text-[#00bcd4] mb-6 animate-fade-in" 
              style={{animationDelay: '0.8s', fontFamily: 'Poppins, sans-serif'}}>
            Junior Django & Python Developer
          </h2>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-fade-in" style={{animationDelay: '1s'}}>
            <a 
              href="https://drive.google.com/file/d/13DoHYjq6JXhnMH5o8w0pyyZ7GnZaPRIw/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
            <a 
              href="https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/susanacharya12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* About Me Section */}
        <div id="about" className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            About Me
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-white/50 animate-fade-in">
            <p className="text-lg text-black max-w-4xl mx-auto leading-relaxed text-center" 
               style={{fontFamily: 'Inter, sans-serif', fontWeight: 400}}>
              Motivated Python developer building scalable web applications with Django. Passionate about clean code and innovative solutions.
            </p>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div id="projects" className="max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-2 hover:border-blue-300 animate-fade-in hover:scale-[1.02]`}
                style={{ animationDelay: `${1.4 + index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-black group-hover:text-blue-600 transition-colors"
                             style={{fontFamily: 'Poppins, sans-serif'}}>
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      {project.icon}
                    </div>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Project Image */}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-black/80 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="hover:bg-blue-100 transition-colors"
                               style={{fontFamily: 'Inter, sans-serif'}}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="hover:bg-blue-50 transition-colors"
                               style={{fontFamily: 'Inter, sans-serif'}}>
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                         style={{fontFamily: 'Inter, sans-serif'}}>
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" disabled className="flex-1 opacity-60"
                            style={{fontFamily: 'Inter, sans-serif'}}>
                      <Globe className="h-4 w-4 mr-2" />
                      {project.demo}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div id="skills" className="max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Frontend */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center"
                  style={{fontFamily: 'Poppins, sans-serif', color: '#00bcd4'}}>
                <Monitor className="mr-2 h-5 w-5" />
                Frontend
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  HTML5
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  CSS3
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  JavaScript
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Bootstrap
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Responsive Design
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center"
                  style={{fontFamily: 'Poppins, sans-serif', color: '#00bcd4'}}>
                <Server className="mr-2 h-5 w-5" />
                Backend
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Python
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Django
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Django REST Framework
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  RESTful APIs
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center"
                  style={{fontFamily: 'Poppins, sans-serif', color: '#00bcd4'}}>
                <Database className="mr-2 h-5 w-5" />
                Databases
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  MySQL
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  SQLite3
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center"
                  style={{fontFamily: 'Poppins, sans-serif', color: '#00bcd4'}}>
                <Code className="mr-2 h-5 w-5" />
                Tools
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Git & GitHub
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  VS Code
                </div>
                <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  PyCharm
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center"
                  style={{fontFamily: 'Poppins, sans-serif', color: '#00bcd4'}}>
                <Heart className="mr-2 h-5 w-5" />
                Soft Skills
              </h3>
              <div className="space-y-2">
                 <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                   Problem Solving
                 </div>
                 <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                   Team Collaboration
                 </div>
                 <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                   Communication
                 </div>
                 <div className="flex items-center text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                   Adaptability
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            Education
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="text-center">
               <h3 className="text-2xl font-bold mb-2"
                   style={{fontFamily: 'Poppins, sans-serif', color: '#00bcd4'}}>
                 BSc. Computer Science and Information Technology
               </h3>
               <p className="text-lg text-gray-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                 Bhaktapur Multiple Campus, Tribhuvan University (IOST)
               </p>
               <p className="text-lg font-semibold text-blue-600 mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
                 Currently Pursuing
               </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                The BSc. CSIT program is a four-year undergraduate degree blending theoretical knowledge and 
                practical skills in computing, software development, and IT. It prepares students for both 
                advanced studies and professional careers in the tech industry.
              </p>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4" 
                    style={{fontFamily: 'Poppins, sans-serif'}}>Core Subjects:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Data Structures & Algorithms</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Web Technologies</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Database Management Systems</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Operating Systems</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Software Engineering</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Object-Oriented Programming</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Computer Networks</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Java</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>.NET</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Computer Graphics</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Computer Architecture</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>Database Management System</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  +2 Science
                </h4>
                <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  Sudurpaschimanchal Academy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div id="certificates" className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            Certificates
          </h2>
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg min-w-[40px]">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2" 
                      style={{fontFamily: 'Poppins, sans-serif'}}>
                    Python Programming: Python Bootcamp For Beginner
                  </h3>
                  <a 
                    href="https://www.udemy.com/certificate/UC-0bffe5ad-cd58-40fd-ab5d-a536fd3c6837/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg min-w-[40px]">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2" 
                      style={{fontFamily: 'Poppins, sans-serif'}}>
                    Python For Beginners – Learn All The Basics Of Python
                  </h3>
                  <a 
                    href="https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg min-w-[40px]">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2"
                      style={{fontFamily: 'Poppins, sans-serif'}}>
                    Python For Data Science – Real Time Exercises
                  </h3>
                  <a 
                    href="https://www.udemy.com/certificate/UC-175f7a52-2f5f-486c-a9d4-039f953669ef/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg min-w-[40px]">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2"
                      style={{fontFamily: 'Poppins, sans-serif'}}>
                    Hackathon Certificate
                  </h3>
                  <p className="text-gray-600 text-sm mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                    Participated in a 48-hour hackathon organized by Code Yatra at Himalayan College of Engineering
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/susan-acharya1618?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  >
                    LinkedIn Proof
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div id="achievements" className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            Achievements
          </h2>
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 animate-fade-in">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2"
                      style={{fontFamily: 'Poppins, sans-serif'}}>
                    Selected as Top 15 Finalist at Code Yatra Hackathon 2024
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    Outstanding performance in a competitive 48-hour hackathon at Himalayan College of Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 animate-fade-in">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2"
                      style={{fontFamily: 'Poppins, sans-serif'}}>
                    Built multiple real-world Django-based projects hosted on GitHub
                  </h3>
                  <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                    Developed and deployed full-stack web applications demonstrating practical programming skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            Languages
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Languages className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium" style={{fontFamily: 'Inter, sans-serif'}}>English</span>
                <span className="text-blue-600 font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>Fluent</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-100 p-3 rounded-full">
                  <Languages className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium" style={{fontFamily: 'Inter, sans-serif'}}>Nepali</span>
                <span className="text-green-600 font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>Native</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Languages className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium" style={{fontFamily: 'Inter, sans-serif'}}>Hindi</span>
                <span className="text-orange-600 font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>Intermediate</span>
              </div>
            </div>
          </div>
        </div>
        {/* Let's Connect Section */}
        <div id="connect" className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in"
              style={{fontFamily: 'Poppins, sans-serif', color: '#000000'}}>
            Let's Connect
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                I'm always interested in new opportunities and collaborations.
              </p>
              <p className="text-lg text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Feel free to reach out if you'd like to discuss a project or just say hello.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800" style={{fontFamily: 'Poppins, sans-serif'}}>Email</h3>
                <a href="mailto:susanacharya.sp@gmail.com" 
                   className="text-blue-600 hover:text-blue-800 text-sm" 
                   style={{fontFamily: 'Inter, sans-serif'}}>
                  susanacharya.sp@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800" style={{fontFamily: 'Poppins, sans-serif'}}>Phone</h3>
                <a href="tel:+9779824562967" 
                   className="text-green-600 hover:text-green-800 text-sm" 
                   style={{fontFamily: 'Inter, sans-serif'}}>
                  +977 9824562967
                </a>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800" style={{fontFamily: 'Poppins, sans-serif'}}>Location</h3>
                <a href="https://maps.google.com/?q=Bhaktapur%2C%20Nepal" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-purple-600 hover:text-purple-800 text-sm" 
                   style={{fontFamily: 'Inter, sans-serif'}}>
                  Nepal
                </a>
              </div>
            </div>
            
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" 
                         style={{fontFamily: 'Inter, sans-serif'}}>Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"
                         style={{fontFamily: 'Inter, sans-serif'}}>Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    style={{fontFamily: 'Inter, sans-serif'}}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2"
                       style={{fontFamily: 'Inter, sans-serif'}}>Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter subject"
                  style={{fontFamily: 'Inter, sans-serif'}}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2"
                       style={{fontFamily: 'Inter, sans-serif'}}>Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Enter your message"
                  style={{fontFamily: 'Inter, sans-serif'}}
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{fontFamily: 'Inter, sans-serif'}}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}