# Saneda Harsha Vardhan - Portfolio Website

A premium, modern, fully responsive personal portfolio website for a Full Stack Developer built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient highlights
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Fast loading with Vite build tool
- **Premium UI**: Recruiter-friendly design with professional aesthetics
- **Interactive Components**: Hover effects, scroll animations, and smooth transitions
- **Sticky Navbar**: Easy navigation with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Lucide React** - Modern icon set

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Hero.tsx            # Hero section with typing effect
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills with animated cards
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Certifications.tsx  # Certifications display
│   ├── Contact.tsx         # Contact form and social links
│   └── Footer.tsx          # Footer with links
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles

```

## 📋 Sections

1. **Hero Section**
   - Animated name and role with typing effect
   - Professional introduction
   - CTA buttons (View Projects, Download Resume, Contact)
   - Social media links
   - Animated background elements

2. **About Section**
   - Professional summary
   - Key skills and expertise
   - Statistics cards

3. **Skills Section**
   - Frontend skills (React, TypeScript, Tailwind CSS, etc.)
   - Backend skills (Node.js, Express.js, etc.)
   - Database technologies
   - Tools and libraries
   - Animated skill cards with icons

4. **Experience Section**
   - Timeline design
   - Work experiences with responsibilities
   - Project details
   - Company information

5. **Projects Section**
   - Premium project cards
   - Project descriptions and features
   - Technology badges
   - Live demo and GitHub links
   - Hover animations

6. **Certifications Section**
   - Microsoft Azure Fundamentals
   - HP LIFE Data Science & Analytics
   - Animated certification cards

7. **Contact Section**
   - Contact form
   - Email, phone, social links
   - WhatsApp integration
   - Professional contact layout

8. **Footer**
   - Quick links
   - Social media links
   - Copyright information
   - Scroll to top button

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd d:\Portifolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit the color variables in `tailwind.config.js`:
- `primary`: #00d4ff (Cyan)
- `secondary`: #ff006e (Pink)
- `accent`: #8338ec (Purple)

### Content
Update personal information in component files:
- **Hero**: Name, role, introduction
- **About**: Summary and experience
- **Skills**: Technologies and expertise
- **Experience**: Work history and responsibilities
- **Projects**: Project information and links
- **Contact**: Email, phone, social links

### Animations
Adjust animation timings in individual component files:
- Modify `transition` properties in Framer Motion
- Adjust animation `duration` and `delay` values
- Customize `variants` for different effects

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px and above

All components use Tailwind's responsive utilities for perfect scaling.

## ✨ Premium Features

- **Glassmorphism Effects**: Modern frosted glass appearance
- **Gradient Text**: Eye-catching text gradients
- **Floating Animations**: Subtle floating elements
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive hover states
- **Smooth Scrolling**: Smooth transitions between sections
- **Loading Animations**: Professional loading states

## 🔧 Component Details

### Navbar
- Sticky navigation with glass effect
- Smooth scroll to sections
- Mobile hamburger menu
- Resume download button
- Logo with animation

### Hero
- Typing animation for role
- Animated background blobs
- Multiple CTA buttons
- Social media links
- Scroll indicator

### Skills
- Animated skill cards
- Icon display with colors
- Categorized skills
- Hover animations
- Floating animations

### Projects
- Project showcase cards
- Feature badges
- Technology icons
- Live demo and GitHub links
- Responsive grid layout

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
Update `vite.config.ts` with your repository name and deploy.

## 📊 Performance

- Optimized bundle size
- Code splitting with Vite
- Fast development server
- Production minification
- Image optimization recommendations

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Saneda Harsha Vardhan**
- GitHub: [@sanedarharsha](https://github.com)
- LinkedIn: [@sanedarharsha](https://linkedin.com)
- Email: harsha@example.com

## 🤝 Support

For support, reach out via email or connect on LinkedIn.

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**
