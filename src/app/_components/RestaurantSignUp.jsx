import React, { useState } from "react";

function RestaurantSignUp() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState();
  const [c_password, setc_password] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [contact, setcontact] = useState();
  const handleSignUp = async () => {
    console.log(email, password, c_password, name, city, address, contact);
    let result = await fetch("http://localhost:3000/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, contact, address }),
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div>
      <h2>Restaurant Sign Up</h2>
      <div>
        <div className="input-wrapper">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email id"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={c_password}
            onChange={(e) => setc_password(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter City"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter Address"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            type="text"
            placeholder="Enter Contact"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <button className="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSignUp;
