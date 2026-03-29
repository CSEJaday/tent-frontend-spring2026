import { useState } from "react";
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
  {
    name: "John Lennon",
    date: "June 17th, 2023",
    text: "Excellent service, reasonable prices and courteous crew! Definitely recommend.",
  },
  {
    name: "Jessica Rivers",
    date: "June 20th, 2024",
    text: "Excellent service, reasonable prices and courteous crew! Definitely recommend.",
  },
];

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideForward = () => {
    setSlideIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideBack = () => {
    setSlideIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <main className="testimonials-page">
      <section className="testimonial-hero-head">
        <h1 id="testimonial-head-text">What Our Clients Say</h1>
        <p id="testimonial-sub-text">Some testimonials from past clients</p>
      </section>

      <section className="testimonials-section">
        <button
          type="button"
          className="testimonials-arrow testimonials-arrow-left"
          onClick={slideBack}
          aria-label="Previous testimonial"
        >
          &#10094;
        </button>

        <div className="testimonials-row">
          <TestCard
            name={testimonials[slideIndex].name}
            date={testimonials[slideIndex].date}
            text={testimonials[slideIndex].text}
            isActive={true}
          />
        </div>

        <button
          type="button"
          className="testimonials-arrow testimonials-arrow-right"
          onClick={slideForward}
          aria-label="Next testimonial"
        >
          &#10095;
        </button>

        <div className="testimonials-dots">
          <span className={`testimonials-dot ${slideIndex % 3 === 0 ? "active" : ""}`}></span>
          <span className={`testimonials-dot ${slideIndex % 3 === 1 ? "active" : ""}`}></span>
          <span className={`testimonials-dot ${slideIndex % 3 === 2 ? "active" : ""}`}></span>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;