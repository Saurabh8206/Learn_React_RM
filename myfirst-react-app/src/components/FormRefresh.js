import React, { useState } from "react";

function FormRefresh(props) {
  function getFormData(e) {
    e.preventDefault();
  }

  const [state, setName] = useState("");
  const [terms, setTerms] = useState(false);
  const [interest, setInterest] = useState("false");
  return (
    <div>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
        <br></br>
        <input type="checkbox" onChange={(e) => setTerms(e.target.checked)} />
        <span>Accept T&C</span>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormRefresh;
