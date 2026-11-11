import { useState } from 'react';
import Modal from './Modal';

const email = 'kentzorelelnas.202200472@gmail.com';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  function prepareEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get('topic')} — ${data.get('name')}`;
    const body = `Hello Kent,\n\n${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app has been requested. Review and send your draft there. If it does not open, use the email address above to contact me directly.');
  }

  return <>
    <section id="contact" className="contact section">
      <div className="eyebrow"><span className="status-dot" /> OPEN TO FRONTEND & UI/UX ROLES</div>
      <div className="contact-title"><h2>Your next idea.<br /><em>Let’s build it.</em></h2><button onClick={() => setOpen(true)} aria-label="Contact Kent" className="contact-arrow">↗</button></div>
      <div className="contact-bottom"><p>Looking for a thoughtful addition to your team?<br />I’d love to hear about the role and what you’re building.</p><button className="text-button" onClick={() => setOpen(true)}>Start a conversation ↗</button></div>
      <div className="contact-links"><a href={`mailto:${email}`}>{email} ↗</a><a href="https://github.com/kentelnas2022" target="_blank" rel="noopener noreferrer">GitHub / kentelnas2022 ↗</a></div>
    </section>
    <Modal open={open} onClose={() => setOpen(false)} label="Contact Kent Zorel Elnas">
      <span className="eyebrow">LET’S CONNECT</span>
      <h2>A new conversation.<br /><em>A new possibility.</em></h2>
      <p className="detail-intro">Tell me about your team, an open role, or a project you have in mind.</p>
      <a className="contact-email" href={`mailto:${email}`}>{email}</a>
      <form id="contact-form" onSubmit={prepareEmail}>
        <label>Your name<input name="name" autoComplete="name" required placeholder="Your full name" /></label>
        <label>Your email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
        <label>I’m reaching out about<select name="topic" defaultValue="Job opportunity"><option>Job opportunity</option><option>Project collaboration</option><option>General enquiry</option></select></label>
        <label>Your message<textarea name="message" rows={4} required placeholder="A little about your team, role, or project…" /></label>
        <small className="sample-note">Opens a draft addressed to Kent in your email app. You review and send it.</small>
        <button className="pill" type="submit">Prepare email ↗</button>
        <p id="form-status" role="status">{status}</p>
      </form>
    </Modal>
  </>;
}
