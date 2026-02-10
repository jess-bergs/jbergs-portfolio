const About = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-primary">Hi, there!</h2>
      <div>
        <p className="text-sm md:text-base leading-relaxed mb-5 text-primary/85">
 I lead engineering & product strategy at the         <a
            href="https://www.aisi.gov.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline font-semibold"
          >
            UK AI Security Institute
          </a> for our human-in-the-loop research tools enabling our scientists to source empirical data for their groundbreaking AI security research experiments at scale.
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-5 text-primary/85">
          I'm currently also a Research Fellow at{' '}
          <a
            href="https://sparai.org/projects/sp26/recgehdY1Ms47N1XU"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline font-semibold"
          >
            SPAR
          </a>
          , investigating{' '}
          <a
            href="https://sparai.org/projects/sp26/recgehdY1Ms47N1XU"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline font-semibold"
          >
            Agentic Situational Awareness
          </a>
           &nbsp;– developing benchmarks to evaluate whether AI agents understand their operational context and capabilities. My broader interest is in how humans and machines interact, particularly as LLMs and agents reshape our relationship with artificial intelligence.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-primary/85">
          My career so far has been a wild mix of R&D, public sector work and creative tech – from Explainable AI research at BBC R&D to EU Horizon projects on energy citizenship. I'm a proud generalist and love bringing people together via events & conferences I organise. Outside work, I design and playtest board games.
        </p>
      </div>
    </section>
  )
}

export default About
