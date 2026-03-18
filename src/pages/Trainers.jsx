import { img } from '../utils/img';

const trainers = [
  { img: img('/images/trainer1.jpg'), name: 'John Doe', role: 'Certified Personal Trainer', bio: 'Specializes in strength training, weight loss, and bodybuilding. 5+ years helping clients hit their goals with customized plans.', email: 'john.doe@fitzone.com' },
  { img: img('/images/trainer2.jpg'), name: 'Jane Smith', role: 'Certified Yoga Instructor', bio: '10+ years in yoga and mindfulness training. Expert in flexibility, stress reduction, and holistic wellness.', email: 'jane.smith@fitzone.com' },
  { img: img('/images/trainer3.jpg'), name: 'Mike Johnson', role: 'Certified Strength Coach', bio: 'Expert in powerlifting and strength conditioning. Focused on improving strength, mobility, and athletic performance.', email: 'mike.johnson@fitzone.com' },
  { img: img('/images/trainer1.jpg'), name: 'Sarah Lee', role: 'Certified Nutrition Coach', bio: 'Helps clients with nutrition planning, meal prepping, and healthy eating habits through personalized diet strategies.', email: 'sarah.lee@fitzone.com' },
];

export default function Trainers() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-label">The Experts</div>
        <h1>MEET YOUR COACHES</h1>
        <p>Certified professionals obsessed with your success</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {trainers.map(t => (
              <div className="trainer-card" key={t.name}>
                <div className="trainer-img-wrap">
                  <img src={t.img} alt={t.name} className="trainer-img" />
                  <div className="trainer-overlay" />
                </div>
                <div className="trainer-body">
                  <p className="trainer-name">{t.name}</p>
                  <p className="trainer-role">{t.role}</p>
                  <p className="trainer-bio">{t.bio}</p>
                  <a href={`mailto:${t.email}`} className="trainer-contact">✉ Contact {t.name.split(' ')[0]}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
