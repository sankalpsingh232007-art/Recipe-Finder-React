import "./LandingPage.css";
import {Link} from "react-router-dom";
import heroBg from "../assets/hero-bg.png";
import tomato from "../assets/tomato.png";
import basil from "../assets/basil.png";

import { FaSearch, FaArrowRight, FaGlobe, FaHeart } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

function LandingPage() {
  return (
    <div className="landingPage">

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >

        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Floating Food Images */}
        <img src={tomato} alt="" className="floating tomato" />
        <img src={basil} alt="" className="floating basil" />

        {/* Hero Content */}
        <div className="heroContent">

          <div className="miniTitle">
            <GiChefToque />
            <span>Find. Cook. Enjoy.</span>
          </div>

          <h1>
            Discover Your Next
            <br />
            <span>Favorite Recipe</span>
          </h1>

          <p>
            Explore thousands of delicious recipes from around the world
            and cook something amazing today.
          </p>

          {/* Search Bar */}

          <div className="searchBar">

            <FaSearch className="searchIcon" />

            <input
              type="text"
              placeholder="Search recipes, ingredients..."
            />

            <button>
              <FaSearch />
            </button>

          </div>

          {/* CTA */}

          <button className="getStarted">
            <Link to="/content" className="getStartedLink">
              Get Started
            </Link>
            <FaArrowRight />
          </button>

          {/* Scroll */}

          <div className="scrollDown">

            <p>Scroll Down To Explore</p>

            <span>⌄</span>

          </div>

        </div>

      </section>

      {/* Wave Divider */}

      <div className="waveDivider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96
               C180,180 360,20 540,70
               C720,120 900,180 1080,90
               C1260,0 1350,70 1440,96
               L1440,180
               L0,180
               Z"
          />
        </svg>
      </div>

      {/* Features */}

      <section className="features">

        <div className="featureCard">

          <GiChefToque className="featureIcon" />

          <h3>Easy To Cook</h3>

          <p>
            Simple recipes suitable for beginners
            and experienced cooks.
          </p>

        </div>

        <div className="featureCard">

          <MdRestaurantMenu className="featureIcon" />

          <h3>Healthy Options</h3>

          <p>
            Discover nutritious meals for every
            lifestyle and preference.
          </p>

        </div>

        <div className="featureCard">

          <FaGlobe className="featureIcon" />

          <h3>Explore Cuisines</h3>

          <p>
            Experience dishes from cultures around
            the world.
          </p>

        </div>

        <div className="featureCard">

          <FaHeart className="featureIcon" />

          <h3>Save Favorites</h3>

          <p>
            Keep your favourite recipes in one
            convenient place.
          </p>

        </div>

      </section>

    </div>
  );
}

export default LandingPage;