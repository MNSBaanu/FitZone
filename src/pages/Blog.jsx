const posts = [
  { title: '5 Effective Workouts for Beginners', date: 'March 10, 2025', desc: 'Starting your fitness journey can be overwhelming. Here\'s a guide with five beginner-friendly workouts to help you get started and stay motivated.', img: '/images/group-classes.jpg' },
  { title: 'Healthy Meal Prep Ideas for Busy People', date: 'February 28, 2025', desc: 'Meal prepping doesn\'t have to be time-consuming. Check out these easy and healthy meal prep ideas that will save you time and help you stay on track with your nutrition goals.', img: '/images/nutrition.jpg' },
  { title: 'The Importance of Mental Health in Fitness', date: 'February 15, 2025', desc: 'Fitness isn\'t just physical; it\'s also about mental well-being. Learn why mental health plays a crucial role in achieving fitness goals and how to keep your mind in the game.', img: '/images/personal-training.jpg' },
];

export default function Blog() {
  return (
    <>
      <div className="page-header">
        <h1>Fitness Tips & Wellness Blog</h1>
        <p>Insights, tips, and stories to inspire your journey</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {posts.map(p => (
              <div className="card" key={p.title}>
                <img src={p.img} alt={p.title} className="card-img" />
                <div className="card-body">
                  <p className="blog-meta">{p.date}</p>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-text">{p.desc}</p>
                  <a href="#" className="card-link">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
