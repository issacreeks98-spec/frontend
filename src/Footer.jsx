import { useEffect, useState } from 'react';

export default function Footer() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollPct(Math.round(pct));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-ink border-t border-paper/10 px-6 md:px-16 py-6 flex flex-wrap justify-between items-center gap-4">
      <p className="font-mono text-xs text-paper/40">© {new Date().getFullYear()} Issakha Ndiaye</p>
      <div className="flex items-center gap-3 font-mono text-xs text-gis">
        <span>SCROLL {String(scrollPct).padStart(3, '0')}%</span>
        <span className="w-24 h-[2px] bg-paper/10 relative">
          <span className="absolute top-0 left-0 h-full bg-gis" style={{ width: `${scrollPct}%` }} />
        </span>
      </div>
    </footer>
  );
}
