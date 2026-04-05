import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Tent.css";
import TentDialog from "./TentDialog";

const Tent = (props) => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <section className="home-card">
        <img
          src={props.image}
          alt={props.highlight}
          onClick={openDialog}
          className="tent-image"
        />

        <h3>
          {props.title} <span>{props.highlight}</span>
        </h3>

        <Link to={props.link || "#"} className="card-btn">
          View
        </Link>
      </section>

      {showDialog && (
        <TentDialog
          title={props.highlight}
          image={props.image}
          closeDialog={closeDialog}
        />
      )}
    </>
  );
};

export default Tent;