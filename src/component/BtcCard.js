import React, { useState } from "react";
import "../styles/BtcCard.css";
import btcLogo from "../assets/bitcoin-btc-logo.png";

import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import Button from "./Button";

const BtcCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`btc-card-main ${isExpanded ? "expanded" : ""}`}>
      <div className="btc-card-top">
        <div className="btc-card-top-left">
          <img alt="btc-logo" src={btcLogo} className="btc-logo" />
          <p className="btc-card-top-title">Bitcoin</p>
        </div>
        <div className="btc-card-top-title-rigth">BTC</div>
      </div>
      <div className="btc-card-main-title">3.259020 BTC</div>
      <div className="btc-card-bottom">
        <div className="btc-card-bottom-left">$19.153 USD</div>
        <button className="btc-card-bottom-right-button">- 2.32%</button>
      </div>
      {isExpanded && (
        <div className="additional-content">
          <div className="btc-additional-content">
            Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to
            act as money and a form of payment outside the control of any one
            persons
          </div>
          <div className="btc-additional-content-buttons">
            <Button
              background="#EE225D"
              color="white"
              width="70px"
              height="40px"
              border={0}
              borderRadius="10px"
              text="Sell"
            />
            <Button
              background="#1EC070"
              color="white"
              width="70px"
              height="40px"
              border={0}
              borderRadius="10px"
              text="Buy"
            />
          </div>
        </div>
      )}

      <div className="drop-down" onClick={handleToggleExpand}>
        {isExpanded ? (
          <BsChevronCompactUp fontSize={32} color="#AEB8C4" />
        ) : (
          <BsChevronCompactDown fontSize={32} color="#AEB8C4" />
        )}
      </div>
    </div>
  );
};

export default BtcCard;
