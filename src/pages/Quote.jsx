import { useNavigate } from "react-router-dom";
import "../css/Quote.css";

const Quote = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/quotesent");
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
          <input
            type="hidden"
            name="access_key"
            value="f68b1ede-6a0a-476b-961a-6ff461248dd0"
          />

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
            <button type="submit">Get My Quote</button>
          </div>
        </form>

        <p id="questions">
          Have questions? Call us at 803-xxx-xxxx or email us at MVPTents@gmail.com
        </p>
      </div>
    </main>
  );
};

export default Quote;