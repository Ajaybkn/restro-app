function RestaurantLogin() {
  return (
    <div>
      <h2>Login component</h2>
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
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantLogin;
