# Jessica Bergs - Portfolio Website

A modern, minimalist portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **React 18.2** (latest stable)
- **TypeScript 5.3**
- **Vite 5.0** for fast development and building
- **CSS Modules** for styling

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. Go to your repository settings
2. Navigate to Pages → Source
3. Select "GitHub Actions" as the source
4. Push to main branch, and the site will be automatically deployed

### Option 2: Manual Deployment

```bash
npm run deploy
```

This builds the project and deploys the `dist` folder to the `gh-pages` branch.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx       # Hero section with name and intro
│   ├── About.tsx      # About section with bio and skills
│   ├── Projects.tsx   # Project cards/tiles
│   └── Footer.tsx     # Footer with links
├── App.tsx            # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Customization

- **Colors**: Primary color is set to `#1a2b4d` in [src/index.css](src/index.css)
- **Font**: Using Montserrat from Google Fonts (closest alternative to Proxima Nova)
- **Projects**: Edit the projects array in [src/components/Projects.tsx](src/components/Projects.tsx)
- **Content**: Update text in individual component files

## Notes

- **Proxima Nova**: This font is not available on Google Fonts. Montserrat is used as a close alternative. If you have a Proxima Nova license, you can add it via custom fonts.
- **Base URL**: The Vite config is set with `base: '/jbergs-portfolio/'` for GitHub Pages. Update this if deploying elsewhere.
