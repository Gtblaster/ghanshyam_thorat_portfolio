
import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Code, Brain, Shield, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Threat Detection System",
      description: "Developed a machine learning model to detect and classify cybersecurity threats in real-time using natural language processing and anomaly detection algorithms.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Flask", "MongoDB"],
      category: "AI/ML",
      icon: Brain,
      status: "Completed",
      highlights: ["95% accuracy in threat detection", "Real-time processing", "Scalable architecture"]
    },
    {
      title: "Vulnerability Assessment Automation",
      description: "Created an automated vulnerability scanning tool that integrates with multiple security frameworks to provide comprehensive security assessments.",
      technologies: ["Python", "Nmap", "OWASP ZAP", "Docker", "PostgreSQL"],
      category: "Cybersecurity",
      icon: Shield,
      status: "In Progress",
      highlights: ["Automated scanning", "Multi-framework integration", "Detailed reporting"]
    },
    {
      title: "Natural Language Query System",
      description: "Built an intelligent query system that allows users to interact with databases using natural language, powered by advanced NLP models.",
      technologies: ["Python", "spaCy", "BERT", "React", "Node.js"],
      category: "NLP",
      icon: Database,
      status: "Completed",
      highlights: ["Natural language interface", "Multi-database support", "High accuracy parsing"]
    },
    {
      title: "Ethical Hacking Toolkit",
      description: "Comprehensive penetration testing toolkit with automated reconnaissance, vulnerability assessment, and reporting capabilities.",
      technologies: ["Python", "Bash", "Metasploit", "Burp Suite", "SQLMap"],
      category: "Security Tools",
      icon: Code,
      status: "Completed",
      highlights: ["Automated penetration testing", "Comprehensive reporting", "Modular architecture"]
    },
    {
      title: "AI Model Deployment Platform",
      description: "Developed a cloud-based platform for deploying and managing machine learning models with auto-scaling and monitoring capabilities.",
      technologies: ["Docker", "Kubernetes", "FastAPI", "Redis", "Prometheus"],
      category: "MLOps",
      icon: Brain,
      status: "In Progress",
      highlights: ["Auto-scaling", "Real-time monitoring", "Model versioning"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Cybersecurity": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "NLP": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Security Tools": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "MLOps": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Ghanshyam Thorat
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link to="/projects" className="text-cyan-400">Projects</Link>
              <Link to="/internships" className="text-slate-300 hover:text-white transition-colors">Internships</Link>
              <Link to="/education" className="text-slate-300 hover:text-white transition-colors">Education</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work in AI/ML, cybersecurity, and software development. 
              Each project represents my commitment to innovation and technical excellence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <project.icon className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                    <div className="flex gap-2">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-3 group-hover:text-cyan-100 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700 flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex items-center gap-2">
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
            <p className="text-slate-300 mb-6">
              Check out my GitHub for more projects or get in touch to discuss collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex items-center gap-2">
                <Github size={20} />
                View GitHub
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
