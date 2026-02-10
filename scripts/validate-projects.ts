#!/usr/bin/env tsx
/**
 * Validates projects.json against the Zod schema
 * Exits with code 1 if validation fails
 */

import { readFileSync } from 'fs'
import { join } from 'path'
import { ProjectsArraySchema } from '../src/types/Project.js'

const projectsPath = join(process.cwd(), 'src/data/projects.json')

try {
  console.log('🔍 Validating projects.json against Zod schema...')

  const rawData = readFileSync(projectsPath, 'utf-8')
  const projectsData = JSON.parse(rawData)

  const result = ProjectsArraySchema.safeParse(projectsData)

  if (!result.success) {
    console.error('❌ Validation failed!')
    console.error('\nErrors:')
    result.error.errors.forEach((err) => {
      console.error(`  - ${err.path.join('.')}: ${err.message}`)
    })
    process.exit(1)
  }

  console.log(`✅ Validation passed! ${result.data.length} projects validated.`)
  process.exit(0)
} catch (error) {
  console.error('❌ Error reading or parsing projects.json:', error)
  process.exit(1)
}
