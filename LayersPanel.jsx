import { useEffect, useState } from 'react';

const CATEGORIES = [
  { key: 'dev', label: 'Développement', color: 'bg-ochre' },
  { key: 'gis', label: 'SIG & Télédétection', color: 'bg-gis' },
  { key: 'server', label: 'Administration serveur', color: 'bg-paper/60' },
];

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function LayersPanel() {
  const [projects, setProjects] = useState([]);
  const [activeLayers, setActiveLayers] = useState(['dev', 'gis', 'server']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const toggleLayer = (key) => {
    setActiveLayers((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const visibleProjects = projects.filter((p) => activeLayers.includes(p.category));

  return (
    <section id="projects" className="bg-paper px-6 md:px-16 py-24">
      <p className="font-mono text-ink/50 text-xs tracking-[0.3em] uppercase mb-3">Panneau de calques</p>
      <h2 className="font-display text-ink text-4xl md:text-5xl mb-10">Projets</h2>

      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        {/* Panneau de calques - inspiré de QGIS */}
        <aside className="border border-ink/15 rounded-sm p-4 h-fit sticky top-6 bg-white/40">
          <p className="font-mono text-xs text-ink/50 mb-3 uppercase tracking-wider">Calques actifs</p>
          {CATEGORIES.map((cat) => (
            <label key={cat.key} className="flex items-center gap-3 py-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={activeLayers.includes(cat.key)}
                onChange={() => toggleLayer(cat.key)}
                className="accent-ochre w-4 h-4"
              />
              <span className={`w-2.5 h-2.5 rounded-sm ${cat.color}`} />
              <span className="font-sans text-sm text-ink">{cat.label}</span>
            </label>
          ))}
        </aside>

        {/* Liste des projets */}
        <div className="grid sm:grid-cols-2 gap-6">
          {loading && <p className="font-mono text-sm text-ink/50">Chargement des couches…</p>}
          {error && (
            <p className="font-mono text-sm text-ink/50">
              API indisponible pour le moment. Vérifie que le backend tourne.
            </p>
          )}
          {!loading && !error && visibleProjects.length === 0 && (
            <p className="font-mono text-sm text-ink/50">Aucun calque sélectionné.</p>
          )}
          {visibleProjects.map((project) => (
            <article key={project.id} className="border border-ink/10 rounded-sm p-6 bg-white/60 hover:border-ochre/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-sm ${CATEGORIES.find((c) => c.key === project.category)?.color}`} />
                <span className="font-mono text-xs text-ink/50 uppercase tracking-wider">
                  {CATEGORIES.find((c) => c.key === project.category)?.label}
                </span>
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{project.title}</h3>
              <p className="font-sans text-sm text-ink/70 mb-4">{project.summary}</p>
              {project.result_metric && (
                <p className="font-mono text-xs text-gis mb-4">→ {project.result_metric}</p>
              )}
              <p className="font-mono text-xs text-ink/40">{project.stack}</p>
              <div className="flex gap-4 mt-4">
                {project.demo_url && (
                  <a href={project.demo_url} className="text-xs font-sans text-ochre hover:underline" target="_blank" rel="noreferrer">
                    Démo →
                  </a>
                )}
                {project.repo_url && (
                  <a href={project.repo_url} className="text-xs font-sans text-ochre hover:underline" target="_blank" rel="noreferrer">
                    Code →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
