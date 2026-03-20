import Animate from '../components/Animate';
import PageHeader from '../components/PageHeader';
import { img } from '../utils/img';

const trainers = [
  { img: img('/images/trainer1.jpg'), name: 'John Doe', role: 'Personal Trainer', spec: 'Strength & Conditioning' },
  { img: img('/images/trainer2.jpg'), name: 'Jane Smith', role: 'Yoga Instructor', spec: 'Mindfulness & Flexibility' },
  { img: img('/images/trainer3.jpg'), name: 'Mark Johnson', role: 'Nutritionist', spec: 'Weight Loss & Health' },
];

const values = [
  { 
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, 
    title: 'Integrity', 
    desc: 'We operate with honesty and transparency in everything we do.' 
  },
  { 
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>, 
    title: 'Excellence', 
    desc: 'We continually strive to improve our services and offerings.' 
  },
  { 
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, 
    title: 'Inclusivity', 
    desc: 'We welcome people from all walks of life and fitness levels.' 
  },
  { 
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/><path d="M12 13v8"/><path d="M8 17l4-4 4 4"/></svg>, 
    title: 'Community', 
    desc: 'We foster a positive, motivating environment for everyone.' 
  },
];

export default function About() {
  return (
    <>
      <PageHeader label="Our Story" title="ABOUT FITZONE" subtitle="Built by athletes. Designed for everyone." />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <Animate variant="fadeLeft">
              <div>
                <div className="sec-label">Our Purpose</div>
                <h2 className="sec-title">OUR <em>MISSION</em></h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '.95rem' }}>
                  At FitZone, our mission is to provide top-quality fitness services, expert training, and personalized programs designed to help individuals of all fitness levels achieve their health and wellness goals.
                </p>
                <div className="sec-label">Why Choose Us</div>
                <ul style={{ listStyle: 'none', marginTop: '.5rem' }}>
                  {['State-of-the-art equipment', 'Experienced and certified trainers', 'Wide range of fitness programs', 'Personalized training & nutrition', 'Motivating community'].map((item, i) => (
                    <Animate key={item} variant="fadeLeft" delay={`${i * 80}ms`}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '.6rem 0', borderBottom: '1px solid var(--border)', color: 'var(--text)', fontSize: '.9rem' }}>
                        <span style={{ color: 'var(--red)', fontWeight: 700 }}>→</span> {item}
                      </li>
                    </Animate>
                  ))}
                </ul>
              </div>
            </Animate>

            <Animate variant="fadeRight" delay="150ms">
              <div>
                <div className="sec-label">What We Stand For</div>
                <h2 className="sec-title">OUR <em>VALUES</em></h2>
                <div style={{ marginTop: '1.5rem' }}>
                  {values.map((v, i) => (
                    <Animate key={v.title} variant="fadeUp" delay={`${i * 100}ms`}>
                      <div className="about-value">
                        <div className="about-value-icon">{v.icon}</div>
                        <div>
                          <h4 style={{ fontFamily: 'var(--fo)', fontSize: '.9rem', fontWeight: 700, color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.25rem' }}>{v.title}</h4>
                          <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65 }}>{v.desc}</p>
                        </div>
                      </div>
                    </Animate>
                  ))}
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Animate variant="fadeUp">
            <div className="sec-head sec-head-center">
              <div className="sec-label">The Team</div>
              <h2 className="sec-title">MEET THE <em>COACHES</em></h2>
              <p className="sec-sub">Certified professionals who live and breathe fitness.</p>
            </div>
          </Animate>
          <div className="grid-3">
            {trainers.map((t, i) => (
              <Animate key={t.name} variant="scaleUp" delay={`${i * 130}ms`}>
                <div className="trainer-card">
                  <div className="trainer-img-wrap">
                    <img src={t.img} alt={t.name} className="trainer-img" />
                    <div className="trainer-overlay" />
                  </div>
                  <div className="trainer-body">
                    <p className="trainer-name">{t.name}</p>
                    <p className="trainer-role">{t.role}</p>
                    <p className="trainer-bio">{t.spec}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
