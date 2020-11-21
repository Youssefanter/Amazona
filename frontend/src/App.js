import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen.js';
import ProductScreen from './Screens/ProductScreen.js';

function App() {
  return(
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Amazona</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>

    <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </main>

    <footer className="row center">All rights reserved</footer>

    </div>
</BrowserRouter>
  );  
}

export default App;
