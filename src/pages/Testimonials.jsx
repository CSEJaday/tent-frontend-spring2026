import "../css/Testimonials.css";
import TestCard from "../components/TestCard";

const testimonials = [
  {
    name: "Hannah Kennedy",
    date: "June 9th, 2025",
    text: "Excellent service, reasonable prices and courteous crew! Definitely recommend.",
  },
  {
    name: "Randy Brown",
    date: "July 4th, 2024",
    text: "Thank you for helping make our event a success. Quality service and product!",
  },
  {
    name: "James Rice",
    date: "June 9th, 2025",
    text: "Excellent service, reasonable prices and courteous crew! Definitely recommend.",
  },
];

const Testimonials = () => {
  return (
    <main className="testimonials-page">
      <section className="testimonial-hero-head">
        <h1 id="testimonial-head-text">What Our Clients Say</h1>
        <p id="testimonial-sub-text">Some testimonials from past clients</p>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-arrow testimonials-arrow-left" aria-hidden="true">
          &#10094;
        </div>

        <div className="testimonials-row">
          {testimonials.map((item, index) => (
            <TestCard
              key={index}
              name={item.name}
              date={item.date}
              text={item.text}
              isActive={index === 0}
            />
          ))}
        </div>

        <div className="testimonials-arrow testimonials-arrow-right" aria-hidden="true">
          &#10095;
        </div>

        <div className="testimonials-dots">
          <span className="testimonials-dot active"></span>
          <span className="testimonials-dot"></span>
          <span className="testimonials-dot"></span>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;