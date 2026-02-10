import { z } from 'zod'

// Zod schema for runtime validation
export const ProjectSchema = z.object({
  id: z.string().min(1, 'Project ID is required'),
  title: z.string().min(1, 'Project title is required'),
  description: z.string().min(1, 'Project description is required'),
  image: z.string().optional(),
  link: z.string().optional(),
  tags: z.array(z.string()).optional(),
  year: z.string().optional(),
  categories: z.array(z.string()).optional(),
})

// Array schema for validating multiple projects
export const ProjectsArraySchema = z.array(ProjectSchema)

// TypeScript type inferred from Zod schema (ensures they stay in sync)
export type Project = z.infer<typeof ProjectSchema>
