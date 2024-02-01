import React from "react";

const Button = ({
  type = "primary",
  text = "Click",
  btnType = "button",
  onClick,
  height = "h-12",
}) => {
  const getTypeClass = () => {
    switch (type) {
      case "primary":
        return "bg-blue-500 text-white";
      case "secondary":
        return "bg-gray-500 text-white";
      case "warning":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

  const buttonClass = `${height} px-5 py-1 mx-1 inline-block rounded-md transition duration-300 focus:outline-none ${getTypeClass()}`;

  return (
    <button type={btnType} className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
