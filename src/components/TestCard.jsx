import "../css/Testimonials.css";

const TestCard = ({ name, date, text, isActive }) => {
    return (
      <article className={`testimonials-card ${isActive ? "current" : ""}`}>
        <h2 className="client-name">{name}</h2>
  
        <div className="stars" aria-label="5 star rating">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
  
        <div className="date">{date}</div>
  
        <p className="test-text">{text}</p>
      </article>
    );
  };
  
  export default TestCard;