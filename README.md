# 🚀 Shivam S. Ramoliya - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, Tailwind CSS and TypeScript.

![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38BDF8?style=for-the-badge&logo=tailwindcss)

## 🛠️ Tech Stack

### Frontend

- **Next.js 16.1.3** - React framework (App Router)
- **React 19.2.3** - UI library
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **TypeScript** - Static typing

### Services & Tools

- **EmailJS** - Email service for contact form
- **PWA** - Progressive Web App capabilities
- **Service Workers** - Offline support and caching

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Install Dependencies

Run in Command Prompt (PowerShell may block script execution on some systems):

```bash
npm install
```

### Environment Variables Setup

Create a `.env` file in the project root and add your EmailJS keys (example names used in this project):

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build.

### Preview/Start Production Build

```bash
npm run start
```

## 📧 Email Configuration

The contact form uses **EmailJS** to send emails. You'll need to:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up two email templates:
   - **Notification Template** - Sends form submissions to you
   - **Auto-Reply Template** - Sends acknowledgment to visitor
3. Copy template IDs to your `.env` file

### Email Templates

- `EMAIL_TEMPLATE.html` - Template for notifications to you
- `AUTO_REPLY_TEMPLATE.html` - Template for auto-replies to visitors

## 📱 PWA Features

This portfolio is a **Progressive Web App** with:

- ✅ Installable on mobile and desktop
- 🔌 Offline support
- ⚡ Fast loading with service worker caching
- 🎯 Add to home screen functionality
- 📱 Standalone app mode

### Testing PWA

1. Build the production version: `npm run build`
2. Preview: `npm run preview`
3. Open in browser and click the "Install" button

## 📂 Project Structure

```
project/
├── public/                    # Static assets and icons
├── src/
│   ├── app/                   # Next.js App Router (layout.tsx, page.tsx, etc.)
│   ├── components/            # React components (Hero, Projects, Skills, etc.)
│   ├── lib/                   # Utilities and hooks
│   ├── services/              # API services (emailService.js)
│   └── styles/                # Global styles
├── .env                       # Environment variables (not committed)
├── next.config.ts
├── tsconfig.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.mjs
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/portfolioData.jsx` to update:

- Personal details (name, email, phone, location)
- Social media links
- Skills and technologies
- Project showcase
- Work experience
- Education

### Modify Theme Colors

Update colors in `tailwind.config.js` or inline Tailwind classes:

- Primary: `sky-500` (Light Blue)
- Secondary: `emerald-500` (Green)
- Dark: `slate-800/900`

### Add New Sections

Create components in `src/component/` and import them in your pages.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

> ⚠️ Remember to add your environment variables in the hosting platform's settings!

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🚀 First Contentful Paint: < 1.5s
- 📦 Bundle Size: Optimized with code splitting
- 🎯 SEO Score: 100

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### ⭐ If you like this project, please give it a star!

Made with ❤️ by Shivam S. Ramoliya

</div>

This repository is a Next.js application; deploy to Vercel for the smoothest experience or any host that supports Node.js.
