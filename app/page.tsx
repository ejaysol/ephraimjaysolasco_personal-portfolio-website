"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Facebook } from "lucide-react"

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const withBasePath = (path: string) => `${basePath}${path}`

  // Scroll animation hook
  const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [])

    return { ref, isVisible }
  }

  // Create separate refs for each section
  const educationRef = useScrollAnimation()
  const seminarsRef = useScrollAnimation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={withBasePath("/WKUZU.png")} alt="WKUZU" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-neutral-300 transition">
              About me
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-white hover:text-neutral-300 transition">
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-neutral-300 transition"
            >
              Portfolio
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="bg-white text-black hover:bg-neutral-200"
            >
              Contact us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">
          {/* Left Side - Text */}
          <div className="bg-neutral-200 flex items-center justify-center px-8 py-12">
            <div className="max-w-md">
              <p className="text-sm mb-2 text-neutral-600">Hi, I am</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">Ephraim Jay A. Solasco</h1>
              <p className="text-neutral-600 mb-8">Front-end Developer / UI Designer</p>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/ephraim.solasco.1"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://github.com/ejaysol"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ephraim-jay-solasco-8b733124a/"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="bg-black flex items-end justify-start relative overflow-hidden">
            <div className="w-full md:w-[90%] h-full flex items-end justify-center">
              <img
                src={withBasePath("/ejaysol.png")}
                alt="Ephraim Jay A. Solasco"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Diagonal Split Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[45%] w-[15%] h-full bg-black transform -skew-x-12 hidden md:block"></div>
        </div>
      </section>

      {/* IT Berries Section */}
      <section className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 tracking-wider">IT BERRIES</h2>
          <p className="text-neutral-300 max-w-3xl mb-6 text-sm leading-relaxed">
            I specialize in UI/UX design and full-stack web development. I believe great design solves real problems,
            helping people accomplish their goals and improve their everyday lives. Let's collaborate to bring
            innovative solutions to life with clean code and thoughtful design.
          </p>
          
          {showMore && (
            <div className="max-w-3xl mb-6 text-sm leading-relaxed space-y-4 animate-in">
              <p className="text-neutral-300">
                As a UI/UX designer, I focus on creating intuitive interfaces that prioritize user experience while maintaining 
                aesthetic appeal. My approach combines user research, wireframing, prototyping, and iterative testing to ensure 
                every design decision serves a purpose. I specialize in responsive design, accessibility standards, and creating 
                seamless user journeys across different devices and platforms.
              </p>
              <p className="text-neutral-300">
                In front-end development, I bring designs to life using modern web technologies including React, TypeScript, 
                and CSS frameworks like Tailwind. I emphasize performance optimization, clean code architecture, and component 
                reusability. My experience includes building single-page applications, e-commerce platforms, and content 
                management systems with a focus on fast load times and smooth user interactions.
              </p>
              <p className="text-neutral-300">
                I bridge the gap between design and development by understanding both perspectives. This allows me to create 
                designs that are not only visually appealing but also technically feasible and maintainable. Whether you need 
                a complete website redesign, a mobile app interface, or a custom web application, I'm equipped to deliver 
                solutions that meet your business objectives while exceeding user expectations.
              </p>
            </div>
          )}
          
          <Button 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-black"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'READ LESS' : 'READ MORE'}
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-neutral-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex justify-center mb-12">
            <div className="border-4 border-black px-12 py-4">
              <h2 className="text-2xl font-bold tracking-wider">ABOUT ME</h2>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center">EDUCATION</h3>
              <div className="text-center">
                <h4 className="font-bold text-lg mb-2">Bachelor of Science in Information Technology</h4>
                <p className="text-gray-700 mb-2">Cebu Institute of Technology - University</p>
                <p className="text-sm text-gray-600 mb-2">Natalio B. Bacalso Ave, Cebu City, Cebu 6000</p>
                <p className="text-sm font-semibold text-blue-600">Expected Graduation: May 2026</p>
              </div>
            </div>
          </div>

          {/* Seminars & Certifications */}
          <div className="mb-16">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center">SEMINARS & CERTIFICATIONS</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-bold">AWS Academy Graduate - Cloud Foundations - Training Badge</h4>
                  <p className="text-sm text-gray-600">2025, Amazon Web Services Training and Certification</p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-bold">2026 UI/UX PH</h4>
                  <p className="text-sm text-gray-600">Saturday, September 27, 2025 | 9:00 AM - 06:00 PM</p>
                  <p className="text-sm text-gray-600">SAFAD Theatre, University of San Carlos, Talamban Campus</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mb-16">
            <div className="h-px w-16 bg-black"></div>
            <Button variant="outline" className="border-2 border-black bg-white hover:bg-black hover:text-white">
              LOCATED
            </Button>
            <div className="h-px w-16 bg-black"></div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">UI/UX DESIGN</h3>
              <p className="text-sm text-neutral-600">
                I create intuitive user interfaces and seamless user experiences. From wireframing to prototyping, 
                I design solutions that are both beautiful and functional.
              </p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">FRONT-END CODING</h3>
              <p className="text-sm text-neutral-600">
                I bring designs to life with clean, responsive code. Specializing in React, TypeScript, and modern 
                CSS frameworks to build fast, interactive web applications.
              </p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">DESIGN SYSTEMS</h3>
              <p className="text-sm text-neutral-600">
                I develop scalable design systems and component libraries that ensure consistency across your 
                entire product while maintaining development efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-neutral-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex justify-center mb-12">
            <div className="border-4 border-black px-12 py-4">
              <h2 className="text-2xl font-bold tracking-wider">SKILLS</h2>
            </div>
          </div>

          {/* Using Now */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center tracking-wider">USING NOW:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <SkillItemWithImage src={withBasePath("/HTML5.svg")} name="HTML5" />
              <SkillItemWithImage src={withBasePath("/CSS3.svg")} name="CSS3" />
              <SkillItemWithImage src={withBasePath("/SASS.svg")} name="SASS" />
              <SkillItemWithImage src={withBasePath("/JAVASCRIPT.svg")} name="JavaScript" />
              <SkillItemWithImage src={withBasePath("/REACT.svg")} name="React" />
              <SkillItemWithImage src={withBasePath("/bootstrap.svg")} name="Bootstrap" />
              <SkillItemWithImage src={withBasePath("/git.svg")} name="Git" />
              <SkillItemWithImage src={withBasePath("/figma.svg")} name="Figma" />
            </div>
          </div>

          {/* Learning */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center tracking-wider">LEARNING:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <SkillItemWithImage src={withBasePath("/NODEJS.png")} name="Node.js" />
              <SkillItemWithImage src={withBasePath("/MySQL.svg")} name="MySQL" />
              <SkillItemWithImage src={withBasePath("/MONGODB.svg")} name="MongoDB" />
              <SkillItemWithImage src={withBasePath("/TYPESCRIPT.svg")} name="TypeScript" />
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-center tracking-wider">OTHER SKILLS:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <SkillItemWithImage src={withBasePath("/Adobe_After_Effects_CC_2026_icon.svg.png")} name="After Effects" />
              <SkillItemWithImage src={withBasePath("/Adobe_Illustrator_CC_icon.svg.png")} name="Illustrator" />
              <SkillItemWithImage src={withBasePath("/Adobe_Photoshop_CC_icon.svg.png")} name="Photoshop" />
              <SkillItemWithImage src={withBasePath("/Adobe_Premiere_Pro_CC_icon.svg.png")} name="Premiere Pro" />
              <SkillItemWithImage src={withBasePath("/affinity-logo-icon-hd.png")} name="Affinity" />
              <SkillItemWithImage src={withBasePath("/canva-icon.png")} name="Canva" />
              {/* <SkillItem icon="🇬🇧" name="ANGIELSKI (ENG)" color="#012169" />
              <SkillItem icon="🇪🇸" name="HISZPANSKI (SPN)" color="#C60B1E" />
              <SkillItem icon="©️" name="C++" color="#00599C" />
              <SkillItem icon="©" name="C" color="#A8B9CC" /> */}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-16">
            <div className="h-px w-32 bg-black"></div>
            <div className="h-px w-32 bg-black"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-neutral-200 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex justify-center mb-16">
            <div className="border-4 border-black px-12 py-4 bg-neutral-200">
              <h2 className="text-2xl font-bold tracking-wider">PORTFOLIO</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="h-64 bg-neutral-800 rounded overflow-hidden">
              <img src={withBasePath("/Portfolio%201.png")} alt="Portfolio 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-neutral-800 rounded overflow-hidden">
              <img src={withBasePath("/Portfolio%202.png")} alt="Portfolio 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-64 bg-neutral-800 rounded overflow-hidden">
              <img src={withBasePath("/Portfolio%203.png")} alt="Portfolio 3" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-center mt-8 text-sm font-medium">And many more to come!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="h-px w-32 bg-black"></div>
            <h2 className="text-2xl font-bold tracking-wider">CONTACT</h2>
            <div className="h-px w-32 bg-black"></div>
          </div>

          <div className="text-center">
            <p className="text-neutral-600 mb-8">Let's work together on your next project!</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:scale-110 transition">
                <Github size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.facebook.com/ephraim.solasco.1" className="hover:text-neutral-400 transition">
              <Facebook size={20} />
            </a>
            {/* <a href="https://www.facebook.com/ephraim.solasco.1" className="hover:text-neutral-400 transition">
              <Facebook size={20} />
            </a> */}
            <a href="https://github.com/ejaysol" className="hover:text-neutral-400 transition">
              <Github size={20} />
            </a>
          </div>
          <p className="text-center text-sm text-neutral-400">©2025 Ephraim Jay A. Solasco All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

function SkillItem({ icon, name, color }: { icon: string; name: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-4xl">{icon}</div>
      <p className="text-xs font-semibold tracking-wide text-center">{name}</p>
    </div>
  )
}

function SkillItemWithImage({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center">
        <img 
          src={src} 
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-xs font-semibold tracking-wide text-center">{name}</p>
    </div>
  )
}
