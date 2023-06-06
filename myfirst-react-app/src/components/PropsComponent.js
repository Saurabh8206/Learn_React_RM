import React from "react";

function PropsComponent(props) {
  return (
    <div>
      <h1> Hello {props.name}</h1>
      <br /> <h1> Whats your age : {props.age}</h1>
      <br /> <h1> Where do you leave : {props.location}</h1>
      {/* //object reference porps */}
      <br /> <h1> Which car do you have : {props.car.model}</h1>
    </div>
  );
}
export default PropsComponent;
