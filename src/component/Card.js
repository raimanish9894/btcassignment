import React from "react";
import "../styles/CardStyle.css";

const Card = ({ text, icon }) => {
  return (
    <div className="card-style">
      <div className="card-image-style">{icon}</div>
      <div className="card-text-style">{text}</div>
    </div>
  );
};

export default Card;
