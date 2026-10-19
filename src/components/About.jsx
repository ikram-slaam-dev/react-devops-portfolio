import SectionHeading from './SectionHeading.jsx'

const topics = [
  {
    icon: '♻',
    title: 'DevOps',
    text: 'A culture and set of practices that unites software development and IT operations, shortening the path from an idea to a running application.',
  },
  {
    icon: '☁',
    title: 'Cloud Computing',
    text: 'Using on-demand servers, storage and services from providers such as AWS instead of buying and maintaining physical hardware.',
  },
  {
    icon: '⚙',
    title: 'Automation',
    text: 'Replacing repetitive manual work, such as testing, building and deploying, with scripts and pipelines that run the same way every time.',
  },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="What is DevOps?"
          subtitle="Three ideas that shape the way modern software is delivered."
        />
        <div className="grid grid-3">
          {topics.map((topic) => (
            <article key={topic.title} className="card">
              <div className="card-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
