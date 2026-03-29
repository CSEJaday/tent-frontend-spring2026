import {Link} from "react-router-dom";
import { useState } from "react";
import "../css/Navigation.css";
import mvptentslogo from "../images/mvptentslogo.jpg";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
         <header className="navbar">
            <Link to="/">
            <div className="logo"><img src={mvptentslogo}/></div>
            </Link>

            <nav id="main-nav">
                <a id="toggle-nav" onClick={toggleMenu} href="#">
                    {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
                </a>
                <ul className={menuOpen?"nav-links":"hide-small"}>
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