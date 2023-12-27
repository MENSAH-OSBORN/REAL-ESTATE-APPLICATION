import React from "react";
import data from "./data";
import "./App.css";

export default function Properties() {
  return (
    <>
      <h1 className="latest">LATEST LISTINGS</h1>

      <div className="main">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.id} />

            <div className="description">
              <h3>${item.price}</h3>
              <div>
                <span>{item.beds} Beds</span>
                <span> .{item.baths} Baths</span>
              </div>
              <p>{item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
