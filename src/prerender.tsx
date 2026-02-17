import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

export async function prerender() {
  const html = renderToString(
    <StaticRouter location="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </StaticRouter>
  )

  return { html, links: ['/'] }
}
