import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative m-3 bg-white p-3 shadow-md rounded-md w-full sm:w-1/2 lg:w-2/6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
