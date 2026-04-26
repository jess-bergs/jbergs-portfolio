import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>
      {/* Hero (left) + About (right) on large screens, stacked on mobile */}
      <div className="grid grid-cols-1 gap-10 py-10 md:py-14 lg:grid-cols-2 lg:gap-16">
        <Hero />
        <About />
      </div>

      <hr className="rule" />

      <Projects />
    </>
  )
}

export default Home
