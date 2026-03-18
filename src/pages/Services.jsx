import { Link } from 'react-router-dom';
import Animate from '../components/Animate';

const services = [
  { num: '01', title: 'Fitness Classes', desc: 'Cardio, Strength Training, Yoga, and Pilates — all led by certified instructors passionate about helping you reach your goals.', link: '/classes', linkText: 'View Schedule' },
  { num: '02', title: 'Personal Training', desc: 'One-on-one sessions customized to your unique goals. Lose weight, gain muscle, or improve overall health with a tailored plan built just for you.', link: '/trainers', linkText: 'Meet Trainers' },
  { num: '03', title: 'Nutrition Counseling', desc: 'Certified nutritionists offer meal planning, balanced diet guidance, and ongoing support tailored to your performance goals.', link: '/contact', linkText: 'Book a Session' },
  { num: '04', title: 'Group Classes', desc: 'From Zumba to Bootcamp — high-energy group sessions that bring the fun and keep you motivated in a community environment.', link: '/classes', linkText: 'See Class Times' },
  { num: '05', title: 'Yoga & Mindfulness', desc: 'Reconnect mind and body. Our yoga sessions improve flexibility, reduce stress, and promote mental clarity. Morning and evening sessions available.', link: '/classes', linkText: 'View Yoga Schedule' },
];

export default function Services() {
  return (
    <>
      <div className="page-header">
        <Animate variant="fadeIn">
          <div className="page-header-label">What We Offer</div>
          <h1>OUR SERVICES</h1>
          <p>Everything you need to reach your peak performance</p>
        </Animate>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          {services.map((s, i) => (
            <Animate key={s.title} variant="fadeLeft" delay={`${i * 100}ms`}>
              <div className="service-item">
                <div className="service-num">{s.num}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to={s.link}>{s.linkText} →</Link>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </section>
    </>
  );
}
