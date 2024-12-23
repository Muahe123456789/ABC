import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "./WhatsNew.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic validation for email and password
        if (!email || !password) {
            setError("Both email and password are required.");
            return;
        }

        // Check if email contains "@" symbol
        if (!email.includes("@")) {
            setError("Please enter a valid email with '@'.");
            return;
        }

        // Check if password is a number and at least 8 digits long
        if (!/^\d{8,}$/.test(password)) {
            setError("Password must be at least 8 digits long and only contain numbers.");
            return;
        }

        // Simulate successful login with correct credentials
        if (email === "Fpt@gmail.com" && password === "12345678") {
            setSuccess(true);
            localStorage.setItem("authToken", "dummy_token"); // Save token
            window.location.href = "/"; // Redirect to home page
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="login-container">
            <h2>Log in or create an account</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Login successful! Redirecting...</p>}

            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
            <div className="links">
                <a href="/forgot-password">Forgot Password?</a>
                <span> | </span>
                <Link to="/signup">
                    <button className="btn">Sign Up</button>
                </Link>
            </div>

            {/* Thông tin giao hàng */}
            <div className="shipping-contentb3">
                {[{
                        imgSrc: "../img/illustrative-bag-delivery.svg",
                        text: "Free shipping with any $50 order",
                        alt: "Delivery Bag",
                    },
                    {
                        imgSrc: "../img/C2.svg",
                        text: "Earn 10 points per dollar and redeem for rewards",
                        alt: "Earn Points",
                    },
                    {
                        imgSrc: "../img/c3.webp",
                        text: "Choose 3 free samples with any order",
                        alt: "Free Samples",
                    },
                    {
                        imgSrc: "../img/c4.svg",
                        text: "Subscribe for 10% off and free shipping",
                        alt: "Subscribe for Discount",
                    },
                ].map((item, index) => (
                    <div className="shipping-infob3" key={index}>
                        <img src={item.imgSrc} alt={item.alt} />
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Login;
