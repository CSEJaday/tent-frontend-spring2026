import "../css/Testimonials.css";

const TestCard = ({
  name,
  date,
  text,
  rating,
  isActive,
  onEdit,
  onDelete,
  canEditDelete,
}) => {
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

      {canEditDelete && (
        <div className="test-card-actions">
          <button className="edit-btn" onClick={onEdit}>Edit</button>
          <button className="delete-btn" onClick={onDelete}>Delete</button>
        </div>
      )}
    </article>
  );
};

export default TestCard;
