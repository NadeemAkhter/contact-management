import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/slices/contactSlice";
import Button from "./Button";
import LabeledInput from "./LabledInput";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //Submit functionality
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    //handle Input Change
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-md"
    >
      <div className="mb-4">
        <LabeledInput
          label="Name"
          type="text"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <LabeledInput
          label="Phone"
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <LabeledInput
          label="Email"
          type="email"
          name="email"
          value={contact.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <Button btnType="submit" text="Submit" />
    </form>
  );
};

export default ContactForm;
