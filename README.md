# Noor Ul Imaan - Personal Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, experience, and projects in an elegant and professional manner.

## 🎨 Design Theme

- **Primary Colors**: Muted leafy green (#4F6F52) and warm beige (#F5F0E1)
- **Secondary Colors**: Soft cream (#FFFDF7), deep forest green (#2E4A35), and subtle light brown (#CBBF9D)
- **Typography**: Clean, modern sans-serif fonts (Poppins & Inter)
- **Style**: Minimalistic, elegant, and modern with lots of white/beige space

## ✨ Features

### 🎯 Core Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Mode Toggle**: Switch between light and dark themes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Modern UI/UX**: Clean, professional design with excellent user experience
- **SEO Optimized**: Proper meta tags and semantic HTML

### 📱 Sections

1. **Hero Section**: Full-screen introduction with social links and call-to-action
2. **About**: Personal information, education, and achievements
3. **Experience**: Work history and internships with detailed descriptions
4. **Projects**: Showcase of technical projects with impact metrics
5. **Skills**: Technical skills and soft skills organized by category
6. **Process**: 4-step workflow explanation
7. **Testimonials**: Recommendations from colleagues and mentors
8. **Contact**: Contact form and contact information
9. **Footer**: Social links and navigation

### 🛠 Technical Features

- **React 18**: Latest React features and hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **Intersection Observer**: Scroll-triggered animations
- **Modular Components**: Clean, reusable component architecture

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Noor-Ul-Imaan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar with dark mode toggle
│   ├── Hero.js         # Hero section with introduction
│   ├── About.js        # About section with education
│   ├── Experience.js   # Work experience section
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills and expertise
│   ├── Process.js      # Work process explanation
│   ├── Testimonials.js # Testimonials carousel
│   ├── Contact.js      # Contact form and info
│   └── Footer.js       # Footer with social links
├── App.js              # Main application component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    green: '#4F6F52',
    beige: '#F5F0E1',
  },
  secondary: {
    cream: '#FFFDF7',
    forest: '#2E4A35',
    brown: '#CBBF9D',
  }
}
```

### Content

- Update personal information in each component
- Replace project details in `Projects.js`
- Modify experience details in `Experience.js`
- Update contact information in `Contact.js`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes
- Custom animations are defined in `tailwind.config.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:

- CSS custom properties for theme switching
- Tailwind's dark mode classes
- Smooth transitions between themes
- Persistent theme preference

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add homepage to `package.json`: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: noorulimaan47@gmail.com
- **LinkedIn**: [linkedin.com/in/noor-ul-imaan](https://www.linkedin.com/in/noor-ul-imaan-waheed-879154243/)
- **GitHub**: [github.com/Noor-Ul-Imaan](https://github.com/Noor-Ul-Imaan)

---

Made with ❤️ by Noor Ul Imaan
