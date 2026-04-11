import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Testimonials.css";
import TestCard from "../components/TestCard";
import AddTestimonial from "../components/AddTestimonial";

const API_BASE_URL = "https://demo-backend-zplt.onrender.com";
const urlLocal = "http://localhost:3001/api/testimonials";
const urlRender = "";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  }

  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(()=> {
    axios
    .get(`${API_BASE_URL}/api/testimonials`)
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  if (!testimonials.length) return <p>Loading!</p>;

  const slideForward = () => {
    setSlideIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideBack = () => {
    setSlideIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const addTestimonialToState = (newTestimonial) => {
    setTestimonials((prev) => {
      const updated = [...prev, newTestimonial];
      setSlideIndex(updated.length - 1);
      return updated;
    });
  };

  return (
    <main className="testimonials-page">
      <section className="testimonial-hero-head">
        <h1 id="testimonial-head-text">What Our Clients Say</h1>
        <p id="testimonial-sub-text">Some testimonials from past clients</p>
        <button id="btn-add-review" onClick={openAddDialog}>+</button>
        {showAddDialog?(<AddTestimonial
                          closeAddDialog={closeAddDialog}
                          onAddTestimonial={addTestimonialToState}
                          />):("")}
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