import { useState } from "react";

const urlLocal = "http://localhost:3001/api/testimonials";
const urlRender = "https://demo-backend-zplt.onrender.com/api/testimonials";

const apiUrl = window.location.hostname === "localhost" ? urlLocal : urlRender;

const EditTestimonial = (props) => {
  console.log("EDIT ID:", props.id);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch(`${apiUrl}/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        rating: Number(data.rating),
      }),
    });

    if (response.ok) {
      const updated = await response.json();
      setResult("Review has been updated");
      props.updateTestimonial(updated);
    } else {
      setResult("Error updating review");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button type="button" className="exit-btn" onClick={props.closeEditDialog}>X</button>

        <form onSubmit={onSubmit}>
          <h3 className="add-title">Edit review</h3>

          <p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" defaultValue={props.name} required />
          </p>

          <p>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              defaultValue={props.rating}
              required
            />
          </p>

          <p>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" defaultValue={props.date} required />
          </p>

          <p>
            <label htmlFor="text">Review:</label>
            <textarea id="text" name="text" defaultValue={props.text} required />
          </p>

          <p>
            <button type="submit">Save Changes</button>
          </p>

          <p>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default EditTestimonial;