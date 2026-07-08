import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-ink px-6 md:px-16 py-24">
      <p className="font-mono text-gis text-xs tracking-[0.3em] uppercase mb-3">Coordonnées</p>
      <h2 className="font-display text-paper text-4xl md:text-5xl mb-10">Travaillons ensemble</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 font-sans text-paper/70">
          <p>Étudiant en développement web et géomatique, disponible pour des missions freelance
             (SIG, télédétection, VBA, sites web) et ouvert aux opportunités de stage.</p>
          <p className="font-mono text-sm text-paper/50">nissakha99@gmail.com</p>
          <p className="font-mono text-sm text-paper/50">WhatsApp +221 77 440 92 61</p>
          <a href="https://linkedin.com/in/issakha-ndiaye" className="font-mono text-sm text-ochre hover:underline block">
            linkedin.com/in/issakha-ndiaye
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text" name="name" placeholder="Nom" required
            value={form.name} onChange={handleChange}
            className="w-full bg-transparent border border-paper/20 text-paper px-4 py-3 font-sans text-sm focus:outline-none focus:border-ochre rounded-sm"
          />
          <input
            type="email" name="email" placeholder="Email" required
            value={form.email} onChange={handleChange}
            className="w-full bg-transparent border border-paper/20 text-paper px-4 py-3 font-sans text-sm focus:outline-none focus:border-ochre rounded-sm"
          />
          <input
            type="text" name="subject" placeholder="Sujet"
            value={form.subject} onChange={handleChange}
            className="w-full bg-transparent border border-paper/20 text-paper px-4 py-3 font-sans text-sm focus:outline-none focus:border-ochre rounded-sm"
          />
          <textarea
            name="message" placeholder="Message" required rows={5}
            value={form.message} onChange={handleChange}
            className="w-full bg-transparent border border-paper/20 text-paper px-4 py-3 font-sans text-sm focus:outline-none focus:border-ochre rounded-sm"
          />
          <button
            type="submit" disabled={status === 'sending'}
            className="px-6 py-3 bg-ochre text-ink font-sans font-semibold rounded-sm hover:bg-ochre/90 transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
          </button>
          {status === 'sent' && <p className="font-mono text-xs text-gis">Message envoyé. Je réponds sous 24h.</p>}
          {status === 'error' && <p className="font-mono text-xs text-red-400">Erreur d'envoi. Réessaie ou écris-moi directement.</p>}
        </form>
      </div>
    </section>
  );
}
