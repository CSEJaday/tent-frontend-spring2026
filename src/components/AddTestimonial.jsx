import { useState } from "react";
import "../css/AddTestimonial.css";
const AddTestimonial = (props) => {
    const [result, setResult] = useState("");


    const addTestToServer = async(e) => {
        e.preventDefault();
        setResult("Sending...");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        //console.log(Object.fromEntries(formData));

        const response = await fetch("http://localhost:3001/api/testimonials",{
            "method":"POST",
            headers: {
              "Content-Type": "application/json",
            },
            "body":JSON.stringify({
              ...data,
              rating: Number(data.rating),
            }),
        });
        if(response.status == 201){
          const savedTestimonial = await response.json();
          props.onAddTestimonial(savedTestimonial);
          setResult("Review Added!");
        }else{
          const message = await response.text();
          setResult(message || "Error adding testimonial")
          //setResult("Error adding testimonial");
        }
        
    };
    return (
        <div className="modal-overlay">
          <div className="modal-box">
            <button type="button" className="exit-btn" onClick={props.closeAddDialog}>X</button>
    
            <form onSubmit={addTestToServer}>
              <h3 className="add-title">Create new review</h3>
    
              <p>
                <label htmlFor="name" className="name">Name:</label>
                <input type="text" id="name" name="name" required minLength="3" />
              </p>
    
              <p>
                <label htmlFor="rating" className="rating">Add Rating:</label>
                <input type="number" id="rating" name="rating" min="0" max="5" required />
              </p>
    
              <p>
                <label htmlFor="date" className="add-date">Add Date:</label>
                <input type="date" id="date" name="date" required />
              </p>
    
              <p>
                <label htmlFor="text" className="review-label">Add Review:</label>
                <textarea id="text" name="text" className="review-box" required></textarea>
              </p>
    
              <p>
                <button type="submit" className="submit">Submit</button>
              </p>
    
              <p>{result}</p>
            </form>
          </div>
        </div>
      );
}

export default AddTestimonial;