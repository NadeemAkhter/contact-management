import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  editContact,
  listContacts,
} from "../store/slices/contactSlice";
import Button from "./Button";
import LabeledInput from "./LabledInput";

const ContactForm = ({ isOpen, onClose, hasId }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(listContacts);

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    setContact({
      name: "",
      phone: "",
      email: "",
    });

    if (hasId !== null) {
      const selectedContact = contacts.find((contact) => contact.id === hasId);
      if (selectedContact) {
        setContact(selectedContact);
      }
    }
  }, [hasId, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = contact;
    if (hasId === null) {
      const newContactId = Date.now().toString();
      dispatch(addContact({ id: newContactId, name, phone, email }));
    } else {
      dispatch(
        editContact({ id: hasId, updatedContact: { name, phone, email } })
      );
    }
    setContact({
      name: "",
      phone: "",
      email: "",
    });

    onClose();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div
        className="absolute inset-0 bg-black text-white opacity-75"
        onClick={onClose}
      ></div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-2 lg:mx-auto p-4 bg-white shadow-md rounded-md z-10"
      >
        <div className="flex justify-between py-4 mb-2">
          <h2 className="text-gray-700 text-xl">Enter Contact Details</h2>
          <div
            className=" text-black opacity-75 cursor-pointer"
            onClick={onClose}
          >
            X
          </div>
        </div>
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

        <Button btnType="submit" text={hasId ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default ContactForm;
