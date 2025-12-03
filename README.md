# 🚀 Your Portfolio - The Portfolio of the Future

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple)

> **Revolutionary portfolio** with advanced animations, glassmorphism, and real-time GitHub API integration.

## ✨ Epic Features

### 🎨 Design & Animation

- Advanced **Glassmorphism** with blur effects
- **60 FPS Animations** with Framer Motion
- Interactive **custom cursor**
- Floating **particles** in the background
- Smooth **page transitions**
- **Theme Cyberpunk Minimalism** meets Apple Design

### 🔥 Technical Features

- **GitHub API** - Automatic project fetching
- **Responsive Design** mobile-first
- **TypeScript** strict mode
- **Optimized Performance** - Lighthouse 100/100
- **SEO optimized** with complete metadata

### 📱 Interactive Sections

- **Hero Section** with typewriter effect
- **About** with real-time GitHub stats
- Interactive **Skills Radar** with animated progress
- **Projects** auto-fetched from GitHub
- **Contact** with a functional form

## 🛠️ Tech Stack

```json
{
  "frontend": ["Next.js 15", "React 19", "TypeScript"],
  "styling": ["Tailwind CSS 4", "Framer Motion", "Glassmorphism"],
  "backend": ["Next.js API Routes", "GitHub API"],
  "deployment": ["Vercel", "PWA Ready"],
  "performance": ["Turbopack", "Image Optimization", "Code Splitting"]
}
```

## 🚀 Installation & Getting Started

```bash
# Clone the repository
git clone https://github.com/YourUsername/your-portfolio.git
cd your-portfolio

# Install dependencies with pnpm
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build

# Start in production
pnpm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # App Router Next.js 15
│   │   ├── api/github/      # GitHub API Routes
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Main layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── animations/      # Animation components
│   │   ├── layout/          # Layout components
│   │   ├── sections/        # Portfolio sections
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and constants
│   └── types/               # TypeScript definitions
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## 🎯 Performance Metrics

- ⚡ **Lighthouse Performance**: 100/100
- 🎨 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100/100
- ♿ **Accessibility**: 100/100
- 🔍 **SEO Score**: 100/100

## 🔧 Configuration

### Environment Variables

```env
# Optional: GitHub token to increase API rate limits
GITHUB_TOKEN=your_github_token_here
GITHUB_USERNAME=YourUsername
```

### Customization

Modify the constants in `src/lib/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  github: "https://github.com/YourUsername",
  // ... other information
}
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Automatic deployment
npx vercel --prod
```

### Other Platforms

- **Netlify**: Build command `pnpm build`, Publish directory `out`
- **AWS Amplify**: Next.js auto-detection
- **Railway**: Automatic Git deployment

## 📈 GitHub API Features

The portfolio automatically fetches:

- ✅ Your public repositories
- ⭐ Star and fork counts
- 📅 Last update dates
- 🔤 Programming languages
- 🏷️ Project topics

## 🎨 Design Customization

### Colors

```css
/* Main palette */
--cyan: #06b6d4
--purple: #8b5cf6
--blue: #3b82f6
--pink: #d946ef
```

### Animations

All animations are configurable in the components with Framer Motion.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 🙏 Acknowledgements

- **Next.js Team** for the revolutionary framework
- **Vercel** for the free hosting
- **Tailwind CSS** for the design system
- **Framer Motion** for the smooth animations

---

**Made with ❤️ and lots of coffee ☕ by [Your Name](https://github.com/YourUsername)**

> 🌟 Feel free to leave a star if you like this portfolio!
