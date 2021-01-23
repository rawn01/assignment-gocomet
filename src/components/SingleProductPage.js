import React from "react";
import "../styles/SingleProduct.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import CartSlice from "../store/cartSlice";

// When user clicks on specific product on the home page, this component renders.
const SingleProductPage = () => {
    const dispatch = useDispatch();
    const product = useLocation().state;

    // Add item to cart
    const addToCart = () => {
        dispatch(CartSlice.actions.addItemToCart(product));
    }
    
    return (
        <div>
            <div className="single-product-container">
                <div className="single-product-images">
                    {product.images.map((image, idx) => {
                        if(image.src.length > 0) {
                            return (
                                <div key={idx} className="single-product-image">
                                    <img className="single-image" src={image.src} alt="img" />
                                </div>
                            );
                        }
                    })}
                </div>

                <div className="single-product-details">
                    <div className="single-product-brand">{product.brand}</div>
                    <div className="single-product-info">{product.additionalInfo}</div>
                    <hr />
                    <div className="single-product-price">
                        <span className="single-product-cost">Rs.{product.price}</span>
                        <span className="single-product-mrp"><span>Rs.{product.mrp}</span></span>
                    </div>
                    <div className="single-product-sizes">
                        {product.sizes.split(",").map((size, idx) => (
                            <div className="single-product-size" key={idx}>
                                {size}
                            </div>
                        ))}
                    </div>
                    <div className="single-product-addItems">
                        <button className="single-product-add-to-cart" onClick={addToCart}>
                            ADD TO CART
                        </button>
                        <button className="single-product-add-to-cart">
                            WISHLIST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
