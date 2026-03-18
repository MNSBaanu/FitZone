import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const primary = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/contact', label: 'Contact' },
];

const more = [
  { to: '/services', label: 'Services' },
  { to: '/classes', label: 'Classes' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropRef = useRef(null);

  const close = () => setOpen(false);
  const handleLogout = () => { logout(); navigate('/'); close(); };

  const dashPath = user?.role === 'admin' ? '/dashboard/admin'
    : user?.role === 'staff' ? '/dashboard/staff' : '/dashboard/customer';

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

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
          {primary.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          ))}

          {/* More dropdown */}
          <div className="nav-dropdown" ref={dropRef}>
            <button className="nav-more-btn" onClick={() => setDropOpen(!dropOpen)}>
              More <span className={`nav-caret${dropOpen ? ' open' : ''}`}>▾</span>
            </button>
            {dropOpen && (
              <div className="nav-dropdown-menu">
                {more.map(({ to, label }) => (
                  <NavLink key={to} to={to} onClick={() => { close(); setDropOpen(false); }}
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

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
