import "../css/Testimonials.css";

const TestCard = ({ name, date, text, rating, isActive }) => {
    return (
      <article className={`testimonials-card ${isActive ? "current" : ""}`}>
        <h2 className="client-name">{name}</h2>
  
        <div className="stars" aria-label={`${rating} star rating`}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className="star">
              {i < rating ? "★" : "☆"}
            </span>
          ))}
        </div>
  
        <div className="date">{date}</div>
  
        <p className="test-text">{text}</p>
      </article>
    );
  };
  
  export default TestCard;