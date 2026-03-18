import { useState, useEffect } from 'react';

const testimonials = [
  { text: '"FitZone has transformed my life. The trainers are supportive and the classes are always challenging!"', author: 'Sarah Williams', since: 'Member since 2022' },
  { text: '"I love the group classes! The energy and camaraderie keep me coming back every week."', author: 'Mark Thompson', since: 'Member since 2021' },
  { text: '"The nutrition counseling program has been a game-changer for me. I\'ve learned so much about fueling my body properly."', author: 'James Rodriguez', since: 'Member since 2023' },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <div className="testimonials-wrapper">
      <div className="testimonial-slider">
        <div className="testimonial-card">
          <p className="testimonial-text">{testimonials[current].text}</p>
          <p className="testimonial-author">{testimonials[current].author}</p>
          <p className="testimonial-since">{testimonials[current].since}</p>
        </div>
      </div>
      <div className="slider-controls">
        <button className="slider-btn" onClick={prev}>&#8249;</button>
        <button className="slider-btn" onClick={next}>&#8250;</button>
      </div>
      <div className="slider-dots">
        {testimonials.map((_, i) => (
          <span key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </div>
  );
}
