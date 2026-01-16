# Cloudflare Learning Hub

A beautiful instructional design website inspired by New York Times Cooking, built for Cloudflare tutorials and learning modules.

## Features

- **Video Header**: Full-width video player with play/pause controls
- **Step-by-Step Instructions**: Clear, numbered steps with tips and best practices
- **Requirements Checklist**: Interactive checklist of prerequisites and tools needed
- **Rating & Reviews**: User ratings and comments system similar to NYT Cooking
- **Module Navigation**: Easy navigation between different learning modules
- **Responsive Design**: Beautiful UI built with React, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 16.13.0 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
cloudflare-learning/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Main navigation header
│   │   ├── VideoHeader.tsx         # Video player component
│   │   ├── IngredientsSidebar.tsx  # Requirements checklist
│   │   ├── RecipeSteps.tsx         # Step-by-step instructions
│   │   ├── RatingSection.tsx       # Ratings and comments
│   │   └── ModuleNavigation.tsx    # Module switcher
│   ├── data.ts                     # Sample module data
│   ├── types.ts                    # TypeScript type definitions
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Customization

### Adding New Modules

Edit `src/data.ts` to add new learning modules. Each module should include:

- Title and description
- Video URL and poster image
- Duration and difficulty level
- Overview text
- List of requirements/ingredients
- Step-by-step instructions with tips
- Ratings and comments

### Styling

The project uses Tailwind CSS with custom Cloudflare brand colors:
- `cloudflare-orange`: #F6821F
- `cloudflare-blue`: #0051C3

Modify `tailwind.config.js` to customize the theme.

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## License

MIT
