import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import Countdown from '../components/Countdown';
import Animate from '../components/Animate';
import { img } from '../utils/img';

const services = [
  { img: img('/images/personal-training.jpg'), tag: 'One-on-One', title: 'Personal Training', desc: 'Customized programs built around your goals. Work directly with certified trainers who push you to your limit.', link: '/services' },
  { img: img('/images/group-classes.jpg'), tag: 'Community', title: 'Group Classes', desc: 'High-energy sessions with a crew that keeps you accountable. Cardio, HIIT, Yoga — we have it all.', link: '/classes' },
  { img: img('/images/nutrition.jpg'), tag: 'Fuel Right', title: 'Nutrition Coaching', desc: 'Expert nutritionists craft meal plans that fuel performance and accelerate your results.', link: '/services' },
];

const stats = [
  { num: '500+', label: 'Active Members' },
  { num: '20+', label: 'Expert Trainers' },
  { num: '30+', label: 'Weekly Classes' },
  { num: '10+', label: 'Years of Excellence' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-eyebrow">Welcome to FitZone</div>
          <h1>FORGE YOUR<br /><em>BEST SELF</em></h1>
          <p className="hero-sub">
            Elite training. Expert coaches. Real results. Your transformation starts the moment you walk through our doors.
          </p>
          <div className="hero-btns">
            <Link to="/membership" className="btn btn-red">Start Today</Link>
            <Link to="/classes" className="btn btn-outline">View Classes</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {stats.map(s => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <Animate variant="fadeUp">
            <div className="sec-head">
              <div className="sec-label">What We Offer</div>
              <h2 className="sec-title">TRAIN LIKE A <em>CHAMPION</em></h2>
              <p className="sec-sub">World-class facilities and expert-led programs designed to get you results — fast.</p>
            </div>
          </Animate>
          <div className="grid-3">
            {services.map((s, i) => (
              <Animate key={s.title} variant="fadeUp" delay={`${i * 120}ms`}>
                <div className="card">
                  <img src={s.img} alt={s.title} className="card-img" />
                  <div className="card-body">
                    <div className="card-tag">{s.tag}</div>
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-text">{s.desc}</p>
                    <Link to={s.link} className="card-link">Learn More →</Link>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <Animate variant="fadeUp">
            <div className="sec-head sec-head-center">
              <div className="sec-label">Member Stories</div>
              <h2 className="sec-title">REAL PEOPLE.<br /><em>REAL RESULTS.</em></h2>
              <p className="sec-sub">Don't take our word for it — hear from the members who've transformed their lives at FitZone.</p>
            </div>
          </Animate>
          <Animate variant="scaleUp" delay="150ms">
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <TestimonialSlider />
            </div>
          </Animate>
        </div>
      </section>

      {/* PROMO COUNTDOWN */}
      <section className="promo-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Animate variant="fadeUp">
            <div className="sec-label" style={{ justifyContent: 'center' }}>Limited Time Offer</div>
            <h2 className="sec-title" style={{ color: 'var(--white)', textAlign: 'center', marginBottom: '.75rem' }}>
              GET <em>20% OFF</em> YOUR FIRST 3 MONTHS
            </h2>
            <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '.95rem' }}>
              Offer expires soon. Lock in your rate before it's gone.
            </p>
          </Animate>
          <Animate variant="scaleUp" delay="200ms">
            <Countdown />
          </Animate>
          <Animate variant="fadeUp" delay="300ms">
            <div style={{ textAlign: 'center' }}>
              <Link to="/register" className="btn btn-gold">Claim Your Discount</Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
