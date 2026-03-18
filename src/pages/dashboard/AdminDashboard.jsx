import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Animate from '../../components/Animate';

const cards = [
  { title: 'Manage Members', desc: 'View, add, or remove members. Manage their membership status and details.', link: '/membership', linkText: 'Go to Members' },
  { title: 'Manage Appointments', desc: 'View and manage customer appointments, including personal training sessions and group classes.', link: '/classes', linkText: 'Go to Appointments' },
  { title: 'Handle Inquiries', desc: 'Review and respond to customer inquiries and support requests.', link: '/contact', linkText: 'Go to Inquiries' },
  { title: 'Manage Trainers', desc: 'Add, edit, or remove trainer profiles and update their specialties.', link: '/trainers', linkText: 'Go to Trainers' },
  { title: 'Membership Plans', desc: 'Create and manage membership plans, pricing, and features.', link: '/membership', linkText: 'Go to Plans' },
  { title: 'Settings', desc: 'Configure system settings, promotions, and site-wide preferences.', link: '/', linkText: 'Go to Settings' },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  return (
    <div className="dashboard-section">
      <div className="container">
        <Animate variant="fadeUp">
          <h1 className="section-title">Admin Dashboard</h1>
          <p className="section-subtitle">Welcome, {user?.name || 'Admin'}! Manage FitZone operations from here.</p>
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
