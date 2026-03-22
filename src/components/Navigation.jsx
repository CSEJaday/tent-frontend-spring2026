import {Link} from "react-router-dom";
import "../css/Navigation.css";
import mvptentslogo from "../images/mvptentslogo.jpg";

const Navigation = () => {
    return (
         <header className="navbar">
            <Link to="/">
            <div className="logo"><img src={mvptentslogo}/></div>
            </Link>

            <nav id="main-nav">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                </ul>
            </nav>
            <Link to="/quote" className="quote-btn">Get a Quote</Link>
        </header>
    );
};

export default Navigation;