import React from 'react';
import { useSelector } from 'react-redux';
import { listContacts } from '../store/slices/contactSlice';

const ContactList = () => {
  const contacts = useSelector(listContacts);
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-600">Contacts List</h1>
    {contacts?.map((contact) => (
      <div key={contact.id} className="bg-white shadow-md p-6 mb-4 rounded-md">
        <h1 className="text-2xl font-bold mb-2">{contact.name}</h1>
        <p className="text-gray-600 mb-2">{contact.phone}</p>
        <p className="text-blue-500">{contact.email}</p>
      </div>
    ))}
  </div>
  );
};

export default ContactList;
