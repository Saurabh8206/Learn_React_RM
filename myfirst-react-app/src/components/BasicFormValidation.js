import React, { useState } from "react";

function BasicFormValidation() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState("");
  const [passwordErr, setPassswordErr] = useState("");

  function loginHandler(e) {
    if (user.length < 4 || password.length < 8) {
      alert("Please enter something.");
    } else {
      alert("Form successfully submitted.");
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let count = e.target.value.length;

    if (count < 4) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(true);
    // console.log(e.target.value.length);
  }

  function passwordHandler(e) {
    let count = e.target.value.length;

    if (count < 8) {
      setPassswordErr(true);
    } else {
      setPassswordErr(false);
    }
    setPassword(true);
    // console.log(e.target.value.length);
  }
  return (
    <div>
      <form onSubmit={loginHandler}>
        <h2>Login Form</h2>
        <label for="username">Username :</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={userHandler}
        />
        <br></br>
        {userErr ? <span>Minimum 4 charecter are allowed</span> : ""}
        <br></br>
        <label for="password">Password :</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          onChange={passwordHandler}
        />
        <br></br>
        {passwordErr ? <span>Password should be of 8 charecter.</span> : ""}
        <br></br>
        <button type="submit" name="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BasicFormValidation;
