import { build } from 'vite'

// The prerender entry shares React/ReactDOM/router with the main bundle, so
// Vite emits the shared vendor chunk under the `prerender-*.js` name and the
// runtime `index-*.js` imports from it. We previously deleted that chunk and
// stripped its modulepreload link, which broke the deployed app — keep
// everything Vite emits as-is.
await build()

process.exit(0)
