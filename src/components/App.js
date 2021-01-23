import React from "react";

import "../styles/App.css";
import Content from "./Content";

const App = () => {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;

/*
  Redux store - 
  products: [ {}, {} ...], (array of objects)
  filters: {}, (object with properties like sort, price, etc)
  wishlist: [{}, {}, ...] (only selected items)
  cart: [{}, {}, ...] (only selected items)
*/