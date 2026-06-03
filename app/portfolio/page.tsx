export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 portfolio-page">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Digital Creator & AI Specialist
        </h1>
        <p className="mt-4 text-xl text-slate-400">Transforming ideas into cinematic visual experiences.</p>
      </header>

      {/* About Me */}
      <section className="max-w-4xl mx-auto mb-16 p-8 border border-slate-800 rounded-2xl bg-slate-900/50">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a professional digital content creator specializing in AI-generated visuals, 
          cinematic video editing, and high-conversion web development. My goal is to help 
          brands grow through a powerful, faceless digital presence.
        </p>
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="p-6 border border-purple-500/30 rounded-xl bg-purple-900/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition">
          <h3 className="text-xl font-bold mb-2">YouTube Thumbnails</h3>
          <p className="text-slate-400">High-definition, click-worthy designs to boost your views.</p>
        </div>
        <div className="p-6 border border-blue-500/30 rounded-xl bg-blue-900/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition">
          <h3 className="text-xl font-bold mb-2">AI Video Creation</h3>
          <p className="text-slate-400">Cinematic animated storytelling for faceless brands.</p>
        </div>
        <div className="p-6 border border-purple-500/30 rounded-xl bg-purple-900/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-slate-400">Modern, fast, and responsive websites for growing businesses.</p>
        </div>
      </section>

      {/* Contact Button */}
      <div className="text-center mt-16">
        <a href="mailto:your-email@example.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg hover:scale-105 transition">
          Get a Free Consultation
        </a>
      </div>
    </main>
  );
}
