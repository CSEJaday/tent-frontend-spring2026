const AboutCard = ({ image, title, text }) => {
  return (
    <div className="about-info-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default AboutCard;