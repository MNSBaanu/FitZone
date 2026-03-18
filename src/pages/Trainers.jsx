import { img } from '../utils/img';

const trainers = [
  { img: img('/images/trainer1.jpg'), name: 'John Doe', role: 'Certified Personal Trainer', bio: 'John specializes in strength training, weight loss, and bodybuilding. He has 5+ years of experience helping clients achieve their fitness goals with customized workout plans.', email: 'john.doe@fitzone.com' },
  { img: img('/images/trainer2.jpg'), name: 'Jane Smith', role: 'Certified Yoga Instructor', bio: 'Jane has over 10 years of experience in yoga and mindfulness training. She specializes in flexibility, stress reduction, and holistic wellness.', email: 'jane.smith@fitzone.com' },
  { img: img('/images/trainer3.jpg'), name: 'Mike Johnson', role: 'Certified Strength Coach', bio: 'Mike is an expert in powerlifting and strength conditioning. He focuses on improving clients\' strength, mobility, and overall performance.', email: 'mike.johnson@fitzone.com' },
  { img: img('/images/trainer1.jpg'), name: 'Sarah Lee', role: 'Certified Nutrition Coach', bio: 'Sarah helps clients with nutrition planning, meal prepping, and healthy eating habits. She works closely with clients to create personalized diet plans.', email: 'sarah.lee@fitzone.com' },
];

export default function Trainers() {
  return (
    <>
      <div className="page-header">
        <h1>Meet Our Expert Trainers</h1>
        <p>Certified professionals dedicated to your fitness success</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {trainers.map(t => (
              <div className="trainer-card" key={t.name}>
                <img src={t.img} alt={t.name} className="trainer-avatar" style={{ width: '10rem', height: '10rem' }} />
                <p className="trainer-name">{t.name}</p>
                <p className="trainer-role">{t.role}</p>
                <p className="trainer-bio">{t.bio}</p>
                <a href={`mailto:${t.email}`} className="trainer-contact">Contact {t.name.split(' ')[0]}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
