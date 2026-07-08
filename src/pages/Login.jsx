import './Login.css';

export default function Login() {
    return (
        <main class="login-page login">
            <section class="login-card">
                <h1> sign up </h1>
                <form id="loginForm" action="index.html" method="post">
                    <input type="text" name="username" placeholder="Username" required />

                    <input type="email" name="email" placeholder="Email Address" required />

                    <input type="password" name="password" placeholder="Password" required />

                    <input type="password" name="confirmPassword" placeholder="Confirm Password" required />

                    <button type="submit" class="login-button">
                        Sign Up
                    </button>
                </form>
            </section>
        </main>
    );
}