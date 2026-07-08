import "./Contact.css";

export default function Contact() {
    return (
        <section className="info-hero">

            <div className="info-content">

                <div className="page-title">
                    <h1>Get in Touch</h1>
                    <p>
                        Have a question, suggestion, or recipe request?
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="contact-wrapper">

                    <div className="contact-info">

                        <h2>Contact Information</h2>

                        <p>
                            <i className="fa-solid fa-envelope"></i>
                            <span>support@recipefinder.com</span>
                        </p>

                        <p>
                            <i className="fa-solid fa-phone"></i>
                            <span>+91 98765 43210</span>
                        </p>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Mumbai, Maharashtra, India</span>
                        </p>

                        <div className="social-icons">

                            <a href="#" aria-label="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" aria-label="Facebook">
                                <i className="fa-brands fa-facebook"></i>
                            </a>

                            <a href="#" aria-label="YouTube">
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                            <a href="#" aria-label="Pinterest">
                                <i className="fa-brands fa-pinterest"></i>
                            </a>

                        </div>

                    </div>

                    <form className="contact-form">

                        <h2>Send a Message</h2>

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}