import "./App.css";
import "./css/custom.css";
import "./css/style.default.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./Share/Footer/Footer";
import Header from "./Share/Header/Header";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import Cart from "./Cart/Cart";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Checkout from "./Checkout/Checkout";
import History from "./History/History";
import Shop from "./Shop/Shop";
import Chat from "./Share/Chat/Chat";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  const decodedToken = token ? jwt_decode(token) : {};
  const {userId} = decodedToken

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/history" component={History}/>
          <Route path="/shop" component={Shop} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
