import { build } from 'vite'
import { readFileSync, writeFileSync, unlinkSync, readdirSync } from 'fs'
import { join } from 'path'

await build()

// Clean up: remove the prerender chunk (only needed at build time)
const distDir = join(import.meta.dirname, '..', 'dist')
const assetsDir = join(distDir, 'assets')

// Remove prerender JS file from dist
for (const file of readdirSync(assetsDir)) {
  if (file.startsWith('prerender-') && file.endsWith('.js')) {
    unlinkSync(join(assetsDir, file))
  }
}

// Remove its modulepreload link from index.html
const indexPath = join(distDir, 'index.html')
let html = readFileSync(indexPath, 'utf-8')
html = html.replace(/<link rel="modulepreload"[^>]*prerender[^>]*>\n?\s*/g, '')
writeFileSync(indexPath, html)

process.exit(0)
