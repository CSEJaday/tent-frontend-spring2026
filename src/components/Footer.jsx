import {Link} from "react-router-dom";
import "../css/Footer.css";

const Footer  = () => {
    return (
    <section className="contact-strip">
        <p>Ready to plan your next event?</p>
        <div className="contact-info">
            <p>Contact Us:</p>
            <p>803-xxx-xxxx</p>
            <a href="#">mvpTents@gmail.com</a> 
            <a href="#">@MVP Tents</a> 
        </div>
    </section>
    );
};

export default Footer;