import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFeedback({ type: 'error', msg: 'All fields are required.' });
      return;
    }
    // In a real app, POST to backend here
    setFeedback({ type: 'success', msg: 'Message sent! We\'ll get back to you soon.' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>Have questions? We're here to help.</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="contact-info">
              <h3>Our Contact Information</h3>
              <p><strong>Phone:</strong> +94 11 234 5678</p>
              <p><strong>Email:</strong> info@fitzone.com</p>
              <p><strong>Location:</strong> No. 123, Fitness Street, Kurunegala, Sri Lanka</p>
              <p><strong>Hours:</strong> Mon–Fri: 6AM–10PM | Sat–Sun: 7AM–8PM</p>
            </div>

            <div className="form-wrapper" style={{ maxWidth: '100%' }}>
              <h2 className="form-title">Send Us a Message</h2>
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
                  <label>Your Message</label>
                  <textarea rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
