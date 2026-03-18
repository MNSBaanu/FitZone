import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const cards = [
  { title: 'Manage Appointments', desc: 'View and manage customer appointments for personal training sessions and group classes.', link: '/classes', linkText: 'Go to Appointments' },
  { title: 'View Inquiries', desc: 'Check and respond to customer inquiries about services, classes, and memberships.', link: '/contact', linkText: 'Go to Inquiries' },
  { title: 'Update Classes', desc: 'Add, remove, or modify class schedules and trainer availability.', link: '/classes', linkText: 'Go to Class Updates' },
  { title: 'Manage Trainers', desc: 'Add new trainers, edit their details, or update their specialties and schedules.', link: '/trainers', linkText: 'Go to Trainer Management' },
  { title: 'View Memberships', desc: 'Check membership plans, track customer membership status, and view renewals.', link: '/membership', linkText: 'Go to Memberships' },
  { title: 'System Updates', desc: 'Manage and update the system settings, such as pricing, promotions, and offers.', link: '/', linkText: 'Go to System Updates' },
];

export default function StaffDashboard() {
  const { user } = useAuth();
  return (
    <div className="dashboard-section">
      <div className="container">
        <h1 className="section-title">Staff Dashboard</h1>
        <p className="section-subtitle">Welcome, {user?.name || 'Staff'}! Manage customer appointments, inquiries, and more.</p>
        <div className="dashboard-grid">
          {cards.map(c => (
            <div className="dashboard-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <Link to={c.link}>{c.linkText} →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
