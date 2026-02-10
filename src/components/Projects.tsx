import { useState } from 'react'
import { Project, ProjectsArraySchema } from '../types/Project'
import projectsData from '../data/projects.json'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

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

  const CardContentSection = (
    <>
      {imageSrc && (
        <div className="w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg">
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className={!project.image ? 'pt-8' : ''}>
        <h3 className="text-xl font-semibold text-primary">
          {project.title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed text-primary/75">
          {project.description}
        </p>
        {project.categories && project.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category, index) => (
              <Badge key={index} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </>
  )

  if (project.link) {
    return (
      <Card className="group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col h-full"
        >
          {CardContentSection}
          <CardContent className="pt-2 mt-auto">
            <span className="text-sm font-semibold text-primary hover:text-link transition-colors inline-flex items-center gap-1">
              View
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </CardContent>
        </a>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      {CardContentSection}
    </Card>
  )
}

const Projects = () => {
  // Validate and parse projects data
  const projects = validateProjects(projectsData)

  // State for category filter - now supports multiple selections
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Extract all unique categories
  const allCategories = Array.from(
    new Set(
      projects.flatMap(project => project.categories || [])
    )
  ).sort()

  // Filter projects based on selected categories and search query
  const filteredProjects = projects.filter(project => {
    // Category filter
    const matchesCategory = selectedCategories.length === 0 ||
      project.categories?.some(cat => selectedCategories.includes(cat))

    // Search filter
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <section className="py-12 border-t border-gray-200">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-primary">
        Selected Work
      </h2>

      {/* Category Filter and Search */}
      <div className="flex items-center gap-6 mb-8">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategories.length === 0 ? 'default' : 'secondary'}
            className="cursor-pointer"
            onClick={() => setSelectedCategories([])}
          >
            All
          </Badge>
          {allCategories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategories.includes(category) ? 'default' : 'secondary'}
              className="cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-link focus:border-transparent w-48"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
