import { img } from '../utils/img';
import Animate from '../components/Animate';
import PageHeader from '../components/PageHeader';

const trainers = [
  { img: img('/images/trainer1.jpg'), name: 'John Doe', role: 'Certified Personal Trainer', bio: 'Specializes in strength training, weight loss, and bodybuilding. 5+ years helping clients hit their goals with customized plans.', email: 'john.doe@fitzone.com' },
  { img: img('/images/trainer2.jpg'), name: 'Jane Smith', role: 'Certified Yoga Instructor', bio: '10+ years in yoga and mindfulness training. Expert in flexibility, stress reduction, and holistic wellness.', email: 'jane.smith@fitzone.com' },
  { img: img('/images/trainer3.jpg'), name: 'Mike Johnson', role: 'Certified Strength Coach', bio: 'Expert in powerlifting and strength conditioning. Focused on improving strength, mobility, and athletic performance.', email: 'mike.johnson@fitzone.com' },
  { img: img('/images/trainer1.jpg'), name: 'Sarah Lee', role: 'Certified Nutrition Coach', bio: 'Helps clients with nutrition planning, meal prepping, and healthy eating habits through personalized diet strategies.', email: 'sarah.lee@fitzone.com' },
];

export default function Trainers() {
  return (
    <>
      <PageHeader label="The Experts" title="MEET YOUR COACHES" subtitle="Certified professionals obsessed with your success" />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {trainers.map((t, i) => (
              <Animate key={t.name} variant="fadeUp" delay={`${i * 120}ms`}>
                <div className="trainer-card">
                  <div className="trainer-img-wrap">
                    <img src={t.img} alt={t.name} className="trainer-img" />
                    <div className="trainer-overlay" />
                  </div>
                  <div className="trainer-body">
                    <p className="trainer-name">{t.name}</p>
                    <p className="trainer-role">{t.role}</p>
                    <p className="trainer-bio">{t.bio}</p>
                    <a href={`mailto:${t.email}`} className="trainer-contact">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '0.35rem' }}>
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7"/>
                      </svg>
                      Contact {t.name.split(' ')[0]}
                    </a>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
