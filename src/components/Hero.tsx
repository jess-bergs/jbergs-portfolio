import { Mail, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="flex items-center">
      <div className="flex flex-col gap-8 items-start w-full">
        {/* Content */}
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold tracking-normal mb-2 text-primary uppercase">
            Jess Bergs
          </h1>
          <p className="text-base md:text-lg mb-4 text-primary/80">
            Human-AI Interactions @ UK AISI – Research Unit
            <br></br> R&D Innovation Engineer
          </p>

          {/* Contact Links */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2 text-primary/70">
              <Mail size={18} />
              <a
                href="mailto:info@jbergs.eu"
                className="text-sm hover:text-link transition-colors"
              >
                info[at]jbergs[dot]eu
              </a>
            </div>
            <Button
              variant="link"
              asChild
              className="h-auto p-0 hover:text-link justify-start gap-2 no-underline hover:no-underline"
            >
              <a
                href="https://www.linkedin.com/in/jbergs/"
                target="_blank"
                rel="noopener noreferrer"
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
            </Button>
            <Button
              variant="link"
              asChild
              className="h-auto p-0 hover:text-link justify-start gap-2 no-underline hover:no-underline"
            >
              <a
                href="https://scholar.google.com/citations?user=jUpxHmsAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={18} />
                <span className="text-sm">Google Scholar</span>
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
