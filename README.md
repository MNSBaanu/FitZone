# FitZone Fitness Center

A modern fitness center web application built with React and Vite. Features service showcases, class listings, trainer profiles, membership plans, and role-based dashboards.

🌐 **Live Site**: [mnsbaanu.github.io/FitZone](https://mnsbaanu.github.io/FitZone/)

## Tech Stack

- **React 19** — UI and routing
- **React Router v7** — Client-side navigation with scroll restoration
- **Vite 8** — Build tool and dev server
- **CSS3** — Custom styling, no UI framework

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, testimonials, promo countdown |
| `/about` | Mission, values, and team |
| `/services` | Service listings |
| `/classes` | Class schedule |
| `/trainers` | Trainer profiles |
| `/membership` | Pricing plans |
| `/blog` | Fitness articles |
| `/contact` | Contact form and info |
| `/register` | Member registration |
| `/login` | Member login |
| `/dashboard/customer` | Customer dashboard |
| `/dashboard/staff` | Staff dashboard |
| `/dashboard/admin` | Admin dashboard |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/MNSBaanu/FitZone.git
cd FitZone

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`. The workflow builds the project and publishes the `docs` folder to the `gh-pages` branch.

## Project Structure

```
src/
├── components/     # Navbar, Footer, Animate, Countdown, etc.
├── context/        # AuthContext for role-based access
├── hooks/          # useInView for scroll animations
├── pages/          # All route-level page components
│   └── dashboard/  # Admin, Staff, Customer dashboards
└── utils/          # Image path helper
```

## Author

**MNSBaanu** — [@MNSBaanu](https://github.com/MNSBaanu)
