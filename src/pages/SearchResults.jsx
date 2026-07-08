import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchRecipes } from '../services/spoonacular';
import RecipeCard from "../Components/RecipeCard";

export default function SearchResults() {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchRecipes() {

            setLoading(true);

            const data = await searchRecipes(query);

            setRecipes(data);

            setLoading(false);
        }

        if (query) {
            fetchRecipes();
        }

    }, [query]);

    if (loading) {
        return <h2>Loading recipes...</h2>;
    }

    return (

        <div className="recipe-grid">

            {recipes.map((recipe) => (

                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                />

            ))}

        </div>

    );
}

export async function getRecipeDetails(id) {

    try {

        const response = await fetch(
            `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch recipe.");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return null;

    }

}