import React, { useState } from "react";

function InputProps(props) {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }

  return (
    <div className="input">
      {print ? <h2>{data}</h2> : null}

      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Value</button>
    </div>
  );
}

export default InputProps;
