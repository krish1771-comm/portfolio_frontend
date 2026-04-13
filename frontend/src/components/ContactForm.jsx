"use client";

import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="form-section">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-subtitle text-center">
        I’m always open to new opportunities. Feel free to reach out!
      </p>

      <div className="form-wrapper glass-panel">
        <form onSubmit={handleSubmit} className="contact-form">
          
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="input-control"
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="input-control"
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="input-control textarea-control"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="status-msg msg-success">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="status-msg msg-error">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}