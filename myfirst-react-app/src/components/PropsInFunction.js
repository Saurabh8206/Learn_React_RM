import React from "react";
import UserComponent from "./UserComponent";

function PorpsInFunction(params) {
  function getData() {
    alert("Data from getData function is called");
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>Function Component</h1>
      <UserComponent data={getData} />
    </div>
  );
}
export default PorpsInFunction;
