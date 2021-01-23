import React, { useState } from "react";
import { useSelector } from "react-redux";

import "../styles/ProductLayout.css";
import Product from "./Product";

const ProductLayout = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const store = useSelector((store) => {
        let [...products] = store.product;
        const { searchText, gender, price, color, sort } = store.filter;

        // console.log("X", store);
        
        products = products.filter((product) => {
            return product.productName.toLowerCase().includes(searchText.toLowerCase()); 
        });

        if(gender !== "none") {
            products = products.filter((item) => item.gender.toLowerCase() === gender.toLowerCase());
        }

        if(sort === "low") {
            products.sort((a, b) => a.price - b.price);
        } else if(sort === "high") {
            products.sort((a, b) => b.price - a.price);
        }

        return products;
    });

    const numOfPages = Math.ceil(store.length / 10);
    const totalPages = [];

    for(let i = 1; i <= numOfPages; i++) {
        totalPages.push(i);
    }

    const products = store.slice((currentPage - 1) * 10, (currentPage * 10));

    const changePage = (e) => setCurrentPage(parseInt(e.target.innerText));

    return (
        <div className="main-products">
            <div className="main-products-product">
                {products.map((product, idx) => (
                    <Product key={idx} product={product} />
                ))}
            </div>
            
            <div className="pagination">
                {totalPages.map((num, idx) => {
                    if(currentPage === idx + 1) {
                        return (<div className="page highlight" key={idx} data-page={idx} onClick={changePage}>{num}</div>)
                    } else {
                        return (<div className="page" key={idx} data-page={idx} onClick={changePage}>{num}</div>)
                    }
                })}
            </div>
        </div>
    );
}

export default ProductLayout;