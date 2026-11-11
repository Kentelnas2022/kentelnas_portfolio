import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme') === 'dark';
      setDark(saved);
      document.body.classList.toggle('dark', saved);
    } catch {}
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle('dark', next);
    try { localStorage.setItem('portfolio-theme', next ? 'dark' : 'light'); } catch {}
  }
  return <button className="icon-button" aria-label="Switch color theme" aria-pressed={dark} onClick={toggle}>◐</button>;
}
