
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Calendar, MapPin, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Internships = () => {
  const internships = [
    {
      company: "Cyber Sanskar",
      role: "Cybersecurity Intern",
      duration: "6 months",
      location: "Remote",
      type: "Internship",
      status: "Completed",
      description: "Gained hands-on experience in cybersecurity practices, ethical hacking methodologies, and security assessment protocols. Worked on real-world security challenges and contributed to vulnerability assessment projects.",
      responsibilities: [
        "Conducted vulnerability assessments on web applications and network infrastructure",
        "Performed penetration testing using industry-standard tools and methodologies",
        "Assisted in developing security protocols and best practice documentation",
        "Participated in incident response and security monitoring activities",
        "Collaborated with senior security analysts on threat intelligence research",
        "Created detailed security reports and recommendations for clients"
      ],
      learnings: [
        "Advanced penetration testing techniques",
        "Security vulnerability assessment and management",
        "Incident response and forensics fundamentals",
        "Network security monitoring and analysis",
        "Compliance frameworks and regulatory requirements",
        "Client communication and report writing skills"
      ],
      technologies: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "OWASP ZAP", "Kali Linux"],
      achievements: [
        "Identified critical vulnerabilities in client systems",
        "Contributed to security awareness training materials",
        "Received positive feedback for analytical skills",
        "Completed advanced cybersecurity certification training"
      ]
    }
  ];

  const platforms = [
    {
      name: "TryHackMe",
      achievement: "Top Ranker",
      description: "Achieved top rankings through consistent performance in cybersecurity challenges and learning paths",
      skills: ["Penetration Testing", "Digital Forensics", "Web Application Security", "Network Security"]
    },
    {
      name: "Bugcrowd",
      achievement: "Active Researcher",
      description: "Contributing to the cybersecurity community through responsible vulnerability disclosure",
      skills: ["Bug Bounty Hunting", "Vulnerability Research", "Ethical Hacking", "Security Analysis"]
    },
    {
      name: "HackerOne",
      achievement: "Security Researcher", 
      description: "Participating in responsible disclosure programs and helping organizations improve their security posture",
      skills: ["Responsible Disclosure", "Security Testing", "Risk Assessment", "Compliance"]
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
              <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/internships" className="text-cyan-400">Internships</Link>
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
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              My journey through internships and professional development in cybersecurity, 
              gaining practical experience and contributing to real-world security challenges.
            </p>
          </div>

          {/* Internships */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Internship Experience</h2>
            {internships.map((internship, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 mb-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                        <Shield className="text-white" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl">{internship.role}</CardTitle>
                        <p className="text-cyan-400 text-lg font-semibold">{internship.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {internship.status}
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        {internship.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-300 mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{internship.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {internship.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {internship.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Learnings */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Key Learnings:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {internship.learnings.map((learning, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <TrendingUp size={16} className="text-green-400" />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Notable Achievements:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {internship.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <Award size={16} className="text-yellow-400" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Platform Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Platform Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                        <Award className="text-white" size={20} />
                      </div>
                      <CardTitle className="text-white text-lg">{platform.name}</CardTitle>
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 w-fit">
                      {platform.achievement}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {platform.description}
                    </p>
                    <div>
                      <h5 className="text-white font-semibold mb-2">Key Skills:</h5>
                      <div className="flex flex-wrap gap-1">
                        {platform.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300 text-xs">
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

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Opportunities</h3>
            <p className="text-slate-300 mb-6">
              Looking for internship or full-time opportunities in AI/ML and cybersecurity. 
              Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  Get In Touch
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  View My Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
