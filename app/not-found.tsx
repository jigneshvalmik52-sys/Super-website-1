export default function NotFound() {
  return (
    <main className="container">
      <section className="not-found">
        <div className="not-found-card">
          <h1 className="not-found-title">404</h1>
          <p className="not-found-desc">This page could not be found.</p>
          <div className="not-found-actions">
            <a className="button" href="/">Return Home</a>
            <a className="button" href="#contact" style={{marginLeft:12}}>Contact</a>
          </div>
        </div>
      </section>
    </main>
  );
}
