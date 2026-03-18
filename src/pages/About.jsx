import Animate from '../components/Animate';
import PageHeader from '../components/PageHeader';
import { img } from '../utils/img';

const trainers = [
  { img: img('/images/trainer1.jpg'), name: 'John Doe', role: 'Personal Trainer', spec: 'Strength & Conditioning' },
  { img: img('/images/trainer2.jpg'), name: 'Jane Smith', role: 'Yoga Instructor', spec: 'Mindfulness & Flexibility' },
  { img: img('/images/trainer3.jpg'), name: 'Mark Johnson', role: 'Nutritionist', spec: 'Weight Loss & Health' },
];

const values = [
  { icon: '⚡', title: 'Integrity', desc: 'We operate with honesty and transparency in everything we do.' },
  { icon: '🏆', title: 'Excellence', desc: 'We continually strive to improve our services and offerings.' },
  { icon: '🤝', title: 'Inclusivity', desc: 'We welcome people from all walks of life and fitness levels.' },
  { icon: '💪', title: 'Community', desc: 'We foster a positive, motivating environment for everyone.' },
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
