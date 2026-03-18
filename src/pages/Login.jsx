import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) {
      setError('All fields are required.');
      return;
    }
    // Demo login — replace with real API call
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
    <section className="section">
      <div className="form-wrapper">
        <h2 className="form-title">Login to Your Account</h2>
        {error && <div className="form-feedback error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn-submit">Login</button>
        </form>
        <div className="auth-links" style={{ marginTop: '1rem' }}>
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
        <div className="auth-links" style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#666' }}>
          <p>Demo: admin@fitzone.com / staff@fitzone.com / customer@fitzone.com — password: password123</p>
        </div>
      </div>
    </section>
  );
}
