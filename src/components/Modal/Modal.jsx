import React from "react";
import "../Modal/modal.css";
import close from "../../assets/img/close.svg";

const Modal = ({ active, setActive }) => {
  const data = [1, 2, 3];
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalTitle">
          <h2>WELCOME</h2>
          <button className="closeButton" onClick={() => setActive(false)}>
            <img className="closeicone" src={close} alt="" />
          </button>
        </div>
        <div className="mainDiv">
          <div className="mainTitle">
            <h4>This is window!</h4>
          </div>
          <div className="mainButton">
            {data.map((item , index) => (
              <button key={index} className="button">{item}</button>
            ))}
          </div>
        </div>
        <div className="closeDiv">
          <button className="close" onClick={() => setActive(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
