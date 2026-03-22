const OwnerCard = ({ image, name, role, text }) => {
    return (
      <div className="owner-profile-card">
        <img src={image} alt={name} className="owner-photo" />
        <h3 className="owner-name">{name}</h3>
        <h4 className="owner-role">{role}</h4>
        <p className="owner-bio">{text}</p>
        <a href="mailto:example@gmail.com" className="owner-email">
          name@example.com
        </a>
      </div>
    );
  };
  
  export default OwnerCard;