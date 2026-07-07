export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 bg-ink bg-contour bg-repeat overflow-hidden">
      <div className="absolute top-6 left-6 md:left-16 font-mono text-xs text-gis tracking-widest">
        14.6928° N, 17.4467° W — DAKAR, SN
      </div>

      <div className="max-w-4xl">
        <p className="font-mono text-ochre text-sm tracking-[0.3em] uppercase mb-6">
          Développeur Web · Géomaticien
        </p>
        <h1 className="font-display text-paper text-5xl md:text-7xl leading-[1.05] mb-6">
          Issakha Ndiaye
        </h1>
        <p className="text-paper/70 text-lg md:text-xl max-w-2xl leading-relaxed font-sans">
          J'analyse des territoires par satellite et je construis des applications qui les servent —
          de la classification d'images Sentinel-2 aux systèmes web déployés sur mes propres serveurs.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#projects" className="px-6 py-3 bg-ochre text-ink font-sans font-semibold rounded-sm hover:bg-ochre/90 transition-colors">
            Voir les projets
          </a>
          <a href="#contact" className="px-6 py-3 border border-paper/30 text-paper font-sans rounded-sm hover:border-paper/60 transition-colors">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
