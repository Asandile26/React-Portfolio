import React from "react";
import "./Contact.css";

function Contact() {
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
              <p>0676555678</p>
            </div>
            <div className="contact-detail">
              <i className="bx bxs-map"></i>
              Khayelitsha, Cape Town Western Cape
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/manogajv"
          method="POST"
          className="contact-right"
        >
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            id="textarea"
            placeholder="Enter your message"
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
