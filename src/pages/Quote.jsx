import React, { useState, useRef, useEffect } from "react";
import "../css/Quote.css";

const Quote = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("access_key", "f68b1ede-6a0a-476b-961a-6ff461248dd0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        e.target.reset();
        setStatus("Your quote request was sent successfully!");

        timeoutRef.current = setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="quote-page">
      <div className="quote-head-section">
        <section>
          <h1 className="gaq-head">Get a Quote</h1>
        </section>

        <section>
          <h2 className="gaq-head">
            Request a quote today and let us help make your event unforgettable!
          </h2>
        </section>
      </div>

      <div className="grey-box">
        <h2 className="card-title">Request a Free Quote</h2>
        <p className="card-sub">It's simple! Fill out the form below!</p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <label htmlFor="fullname">Full Name:</label>
              <input className="input" type="text" id="fullname" name="fullname" required />
            </div>

            <div className="col">
              <label htmlFor="phone">Phone Number:</label>
              <input className="input" type="tel" id="phone" name="phone" required />
            </div>
          </div>

          <div className="form-row">
            <div className="col">
              <label htmlFor="email">Email Address:</label>
              <input className="input" type="email" id="email" name="email" required />
            </div>

            <div className="col">
              <label htmlFor="eventtype">Event Type:</label>
              <input className="input" type="text" id="eventtype" name="eventtype" required />
            </div>
          </div>

          <div className="event-date">
            <label htmlFor="eventdate">Event Date:</label>
            <input className="input" type="date" id="eventdate" name="eventdate" required />
          </div>

          <div className="event-date">
            <label htmlFor="details">Additional Details:</label>
            <textarea className="input" id="details" name="details" rows="3"></textarea>
          </div>

          <div className="btn-quote">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Get My Quote"}
            </button>
          </div>
        </form>

        {status && <p id="form-status">{status}</p>}

        <p id="questions">
          Have questions? Call us at 803-xxx-xxxx or email us at MVPTents@gmail.com
        </p>
      </div>
    </main>
  );
};

export default Quote;