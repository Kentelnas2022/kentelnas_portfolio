import { useState } from 'react';
import Modal from './Modal';
export default function Contact() {
const [open, setOpen] = useState(false);
const [status, setStatus] = useState('');
function prepareEmail(event) {
event.preventDefault();
const data = new FormData(event.currentTarget);
const subject = 'Project enquiry from ' + data.get('name');
const body = 'Hello,\n\n' + data.get('message') + '\n\n' + data.get('name') + '\n' + data.get('email');
window.location.href = 'mailto:' + encodeURIComponent(data.get('recipient')) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
setStatus('Your email draft is ready in your email app. Review it there and send when you’re ready. No email has been sent by this website.');
}
return <><section id="contact" className="contact section"><div className="eyebrow"><span className="status-dot"></span> OPEN TO THOUGHTFUL COLLABORATIONS</div><div className="contact-title"><h2>Have something<br /><em>in mind?</em></h2><button onClick={() => setOpen(true)} aria-label="Start a project" className="contact-arrow">↗</button></div><div className="contact-bottom"><p>Let’s make something worth putting into the world.</p><button className="text-button" onClick={() => setOpen(true)}>Start a conversation ↗</button></div></section><Modal open={open} onClose={() => setOpen(false)} label="Start a conversation"><span className="eyebrow">LET’S MAKE A START</span><h2>A good conversation<br />changes everything.</h2><p>Tell me a little about what you have in mind.</p><form id="contact-form" onSubmit={prepareEmail}><label>Your name<input name="name" autoComplete="name" required placeholder="Alex Taylor" /></label><label>Your email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>What are you thinking?<textarea name="message" rows="4" required placeholder="A little about your project, timing, and ambitions…"></textarea></label><label>Send to<input name="recipient" type="email" required placeholder="Portfolio owner’s email" /></label><small className="sample-note">Demo setup: enter the owner’s email. This opens your email app with a prepared draft.</small><button className="pill" type="submit">Prepare email ↗</button><p id="form-status" role="status">{status}</p></form></Modal></>;
}
