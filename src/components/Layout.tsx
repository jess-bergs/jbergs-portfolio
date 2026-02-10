import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
