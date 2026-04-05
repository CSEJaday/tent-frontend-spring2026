import "../css/ViewWedding.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TentDetails = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/tent/4")
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    if (!product) return <p>Loading!</p>;

    return (
        <section className="product-section">
            <div className="ps-container">
                <h1 className="product-title">
                    {product.title}
                </h1>

                <div className="decorations">
                    <div className="title-design-line"></div>
                </div>

                <p className="product-sub">
                    {product["sub-title"]}
                </p>

                <div className="product-grid">
                    <div className="product-long-desc">
                        <p>{product.description}</p>

                        <p className="starting-price">
                            Starting from: <span>${product.startingPrice}</span>
                        </p>
                    </div>

                    <aside className="product-specs">
                        <h2>Specifications</h2>
                        <ul className="spec-list">
                            <li>Dimensions: {product.dimensions}</li>
                            <li>Capacity: {product.capacity}</li>
                            <li>Materials: {product.materials}</li>
                            <li>Extra Fee Services: {product.extraFeeServices}</li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default TentDetails;