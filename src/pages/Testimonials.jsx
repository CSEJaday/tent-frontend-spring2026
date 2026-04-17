import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Testimonials.css";
import TestCard from "../components/TestCard";
import AddTestimonial from "../components/AddTestimonial";
import EditTestimonial from "../components/EditTestimonial";
import DeleteTestimonial from "../components/DeleteTestimonial";

const urlLocal = "http://localhost:3001/api/testimonials";
const urlRender = "https://demo-backend-zplt.onrender.com/api/testimonials";

const apiUrl = window.location.hostname === "localhost" ? urlLocal : urlRender;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [userReviewId, setUserReviewId] = useState(() =>
    localStorage.getItem("userReviewId")
  );

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        const fixed = res.data.map((t) => ({
          ...t,
          id: t.id || t._id,
        }));
  
        setTestimonials(fixed);
  
        const savedId = localStorage.getItem("userReviewId");
        if (savedId) {
          const index = fixed.findIndex(
            (t) => String(t.id) === String(savedId)
          );
          if (index !== -1) {
            setSlideIndex(index);
          }
        }
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

  const openAddDialog = () => setShowAddDialog(true);
  const closeAddDialog = () => setShowAddDialog(false);

  const openEditDialog = () => {
    setSelectedTestimonial(testimonials[slideIndex]);
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
    setSelectedTestimonial(null);
  };

  const openDeleteDialog = () => {
    setSelectedTestimonial(testimonials[slideIndex]);
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedTestimonial(null);
  };

  const addTestimonialToState = (newTestimonial) => {
    const reviewId = newTestimonial.id || newTestimonial._id; // 👈 define it here
  
    setTestimonials((prev) => {
      const updated = [...prev, newTestimonial];
      setSlideIndex(updated.length - 1);
      return updated;
    });
  
    setUserReviewId(reviewId);
    localStorage.setItem("userReviewId", reviewId);
  };

  //setUserReviewId(newTestimonial.id || newTestimonial._id);
  const updateTestimonialInState = (updatedTestimonial) => {
    setTestimonials((prev) =>
      prev.map((item) =>
        (item.id || item._id) === (updatedTestimonial.id || updatedTestimonial._id)
          ? updatedTestimonial
          : item
      )
    );
  };

  const deleteTestimonialFromState = (id) => {
    setTestimonials((prev) => {
      const updated = prev.filter((item) => (item.id || item._id) !== id);
      if (slideIndex >= updated.length) {
        setSlideIndex(updated.length - 1 < 0 ? 0 : updated.length - 1);
      }
      return updated;
    });
  };

  const current = testimonials[slideIndex];
  const canEditDelete = String(current.id || current._id) === String(userReviewId);
  
  return (
    <main className="testimonials-page">
      <section className="testimonial-hero-head">
        <h1 id="testimonial-head-text">What Our Clients Say</h1>
        <p id="testimonial-sub-text">Some testimonials from past clients</p>
        <button id="btn-add-review" onClick={openAddDialog}>+</button>

        {showAddDialog && (
          <AddTestimonial
            closeAddDialog={closeAddDialog}
            onAddTestimonial={addTestimonialToState}
          />
        )}
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
            name={current.name}
            date={current.date}
            text={current.text}
            rating={current.rating}
            isActive={true}
            onEdit={openEditDialog}
            onDelete={openDeleteDialog}
            canEditDelete={canEditDelete}
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

      {showEditDialog && selectedTestimonial && (
        <EditTestimonial
          id={selectedTestimonial.id || selectedTestimonial._id}
          name={selectedTestimonial.name}
          date={selectedTestimonial.date}
          rating={selectedTestimonial.rating}
          text={selectedTestimonial.text}
          closeEditDialog={closeEditDialog}
          updateTestimonial={updateTestimonialInState}
        />
      )}

      {showDeleteDialog && selectedTestimonial && (
        <DeleteTestimonial
          id={selectedTestimonial.id || selectedTestimonial._id}
          closeDeleteDialog={closeDeleteDialog}
          deleteTestimonialFromState={deleteTestimonialFromState}
        />
      )}
    </main>
  );
};

export default Testimonials;