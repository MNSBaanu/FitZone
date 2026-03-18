import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', membership: 'basic', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.firstName) e.firstName = 'Required';
    if (!form.lastName) e.lastName = 'Required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone) e.phone = 'Required';
    if (form.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    // In a real app, POST to backend here
    setFeedback({ type: 'success', msg: 'Account created! Redirecting to login...' });
    setTimeout(() => navigate('/login'), 2000);
  };

  const field = (key, label, type = 'text', placeholder = '') => (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} value={form[key]} placeholder={placeholder}
        className={errors[key] ? 'error' : ''}
        onChange={e => setForm({ ...form, [key]: e.target.value })} />
      {errors[key] && <p className="form-error">{errors[key]}</p>}
    </div>
  );

  return (
    <section className="section">
      <div className="form-wrapper" style={{ maxWidth: '40rem' }}>
        <h2 className="form-title">Create Your Account</h2>
        <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '1.5rem' }}>Start your fitness journey with FitZone today!</p>
        {feedback && <div className={`form-feedback ${feedback.type}`}>{feedback.msg}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1rem' }}>
            {field('firstName', 'First Name', 'text', 'First name')}
            {field('lastName', 'Last Name', 'text', 'Last name')}
          </div>
          {field('email', 'Email', 'email', 'your@email.com')}
          {field('phone', 'Phone Number', 'tel', '+1 234 567 8900')}
          <div className="form-group">
            <label>Membership Type</label>
            <select value={form.membership} onChange={e => setForm({ ...form, membership: e.target.value })}>
              <option value="basic">Basic Plan — $29.99/month</option>
              <option value="premium">Premium Plan — $59.99/month</option>
              <option value="vip">VIP Plan — $99.99/month</option>
            </select>
          </div>
          {field('password', 'Password', 'password', 'Min. 8 characters')}
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" value={form.confirmPassword} placeholder="Repeat password"
              className={form.confirmPassword && form.password !== form.confirmPassword ? 'error' : form.confirmPassword && form.password === form.confirmPassword ? 'success' : ''}
              onChange={e => setForm({ ...form, confirmPassword: e.target.value })} />
            {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="btn-submit">Register</button>
        </form>
        <div className="auth-links">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </section>
  );
}
