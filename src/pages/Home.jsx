import "../css/Home.css";
import "../css/Tent.css";
import {Link} from "react-router-dom";
import weddingImg from"../images/weddingeventpic.png";
import sportImg from"../images/sportingeventpic.png";
import corpImg from "../images/corpeventpic.jpg";
import Tent from "../components/Tent";

const Home = () => {
    return (
        <main id="home" className="main-content">
           <section className="home-header-section">
            <div className="hero-content">
                <h1>Reliable Tents For Every Event</h1>
                <p>
                    Elegant, durable tent rentals for weddings, corporate 
                    events, and many other celebrations.
                </p>
                <Link to="/services" className="view-tent-opt-btn">View Tent Options</Link>
                
            </div>
            </section>

            <section className="home-features">
              <div className="feature-highlights">
                <div className="highlight">
                    <span className="check">✔</span>
                    <p>Fully Licensed & Insured</p>
                </div>
        
                <div className="highlight">
                    <span className="check">✔</span>
                    <p>Set-up and Take-down included</p>
                </div>
        
                <div className="highlight">
                    <span className="check">✔</span>
                    <p>Fast Quotes</p>
                </div>
            </div>

            <h2>Our Featured Tents</h2>
            <p className="subtitle">Perfect for any occasion! Large or Small</p>
            
            
            <div className="home-tent-cards">
                <Tent title="Perfect For" highlight="Weddings" image={weddingImg} link="/viewwedding"/>
                <Tent title="Perfect For" highlight="Sport Events" image={sportImg}/>
                <Tent title="Perfect For" highlight="Corporate Events" image={corpImg} />
            </div>
        </section>
        </main>
    );
};

export default Home;