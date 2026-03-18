import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
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

  const close = () => setOpen(false);
  const handleLogout = () => { logout(); navigate('/'); close(); };

  const dashPath = user?.role === 'admin' ? '/dashboard/admin'
    : user?.role === 'staff' ? '/dashboard/staff' : '/dashboard/customer';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={close}>
          FIT<span>ZONE</span>
        </NavLink>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        <div className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          ))}
          {user ? (
            <>
              <NavLink to={dashPath} onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
              <button className="nav-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className="nav-btn" onClick={close}>Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
