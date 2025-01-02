import React, { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // To track the submission status
  const [error, setError] = useState(null); // To track errors
  const [success, setSuccess] = useState(false); // To track successful submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when submitting the form
    setError(null); // Reset error state
    setSuccess(false); // Reset success state

    try {
      // Send the form data to Formspree using fetch
      const response = await fetch("https://formspree.io/f/xrbbkglr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      // If successful, update the state
      setSuccess(true);
      setFormData({ email: "", subject: "", message: "" }); // Clear form fields
    } catch (error) {
      setError(error.message); // Set error message if there is an error
    } finally {
      setLoading(false); // Stop loading once the request is completed
    }
  };

  return (
    <div className="section" id="contact">
      <h1>Contact</h1>
      {/* Display success or error message */}
      {success && <p className="success-message">Email sent successfully!</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject of your message"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
