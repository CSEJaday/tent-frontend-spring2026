import "../css/ViewWedding.css";

const TentDetails = () => {
    return(
        <section className="product-section">
            <div className="ps-container">
                <h1 className="product-title" id="product-title">40' x 60' Wedding Tent</h1>
                <div className="decorations">
                  <div className="title-design-line"></div>
                </div>
                <p className="product-sub" id="product-description">Spacious and elegant, perfect for your special day. Includes setup with lighting, tables and chairs available.</p>
                <div className="product-grid">
                    <div className="product-long-desc"><p>Our 40’ x 60’ wedding tent can accommodate up to 200 guests, providing an ideal space for ceremony, receptions and celebrations. Enjoy the peace of mind with our full set up lighting, tables, and chairs, ensuring a beautiful and stress-free experience for your special day.</p>
                        <p className="starting-price">Starting from: <span>$1200</span></p>
                    </div>
                    <aside className="product-specs" aria-labelledby="specs-heading">
                        <h2 id="specs-heading">Specifications</h2>
                        <ul className="spec-list">
                            <li>Dimensions: 40 feet by 60 feet</li>
                            <li>Capacity: Up to 200 guests</li>
                            <li>Materials: High-peak farme tent, white fabric</li>
                            <li>Extra Fee Services: Lighting, tables, chairs</li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>

    );
};

export default TentDetails;