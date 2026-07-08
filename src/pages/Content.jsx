import React from 'react'
import './content.css'
import appetizers from '../assets/Appetizers.png'
import eentre from '../assets/Eentre.jpeg'
import dessert from '../assets/Desserts.jpeg'
import side from '../assets/Sides.jpeg'
import mocktail from '../assets/Mocktails.jpeg'
import meal from '../assets/Meals.jpeg'
import cuisine from '../assets/Cuisines.jpeg'
import diet from '../assets/Diet.jpeg'
import { Link } from 'react-router-dom'

export default function content() {
  return (
    <div className="container">
      <section class="description index">
        <h1>Recipe Finder</h1>
        <p>Craving something delicious but not sure what to cook? </p>
        <p>Discover a world of recipes tailored to your taste.</p>
        <p>Whether you're in the mood for something spicy, sweet, </p>
        <p>or comforting, explore meals you'll love and </p>
        <p>bring excitement back to your kitchen.</p>
        <div class="Explore">
          <a href="#card">
            <p>Explore more Recipes →</p>
          </a>
        </div>
      </section>

      <section id="card" class="card home">

        <div class="buttons">
          <Link to="/Appetizers">
            <button class="btn">
              <img src={appetizers} alt="appetizers" />
              <p>Appetizers</p>
            </button>
          </Link>

          <Link to="/Entree">
            <button class="btn">
              <img src={eentre} alt="Entrée" />
              <p>Entrée</p>
            </button>
          </Link>

          <Link to="/Desserts">
            <button class="btn">
              <img src={dessert} alt="Desserts" />
              <p>Desserts</p>
            </button>
          </Link>

          <Link to="/Sides">
            <button class="btn">
              <img src={side} alt="Sides" />
              <p>Side Dishes</p>
            </button>
          </Link>

          <Link to="/Mocktails">
            <button class="btn">
              <img src={mocktail} alt="Mocktails" />
              <p>Mocktails</p>
            </button>
          </Link>

          <Link to="/Meals">
            <button class="btn">
              <img src={meal} alt="Meals" />
              <p>Meals</p>
            </button>
          </Link>

          <Link to="/Cuisines">
            <button class="btn">
              <img src={cuisine} alt="Cuisines" />
              <p>Cuisine based</p>
            </button>
          </Link>

          <Link to="/Diet">
            <button class="btn">
              <img src={diet} alt="Diet" />
              <p>Diet</p>
            </button>
          </Link>
        </div>

      </section>
    </div>
  );
}
