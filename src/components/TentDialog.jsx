import "../css/Dialog.css";

const TentDialog = (props) => {
  return (
    <div className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>

          <div className="dialog-content">
            <div className="columns">
              <img src={props.image} alt={props.title} />

              <div className="dialog-text">
                <h2>{props.title}</h2>
                <p>Tent Information</p>
                <p>Tent Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentDialog;