import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="py-20 md:py-32">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="mb-8 -ml-2 text-primary/70 hover:text-primary"
      >
        <Link to="/" className="inline-flex items-center gap-1">
          ← Back to Home
        </Link>
      </Button>

      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Project: {id}
      </h1>

      <p className="text-primary/70">
        This is a placeholder for the project detail page. You can add more detailed
        information about individual projects here.
      </p>
    </div>
  )
}

export default ProjectDetail
