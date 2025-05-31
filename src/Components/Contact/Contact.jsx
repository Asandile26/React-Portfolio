import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with data:", formData);

    try {
      const response = await fetch("https://formspree.io/f/manogajv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("Form successfully submitted!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm available immediately for any kind of work.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="bx bxs-envelope"></i>
              <p>asandilelangeni@gmail.com</p>
            </div>
            <div className="contact-detail">
              <i className="bx bxs-phone"></i>
              <p>067 6555 678</p>
            </div>
            <div className="contact-detail">
              <i className="bx bxs-map"></i>
              <p>Khayelitsha, Cape Town, Western Cape</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="fullName">Your Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
