"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Facebook } from "lucide-react"

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const withBasePath = (path: string) => `${basePath}${path}`

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
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
            READ MORE
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-neutral-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex justify-center mb-12">
            <div className="border-4 border-black px-12 py-4">
              <h2 className="text-2xl font-bold tracking-wider">ABOUT ME</h2>
            </div>
          </div>

          <div className="text-center space-y-4 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            <p>
              I'm a 22-year-old Front-end Developer and UI Designer based in the Philippines. I specialize in crafting
              beautiful and functional web experiences. With expertise in UI/UX design, I believe that good design
              solves problems and helps people accomplish their goals.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends, learning emerging technologies, or
              collaborating with fellow developers. I'm passionate about creating intuitive interfaces that make a real
              difference in people's lives. Let's work together to build something extraordinary!
            </p>
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
            <div>
              <h3 className="text-xl font-bold mb-3">DESIGN</h3>
              <p className="text-sm text-neutral-600">
                I can design the site based on your needs and suggestions. I can also design the site from scratch,
                consulting with you every step of the way.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">DEVELOPMENT</h3>
              <p className="text-sm text-neutral-600">
                I can help you build a high-quality product using the latest web technologies. Professional development
                tailored to your goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">MAINTENANCE</h3>
              <p className="text-sm text-neutral-600">
                After the project is complete, I can provide ongoing support and maintenance to ensure everything runs
                smoothly.
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
