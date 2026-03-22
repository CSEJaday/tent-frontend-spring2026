import "../css/Services.css";
import ServicesHero from "../components/ServicesHero";
import ServicesCards from "../components/ServicesCards";

const Services = () => {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesCards />
    </div>
  );
};

export default Services;