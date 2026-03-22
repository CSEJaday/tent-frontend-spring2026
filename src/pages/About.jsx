import "../css/About.css";
import AboutCard from "../components/AboutCard";
import OwnerCard from "../components/OwnerCard";

import workingMan1 from "../images/Working man 1.png";
import peopleTalking2 from "../images/People Talking 2.png";
import davidgriffin from "../images/davidgriffin.png";
import familyPic from "../images/Family pic.png";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1>About MVP Tents</h1>
          <p>Your trusted partner for memorable events</p>

          <h2>Who We Are</h2>

          <div className="about-decorations">
            <div className="about-line"></div>
            <div className="about-circle"></div>
            <div className="about-line"></div>
          </div>
        </div>
      </section>

      <section className="about-cards-section" id="about-cards">
        <AboutCard
          image={workingMan1}
          title="Who are we?"
          text="We are a team of tent providers, originally from South Carolina. We started our business in 2024!"
        />

        <AboutCard
          image={peopleTalking2}
          title="Why choose MVP Tents"
          text="We have top quality and elegant tents, our customer service is like no other, and we have options to fit your needs!"
        />
      </section>

      <section className="about-owners-section">
        <h2 className="about-owners-title">Meet The Owners</h2>
        <p className="about-owners-subtitle">
          Dedicated to making your event perfect!
        </p>

        <div className="about-owners-container" id="owners-container">
          <OwnerCard
            image={davidgriffin}
            name="Dave Griffin"
            role="Owner & Operations Director"
            text="Dave handles quotes and leads the tent setup. Dave also has 3+ years in event layout planning, he makes sure every tent is perfect."
          />

          <OwnerCard
            image={familyPic}
            name="Jack Simpson"
            role="Owner & Operations Director"
            text="Jane handles quotes and tent setup. With 3+ years in event planning, he makes sure every tent is perfect."
          />
        </div>
      </section>

      <section className="about-quote-section">
        <p className="about-quote-text">
          “Our mission is to make your outdoor event truly special and stress-free, with a beautiful tent that exceeds your expectations.”
        </p>
      </section>
    </main>
  );
};

export default About;