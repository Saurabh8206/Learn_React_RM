import React, { useState } from "react";
// State example from react
function StatesDemo(props) {
  const [data, setData] = useState("Data");
  const [email, setEmail] = useState("ssk@dr.com");
  const [count, setCount] = useState(0);
  function updateDate() {
    alert("Click ok to Update Data");
    setData("Updated Data");
    setEmail("Updated email");
    //   Updated Count

    setCount(count + 1);
  }
  return (
    <div>
      <h1>{data}</h1>
      <h1>{email}</h1>
      <h1>Updated Count : {count}</h1>
      <button onClick={updateDate}>Click</button>
    </div>
  );
}
export default StatesDemo;
