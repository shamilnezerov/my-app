import React from "react";
import "../Modal/modal.css";
import close from "../../assets/img/close.svg";
import Button from "../button/Button";

const Modal = ({ active, setActive }) => {
  const data = [1, 2, 3];

  const handleClickModal = () => {
    setActive(false);
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={handleClickModal}
    >
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalTitleDiv">
          <p className="modalTitle">WELCOME</p>
          <button className="closeButton" onClick={handleClickModal}>
            <img className="closeicone" src={close} alt="" />
          </button>
        </div>
        <div className="mainDiv">
          <div className="mainTitleDiv">
            <p className="mainTitle">This is window!</p>
          </div>
          <div className="mainButton">
            {data.map((item, index) => (
              <div key={index}>
                <Button color={"success"} innerText={item} size={"small"} />
              </div>
            ))}
          </div>
        </div>
        <div className="closeDiv">
          <Button
            size={"medium"}
            innerText={"Close"}
            color={"primary"}
            onClick={handleClickModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
