import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
// import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Example route for future use - uncomment when needed:
          <Route path="/project/:id" element={<ProjectDetail />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
