import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import Countdown from '../components/Countdown';
import { img } from '../utils/img';

const services = [
  { img: img('/images/personal-training.jpg'), title: 'Personal Training', desc: 'Get personalized fitness programs designed to meet your goals. Work one-on-one with certified trainers.', link: '/services' },
  { img: img('/images/group-classes.jpg'), title: 'Group Classes', desc: 'Join our fun and engaging group workouts. From yoga to strength training, we have something for everyone!', link: '/classes' },
  { img: img('/images/nutrition.jpg'), title: 'Nutrition Counseling', desc: 'Work with our expert nutritionists to develop meal plans that fuel your fitness journey.', link: '/services' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Welcome to FitZone Fitness Center</h1>
        <p>Your journey to fitness starts here. Join us to achieve your health and wellness goals!</p>
        <div className="hero-btns">
          <Link to="/classes" className="btn btn-secondary">Explore Our Classes</Link>
          <Link to="/register" className="btn btn-outline" style={{ borderColor: '#f0f0f0', color: '#f0f0f0' }}>Join Now</Link>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Everything you need to reach your fitness goals</p>
          <div className="grid-3">
            {services.map(s => (
              <div className="card" key={s.title}>
                <img src={s.img} alt={s.title} className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.desc}</p>
                  <Link to={s.link} className="card-link">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-subtitle">Real stories from real members</p>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Promotion Countdown */}
      <section className="section" style={{ background: '#1a0000', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#f5b400' }}>Special Membership Offer</h2>
          <p className="section-subtitle">Join now and get 20% off your first three months!</p>
          <Countdown />
          <Link to="/register" className="btn btn-secondary">Sign Up Today</Link>
        </div>
      </section>
    </>
  );
}
