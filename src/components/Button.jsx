import React from 'react';

const Button = ({ type = "primary", text = "Click", btnType ="button" }) => {

  const getTypeClass = () => {
    switch (type) {
      case 'primary':
        return 'bg-blue-500 text-white';
      case 'secondary':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-300 text-gray-700';
    }
  };

  const buttonClass = `px-5 py-2.5 me-2 mb-2 inline-block rounded-md transition duration-300 focus:outline-none ${getTypeClass()}`;

  return (
    <button type={btnType} className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;