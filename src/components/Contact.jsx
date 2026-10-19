import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  // Demo only: nothing is sent anywhere. The page just shows a confirmation.
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.target.reset()
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Replace the placeholder details below with your own."
        />

        <div className="contact-grid">
          <div className="card contact-info">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <strong>Email:</strong> your.name@example.com
              </li>
              <li>
                <strong>Phone:</strong> +00 000 0000000
              </li>
              <li>
                <strong>Location:</strong> Your City, Your Country
              </li>
              <li>
                <strong>GitHub:</strong> github.com/your-username
              </li>
              <li>
                <strong>LinkedIn:</strong> linkedin.com/in/your-username
              </li>
            </ul>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            <p className="notice">
              <strong>Demo only:</strong> this form is a frontend demonstration. It does not
              send messages because this project has no backend.
            </p>

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {submitted && (
              <p className="success" role="status">
                Thanks! This is a demo, so your message was not sent anywhere.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
