import React, { useState } from "react";
import "../styles/Header.css";

import { useDispatch, useSelector } from "react-redux";
import filterSlice from "../store/filterSlice";
import { useHistory } from "react-router-dom";
import CartSlice from "../store/cartSlice";

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [cartIsOpen, setCartIsOpen] = useState(false); 
    const [searchInput, setSearchinput] = useState("");

    // dispatch action to redux to set the search text property
    const search = (e) => {
        setSearchinput(e.target.value);
        if(e.target.value.length <= 0) {
            dispatch(filterSlice.actions.setSearchText(""));
        } else {
            dispatch(filterSlice.actions.setSearchText(searchInput.trim()));
        }
    };

    // Not using this anymore. On key press changing the state and dispatching to redux
    const handleSearch = () => {
        dispatch(filterSlice.actions.setSearchText(searchInput.trim()));
    };

    // Redirect to /wishlist if the user presses on wishlist icon
    const openWishlist = () => {
        history.push("/wishlist");
    };

    const openCart = () => {
        setCartIsOpen((prevState) => !prevState);
    };

    // Select only the cart property from the redux store
    const cartItems = useSelector((store) => store.cart);

    const goHome = () => {
        history.push("/");
    };

    // remove item from cart by dispatching action to redux
    const removeFromCart = (product) => {
        dispatch(CartSlice.actions.removeItemFromCart(product))
    };

    return (
        <div>
            <div className="header">
                <p className="header-logo" onClick={goHome}>HOME</p>
                <div className="header-search-bar">
                    <input type="text" value={searchInput} disabled={props.disableBtn} placeholder="Search" onChange={search} className="header-search-input" />
                    <button className="header-search-button" disabled={props.disableBtn} onClick={handleSearch}>Search</button>
                </div>
                <div className="header-cart">
                    <div className="header-wishlist" onClick={openWishlist}>Wishlist</div>
                    <div className="header-bag" onClick={openCart}>Bag</div>
                </div>
            </div>

            {
                cartIsOpen === false ? undefined :
                <div className="cart-modal">
                    <div className="cart-close" onClick={openCart}>X</div>
                   {cartItems.map((product) => (
                       <div className="cart-data">
                            <div className="cart-body">
                                <img src={product.searchImage} alt="img" />
                                <div className="cart-body-data">
                                    <p>{product.brand}</p>
                                    <p>{product.additionalInfo}</p>
                                </div>
                                <p className="cart-body-price">&#x20B9;{product.price}</p>
                            </div>
                            <div className="cart-footer">
                                <button onClick={() => removeFromCart(product)}>REMOVE</button>
                                <button>MOVE TO WISHLIST</button>
                            </div>
                       </div>
                   ))}
                </div>
            }
        </div>
    );
};

export default Header;
