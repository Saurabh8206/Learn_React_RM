import React from "react";

function EventDemo(porps) {
  const myFunction = () => {
    alert("Hello");
  };

  return (
    <div>
      <h1>Demo Event</h1>
      <button onClick={myFunction}>Click</button>
    </div>
  );
}
export default EventDemo;
