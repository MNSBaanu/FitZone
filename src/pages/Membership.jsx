import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic Plan',
    price: '$29.99/month',
    desc: 'A great option for beginners who want to start their fitness journey with essential gym access.',
    features: ['Access to all gym equipment', '1 Free fitness assessment', 'Access to group classes'],
  },
  {
    name: 'Premium Plan',
    price: '$59.99/month',
    desc: 'For those who want more personalized attention and exclusive access to premium services.',
    features: ['All Basic Plan features', '2 Personal Training Sessions/month', 'Access to premium classes (Yoga, Pilates)', 'Exclusive discounts on nutrition counseling'],
    featured: true,
  },
  {
    name: 'VIP Plan',
    price: '$99.99/month',
    desc: 'The ultimate fitness experience with exclusive perks, personal training, and priority access.',
    features: ['All Premium Plan features', 'Unlimited Personal Training Sessions', 'Priority access to group classes', 'Free nutrition counseling sessions', 'Free FitZone gym merchandise'],
  },
];

export default function Membership() {
  return (
    <>
      <div className="page-header">
        <h1>Membership Plans</h1>
        <p>Choose the perfect plan for your fitness journey</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {plans.map(p => (
              <div className={`membership-card${p.featured ? ' featured' : ''}`} key={p.name}>
                {p.featured && <div style={{ background: '#b30000', color: '#fff', fontSize: '0.8rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '1rem', display: 'inline-block', marginBottom: '0.75rem' }}>MOST POPULAR</div>}
                <h3 style={{ color: '#f0f0f0', fontSize: '1.4rem', marginBottom: '0.5rem' }}>{p.name}</h3>
                <div className="membership-price">{p.price}</div>
                <p style={{ color: '#aaa', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{p.desc}</p>
                <ul className="membership-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/register" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>Join Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
