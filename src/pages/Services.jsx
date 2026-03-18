import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Fitness Classes',
    desc: 'Our fitness classes include a variety of options such as Cardio, Strength Training, Yoga, and Pilates, all led by certified instructors who are passionate about helping you reach your fitness goals.',
    link: '/classes', linkText: 'View class schedule',
  },
  {
    title: 'Personal Training',
    desc: 'Our personal training sessions are customized to fit your unique fitness goals. Whether you\'re looking to lose weight, gain muscle, or improve your overall health, our certified personal trainers will create a tailored plan for you.',
    link: '/trainers', linkText: 'Meet our trainers',
  },
  {
    title: 'Nutrition Counseling',
    desc: 'Our certified nutritionists offer meal planning, balanced diet guidance, and support tailored to your goals. Great for anyone looking to level up their nutrition game.',
    link: '/contact', linkText: 'Book a session',
  },
  {
    title: 'Group Classes',
    desc: 'From Zumba to Bootcamp, our group classes bring the fun! Perfect for motivation and energy in a friendly environment.',
    link: '/classes', linkText: 'See class times',
  },
  {
    title: 'Yoga & Mindfulness',
    desc: 'Chill out and reconnect. Our yoga sessions improve flexibility, reduce stress, and promote mental clarity. Morning and evening sessions available.',
    link: '/classes', linkText: 'View yoga schedule',
  },
];

export default function Services() {
  return (
    <>
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Explore the wide range of services offered at FitZone</p>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {services.map(s => (
            <div className="service-item" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to={s.link}>{s.linkText} →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
