import React from "react";
import hero_img from "./images/hero.png";

export default function Navbar() {
  return (
    <div className="hero">
      <img src={hero_img} alt="hero" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
