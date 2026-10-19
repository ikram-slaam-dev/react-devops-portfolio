import SectionHeading from './SectionHeading.jsx'

const projects = [
  {
    title: 'Deploying a Python Application on AWS EC2',
    description:
      'Launched an Ubuntu EC2 instance, installed Python dependencies, ran the app with Gunicorn and exposed it through Nginx.',
    tags: ['AWS EC2', 'Python', 'Nginx', 'Linux'],
  },
  {
    title: 'Containerizing a Node.js Application with Docker',
    description:
      'Wrote a Dockerfile for a Node.js app, built the image and ran it as a container so it behaves the same on any machine.',
    tags: ['Docker', 'Node.js', 'Containers'],
  },
  {
    title: 'Deploying a React Frontend with AWS Amplify',
    description:
      'Connected a GitHub repository to AWS Amplify Hosting so every push is built and published automatically.',
    tags: ['AWS Amplify', 'React', 'Vite', 'GitHub'],
  },
  {
    title: 'Building a CI/CD Pipeline with GitHub Actions',
    description:
      'Created a workflow that installs dependencies, runs tests and deploys the application whenever code is pushed.',
    tags: ['GitHub Actions', 'CI/CD', 'Automation'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Sample Projects"
          subtitle="Hands-on DevOps practice projects (sample descriptions)."
        />
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <article key={project.title} className="card project-card">
              <span className="project-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
