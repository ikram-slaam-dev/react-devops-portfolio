function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} DevOps Engineer Portfolio. All rights reserved.</p>
        <p className="muted">Built with React + Vite and hosted on AWS Amplify.</p>
      </div>
    </footer>
  )
}

export default Footer
