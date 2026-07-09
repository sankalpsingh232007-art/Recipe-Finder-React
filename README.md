# Recipe Finder

Recipe Finder is a React web application that helps users discover recipes from around the world using the Spoonacular API. Users can search recipes by name, browse by category, and view detailed cooking instructions, ingredients, and nutritional information.

---

## Features

- Search recipes by name
- Browse recipes by category
- Detailed recipe pages, including:
  - Recipe image
  - Cooking time
  - Cuisine type
  - Vegetarian / non-vegetarian tag
  - Ingredients list
  - Step-by-step instructions
  - Nutritional information
- Random recipe suggestions for each category
- Responsive design
- Fast, modern UI built with React and Vite

---

## Built With

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- JavaScript (ES6+)
- CSS3 / HTML5
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Spoonacular API](https://spoonacular.com/food-api)

---

## Project Structure

```
src/
│
├── assets/                  # Images, icons, static assets
│
├── components/
│   ├── Header.jsx
│   ├── NavBar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Content.jsx
│   ├── SearchResults.jsx
│   ├── RecipeDetails.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Login.jsx
│
├── services/
│   └── Spoonacular.js       # API request logic
│
├── App.jsx
├── main.jsx
└── App.css
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Neev1809/Recipe-Finder-React.git
   ```

2. Move into the project directory
   ```bash
   cd Recipe-Finder-React
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser at
   ```
   http://localhost:5173
   ```

---

## API Setup

This project relies on the [Spoonacular API](https://spoonacular.com/food-api) for all recipe data.

1. Create a free account at [spoonacular.com/food-api](https://spoonacular.com/food-api).
2. Generate an API key from your dashboard.
3. Add the key to `src/services/Spoonacular.js`:
   ```js
   const API_KEY = "YOUR_API_KEY";
   ```

Note: Avoid committing your real API key to a public repository. Consider using an environment variable (e.g. `.env` with `VITE_SPOONACULAR_API_KEY`) instead.

---

## API Endpoints Used

| Purpose | Endpoint |
|---|---|
| Search recipes | `GET /recipes/complexSearch` |
| Recipe details | `GET /recipes/{id}/information` |
| Random recipes | `GET /recipes/random` |

---

## Application Overview

**Home Page** — Search bar and category browsing

**Search Results** — Recipe cards with image and title

**Recipe Details** — Hero section, ingredients, nutrition facts, and step-by-step cooking instructions

---

## Roadmap

- Favorite recipes
- User authentication
- Dark mode
- Meal planner
- Shopping list generator
- Save recipes for later
- Recipe ratings and reviews
- Cooking videos

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

Neev ([@Neev1809](https://github.com/Neev1809))

Recipe Finder was built as a React project to make discovering recipes quick, visual, and interactive using the Spoonacular API.
