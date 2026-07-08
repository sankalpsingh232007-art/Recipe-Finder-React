# 🍽️ Recipe Finder

Recipe Finder is a modern React-based web application that helps users discover delicious recipes from around the world using the Spoonacular API. Users can search for recipes, browse by category, and view detailed cooking instructions, ingredients, and nutritional information.

---

## 📖 Features

- 🔍 Search recipes by name
- 🍕 Browse recipes from different categories
- 📋 Detailed recipe page
  - Recipe image
  - Cooking time
  - Cuisine
  - Vegetarian / Non-Vegetarian
  - Ingredients
  - Step-by-step instructions
  - Nutritional information
- 🎲 Random recipes for each category
- 📱 Responsive design
- ⚡ Fast and modern UI built with React

---

## 🛠️ Built With

- React.js
- React Router DOM
- JavaScript (ES6+)
- CSS3
- HTML5
- Spoonacular API
- React Icons
- Vite

---

## 📂 Project Structure

```
src/
│
├── assets/
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
│   └── Spoonacular.js
│
├── App.jsx
├── main.jsx
└── App.css
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/recipe-finder.git
```

Go into the project directory

```bash
cd recipe-finder
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

## 🔑 API Setup

This project uses the Spoonacular API.

1. Create an account at:

https://spoonacular.com/food-api

2. Generate an API Key.

3. Add your API key inside:

```javascript
src/services/Spoonacular.js
```

Example:

```javascript
const API_KEY = "YOUR_API_KEY";
```

---

## 📸 Screens

### Home Page

- Search recipes
- Browse categories

### Search Results

- Recipe cards
- Recipe image
- Recipe title

### Recipe Details

- Hero section
- About recipe
- Ingredients
- Nutrition
- Cooking instructions

---

## 🔍 API Endpoints Used

### Search Recipes

```
GET /recipes/complexSearch
```

### Recipe Details

```
GET /recipes/{id}/information
```

### Random Recipes

```
GET /recipes/random
```

---

## 📌 Future Improvements

- ❤️ Favorite Recipes
- 👤 User Authentication
- 🌙 Dark Mode
- 🍽️ Meal Planner
- 🛒 Shopping List
- 📱 Improved Mobile Responsiveness
- 🔖 Save Recipes
- ⭐ Recipe Ratings
- 🎥 Cooking Videos

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Create a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Neev**

Recipe Finder was developed as a React project to provide an easy and interactive way for users to discover recipes using the Spoonacular API.
