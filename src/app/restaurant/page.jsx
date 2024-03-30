"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css";
import RestaurantFooter from "../_components/RestaurantFooter";

function Restaurant() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurant Login/Sign Up</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <button className="button-link" onClick={() => setLogin(!login)}>
          {login ? "Don't have account? Sign Up" : "Already have account?Login"}
        </button>
        <RestaurantFooter />
      </div>
    </>
  );
}

export default Restaurant;
