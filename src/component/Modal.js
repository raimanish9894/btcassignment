import React from "react";
import "../styles/Modal.css";
import { FaEdit } from "react-icons/fa";
import { BsArrowBarUp, BsInfoSquare } from "react-icons/bs";
import { HiOutlineMinusCircle } from "react-icons/hi";

const Modal = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <div className="modal-row">
          <div
            className="modal-item"
            style={{
              borderBottom: "0.5px solid",
              borderBottomColor: "#AEB8C4",
            }}
          >
            <div>Edit</div>
            <div>
              <FaEdit fontSize={18} />
            </div>
          </div>
        </div>
        <div className="modal-row">
          <div
            className="modal-item"
            style={{
              borderBottom: "0.5px solid",
              borderBottomColor: "#AEB8C4",
            }}
          >
            <div>Courier Info</div>
            <div>
              <BsInfoSquare fontSize={18} />
            </div>
          </div>
        </div>
        <div className="modal-row">
          <div
            className="modal-item"
            style={{
              borderBottom: "0.5px solid",
              borderBottomColor: "#AEB8C4",
            }}
          >
            <div>Share</div>
            <div>
              <BsArrowBarUp fontSize={18} />
            </div>
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-item">
            <div style={{ color: "#EE225D" }}>Remove</div>
            <div>
              <HiOutlineMinusCircle fontSize={18} color="#EE225D" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
