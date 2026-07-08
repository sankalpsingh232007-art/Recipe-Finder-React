import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../services/spoonacular";
import "./RecipeDetails.css";
import {
    FaClock,
    FaFire,
    FaHeart,
    FaUtensils,
    FaScroll,
    FaHeartbeat
} from "react-icons/fa";

export default function RecipeDetails() {

    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchRecipe() {

            const data = await getRecipeDetails(id);

            setRecipe(data);

            setLoading(false);

        }

        fetchRecipe();

    }, [id]);

    if (loading) {
        return <h1>Loading Recipe...</h1>;
    }

    if (!recipe) {
        return <h1>Recipe not found.</h1>;
    }

    const nutrients = recipe.nutrition?.nutrients || [];

    const getNutrient = (name) => {

        const nutrient = nutrients.find(
            (n) => n.name === name
        );

        return nutrient
            ? `${Math.round(nutrient.amount)} ${nutrient.unit}`
            : "N/A";
    };
    const instructions =
        recipe.analyzedInstructions?.[0]?.steps || [];
    return (
        <>
            <div className="container">

                <div className="buttons">

                    <div className="left-cards">

                        {/* ================= HERO CARD ================= */}

                        <div className="recipe-card-main">

                            <div className="card-top">

                                <div className="left">

                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                    />

                                </div>

                                <div className="right">

                                    <div className="header">

                                        <h3>
                                            {recipe.cuisines?.length > 0
                                                ? recipe.cuisines[0].toUpperCase()
                                                : "WORLD CUISINE"}
                                        </h3>

                                        <h3>
                                            {recipe.vegetarian
                                                ? "VEGETARIAN"
                                                : "NON-VEGETARIAN"}
                                        </h3>

                                    </div>

                                    <h1>{recipe.title}</h1>

                                    <div className="divider-first"></div>

                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: recipe.summary,
                                        }}
                                    ></p>

                                    <div className="divider-second"></div>

                                    <div className="details">

                                        <div className="detail">

                                            <span className="detail-label">
                                                <FaClock />
                                                Time
                                            </span>

                                            <span className="detail-value">
                                                {recipe.readyInMinutes} mins
                                            </span>

                                        </div>

                                        <div className="divider-third"></div>

                                        <div className="detail">

                                            <span className="detail-label">
                                                <FaHeart />
                                                Health Score
                                            </span>

                                            <span className="detail-value">
                                                {recipe.healthScore}
                                            </span>

                                        </div>

                                        <div className="divider-third"></div>

                                        <div className="detail">

                                            <span className="detail-label">
                                                <FaFire />
                                                Calories
                                            </span>

                                            <span className="detail-value">
                                                {getNutrient("Calories")}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="divider-fourth"></div>

                            {/* ================= ABOUT ================= */}

                            <div className="about-recipe">

                                <h2>About This Recipe</h2>

                                <br />

                                <div className="divider-fifth"></div>

                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: recipe.summary,
                                    }}
                                ></p>

                            </div>

                        </div>

                        {/* ================= INGREDIENTS ================= */}

                        <div className="recipe-card-ingredients">

                            <div className="ingredients-heading">

                                <FaUtensils />

                                <h2>Ingredients</h2>

                            </div>

                            <div className="divider-sixth"></div>

                            <div className="ingredients-list">

                                {recipe.extendedIngredients?.map((ingredient) => (

                                    <div
                                        key={ingredient.id}
                                        className="ingredient-item"
                                    >
                                        • {ingredient.original}
                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* ================= NUTRITION ================= */}

                        <div className="nutrition">

                            <div className="nutrition-header">

                                <FaHeartbeat />

                                <h2>Nutrition</h2>

                            </div>

                            <div className="divider-nutrition-first"></div>

                            <div className="nutrition-grid">

                                <div className="nutrition-item">
                                    <span>Calories</span>
                                    <strong>{getNutrient("Calories")}</strong>
                                </div>

                                <div className="nutrition-item">
                                    <span>Protein</span>
                                    <strong>{getNutrient("Protein")}</strong>
                                </div>

                                <div className="nutrition-item">
                                    <span>Fat</span>
                                    <strong>{getNutrient("Fat")}</strong>
                                </div>

                                <div className="nutrition-item">
                                    <span>Carbohydrates</span>
                                    <strong>{getNutrient("Carbohydrates")}</strong>
                                </div>

                                <div className="nutrition-item">
                                    <span>Sugar</span>
                                    <strong>{getNutrient("Sugar")}</strong>
                                </div>

                                <div className="nutrition-item">
                                    <span>Fiber</span>
                                    <strong>{getNutrient("Fiber")}</strong>
                                </div>

                                <div className="nutrition-item">
                                    <span>Sodium</span>
                                    <strong>{getNutrient("Sodium")}</strong>
                                </div>

                                <div className="nutrition-item">
                                    <span>Potassium</span>
                                    <strong>{getNutrient("Potassium")}</strong>
                                </div>

                            </div>

                        </div>

                        {/* ================= INSTRUCTIONS ================= */}

                        <div className="steps">

                            <div className="instructions-heading">

                                <FaScroll />

                                <h2>Instructions</h2>

                            </div>

                            <div className="divider-steps"></div>

                            <div className="instructions-list">

                                {instructions.length > 0 ? (

                                    instructions.map((step) => (

                                        <div
                                            key={step.number}
                                            className="each-step"
                                        >

                                            <div className="step-number">
                                                {step.number}
                                            </div>

                                            <div className="step-content">
                                                {step.step}
                                            </div>

                                        </div>

                                    ))

                                ) : (

                                    <p>No instructions available.</p>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}