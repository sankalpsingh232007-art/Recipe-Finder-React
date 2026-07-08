import "./Contact.css";

export default function About() {
    return (
        <section className="info-hero">

            <div className="info-overlay"></div>

            <div className="info-content">

                <div className="page-title">
                    <h1>About Recipe Finder</h1>
                    <p>
                        Making cooking simple, fun, and delicious for everyone.
                    </p>
                </div>

                <div className="about-wrapper">

                    <div className="info-card">

                        <i className="fa-solid fa-utensils"></i>

                        <h2>Who We Are</h2>

                        <p>
                            Recipe Finder is a platform created for food lovers
                            who want to discover exciting recipes from around
                            the world. Whether you're a beginner or an experienced
                            cook, our goal is to help you prepare delicious meals
                            with ease.
                        </p>

                    </div>

                    <div className="info-card">

                        <i className="fa-solid fa-bowl-food"></i>

                        <h2>What We Offer</h2>

                        <ul>
                            <li>🍲 Thousands of recipes</li>
                            <li>🥗 Healthy diet options</li>
                            <li>🍰 Desserts & beverages</li>
                            <li>🌎 Cuisine-based collections</li>
                            <li>⭐ Save your favourite recipes</li>
                        </ul>

                    </div>

                    <div className="info-card">

                        <i className="fa-solid fa-heart"></i>

                        <h2>Our Mission</h2>

                        <p>
                            We believe everyone deserves access to delicious meals.
                            Our mission is to inspire people to cook confidently
                            by providing easy-to-follow recipes and useful cooking
                            ideas.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}