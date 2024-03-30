import React from "react";

function RestaurantSignUp() {
  return (
    <div>
      <h2>Restaurant Sign Up</h2>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Email id"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter City" className="input-field" />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Contact"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <button className="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSignUp;
