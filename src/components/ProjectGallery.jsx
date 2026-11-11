import { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import ProjectArtwork from './ProjectArtwork';
import Modal from './Modal';
export default function ProjectGallery() {
const [filter, setFilter] = useState('all');
const [selected, setSelected] = useState(null);
const project = projects[selected];
useEffect(() => {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  const elements = document.querySelectorAll('#work .section-heading, #work .project');
  elements.forEach(element => { element.classList.add('reveal'); observer.observe(element); });
  return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('reveal', 'visible')); };
}, []);
return <><section id="work" className="work section"><div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>A few things<br />put into the world.</h2></div><p>A selection of concept projects exploring<br />digital products, identity, and the in-between.</p></div><div className="filters" role="group" aria-label="Filter projects"><button className={filter === 'all' ? 'active' : ''} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>All work <sup>04</sup></button><button className={filter === 'digital' ? 'active' : ''} aria-pressed={filter === 'digital'} onClick={() => setFilter('digital')}>Digital experiences</button><button className={filter === 'identity' ? 'active' : ''} aria-pressed={filter === 'identity'} onClick={() => setFilter('identity')}>Brand identities</button></div>
<div className="project-grid"><button hidden={filter !== 'all' && filter !== 'digital'} onClick={() => setSelected('forma')} className="project" data-category="digital" data-project="forma"><ProjectArtwork id="forma" /><div className="project-info"><h3>Forma<span>®</span></h3><span>Digital experience · 2026</span></div><p>A quieter kind of home.</p></button>
<button hidden={filter !== 'all' && filter !== 'identity'} onClick={() => setSelected('aera')} className="project" data-category="identity" data-project="aera"><ProjectArtwork id="aera" /><div className="project-info"><h3>Aēra</h3><span>Brand identity · 2026</span></div><p>Room to breathe.</p></button>
<button hidden={filter !== 'all' && filter !== 'digital'} onClick={() => setSelected('fieldnotes')} className="project" data-category="digital" data-project="fieldnotes"><ProjectArtwork id="fieldnotes" /><div className="project-info"><h3>Fieldnotes</h3><span>Editorial website · 2025</span></div><p>For the beautifully curious.</p></button>
<button hidden={filter !== 'all' && filter !== 'identity'} onClick={() => setSelected('common')} className="project" data-category="identity" data-project="common"><ProjectArtwork id="common" /><div className="project-info"><h3>Common Ground</h3><span>Visual identity · 2025</span></div><p>A familiar place. A fresh perspective.</p></button></div><div className="work-note"><span>THOUGHTFUL BY DESIGN. PERSONAL BY NATURE.</span><span>CONCEPT COLLECTION / 2025—26</span></div></section>
<Modal open={Boolean(selected)} onClose={() => setSelected(null)} label="Project details">{project && <><span className="eyebrow">{project.category}</span><h2>{project.title}</h2><p className="detail-intro">{project.intro}</p><div id="detail-art"><ProjectArtwork id={selected}/></div><div className="detail-columns"><div><h3>The idea</h3><p>{project.challenge}</p></div><div><h3>The approach</h3><p>{project.approach}</p></div></div><p className="sample-note">Self-initiated concept project. Visuals are original design explorations.</p><button className="pill" id="next-project" onClick={(event) => { const keys = Object.keys(projects); setSelected(keys[(keys.indexOf(selected)+1)%keys.length]); event.currentTarget.closest('dialog').scrollTop = 0; }}>Next project ↗</button></>}</Modal></>;
}
