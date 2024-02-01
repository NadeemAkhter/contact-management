import React from "react";

const LabeledInput = ({ label, type, name, value, onChange, required }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border rounded-md"
        required={required}
      />
    </>
  );
};

export default LabeledInput;
