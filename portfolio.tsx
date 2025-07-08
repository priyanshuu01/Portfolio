// "use client"

// import { useState } from "react"
// import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// export default function Portfolio() {
//   const [activeProject, setActiveProject] = useState(0)

//   const projects = [
//     {
//       title: "Food Delivery App",
//       description:
//         "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",

//       Image:"/header_img.png?height=300&width=500",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "https://github.com/priyanshuu01/Food-Delivery-Website",
//       live: "https://food-delivery-website-3-u43q.onrender.com/",
//     }, 
//     {
//       title: "Task Management App",
//       description:
//         "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
//       image: "/placeholder.svg?height=300&width=500",
//       technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
//       github: "#",
//       live: "#",
//     },
//     {
//       title: "Weather Dashboard",
//       description:
//         "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
//       image: "/placeholder.svg?height=300&width=500",
//       technologies: ["React", "API Integration", "Chart.js", "Tailwind"],
//       github: "#",
//       live: "#",
//     },
//   ]

//   const skills = [
//     "JavaScript",
//     "TypeScript",
//     "React",
//     "Next.js",
//     "Node.js",
//     "Python",
//     "MongoDB",
//     "PostgreSQL",
//     "AWS",
//     "Docker",
//     "Git",
//     "Tailwind CSS",
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-bold text-slate-800">Portfolio</div>
//             <div className="hidden md:flex space-x-8">
//               <Link href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">
//                 Home
//               </Link>
//               <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
//                 About
//               </Link>
//               <Link href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
//                 Projects
//               </Link>
//               <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
//                   Hi, I'm{" "}
//                   <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                     Priyanshu Yadav
//                   </span>
//                 </h1>
//                 <p className="text-xl text-slate-600 leading-relaxed">
//                   Full-Stack Developer passionate about creating beautiful, functional, and user-centered digital
//                   experiences.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 <Button size="lg" className="bg-slate-900 hover:bg-slate-800" asChild>
//                   <Link href="#projects">
//                     View My Work
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </Button>
//                 <Button variant="outline" size="lg" asChild>
//                   <a href="/resume.pdf" download="Alex_Johnson_Resume.pdf">
//                     <Download className="mr-2 h-4 w-4" />
//                     Download Resume
//                   </a>
//                 </Button>
//               </div>
//               <div className="flex space-x-4">
//                 <Button variant="ghost" size="icon" className="rounded-full" asChild>
//                   <Link href="https://github.com/priyanshuu01" target="_blank" rel="noopener noreferrer">
//                     <Github className="h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button variant="ghost" size="icon" className="rounded-full" asChild>
//                   <Link href="https://www.linkedin.com/in/priyanshu-yadav-728619312/" target="_blank" rel="noopener noreferrer">
//                     <Linkedin className="h-5 w-5" />
//                   </Link>
//                 </Button>
//                 <Button variant="ghost" size="icon" className="rounded-full" asChild>
//                   <Link href="mailto:alex.johnson@email.com">
//                     <Mail className="h-5 w-5" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="relative z-10">
//                 <Image
//                   src="/placeholder.svg?height=600&width=500"
//                   alt="Profile"
//                   width={500}
//                   height={600}
//                   className="rounded-2xl shadow-2xl"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-3xl opacity-20 transform rotate-6"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a
//               difference.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-slate-700 leading-relaxed">
//                 With a strong foundation in both front-end and back-end technologies, I specialize in building scalable
//                 web applications that deliver exceptional user experiences. My journey in tech started with a curiosity
//                 for problem-solving and has evolved into a passion for creating innovative solutions.
//               </p>
//               <p className="text-lg text-slate-700 leading-relaxed">
//                 When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
//                 or sharing knowledge with the developer community.
//               </p>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="font-semibold text-slate-900 mb-2">Experience</h4>
//                   <p className="text-slate-600">5+ Years</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-slate-900 mb-2">Projects</h4>
//                   <p className="text-slate-600">50+ Completed</p>
//                 </div>
//               </div>
//             </div>
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-slate-900">Skills & Technologies</h3>
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                   <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
//                     {skill}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               Here are some of my recent projects that showcase my skills and passion for development.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
//                 <div className="relative overflow-hidden rounded-t-lg">
//                   <Image
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                     width={500}
//                     height={300}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
//                 </div>
//                 <CardHeader>
//                   <CardTitle className="text-xl">{project.title}</CardTitle>
//                   <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="flex flex-wrap gap-1">
//                     {project.technologies.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="outline" className="text-xs">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="flex space-x-2">
//                     <Button variant="outline" size="sm" asChild>
//                       <Link href={project.github}>
//                         <Github className="h-4 w-4 mr-1" />
//                         Code
//                       </Link>
//                     </Button>
//                     <Button size="sm" asChild>
//                       <Link href={project.live}>
//                         <ExternalLink className="h-4 w-4 mr-1" />
//                         Live Demo
//                       </Link>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
//             <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//               I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
//               ideas to life.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-600 p-3 rounded-lg">
//                     <Mail className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Email</h4>
//                     <Link
//                       href="mailto:alex.johnson@email.com"
//                       className="text-slate-300 hover:text-white transition-colors"
//                     >
//                       priyanshuyadav9997066347@gmail.com
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-600 p-3 rounded-lg">
//                     <Phone className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Phone</h4>
//                     <p className="text-slate-300">+91-9756027295</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="bg-purple-600 p-3 rounded-lg">
//                     <MapPin className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">Location</h4>
//                     <p className="text-slate-300">Uttar Pradesh, India </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <Card className="bg-white/5 border-white/10">
//               <CardHeader>
//                 <CardTitle className="text-white">Send a Message</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
//                     <input
//                       type="text"
//                       className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                       placeholder="John"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
//                     <input
//                       type="text"
//                       className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                       placeholder="Doe"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
//                   <input
//                     type="email"
//                     className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
//                   <textarea
//                     rows={4}
//                     className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     placeholder="Tell me about your project..."
//                   ></textarea>
//                 </div>
//                 <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-slate-300 mb-4 md:mb-0">© 2024 Alex Johnson. All rights reserved.</div>
//             <div className="flex space-x-4">
//               <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" asChild>
//                 <Link href="https://github.com/priyanshuu01" target="_blank" rel="noopener noreferrer">
//                   <Github className="h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" asChild>
//                 <Link href="https://www.linkedin.com/in/priyanshu-yadav-728619312/" target="_blank" rel="noopener noreferrer">
//                   <Linkedin className="h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" asChild>
//                 <Link href="priyanshuyadav9997066347@gmail.com">
//                   <Mail className="h-5 w-5" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Form submitted!\n" + JSON.stringify(formData, null, 2))
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    })
  }

  const projects = [
    {
      title: "Food Delivery App",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/header_img.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/priyanshuu01/Food-Delivery-Website",
      live: "https://food-delivery-website-3-u43q.onrender.com/",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
      image: "/placeholder.svg",
      technologies: ["React", "API Integration", "Chart.js", "Tailwind"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    "Html", "CSS", "JavaScript", "React", "Python", "Java", "C",
    "MongoDB", "SQL", "Git", "Tailwind CSS",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="#about" className="text-slate-600 hover:text-slate-900">About</Link>
              <Link href="#projects" className="text-slate-600 hover:text-slate-900">Projects</Link>
              <Link href="#contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Priyanshu Yadav
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Full-Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800" asChild>
                <Link href="#projects">View My Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/new resume 2.pdf" download="Priyanshu_Yadav_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://github.com/priyanshuu01" target="_blank"><Github className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://www.linkedin.com/in/priyanshu-yadav-728619312/" target="_blank"><Linkedin className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="mailto:priyanshuyadav9997066347@gmail.com"><Mail className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div className="relative group w-fit mx-auto">
            <div className="relative w-72 h-72 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/dp2.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            I'm a passionate full-stack developer with experience building scalable, user-friendly applications.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <p className="text-lg text-slate-700">
                My journey in tech started with curiosity for problem-solving and turned into a passion for software development. I love crafting efficient backends and sleek frontends.
              </p>
              <p className="text-lg text-slate-700">
                I also enjoy exploring new tools, contributing to open-source, and sharing insights with fellow developers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-600 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Explore some of my latest work.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github}><Github className="h-4 w-4 mr-1" />Code</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.live}><ExternalLink className="h-4 w-4 mr-1" />Live Demo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Have an idea? Let's build something great together.
          </p>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg"><Mail className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <Link href="mailto:priyanshuyadav9997066347@gmail.com" className="text-slate-300 hover:text-white">priyanshuyadav9997066347@gmail.com</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg"><Phone className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-300">+91-9756027295</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg"><MapPin className="h-6 w-6" /></div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-300">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Conditionally render the form */}
            {isClient ? (
              <Card className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl">
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    />
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-base font-medium py-2 rounded-lg transition duration-200">
                      Send Message
                    </Button>
                  </CardContent>
                </form>
              </Card>
            ) : null}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-300 mb-4 md:mb-0">© 2024 Priyanshu Yadav. All rights reserved.</div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" asChild>
              <Link href="https://github.com/priyanshuu01" target="_blank"><Github className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" asChild>
              <Link href="https://www.linkedin.com/in/priyanshu-yadav-728619312/" target="_blank"><Linkedin className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" asChild>
              <Link href="mailto:priyanshuyadav9997066347@gmail.com"><Mail className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

