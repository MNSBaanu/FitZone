import { useState } from 'react';
import Animate from '../components/Animate';
import PageHeader from '../components/PageHeader';

const info = [
  { 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, 
    label: 'Phone', 
    value: '+94 11 234 5678' 
  },
  { 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7"/></svg>, 
    label: 'Email', 
    value: 'info@fitzone.com' 
  },
  { 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, 
    label: 'Location', 
    value: 'No. 123, Fitness Street, Kurunegala, Sri Lanka' 
  },
  { 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, 
    label: 'Hours', 
    value: 'Mon–Fri: 6AM–10PM | Sat–Sun: 7AM–8PM' 
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFeedback({ type: 'error', msg: 'All fields are required.' });
      return;
    }
    setFeedback({ type: 'success', msg: "Message sent! We'll get back to you within 24 hours." });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <PageHeader label="Reach Out" title="GET IN TOUCH" subtitle="Questions? We're here and ready to help." />
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <Animate variant="fadeLeft">
              <div className="contact-info">
                <h3>Contact Information</h3>
                {info.map(i => (
                  <div className="contact-row" key={i.label}>
                    <div className="contact-icon">{i.icon}</div>
                    <div>
                      <strong>{i.label}</strong>
                      <span>{i.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Animate>

            <Animate variant="fadeRight">
              <div className="form-wrap" style={{ maxWidth: '100%' }}>
                <h2 className="form-title">Send a Message</h2>
                {feedback && <div className={`form-feedback ${feedback.type}`}>{feedback.msg}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="btn-submit">Send Message</button>
                </form>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
}
