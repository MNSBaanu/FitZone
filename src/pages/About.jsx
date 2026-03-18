import { img } from '../utils/img';

const trainers = [
  { img: img('/images/trainer1.jpg'), name: 'John Doe', role: 'Certified Personal Trainer', spec: 'Strength & Conditioning Specialist' },
  { img: img('/images/trainer2.jpg'), name: 'Jane Smith', role: 'Yoga Instructor', spec: 'Mindfulness & Flexibility Coach' },
  { img: img('/images/trainer3.jpg'), name: 'Mark Johnson', role: 'Nutritionist', spec: 'Weight Loss & Health Coach' },
];

export default function About() {
  return (
    <>
      <div className="page-header">
        <h1>About FitZone</h1>
        <p>Our mission, values, and the team behind your fitness journey</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 style={{ color: '#b30000', fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h2>
              <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                At FitZone, our mission is to provide top-quality fitness services, expert training, and personalized programs designed to help individuals of all fitness levels achieve their health and wellness goals. We are dedicated to building a supportive and motivating environment where you can thrive.
              </p>
              <h2 style={{ color: '#b30000', fontSize: '1.5rem', marginBottom: '1rem' }}>Why Choose Us?</h2>
              <ul style={{ color: '#aaa', paddingLeft: '1.5rem', lineHeight: '2' }}>
                <li>State-of-the-art equipment</li>
                <li>Experienced and certified trainers</li>
                <li>Wide range of fitness programs</li>
                <li>Personalized training and nutrition counseling</li>
                <li>Motivating and supportive community</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h2 style={{ color: '#b30000', fontSize: '1.5rem', marginBottom: '1rem' }}>Our Values</h2>
              <p style={{ color: '#aaa', marginBottom: '1rem', lineHeight: '1.8' }}>
                We believe that fitness is not just about physical appearance — it's about health, well-being, and the confidence that comes from achieving personal goals.
              </p>
              <ul style={{ color: '#aaa', paddingLeft: '1.5rem', lineHeight: '2' }}>
                <li><strong style={{ color: '#f0f0f0' }}>Integrity</strong> — Honesty and transparency in everything we do.</li>
                <li><strong style={{ color: '#f0f0f0' }}>Excellence</strong> — Continually improving our services.</li>
                <li><strong style={{ color: '#f0f0f0' }}>Inclusivity</strong> — Welcoming people from all walks of life.</li>
                <li><strong style={{ color: '#f0f0f0' }}>Community</strong> — A positive, motivating environment for everyone.</li>
              </ul>
            </div>
          </div>

          {/* Trainers */}
          <h2 className="section-title" style={{ marginTop: '4rem' }}>Meet Our Trainers</h2>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            {trainers.map(t => (
              <div className="trainer-card" key={t.name}>
                <img src={t.img} alt={t.name} className="trainer-avatar" />
                <p className="trainer-name">{t.name}</p>
                <p className="trainer-role">{t.role}</p>
                <p className="trainer-bio">{t.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
