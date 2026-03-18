import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Animate from '../components/Animate';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) { setError('All fields are required.'); return; }
    const demoUsers = {
      'admin@fitzone.com': { role: 'admin', name: 'Admin' },
      'staff@fitzone.com': { role: 'staff', name: 'Staff' },
      'customer@fitzone.com': { role: 'customer', name: 'Customer' },
    };
    const user = demoUsers[form.email];
    if (user && form.password === 'password123') {
      login({ ...user, email: form.email });
      navigate(user.role === 'admin' ? '/dashboard/admin' : user.role === 'staff' ? '/dashboard/staff' : '/dashboard/customer');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <section className="form-section">
      <Animate variant="scaleUp">
        <div className="form-wrap">
          <h2 className="form-title">MEMBER LOGIN</h2>
          <p className="form-subtitle">Welcome back. Let's get to work.</p>
          {error && <div className="form-feedback error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••" />
            </div>
            <button type="submit" className="btn-submit">Login</button>
          </form>
          <div className="auth-links">
            <p>No account? <Link to="/register">Register here</Link></p>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg3)', borderLeft: '3px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--fo)', fontSize: '.7rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem' }}>Demo Credentials</p>
            <p style={{ fontSize: '.78rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              admin@fitzone.com<br />staff@fitzone.com<br />customer@fitzone.com<br />
              <span style={{ color: 'var(--text)' }}>Password: password123</span>
            </p>
          </div>
        </div>
      </Animate>
    </section>
  );
}
