function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="eyebrow">Welcome to my portfolio</span>
          <h1>
            Hi, I&apos;m a <span className="accent">DevOps Engineer</span> in the making.
          </h1>
          <p>
            I build, automate and ship software. DevOps brings development and operations
            together so teams can release reliable applications faster, using cloud
            platforms, automation and continuous delivery.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">deploy.sh</span>
          </div>
          <pre>
{`$ git push origin main
> Amplify: change detected
> npm ci ............ done
> npm run build ..... done
> publishing dist/ .. done

✓ Deployment successful`}
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero
