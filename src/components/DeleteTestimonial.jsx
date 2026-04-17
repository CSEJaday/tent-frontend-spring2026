import { useState } from "react";

const urlLocal = "http://localhost:3001/api/testimonials";
const urlRender = "https://demo-backend-zplt.onrender.com/api/testimonials";

const apiUrl = window.location.hostname === "localhost" ? urlLocal : urlRender;

const DeleteTestimonial = (props) => {
  const [result, setResult] = useState("");

  const deleteReviewInput = async () => {
    setResult("Sending...");

    const response = await fetch(`${apiUrl}/${props.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setResult("Successfully deleted!");
      props.deleteTestimonialFromState(props.id);
      props.closeDeleteDialog();
    } else {
      setResult("Delete unsuccessful");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button type="button" className="exit-btn" onClick={props.closeDeleteDialog}>
          X
        </button>

        <h3>Are you sure you want to delete your review?</h3>

        <section style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button type="button" onClick={props.closeDeleteDialog}>
            No
          </button>
          <button type="button" onClick={deleteReviewInput}>
            Yes
          </button>
        </section>

        <p>{result}</p>
      </div>
    </div>
  );
};

export default DeleteTestimonial;