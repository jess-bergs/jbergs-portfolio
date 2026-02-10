import { useParams, Link } from 'react-router-dom'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="py-20 md:py-32">
      <Link
        to="/"
        className="text-sm font-semibold text-primary/70 hover:text-primary transition-colors inline-flex items-center gap-1 mb-8"
      >
        ← Back to Home
      </Link>

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
