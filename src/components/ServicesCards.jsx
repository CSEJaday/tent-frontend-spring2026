import "../css/Services.css";
import corporatePic from "../images/corpeventpic.jpg";
import weddingPic from "../images/weddingeventpic.png";
import sportPic from "../images/sportingeventpic.png";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Perfect For",
    highlight: "Wedding Rentals",
    text: "Make your special day unforgettable with our gorgeous wedding tents.",
    img: weddingPic,
    link: "/viewwedding"
  },
  {
    title: "Perfect For",
    highlight: "Corporate Event Rentals",
    text: "Perfect for corporate gatherings, company pick-nicks, and business functions.",
    img: corporatePic,
  },
  {
    title: "Perfect For",
    highlight: "Festival & Sport Event Tents",
    text: "Ideal for festivals, fairs, sports tournaments, and large outdoor gatherings.",
    img: sportPic,
  },
];

const ServiceCard = () => {
  return (
    <section className="services-features">
      <div className="services-tent-cards">
        {services.map((service, index) => (
          <div className="services-card" key={index}>
            <img src={service.img} alt={service.highlight} />

            <h3>
              {service.title} <span>{service.highlight}</span>
            </h3>

            <p>{service.text}</p>

            <Link to={service.link} className="services-card-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;