import React, { useState } from "react";
import "./Signup.css"; // You should create a CSS file to style your component

function SignUp() {
  const [formData, setFormData] = useState({
    legalFirstName: "",
    legalLastName: "",
    company: "",
    location: "",
    contact: "",
    nationalId: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted", formData);
    // Add your logic for form submission (e.g., API call, validation, etc.)
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Agent Sign Up</h2>
        <input
          type="text"
          name="legalName"
          placeholder="Legal First Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="legalName"
          placeholder="Legal Last Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Company’s Location"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="nationalId"
          placeholder="National ID Number"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUp;
