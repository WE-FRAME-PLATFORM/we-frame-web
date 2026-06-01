# WeFrame - Cinema Movie Streaming Platform

![WeFrame Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxzGHUUYrZa3j2XtIxHxnGiBMAwKjj.png)

**Watch Better. Together.**

WeFrame is a modern cinema movie streaming platform built with Next.js 16, featuring a sleek dark theme, movie discovery, user authentication, and a unique "Watch Together" feature for synchronized group viewing.

## ✨ Features

### 🎬 Movie Discovery
- **Browse 12+ Featured Movies**: Curated collection with custom-generated posters
- **Search by Title**: Real-time search across the movie library
- **Category Filtering**: Filter by Sci-Fi, Action, Drama, Romance, Comedy
- **Advanced Sorting**: Sort by Rating, Release Year, or Title
- **Rich Movie Cards**: Display posters, IMDb ratings, year, duration, and genre

### 👤 User Authentication
- **Sign In Modal**: Email and password login interface
- **Registration Modal**: Multi-field registration with validation
- **Form Validation**: Client-side validation with error messaging
- **Secure Architecture**: Ready for backend integration

### 🎯 Interactive Features
- **Watch Now Button**: Quick access to movie playback
- **Featured Hero Section**: Prominent recommended content display
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Professional transitions and hover effects

### 📱 Modern UI
- **Dark Theme**: Eye-friendly dark background with red/pink accents (#FF1F3D)
- **Glass-morphism Effects**: Translucent headers and overlays
- **Accessibility First**: Semantic HTML, ARIA labels, keyboard navigation

## 🏗️ Architecture

### Technology Stack
- **Framework**: Next.js 16.2.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Runtime**: React 19 with Server Components
- **Package Manager**: pnpm

### Project Structure
```
weframe-web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Global styles & tokens
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Featured movie
│   ├── MovieGrid.tsx       # Movie browser
│   ├── MovieCard.tsx       # Movie card component
│   ├── LoginModal.tsx      # Login form
│   ├── RegisterModal.tsx   # Registration form
│   └── Footer.tsx          # Site footer
├── public/
│   └── movies/             # 12 movie posters
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎥 Movie Library

Featuring 12 curated films with custom-generated posters:

| Title | Genre | Year | Rating |
|-------|-------|------|--------|
| The Shawshank Redemption | Drama | 1994 | 9.3 ⭐ |
| The Dark Knight | Action | 2008 | 9.0 ⭐ |
| Pulp Fiction | Drama | 1994 | 8.9 ⭐ |
| Inception | Sci-Fi | 2010 | 8.8 ⭐ |
| Fight Club | Drama | 1999 | 8.8 ⭐ |
| The Matrix | Sci-Fi | 1999 | 8.7 ⭐ |
| Interstellar | Sci-Fi | 2014 | 8.6 ⭐ |
| Oppenheimer | Drama | 2023 | 8.4 ⭐ |
| Dune | Sci-Fi | 2021 | 8.0 ⭐ |
| La La Land | Romance | 2016 | 8.0 ⭐ |
| Barbie | Comedy | 2023 | 7.9 ⭐ |
| Avatar | Sci-Fi | 2009 | 7.8 ⭐ |

## 🎨 Design System

### Color Palette
- **Primary**: #FF1F3D (Vibrant Red)
- **Background**: #0a0e27 (Deep Navy)
- **Secondary**: #1a1f3a (Dark Slate)
- **Foreground**: #f5f5f5 (Off-white)
- **Muted**: #9ca3af (Gray)

### Components
- Custom movie cards with hover effects
- Responsive navigation header
- Modal overlays for auth
- Category filter buttons
- Sort dropdown menu
- Newsletter subscription footer

## 🚀 Getting Started

### Installation
```bash
# Clone and setup
git clone <repo>
cd we-frame-web
pnpm install

# Start dev server
pnpm dev
```

Open `http://localhost:3000` in your browser.

### Build for Production
```bash
pnpm build
pnpm start
```

## 🔄 User Flows

### Movie Discovery
1. Browse featured movie in hero section
2. Scroll to explore movies grid
3. Filter by category or search for titles
4. Sort by rating, year, or title
5. Click "Watch Now" to play

### Authentication
1. Click "Sign In" or "Register"
2. Complete form with validation
3. Submit to authenticate
4. Access personalized features

## 📊 Performance Features
- Server-side rendering for fast loads
- Image lazy loading on movie cards
- Optimized CSS with Tailwind
- SEO metadata configured
- Responsive design patterns

## 🔮 Future Enhancements
- [ ] Backend API integration (Supabase/Neon)
- [ ] Real video player
- [ ] User profiles and watch history
- [ ] Ratings and reviews
- [ ] Watch Together sync feature
- [ ] Payment integration
- [ ] Mobile apps (React Native)
- [ ] AI recommendations

## 📱 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

1. Create feature branch from `main`
2. Make changes with clear commits
3. Push and create Pull Request

## 📄 License

Proprietary - WeFrame Platform 2024

---

**WeFrame Team** | Built with ❤️ for cinema lovers | Next.js • React • Tailwind
