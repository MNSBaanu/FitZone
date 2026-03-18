import { Link } from 'react-router-dom';
import Animate from '../components/Animate';
import PageHeader from '../components/PageHeader';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: 'per month',
    desc: 'Perfect for beginners starting their fitness journey with essential gym access.',
    features: ['Full gym equipment access', '1 Free fitness assessment', 'Access to group classes', 'Locker room access'],
  },
  {
    name: 'Premium',
    price: '$59',
    period: 'per month',
    desc: 'For those who want personalized attention and exclusive access to premium services.',
    features: ['All Basic features', '2 Personal training sessions/mo', 'Premium classes (Yoga, Pilates)', 'Nutrition counseling discount', 'Guest passes (2/month)'],
    featured: true,
  },
  {
    name: 'VIP',
    price: '$99',
    period: 'per month',
    desc: 'The ultimate experience — unlimited access, priority booking, and exclusive perks.',
    features: ['All Premium features', 'Unlimited personal training', 'Priority class booking', 'Free nutrition counseling', 'FitZone merchandise', 'Dedicated locker'],
  },
];

export default function Membership() {
  return (
    <>
      <PageHeader label="Join FitZone" title="MEMBERSHIP PLANS" subtitle="Choose the plan that matches your ambition" />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {plans.map((p, i) => (
              <Animate key={p.name} variant="scaleUp" delay={`${i * 120}ms`}>
                <div className={`plan-card${p.featured ? ' featured' : ''}`}>
                  {p.featured && <div className="plan-badge">Most Popular</div>}
                  <div className="plan-name">{p.name}</div>
                  <div className="plan-price">{p.price}</div>
                  <div className="plan-period">{p.period}</div>
                  <p className="plan-desc">{p.desc}</p>
                  <ul className="plan-features">
                    {p.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <Link to="/register" className={`btn ${p.featured ? 'btn-red' : 'btn-ghost'}`} style={{ display: 'block', textAlign: 'center' }}>
                    Get Started
                  </Link>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
