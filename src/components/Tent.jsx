import { Link } from "react-router-dom";
import "../css/Tent.css";


const Tent = (props) => {
    return (
        <section className="home-card">
            <img src={props.image} alt={props.highlight}/>
            <h3>{props.title} <span>{props.highlight}</span></h3>
            <Link to={props.link} className="card-btn">View</Link>
        </section>
    );
};

export default Tent;