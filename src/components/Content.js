import React from "react";

import ProductLayout from "./ProductLayout";
import Filters from "./Filters";

const Content = () => {
    return (
        <div className="main">
            <Filters />

            <ProductLayout />
        </div>
    );
};

export default Content;
