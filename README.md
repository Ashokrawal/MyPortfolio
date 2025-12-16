# Portfolio Website - React Three.js
A stunning 3D portfolio website built with React, Three.js, and modern web technologies featuring interactive 3D elements, smooth animations, and a fully responsive design.

## 🌟 Live Demo
https://img.shields.io/badge/%F0%9F%8C%90-Live_Portfolio-blue

## 🚀 Tech Stack
Core Frameworks
- React 18 - Frontend library with latest features

- TypeScript - Type-safe development

- Vite - Next-generation build tool (4x faster than Webpack)

## 3D & Graphics
- Three.js - 3D graphics library

## UI & Styling

- Tailwind CSS - Utility-first CSS framework
- DaisyUI - Tailwind CSS components
- React Icons - Popular icon library
- Moment.js - Date manipulation library

## Routing & State
- React Router DOM v6 - Client-side routing
- React Spring - Animation library

## 🎨 Features
- 3D Interactive Elements
- Interactive 3D models and scenes
- Smooth camera animations
- Particle systems and effects
- Real-time lighting and shadows

## 📁 Project Structure
text
portfolio_react/
├── src/
│   ├── components/     # Reusable components
│   │   ├── 3d/        # Three.js components
│   │   ├── ui/        # UI components
│   │   └── layout/    # Layout components
│   ├── pages/         # Page components
│   ├── assets/        # Static assets
│   │   ├── models/    # 3D models
│   │   ├── textures/  # Textures and images
│   │   └── icons/     # Icon assets
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   ├── hooks/         # Custom React hooks
│   └── App.tsx        # Main App component
├── public/            # Public assets
├── index.html         # Entry HTML
└── package.json       # Dependencies

⚡ Getting Started
Prerequisites
Node.js (v16 or higher)

npm or yarn

Installation
bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-react.git
cd portfolio-react

# Install dependencies
npm install
# or
yarn install
Development
bash
# Start development server
npm run dev
# or
yarn dev
The app will be available at http://localhost:5173

Build for Production
bash
# Build the project
npm run build
# or
yarn build

# Preview the production build
npm run preview
# or
yarn preview
🛠 Configuration
Vite Config
javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
Tailwind Config
javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
🎯 Key Components
3D Scene Setup
tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Environment preset="city" />
      <OrbitControls />
    </Canvas>
  )
}
Responsive Navigation
tsx
import { NavLink } from 'react-router-dom'
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi'

function Navigation() {
  return (
    <nav className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-xl">
          Portfolio
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="btn btn-ghost">
            <item.icon className="mr-2" /> {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
📱 Responsive Design
The portfolio is fully responsive across all devices:

Device	Breakpoint	Features
Mobile	< 640px	Hamburger menu, stacked layout
Tablet	640px - 1024px	Optimized 3D scenes, adjusted spacing
Desktop	> 1024px	Full 3D experience, side navigation
🚀 Performance Metrics
Lighthouse Score: 95+ Performance

First Contentful Paint: < 1.5s

Time to Interactive: < 3s

Bundle Size: < 500KB (gzipped)

3D Load Time: < 2s

🧪 Testing
bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
📦 Deployment
Vercel (Recommended)
bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
Netlify
bash
# Build and deploy
npm run build
# Drag and drop 'dist' folder to Netlify
GitHub Pages
bash
# Update vite.config.ts
export default defineConfig({
  base: '/portfolio-react/',
  // ... other config
})

# Deploy
npm run deploy
🔧 Environment Variables
Create a .env file in the root directory:

env
VITE_API_URL=your_api_url
VITE_GA_TRACKING_ID=your_ga_id
VITE_CONTACT_FORM_URL=your_form_endpoint
🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Deepak

GitHub: @yourusername

Portfolio: Live Demo

Email: ashokrawaldz@gmail.com

LinkedIn: Your LinkedIn

🙏 Acknowledgments
Three.js for amazing 3D graphics

React Three Fiber team

Vite for blazing fast builds

Tailwind CSS for utility-first CSS

📞 Contact
For any questions or feedback, feel free to reach out:

Email: ashokrawaldz@gmail.com

Phone: +353 (0) 899567370

Portfolio: https://my-portfolio-bzef.vercel.app

⭐ If you like this project, give it a star! ⭐

