import React from "react";
import Card from "./Card";
import { FaBitcoin } from "react-icons/fa";

const CardSection = () => {
  return (
    <div className="card-section">
      <Card icon={<FaBitcoin fontSize={80} color="#1EC070" />} text="Buy BTC" />
      <Card
        icon={<FaBitcoin fontSize={80} color="#EE225D" />}
        text="Sell BTC"
      />
    </div>
  );
};

export default CardSection;