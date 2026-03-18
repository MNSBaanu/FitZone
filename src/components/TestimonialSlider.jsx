import { useState, useEffect } from 'react';

const testimonials = [
  { text: 'FitZone has completely transformed my life. The trainers push you hard but always have your back. Best decision I ever made.', author: 'Sarah Williams', since: 'Member since 2022' },
  { text: 'The group classes are insane — the energy in that room is unlike anything else. I look forward to every single session.', author: 'Mark Thompson', since: 'Member since 2021' },
  { text: 'The nutrition coaching changed everything for me. I finally understand how to fuel my body and the results speak for themselves.', author: 'James Rodriguez', since: 'Member since 2023' },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="testimonials-wrapper">
      <div className="testimonial-card">
        <p className="testimonial-text">"{testimonials[current].text}"</p>
        <p className="testimonial-author">{testimonials[current].author}</p>
        <p className="testimonial-since">{testimonials[current].since}</p>
      </div>
      <div className="slider-controls">
        <button className="slider-btn" onClick={() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)}>‹</button>
        <button className="slider-btn" onClick={() => setCurrent(c => (c + 1) % testimonials.length)}>›</button>
      </div>
      <div className="slider-dots">
        {testimonials.map((_, i) => (
          <span key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </div>
  );
}
