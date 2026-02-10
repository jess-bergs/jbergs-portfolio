import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>
      {/* Hero and About side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-20 md:py-32">
        <Hero />
        <About />
      </div>

      {/* Projects full width below */}
      <Projects />
    </>
  )
}

export default Home
