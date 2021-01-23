import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store/store";
import App from './components/App';
import SingleProductPage from './components/SingleProductPage';
import Wishlist from "./components/WishList";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/product/:id" component={SingleProductPage} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/" component={App} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


/*
  Redux store - 
  products: [ {}, {} ...],
  filters: {},
  wishlist: [{}, {}, ...] (only selected items)
  cart: [{}, {}, ...] (only selected items)
*/