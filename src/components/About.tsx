const About = () => {
  return (
    <section id="about" className="relative isolate flex flex-col">
      <div className="hero-blob" aria-hidden="true" />
      <h2 className="section-h2 mb-6">Hi, there!</h2>
      <div>
        <p
          className="mb-5 text-[0.95rem] leading-relaxed md:text-base"
          style={{ color: 'var(--color-ink-soft)' }}
        >
          I lead engineering &amp; product strategy at the{' '}
          <a
            href="https://www.aisi.gov.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline"
          >
            UK AI Security Institute
          </a>{' '}
          for our human-in-the-loop research tools enabling our scientists to source empirical
          data for their groundbreaking AI security research experiments at scale.
        </p>
        <p
          className="mb-5 text-[0.95rem] leading-relaxed md:text-base"
          style={{ color: 'var(--color-ink-soft)' }}
        >
          I'm currently also a Research Fellow at{' '}
          <a
            href="https://sparai.org/projects/sp26/recgehdY1Ms47N1XU"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline"
          >
            SPAR
          </a>
          , investigating{' '}
          <a
            href="https://sparai.org/projects/sp26/recgehdY1Ms47N1XU"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline"
          >
            Agentic Situational Awareness
          </a>
          &nbsp;– developing benchmarks to evaluate whether AI agents understand their
          operational context and capabilities. My broader interest is in how humans and
          machines interact, particularly as LLMs and agents reshape our relationship with
          artificial intelligence.
        </p>
        <p
          className="text-[0.95rem] leading-relaxed md:text-base"
          style={{ color: 'var(--color-ink-soft)' }}
        >
          My career so far has been a wild mix of R&amp;D, public sector work and creative
          tech – from AI Security to creative prototyping at BBC R&amp;D to EU Horizon
          projects on energy citizenship. I'm a proud generalist and love bringing people
          together via events &amp; conferences I organise. Outside work, I design and
          playtest board games!
        </p>
      </div>
    </section>
  )
}

export default About
