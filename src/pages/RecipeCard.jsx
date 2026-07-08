import React from "react";
import { useNavigate } from "react-router-dom";
import "../RecipeCard.css";

export default function RecipeCard({ recipe }) {
    const navigate = useNavigate();

    return (
        <div
            className="recipe-card"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
        >

            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
            />

            <div className="recipe-content">

                <h3>{recipe.title}</h3>

                <button className="view-btn">
                    View Recipe
                </button>

            </div>

        </div>
    );
}