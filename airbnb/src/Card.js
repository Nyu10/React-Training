import React from "react";
import star from "./images/star.png";
export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  console.log(img);
  return (
    <div className="card">
      <img src={require(`./images/${img}`)} alt="swimmer" />

      <div className="card-stats">
        <img src={star} alt="star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount})</span>
        <span className="gray">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        {" "}
        <span style={{ fontWeight: "bold" }}>From ${price}</span> / person
      </p>
    </div>
  );
}
