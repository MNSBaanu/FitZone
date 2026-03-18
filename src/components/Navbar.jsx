import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const publicLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/classes', label: 'Classes' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/membership', label: 'Membership' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setOpen(false);
  };

  const dashboardPath =
    user?.role === 'admin' ? '/dashboard/admin'
    : user?.role === 'staff' ? '/dashboard/staff'
    : '/dashboard/customer';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          Fit<span>Zone</span>
        </NavLink>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`navbar-links${open ? ' open' : ''}`}>
          {publicLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          ))}
          {user ? (
            <>
              <NavLink to={dashboardPath} onClick={() => setOpen(false)}>Dashboard</NavLink>
              <button className="btn-login" style={{ background: 'none', border: '1px solid #b30000', color: '#b30000', padding: '0.4rem 1rem', borderRadius: '0.375rem', cursor: 'pointer' }} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn-login" onClick={() => setOpen(false)}>Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
