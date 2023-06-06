import React, { useState } from "react";

function TernaryCondition(props) {
  const [loggedIn, setLoggedIn] = useState(2);
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Welcome User</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome User2</h1>
      ) : (
        <h1>Welcom Guest</h1>
      )}
    </div>
  );
}

export default TernaryCondition;
