const API_KEY = "ee9ba88783264228a4795c84d950228f";

const BASE_URL = "https://api.spoonacular.com";

export async function searchRecipes(query) {
    try {
        const response = await fetch(`${BASE_URL}/recipes/complexSearch?query=${encodeURIComponent(query)}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch recipes: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    }
    catch (error) { 
        console.error(error);
        return [];
    }
}

export async function getRecipeDetails(id) {
    try {
        const response = await fetch(
            `${BASE_URL}/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch recipe details.");
        }

        const data = await response.json();

        return data;

    } catch (error) {

        console.error(error);

        return null;
    }
}