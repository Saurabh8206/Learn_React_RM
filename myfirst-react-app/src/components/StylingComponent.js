import React from "react";
// import "./styleDemo.css";
import "./demo.module.css";

function StylingComponent() {
  const styles = {
    textAlign: "center",
    color: "rgba(255, 255, 255,255)",
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>StylingComponent</h1>
      <p>
        ydfgdfghfsdghsfdghsdf sdfgdf gsdf gsd sdsdfgr egysfg refgfs gre trsgfdgf
      </p>
      <p style={styles}>
        ydfgdfghfsdghsfdghsdf sdfgdf gsdf gsd sdsdfgr egysfg refgfs gre trsgfdgf
      </p>

      <button>Button</button>
    </div>
  );
}

export default StylingComponent;
