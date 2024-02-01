import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, listContacts } from "../store/slices/contactSlice";
import Button from "./Button";

const ContactList = ({ openModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(listContacts);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  const handleEdit = (id) => {
    openModal(id);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSort = () => {
    setSortAscending(!sortAscending);
  };

  const filteredContacts = contacts
    .filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortAscending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-600">Contacts List</h1>
        <div className="flex items-center">
          <Button
            height={"h-auto sm:h-10"}
            text={"Add Contact"}
            onClick={() => openModal(null)}
          />
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md mr-2 w-full"
        />
        <Button
          text="Sort"
          type="secondary"
          height="h-12"
          onClick={handleSort}
        />
      </div>
      {!filteredContacts.length ? (
        <h1 className="text-center text-gray-500 mt-4 mx-auto text-lg">
          {searchTerm.length > 0
            ? "No matching contacts found"
            : "Contacts List is Empty"}
        </h1>
      ) : (
        filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white shadow-md p-6 mt-2 mb-4 rounded-md"
          >
            <h1 className="text-2xl font-bold mb-2">{contact.name}</h1>
            <p className="text-gray-600 mb-2">{contact.phone}</p>
            <p className="text-blue-500">{contact.email}</p>
            <div className="flex justify-end">
              <Button
                height="h-8"
                type="secondary"
                text="edit"
                onClick={() => handleEdit(contact.id)}
              />
              <Button
                height="h-8"
                type="warning"
                text="delete"
                onClick={() => handleDelete(contact.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
