import { Link } from 'react-router-dom';
import { img } from '../utils/img';

const classes = [
  {
    title: 'Cardio Class',
    trainer: 'John Doe',
    schedule: 'Monday, Wednesday, Friday — 7:00 AM to 8:00 AM',
    desc: 'A high-energy workout designed to boost your heart rate and burn calories. Suitable for all fitness levels.',
    img: img('/images/personal-training.jpg'),
  },
  {
    title: 'Strength Training',
    trainer: 'Jane Smith',
    schedule: 'Tuesday, Thursday — 6:00 PM to 7:00 PM',
    desc: 'Focuses on building strength using weights, machines, and bodyweight exercises. Ideal for building muscle and endurance.',
    img: img('/images/group-classes.jpg'),
  },
  {
    title: 'Yoga Class',
    trainer: 'Emily Johnson',
    schedule: 'Monday, Wednesday — 8:00 AM to 9:00 AM',
    desc: 'A holistic class focused on flexibility, mindfulness, and relaxation. Great for stress relief and improving mobility.',
    img: img('/images/nutrition.jpg'),
  },
];

export default function Classes() {
  return (
    <>
      <div className="page-header">
        <h1>Our Fitness Classes</h1>
        <p>Find the perfect class to match your fitness goals</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {classes.map(c => (
              <div className="card" key={c.title}>
                <img src={c.img} alt={c.title} className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-text">{c.desc}</p>
                  <p style={{ color: '#b30000', fontWeight: 600, marginBottom: '0.25rem' }}>Trainer: {c.trainer}</p>
                  <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>{c.schedule}</p>
                  <Link to="/register" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>Register Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
