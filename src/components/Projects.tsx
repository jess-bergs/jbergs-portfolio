import { Project, ProjectsArraySchema } from '../types/Project'
import projectsData from '../data/projects.json'

// Validate projects data at runtime
const validateProjects = (data: unknown): Project[] => {
  try {
    return ProjectsArraySchema.parse(data)
  } catch (error) {
    console.error('❌ Projects data validation failed:', error)
    throw new Error('Invalid projects data. Check console for details.')
  }
}

const ProjectCard = ({ project }: { project: Project }) => {
  // Prepend base URL for correct path resolution
  const imageSrc = project.image ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}` : undefined

  const CardContent = (
    <>
      {imageSrc && (
        <div className="w-full h-48 bg-gray-100 rounded-t-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={`p-6 ${!project.image ? 'pt-8' : ''}`}>
        <h3 className="text-xl font-semibold text-primary mb-3">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-primary/75 mb-3">
          {project.description}
        </p>
        {project.categories && project.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category, index) => (
              <span
                key={index}
                className="text-xs font-medium text-primary/70 bg-primary/5 px-2 py-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border border-gray-200 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
      >
        {CardContent}
        <div className="px-6 pb-6 pt-2">
          <span className="text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-md transition-colors inline-flex items-center gap-1">
            View
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </a>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      {CardContent}
    </div>
  )
}

const Projects = () => {
  // Validate and parse projects data
  const projects = validateProjects(projectsData)

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
        Selected Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
