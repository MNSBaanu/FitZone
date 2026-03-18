import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Animate from '../../components/Animate';

const cards = [
  { title: 'View Classes', desc: 'Explore our available fitness classes and find the perfect one for you!', link: '/classes', linkText: 'Go to Classes' },
  { title: 'Your Membership', desc: 'Manage your membership, check renewal dates, and explore new benefits.', link: '/membership', linkText: 'Go to Membership' },
  { title: 'Submit Inquiry', desc: "Have a question or concern? Send us a message and we'll get back to you.", link: '/contact', linkText: 'Contact Us' },
  { title: 'Meet Trainers', desc: 'Browse our certified trainers and find the right fit for your goals.', link: '/trainers', linkText: 'View Trainers' },
  { title: 'Read Blog', desc: 'Stay up to date with fitness tips, nutrition advice, and success stories.', link: '/blog', linkText: 'Go to Blog' },
  { title: 'Services', desc: 'Explore all the services FitZone has to offer for your wellness journey.', link: '/services', linkText: 'View Services' },
];

export default function CustomerDashboard() {
  const { user } = useAuth();
  return (
    <div className="dashboard-section">
      <div className="container">
        <Animate variant="fadeUp">
          <h1 className="section-title">Customer Dashboard</h1>
          <p className="section-subtitle">Welcome back, {user?.name || 'Member'}! What would you like to do today?</p>
        </Animate>
        <div className="dashboard-grid">
          {cards.map((c, i) => (
            <Animate key={c.title} variant="fadeUp" delay={`${i * 80}ms`}>
              <div className="dashboard-card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <Link to={c.link}>{c.linkText} →</Link>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </div>
  );
}
