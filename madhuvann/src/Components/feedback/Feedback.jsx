import React, { useState } from "react";
import Navbar from "../homepage/Navbar";
import "./feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send feedback data to your server here
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", feedback: "", rating: 3 });
  };

  return (
    <div className="">
      <Navbar />
      <div className="feedback-container">
        <h1 className="feedback-title">Share your Feedback!</h1>
        <form onSubmit={handleSubmit} className="feedback-page">
          <div className="field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="feedback-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;