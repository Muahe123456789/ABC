import React, { useState } from "react";
import "./Singnup.css"; // Optional: Include custom styling

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    emailPreference: "",
    clubClarins: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword, emailPreference, clubClarins, termsAccepted } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
      setError("Name must only contain letters.");
      setSuccess("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSuccess("");
      return;
    }

    if (!emailPreference || !clubClarins) {
      setError("Please select your preferences.");
      setSuccess("");
      return;
    }

    if (!termsAccepted) {
      setError("You must agree to the Terms & Conditions.");
      setSuccess("");
      return;
    }

    try {
      console.log("Form data is valid, sending request..."); // Log to check if data is valid
      const response = await fetch("https://example.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Signup successful! Please log in.");
        setError("");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          emailPreference: "",
          clubClarins: "",
          termsAccepted: false,
        });

        console.log("Signup successful"); // Log success

        // Show alert and redirect to home page
        alert("You have successfully signed up!"); // Show the alert

        // Redirect to home page
        window.location.href = "/"; // Replace with the actual URL of your home page
      } else {
        setError(data.message || "Signup failed. Please try again.");
        setSuccess("");
      }
    } catch (err) {
      console.error("An error occurred:", err); // Log error
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create An Account</h2>
      <p>
        Welcome! We invite you to create an account by completing the form
        below. If you already have an account, please re-enter your email
        address on the previous screen.
      </p>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <input
          type="date"
          placeholder="Date of Birth (DD/MM/YYYY)"
          className="form-input2"
        />
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <p>
          I would like to receive news, personalized offers and previews from
          Clarins
        </p>
        <p>By email*</p>
        <div className="radio-container">
          <label className="radio-label">
            Yes
            <input
              type="radio"
              name="emailPreference"
              className="radio"
              value="yes"
              onChange={handleInputChange}
            />
          </label>
          <label className="radio-label">
            No
            <input
              type="radio"
              name="emailPreference"
              className="radio"
              value="no"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <p>
          I would like to earn loyalty points for free products, Club Clarins Dollars and many more exclusive benefits by becoming a Club Clarins member. I accept the Club Clarins terms & conditions:*
        </p>

        <div className="radio-container">
          <label className="radio-label">
            Yes
            <input
              type="radio"
              name="clubClarins"
              className="radio"
              value="yes"
              onChange={handleInputChange}
            />
          </label>
          <label className="radio-label">
            No
            <input
              type="radio"
              name="clubClarins"
              className="radio"
              value="no"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-row">
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
            />
            I agree to the Terms & Conditions and Privacy Policy *
          </label>
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
};

export default Signup;
