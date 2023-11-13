import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ size, color, onClick, innerText }) => {
  return (
    <button className={`btn btn-${color} btn-${size}`} onClick={onClick}>
      {innerText}
    </button>
  );
};

Button.defaultProps = {
  size: "small",
  color: "",
  innerText: "",
};

Button.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "openModal", "small"]),
  color: PropTypes.oneOf(["primary", "success"]),
  innerText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;
