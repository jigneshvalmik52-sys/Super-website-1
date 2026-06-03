export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="brand-line">
          <div className="logo-round" aria-label="Super Businesses logo">
            <span className="logo-round-top">Super</span>
            <span className="logo-round-bottom">Businesses</span>
            <div className="logo-center">SB</div>
          </div>
          <div className="logo-copy">
            <p className="logo-name">Super Businesses</p>
            <p className="logo-tag">Premium AI & web experiences</p>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Web Development for Growing Brands</p>
          <h1>High-Performance Web Development for Growing Businesses.</h1>
          <p className="subtitle">
            I help brands scale with fast, responsive, and pixel-perfect custom websites built with clean code.
          </p>
          <a className="button" href="#contact">Get a Free Consultation</a>
        </div>

        <div className="hero-visual">
          <div className="hero-orb">
            <span className="hero-icon">i</span>
            <div className="hero-orb-glow" />
          </div>
          <div className="hero-trace" />
          <div className="hero-trace hero-trace--two" />
        </div>
      </section>

      <section className="section" id="services">
        <h2>What I Offer</h2>
        <div className="cards">
          <article className="card">
            <h3>Custom Web Development</h3>
            <p>Tailored web solutions built from scratch to match your unique brand identity.</p>
          </article>
          <article className="card">
            <h3>Responsive Design</h3>
            <p>Websites that look and perform perfectly on all devices, from desktops to mobile phones.</p>
          </article>
          <article className="card">
            <h3>Speed Optimization</h3>
            <p>Optimizing code to ensure lightning-fast loading times and better user retention.</p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>Why Work With Me?</h2>
          <ul className="list">
            <li>Clean, maintainable, and modern code standards.</li>
            <li>Dedicated to meeting deadlines with high-quality output.</li>
            <li>Clear communication and 100% project transparency.</li>
          </ul>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Selected Works</h2>
        <p className="section-copy">A glimpse of the projects I’ve built with precision and passion.</p>
        <div className="project-grid">
          <div className="project-card">Project Image / Link 1</div>
          <div className="project-card">Project Image / Link 2</div>
          <div className="project-card">Project Image / Link 3</div>
        </div>
      </section>

      <section className="section testimonial" id="testimonials">
        <h2>Client Feedback</h2>
        <blockquote>
          Working with this developer was a game-changer. The website was delivered on time and exceeded our expectations!
        </blockquote>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>Let’s Build Something Great</h2>
          <p>Ready to start your project? Let’s collaborate!</p>
        </div>
        <div className="footer-meta">
          <a href="mailto:yourname@email.com">yourname@email.com</a>
          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Portfolio</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
