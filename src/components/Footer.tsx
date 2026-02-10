import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 border-t border-gray-200 mt-20">
      <div className="flex justify-between items-center flex-wrap gap-6">
        <p className="text-sm text-primary/60">
          © {currentYear} Jessica Bergs
        </p>
        <div className="flex gap-6 flex-wrap">
          <Button
            variant="link"
            asChild
            className="h-auto p-0 text-sm font-semibold text-primary/70 hover:text-primary no-underline hover:no-underline"
          >
            <a
              href="https://scholar.google.com/citations?user=jUpxHmsAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
          </Button>
          <Button
            variant="link"
            asChild
            className="h-auto p-0 text-sm font-semibold text-primary/70 hover:text-primary no-underline hover:no-underline"
          >
            <a
              href="https://www.linkedin.com/in/jbergs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
          <span className="text-sm font-semibold text-primary/70">
            info[at]jbergs[dot]eu
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
