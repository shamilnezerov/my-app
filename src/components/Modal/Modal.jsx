import React from "react";
import "../Modal/modal.scss";
import Button from "../button/Button";
import { ImCross } from "react-icons/im";

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
            <ImCross />
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
