import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
