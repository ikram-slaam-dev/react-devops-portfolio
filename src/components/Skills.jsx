import SectionHeading from './SectionHeading.jsx'

const skills = [
  { name: 'AWS', level: 70, note: 'EC2, S3, IAM, Amplify' },
  { name: 'Docker', level: 65, note: 'Images and containers' },
  { name: 'Linux', level: 75, note: 'Ubuntu, shell, services' },
  { name: 'Git', level: 80, note: 'Branching and workflows' },
  { name: 'GitHub Actions', level: 65, note: 'Automated workflows' },
  { name: 'CI/CD', level: 65, note: 'Build, test, deploy' },
  { name: 'Python', level: 70, note: 'Scripting and apps' },
  { name: 'Node.js', level: 60, note: 'Backend JavaScript' },
  { name: 'React', level: 60, note: 'Component-based UIs' },
  { name: 'Terraform', level: 50, note: 'Infrastructure as code' },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I Work With"
          subtitle="Sample skill levels - edit them to match your own progress."
        />
        <div className="grid grid-skills">
          {skills.map((skill) => (
            <article key={skill.name} className="card skill-card">
              <div className="skill-top">
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <p className="muted">{skill.note}</p>
              <div
                className="progress"
                role="progressbar"
                aria-label={`${skill.name} skill level`}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
