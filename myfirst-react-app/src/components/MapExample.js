import React from "react";
import MapMethod from "./MapMethod";

function MapExample(props) {
  const cars = ["BMW", "Mustang", "Scorpio", "Ferrari"];
  return (
    <div>
      MapExample
      <ul>
        {cars.map((car) => (
          <MapMethod brand={car} />
        ))}
      </ul>
    </div>
  );
}

export default MapExample;
