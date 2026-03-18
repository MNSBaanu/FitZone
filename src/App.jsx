import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import StaffDashboard from './pages/dashboard/StaffDashboard';
import CustomerDashboard from './pages/dashboard/CustomerDashboard';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/FitZone/">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/admin" element={
              <ProtectedRoute roles={['admin']}><AdminDashboard /></ProtectedRoute>
            } />
            <Route path="/dashboard/staff" element={
              <ProtectedRoute roles={['staff', 'admin']}><StaffDashboard /></ProtectedRoute>
            } />
            <Route path="/dashboard/customer" element={
              <ProtectedRoute roles={['customer', 'admin']}><CustomerDashboard /></ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
