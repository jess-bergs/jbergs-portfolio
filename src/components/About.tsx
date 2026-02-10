const About = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">About</h2>
      <div>
        <p className="text-sm md:text-base leading-relaxed mb-5 text-primary/85">
          I'm a Lead UX Engineer at the AI Security Institute (UK DSIT), where I lead engineering
          and product strategy for human-in-the-loop research tools. I transform experimental concepts
          into production-grade research software products used in AISI's top-priority AI security testing exercises.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-primary/85">
          Previously, I worked at BBC R&D researching Explainable AI and prototyping ML-powered experiences,
          and at Sainsbury's as Senior Data Engineer building highly performant data pipelines.
        </p>
      </div>
    </section>
  )
}

export default About
