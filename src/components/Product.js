import React from "react";
import "../styles/Product.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import wishlistSlice from "../store/wishlistSlice";
import CartSlice from "../store/cartSlice";

const Product = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let id = undefined;

    const changeImage = (e) => {
        const item = e.currentTarget;
        id = setTimeout(() => {
            item.src = props.product.images[5].src;
        }, 700);
    };

    const getOriginalImage = (e) => {
        if(id) {
            clearInterval(id);
        }

        e.currentTarget.src = props.product.searchImage;
    };

    const addToWishlist = () => {
        if(props.wishlist === "Remove") {
            dispatch(wishlistSlice.actions.removeItem(props.product));
            return;
        }

        dispatch(wishlistSlice.actions.addItem(props.product));
    };


    const addToCart = () => {
        dispatch(CartSlice.actions.addItemToCart(props.product));
    }   

    const redirectToProductDetails = (id) => {
        history.push({
            pathname: "/product/" + id,
            state: props.product
        });
    };

    return (
        <div className="product-container" >
            <div className="product" onClick={() => redirectToProductDetails(props.product.productId)}>
                <img src={props.product.searchImage} alt="ProductImage" onMouseOver={changeImage} onMouseOut={getOriginalImage}/>

                <div className="product-meta-data">
                    <h3>{props.product.brand}</h3>
                    <h4>{props.product.additionalInfo}</h4>
                </div>
                <div className="product-price">
                    <span className="product-price-real">Rs. {props.product.price}</span>
                    <span className="product-price-discount">Rs. {props.product.mrp}</span>
                </div>
            </div>
            <div className="add-to-wishlist">
                <button onClick={addToWishlist}>
                    {props.wishlist === "Remove" ? "Remove " : "Add "}
                    {props.wishlist === "Remove" ? "from " : "to "}
                    Wishlist
                </button>
            </div>
            {
                    props.wishlist !== "Remove" ? undefined :
                    (
                        <div className="add-to-wishlist">
                            <button onClick={addToCart}>
                                Add to Cart
                            </button>
                        </div>
                    )
                }
        </div>
    );
};

export default Product;
