# Minimal Single Page Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14.2.18-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue)

A modern, animated single-page portfolio website built with Next.js, featuring smooth animations, responsive design, and a clean minimal aesthetic. Perfect for showcasing your work with style.

[Visit Live Portfolio](https://minimal-portfolio-sandy.vercel.app/)

## ✨ Features

- **Animated Text Reveals** - Engaging text animations using SplitType and Motion One
- **Responsive Design** - Fully responsive layout that works on all devices
- **Project Showcase** - Interactive project gallery with hover effects
- **Testimonials Section** - Customer testimonials with a smooth carousel
- **FAQ Accordion** - Animated frequently asked questions section
- **Custom Components** - Reusable UI components including buttons and cards
- **Modern Stack** - Built with Next.js 14, TypeScript, and TailwindCSS
- **Performance Optimized** - Fast loading with optimized images and fonts

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animation**:
  - [Motion One](https://motion.dev/)
  - [SplitType](https://split-type.js.org/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/)
- **Utilities**: [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/mobashirul-alam/minimal-portfolio.git
cd minimal-portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

## 📁 Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout with Archivo font
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── assets/            # Static assets
│   ├── icons/         # SVG icons
│   └── images/        # Project and testimonial images
├── components/        # Reusable components
├── hooks/             # Custom React hooks
├── sections/          # Main page sections
└── utils/            # Utility functions
```

## 🎨 Design Features

- **Typography**: Uses the Archivo variable font for a modern, clean look
- **Color Scheme**: Clean and minimal with a stone color palette
- **Animations**: Smooth text reveals and transitions
- **Layout**: Responsive grid system with proper spacing
- **Components**: Modular and reusable design system

## 🚀 Deployment

This project is ready to be deployed on [Vercel](https://vercel.com). For the easiest deployment experience:

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Your site will be automatically deployed

## 👤 Author

**Mobashirul Alam**

- GitHub: [@mobashirul-alam](https://github.com/mobashirul-alam)
