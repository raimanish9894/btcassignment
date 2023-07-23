import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "../styles/NavbarStyle.css";
import { FaEllipsisV, FaEllipsisH, FaChevronLeft } from "react-icons/fa";

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  useEffect(() => {
    if (isMenuClicked) {
      document.body.style.setProperty('overflow', 'hidden', 'important');
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuClicked]);

  const handleToggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="navbar">
      <div className="navbar-back">
        <FaChevronLeft fontSize={22} color="#AEB8C4" />
      </div>
      <div className="navbar-title">Bitcoin Wallet</div>
      <div className="menu-icon-button" onClick={handleToggleMenu}>
        {isMenuClicked ? (
          <FaEllipsisH fontSize={28} color="#fff" />
        ) : (
          <FaEllipsisV fontSize={24} color="#AEB8C4" />
        )}
      </div>
      {isMenuClicked && (
        <Modal isOpen={isMenuClicked} onClose={handleToggleMenu} />
      )}
    </div>
  );
};

export default NavBar;
