import React from "react";
import data from "./data";

export default function Property() {
  const item = data[0];
  return (
    <>
      <div className="main1">
        <div className="display-main-images">
          <img src={item.image} className="display-images" alt="home-images" />

          <div className="display-side-images">
            <img src={item.image} alt="home-images" />
            <img src={item.image} alt="home-images" />
            <img src={item.image} alt="home-images" />
            <img src={item.image} alt="home-images" />
          </div>
        </div>
        <div className="display-view">
          <div className="display-description">
            <h1>Timeless Elegance With Exclusive Bushland Surrounds</h1>
            <h1>GHc {item.price}</h1>
            <h2>Year Built: {item.yearBuilt}</h2>
            <hr />
            <div>{item.description}</div>

            <div>
              <h1>Features</h1>
              <div className="features">
                {item.furnished === true ? (
                  <h2>Furnished</h2>
                ) : (
                  <h2>Not Furnished</h2>
                )}
                <h2>{item.propertySize}</h2>
                <h2>{item.beds} beds</h2>
                <h2>{item.baths} baths</h2>
                {item.otherFeatures.map((i) => (
                  <h2>{i}</h2>
                ))}
              </div>
            </div>
          </div>

          <div className="agent-side">
            <h1>AGENT</h1>
          </div>
        </div>
      </div>
      <div className="agent-main">
        <h1>AGENT</h1>
      </div>
    </>
  );
}
