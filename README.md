# ochi.design — React Clone (Unofficial)

A front-end clone of ochi.design built for learning and experimentation. This repository recreates the visual and interactive parts (Hero, Marquee, About, Eyes, Features, Review, Cards, Ready, Footer, Navbar) using React, Tailwind CSS, and motion libraries. Not affiliated with or endorsed by the original site.

## Features
- Animated scroll components (locomotive-scroll used)
- Interactive elements (mouse-following eyes, hover titles)
- Component-based structure for easy extension
- Uses Tailwind CSS utility classes and motion/react for animations

## Tech
- React
- Tailwind CSS
- motion (motion/react)
- Locomotive Scroll
- react-icons

## Getting started

Prerequisites
- Node.js 16+ (or a modern LTS version)
- npm or yarn

Install
```bash
git clone <repo-url>
cd "d:\react js\React-03\ochi.design"
npm install
# or
# yarn install
```

Run (development)
- Use the script defined in package.json (commonly `npm run dev` or `npm start`):
```bash
npm run dev
# or
npm start
```

Build
```bash
npm run build
```

## Project structure (important files)
- src/
  - components/ — UI components (Navbar, Landing, Hero, About, Eyes, Features, Review, Cards, Ready, Footer, Marquee)
  - App.jsx — app entry and layout
  - assets/ — images and static files

## Notes & Troubleshooting
- LocomotiveScroll: App currently creates a new LocomotiveScroll instance directly. If you see issues, initialize it inside a useEffect and make sure its CSS is imported.
- Assets: Images are imported from `/assets/...`; ensure the project serves static files correctly (Vite or CRA config).
- Tailwind: Ensure Tailwind is configured and its directives are included in the project's CSS.

## Contributing
- Fix bugs, improve accessibility, or add tests. Open a PR with a short description.
- Keep changes focused and add brief commit messages.

## License
MIT

## Credit
This repository is an independent educational clone of ochi.design and is not affiliated with the original creators.
