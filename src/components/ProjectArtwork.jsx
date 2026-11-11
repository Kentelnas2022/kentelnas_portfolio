export default function ProjectArtwork({ id }) {
 switch(id) {
case 'forma': return (<div className="art forma"><div className="forma-site"><div className="mock-nav"><b>forma.</b><span>Spaces for living ↗</span></div><div className="forma-title">Less, but<br /><i>better living.</i></div><div className="architecture"><div className="arch"></div><div className="chair"></div><div className="sunlight"></div></div><div className="mock-bottom">OBJECTS WITH INTENTION <span>Discover the collection →</span></div></div><span className="project-open">↗</span></div>);
case 'aera': return (<div className="art aera"><span className="aera-small">A MOMENT TO COME BACK TO YOURSELF.</span><div className="aera-word">aēra</div><div className="aera-orbit"></div><div className="aera-caption">BREATHE IN.<br />BEGIN AGAIN.</div><span className="project-open">↗</span></div>);
case 'fieldnotes': return (<div className="art fieldnotes"><div className="journal"><div className="journal-top">fieldnotes <span>ISSUE 001</span></div><div className="landscape"><div className="hill h1"></div><div className="hill h2"></div><div className="hill h3"></div></div><div className="journal-title">Take the<br /><i>long way.</i></div><div className="journal-bottom">A JOURNAL FOR THE WANDERERS. ↗</div></div><span className="project-open">↗</span></div>);
case 'common': return (<div className="art common"><div className="business-card card-back">common<br />ground<span>GOOD COFFEE. BETTER COMPANY.</span></div><div className="business-card card-front"><span className="flower">✳</span><b>There’s a place<br />for you here.</b><small>COMMON GROUND / COFFEE & COMMUNITY</small></div><span className="project-open">↗</span></div>);
 default: return null;
 }
}
