import React, { useState } from "react";
import "../styles/Filters.css";

import { useDispatch } from "react-redux";
import filterSlice from "../store/filterSlice";

const Filters = () => {
    const [sortBy, setSortBy] = useState("none"); 
    const [checkedMen, setCheckedMen] = useState(false);
    const [checkedWomen, setCheckedWomen] = useState(false);

    const dispatch = useDispatch();

    const handleSortBy = (e) => {
        if(e.target.value === "low") {
            setSortBy("low");
            dispatch(filterSlice.actions.setSort("low"));
        } else if(e.target.value === "high") {
            setSortBy("high");
            dispatch(filterSlice.actions.setSort("high"));
        } else {    
            setSortBy("none");
            dispatch(filterSlice.actions.setSort("none"));
        }
    }

    const setTheGender = (e) => {
        if(e.target.value === "men") {
            setCheckedMen(true);
            setCheckedWomen(false);
        } else {
            setCheckedWomen(true);
            setCheckedMen(false);
        }

        dispatch(filterSlice.actions.setGender(e.target.value));
    };

    const setThePrice = (e) => {
        dispatch(filterSlice.actions.setPrice(e.target.value));
    };

    const clearFilters = () => {
        setCheckedWomen(false);
        setCheckedMen(false);
        setSortBy("none");
        dispatch(filterSlice.actions.setSort("none"));
        dispatch(filterSlice.actions.setGender("none"));
    }

    return (
        <>
            <div className="main-filters">
                <div className="main-filters-headers">
                    <h3>FILTERS</h3>
                    <div className="main-filter-button" onClick={clearFilters}>CLEAR ALL</div>
                </div>

                <div className="main-filters-items">
                    <ul>
                        <li>
                            <input id="men" name="gender" value="men" type="radio" checked={checkedMen} onChange={setTheGender} />
                            <label htmlFor="men">MEN</label>
                        </li>
                        <li>
                            <input id="women" value="women" name="gender" type="radio" checked={checkedWomen} onChange={setTheGender}/>
                            <label htmlFor="women">WOMEN</label>
                        </li>
                    </ul>
                </div>

                <div className="main-filters-items">
                    <h4>Price</h4>
                    <ul>
                        <li>
                            <input id="lowest" type="checkbox" value={"0-500"} onChange={setThePrice}/>
                            <label htmlFor="lowest">Rs. 100 to Rs. 500</label>
                        </li>
                        <li>
                            <input id="moderate" type="checkbox" value={"501-1000"} onChange={setThePrice} />
                            <label htmlFor="moderate">Rs. 501 to Rs.1000</label>
                        </li>
                        <li>
                            <input id="high" type="checkbox" value={"1001-2000"} onChange={setThePrice} />
                            <label htmlFor="high">Rs. 1001 to Rs. 2000</label>
                        </li>
                        <li>
                            <input id="extreme" type="checkbox" value={"2000-"} onChange={setThePrice}/>
                            <label htmlFor="extreme">Rs. 2000+</label>
                        </li>
                    </ul>
                </div>

                <div className="main-filters-items">
                    <h4>Colors</h4>
                    <ul>
                        <li>
                            <input id="blue" type="checkbox"/>
                            <label htmlFor="blue">Blue</label>
                        </li>
                        <li>
                            <input id="white" type="checkbox"/>
                            <label htmlFor="white">White</label>
                        </li>
                        <li>
                            <input id="black" type="checkbox"/>
                            <label htmlFor="black">Black</label>
                        </li>
                        <li>
                            <input id="red" type="checkbox"/>
                            <label htmlFor="red">Red</label>
                        </li>
                        <li>
                            <input id="green" type="checkbox"/>
                            <label htmlFor="green">Green</label>
                        </li>
                    </ul>
                </div>

                <div className="main-filters-items">
                    <label htmlFor="sort">Sort By:</label>

                    <select name="sort" id="sort" value={sortBy} onChange={handleSortBy}>
                        <option value="none">None</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Filters;
