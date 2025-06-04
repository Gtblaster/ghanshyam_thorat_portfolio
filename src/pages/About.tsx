
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Shield, Code, Users, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const competencies = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Advanced understanding of NLP techniques and implementation"
    },
    {
      icon: Code,
      title: "AI Model Development", 
      description: "Experience in building and training machine learning models"
    },
    {
      icon: Zap,
      title: "Machine Learning Architecture",
      description: "Designing scalable ML systems and architectures"
    },
    {
      icon: Target,
      title: "Strategic Technology Consulting",
      description: "Providing strategic insights on technology implementation"
    },
    {
      icon: Users,
      title: "Complex Problem Solving",
      description: "Analytical approach to solving challenging technical problems"
    },
    {
      icon: Shield,
      title: "Advanced Communication Technologies",
      description: "Expertise in modern communication and security protocols"
    }
  ];

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
              <Link to="/about" className="text-cyan-400">About</Link>
              <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/internships" className="text-slate-300 hover:text-white transition-colors">Internships</Link>
              <Link to="/education" className="text-slate-300 hover:text-white transition-colors">Education</Link>
              <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about artificial intelligence and cybersecurity, I combine cutting-edge AI knowledge 
              with practical security expertise to create innovative solutions.
            </p>
          </div>

          {/* Biography */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                As a B.Tech student specializing in Artificial Intelligence and Machine Learning, I am deeply 
                passionate about leveraging technology to solve complex real-world problems. My journey in tech 
                began with a strong foundation in Information Technology, which sparked my interest in both 
                AI innovation and cybersecurity.
              </p>
              <p>
                My experience extends beyond academics through practical applications in cybersecurity, where 
                I've gained valuable hands-on experience during my internship at Cyber Sanskar. This experience 
                has shaped my understanding of ethical hacking and security protocols, complementing my AI expertise 
                with a strong security mindset.
              </p>
              <p>
                I take pride in my achievements on platforms like TryHackMe, where I've earned top rankings, 
                and my contributions to Bugcrowd and HackerOne demonstrate my commitment to ethical hacking 
                and vulnerability research. These experiences have taught me the importance of responsible 
                AI development and the critical role of security in emerging technologies.
              </p>
              <p>
                My professional interests lie at the intersection of AI innovation, ethical AI development, 
                and technology integration. I believe in creating AI solutions that are not only powerful 
                and efficient but also secure, ethical, and accessible to everyone.
              </p>
            </CardContent>
          </Card>

          {/* Technical Competencies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Competencies</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competencies.map((competency, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-3">
                    <competency.icon className="text-cyan-400 mb-2" size={32} />
                    <CardTitle className="text-white text-lg">{competency.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm">{competency.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
            <p className="text-slate-300 mb-6">
              Interested in collaborating or learning more about my work? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  View My Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
