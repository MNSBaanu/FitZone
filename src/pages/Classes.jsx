import { Link } from 'react-router-dom';
import { img } from '../utils/img';
import Animate from '../components/Animate';

const classes = [
  { tag: 'Cardio', title: 'Cardio Blast', trainer: 'John Doe', schedule: 'Mon / Wed / Fri — 7:00 AM', desc: 'High-energy cardio designed to torch calories and boost endurance. Suitable for all fitness levels.', img: img('/images/personal-training.jpg') },
  { tag: 'Strength', title: 'Strength Training', trainer: 'Jane Smith', schedule: 'Tue / Thu — 6:00 PM', desc: 'Build raw strength using free weights, machines, and bodyweight. Ideal for muscle gain and endurance.', img: img('/images/group-classes.jpg') },
  { tag: 'Mindfulness', title: 'Yoga Flow', trainer: 'Emily Johnson', schedule: 'Mon / Wed — 8:00 AM', desc: 'Holistic practice focused on flexibility, mindfulness, and recovery. Perfect for stress relief and mobility.', img: img('/images/nutrition.jpg') },
];

export default function Classes() {
  return (
    <>
      <div className="page-header">
        <Animate variant="fadeIn">
          <div className="page-header-label">Train With Us</div>
          <h1>FITNESS CLASSES</h1>
          <p>Find the class that matches your intensity</p>
        </Animate>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {classes.map((c, i) => (
              <Animate key={c.title} variant="fadeUp" delay={`${i * 120}ms`}>
                <div className="card">
                  <img src={c.img} alt={c.title} className="card-img" />
                  <div className="card-body">
                    <div className="card-tag">{c.tag}</div>
                    <h3 className="card-title">{c.title}</h3>
                    <p className="card-text">{c.desc}</p>
                    <p className="card-meta">Coach: {c.trainer}</p>
                    <p className="card-schedule">{c.schedule}</p>
                    <Link to="/register" className="btn btn-ghost btn-sm">Register Now</Link>
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
