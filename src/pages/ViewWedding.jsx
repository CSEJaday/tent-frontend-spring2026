import "../css/ViewWedding.css";
import TentDetails from "../components/TentDetails";

const ViewWedding = () => {
    return(
      <main className="view-wedding-page">
        <section className="wedding-header-section">
          <div className="wedding-hero-content"></div>
            <div className="wedding-front-pic">
            </div>
            <TentDetails/>
        </section>
      </main>
    );
};

export default ViewWedding;