import { img } from '../utils/img';
import Animate from '../components/Animate';
import PageHeader from '../components/PageHeader';

const posts = [
  { title: '5 Effective Workouts for Beginners', date: 'March 10, 2025', category: 'Training', desc: "Starting your fitness journey can be overwhelming. Here's a guide with five beginner-friendly workouts to help you get started and stay motivated.", img: img('/images/group-classes.jpg') },
  { title: 'Healthy Meal Prep Ideas for Busy People', date: 'February 28, 2025', category: 'Nutrition', desc: "Meal prepping doesn't have to be time-consuming. Easy and healthy meal prep ideas that save time and keep your nutrition on track.", img: img('/images/nutrition.jpg') },
  { title: 'The Importance of Mental Health in Fitness', date: 'February 15, 2025', category: 'Wellness', desc: "Fitness isn't just physical. Learn why mental health plays a crucial role in achieving fitness goals and how to keep your mind in the game.", img: img('/images/personal-training.jpg') },
];

export default function Blog() {
  return (
    <>
      <PageHeader label="Knowledge Hub" title="FITNESS BLOG" subtitle="Tips, insights, and stories to fuel your journey" />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {posts.map((p, i) => (
              <Animate key={p.title} variant="fadeUp" delay={`${i * 120}ms`}>
                <div className="card">
                  <img src={p.img} alt={p.title} className="card-img" />
                  <div className="card-body">
                    <div className="card-tag">{p.category}</div>
                    <p className="blog-date">{p.date}</p>
                    <h3 className="card-title">{p.title}</h3>
                    <p className="card-text">{p.desc}</p>
                    <a href="#" className="card-link">Read Article →</a>
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
