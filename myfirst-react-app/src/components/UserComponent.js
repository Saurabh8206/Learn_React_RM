import React from "react";

export default function UserComponent(props) {
  return (
    <div>
      <h2>UserComponent</h2>
      <button onClick={props.data}>Data from PropsInFunction</button>
    </div>
  );
}
