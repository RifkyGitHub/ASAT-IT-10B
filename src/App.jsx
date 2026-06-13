 function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-amber-400 selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-amber-400">MRIFKY.</span>HIMAWANW
          </div>
          <div className="hidden md:flex gap-10">
            <a href="#about" className="text-zinc-400 hover:text-amber-400 transition">About</a>
            <a href="#skills" className="text-zinc-400 hover:text-amber-400 transition">Skills</a>
            <a href="#contact" className="text-zinc-400 hover:text-amber-400 transition">Contact</a>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center text-center px-6 py-16 min-h-[calc(100vh-88px)]">
        <div className="w-60 h-60 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.25)] transition-transform duration-500 hover:scale-105">
          <img
            src=""
            alt="Muhammad Rifky Himawan Widitama"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-black mt-8 tracking-tight leading-tight max-w-3xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Muhammad Rifky <br /> Himawan Widitama
        </h1>
        <p className="text-amber-400 mt-4 tracking-widest uppercase text-xs md:text-sm font-semibold bg-amber-400/10 px-4 py-1.5 rounded-full">
          Student • Front-End Learner • Web Enthusiast
        </p>
        <p className="text-zinc-400 max-w-xl mt-6 leading-relaxed text-base md:text-lg">
          Saya adalah siswa kelas 10B Pondok Tahfizh Plus IT Abu Dzar, yang sedang dalam tahapanD mempelajari pengembangan antarmuka web modern yang interaktif.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          <button className="bg-amber-400 text-black px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
            Contact Me
          </button>
          <button className="border border-zinc-800 bg-zinc-900/50 text-zinc-200 px-8 py-3.5 rounded-xl font-semibold hover:border-amber-400 hover:text-amber-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
            My Projects
          </button>
        </div>

      </main>

    </div>
  );
}
export default App;
