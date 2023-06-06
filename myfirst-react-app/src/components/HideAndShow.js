import React, { useState } from "react";
function HideAndShow(props) {
  const [status, setStatus] = useState(true);

  return (
    <div>
      {status ? <h1>Welcome</h1> : null}

      {/* <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(false)}>hide</button> */}

      <button onClick={() => setStatus(!status)}>Toogle</button>
    </div>
  );
}
export default HideAndShow;
