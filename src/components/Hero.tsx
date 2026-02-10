import { Mail, GraduationCap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="flex items-start">
      <div className="flex flex-col gap-8 items-start w-full">
        {/* Photo */}
        <div className="flex-shrink-0 mb-2">
          <div className="w-24 h-24 rounded-full bg-primary/10 overflow-hidden">
            {/* Placeholder - replace with actual photo */}
            <div className="w-full h-full flex items-center justify-center text-primary/30 text-sm">
              Photo
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-primary">
            Jess Bergs
          </h1>
          <p className="text-base md:text-lg mb-4 text-primary/80">
            R&D Software Engineer & Creative Technologist
          </p>

          {/* Contact Links */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2 text-primary/70">
              <Mail size={18} />
              <span className="text-sm">info[at]jbergs[dot]eu</span>
            </div>
            <a
              href="https://www.linkedin.com/in/jbergs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=jUpxHmsAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors"
            >
              <GraduationCap size={18} />
              <span className="text-sm">Google Scholar</span>
            </a>
          </div>

          {/* Bio */}
          <p className="text-sm md:text-base leading-relaxed text-primary/70">
            Lead UX Engineer at AI Security Institute, specializing in human-AI interactions,
            research tools, and experimental product development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
