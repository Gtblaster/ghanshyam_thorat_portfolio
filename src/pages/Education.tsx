
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Artificial Intelligence & Machine Learning",
      institution: "Adarsh Institute of Technology and Research Center.Vita",
      status: "Currently Pursuing",
      duration: "2024 - 2027",
      location: "Maharashtra,India",
      description: "Comprehensive program focusing on AI/ML fundamentals, advanced algorithms, neural networks, and practical applications in real-world scenarios.",
      coursework: [
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks", 
        "Natural Language Processing",
        "Computer Vision",
        "Data Structures & Algorithms",
        "Statistics & Probability",
        "Linear Algebra & Calculus",
        "Software Engineering",
        "Database Management Systems",
        "Operating Systems"
      ],
      projects: [
        "Email Spam Detection",
        "Firewall System",
       // "Natural language sentiment analysis",
       // "Predictive analytics dashboard"
      ],
      achievements: [
        "Participated in Google Developer Group Hackathon",
        "Active participation in AI/ML workshops",
        "Google Workshop On AI Partcipaetion",
       // "Google Workshop On AI Partcipaetion"
      ]
    },
    {
      degree: "Diploma",
      field: "Information Technology", 
      institution: "Mahavir Polytechnic.Nashik",
      status: "Completed",
      duration: "2022 - 2024",
      location: "Maharashtra,India",
      description: "Strong foundation in information technology concepts, programming fundamentals, and practical software development skills.",
      coursework: [
        "Programming Fundamentals (Java,Python)",
        "Web Development (HTML, CSS, JavaScript)",
        "Database Management",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Data Structures",
        "Object-Oriented Programming",
        "System Analysis & Design",
        "Project Management"
      ],
      projects: [
        "Music Library Like Spotify",
        "Intelligent CCTV Surveillance and Alert System",
       // "Basic e-commerce website",
       // "Network security analysis" 
      ],
      achievements: [
        "Graduated with distinction",
        "Top Ranker In Olympiad Exam On Cyber Security",
        "NASA & Flipkart Hall Of Fame"
      ]
    }
  ];

  const certifications = [
    {
      name: "Ethical Hacking Certification",
      provider: "Cyber Sanskar",
      date: "2023",
      description: "Advanced certification in ethical hacking methodologies and penetration testing"
    },
    {
      name: "Machine Learning Specialization",
      provider: "Online Platform",
      date: "2023",
      description: "Comprehensive course covering supervised and unsupervised learning algorithms"
    },
    {
      name: "Cybersecurity Fundamentals",
      provider: "Industry Standard",
      date: "2022",
      description: "Foundation certification in cybersecurity principles and practices"
    }
  ];

  const skills = {
    technical: [
      "Python", "Java", "C++", "JavaScript", "HTML/CSS",
      "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy",
      "SQL", "MongoDB", "MySQL", "PostgreSQL",
      "Linux", "Git", "Docker", "AWS", "React"
    ],
    cybersecurity: [
      "Penetration Testing", "Vulnerability Assessment", "Ethical Hacking",
      "Network Security", "Web Application Security", "Incident Response",
      "Security Frameworks", "Risk Assessment", "Compliance"
    ],
    soft: [
      "Problem Solving", "Critical Thinking", "Team Collaboration",
      "Communication", "Project Management", "Leadership",
      "Research & Analysis", "Adaptability", "Time Management"
    ]
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
              <Link to="/projects" className="text-slate-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/internships" className="text-slate-300 hover:text-white transition-colors">Internships</Link>
              <Link to="/education" className="text-cyan-400">Education</Link>
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
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Journey</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              My academic foundation in technology, from Information Technology fundamentals 
              to advanced AI/ML specialization, building expertise in both theoretical concepts and practical applications.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Academic Qualifications</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-white text-2xl">{edu.degree}</CardTitle>
                          <p className="text-cyan-400 text-lg font-semibold">{edu.field}</p>
                          <p className="text-slate-300">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={edu.status === "Completed" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-blue-500/20 text-blue-400 border-blue-500/30"}>
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-slate-300 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                        <BookOpen size={20} />
                        Key Coursework:
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {edu.coursework.map((course, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span className="text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                        <Users size={20} />
                        Notable Projects:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {edu.projects.map((project, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <Trophy size={16} className="text-yellow-400" />
                            <span className="text-sm">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                        <Award size={20} />
                        Achievements:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <Award size={16} className="text-green-400" />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Professional Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                        <Award className="text-white" size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{cert.name}</CardTitle>
                        <p className="text-cyan-400 text-sm">{cert.provider}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-slate-600 text-slate-300 w-fit">
                      {cert.date}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Skills & Competencies</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BookOpen className="text-blue-400" size={24} />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="text-red-400" size={24} />
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cybersecurity.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-red-500/30 text-red-400 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Users className="text-green-400" size={24} />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-green-500/30 text-green-400 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-slate-300 mb-6">
              Always expanding my knowledge and staying current with the latest technologies and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  View My Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-slate-600 text-black hover:bg-slate-800">
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

export default Education;
