
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
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
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/internships" className="text-slate-300 hover:text-white transition-colors">
                Internships
              </Link>
              <Link to="/education" className="text-slate-300 hover:text-white transition-colors">
                Education
              </Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <User size={120} className="text-slate-400" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ghanshyam
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Thorat
                </span>
              </h1>
              
              <div className="text-xl text-slate-300 mb-8 leading-relaxed">
                <p className="mb-4">
                  Pursuing B.Tech in AI & ML | Ex-Intern in Cybersecurity at Cyber Sanskar
                </p>
                <p className="mb-4">
                  TryHackMe Top Ranker | Hacker at Bugcrowd & HackerOne
                </p>
                <p>
                  Diploma in Information Technology | Developer | Cybersecurity Enthusiast
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <Link to="/about">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                    About Me
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                    View Projects
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/ghanshyam-thorat-465b0b217" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="text-center pb-8">
        <ArrowDown className="text-slate-400 animate-bounce mx-auto" size={32} />
      </div>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-slate-300">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-slate-300">Internships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">Top</div>
              <div className="text-slate-300">TryHackMe Rank</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">AI/ML</div>
              <div className="text-slate-300">Specialization</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
