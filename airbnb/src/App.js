import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import "./style.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="swim.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

{
  /* <div className="card">
<img src={swimmer} alt="swimmer" />

<div className="card-stats">
  <img src={star} alt="star" />
  <span>5.0</span>
  <span className ="gray">(6)</span>
  <span className ="gray">USA</span>
</div>
<p>LIfe Lessons with Katie Zaferes</p>
<p> <span style={{fontWeight: "bold"}}>From $136</span> / person</p>
</div> */
}
