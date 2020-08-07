import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./store";
import "./App.css";
import HeaderComponent from './components/HeaderComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
        <HeaderComponent/>
         <div className="book-row">
            <div className="col-md-9">
              <Products />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
