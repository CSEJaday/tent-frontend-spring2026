import "../css/Header.css";
import Navigation from "./Navigation";

const Header  = () => {
    return (
        <header id="main-header">
            <h1>MVP Tents</h1>
            <Navigation />
        </header>
    );
};

export default Header;