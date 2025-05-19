import React from "react";

const Card = ({ data }) => {
  return (
    <div className="box1 box">
      <div className="box-container">
        <h2>{data.titel}</h2>
        <img className="box-img" src={data.src} alt="" />
        <p>See more</p>
      </div>
    </div>
  );
};

export default Card;
