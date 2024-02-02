import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasId, setId] = useState(null); // For edit contact, form will be auto fill if Id is available.

  const openModal = (id) => {
    id !== null ? setId(id) : setId(null);
    setIsModalOpen(true);
  };
  const closeModal = (e) => {
    setIsModalOpen(false);
  };
  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-500">
        Contact Management
      </h1>
      <ContactForm hasId={hasId} isOpen={isModalOpen} onClose={closeModal} />
      <ContactList openModal={openModal} />
    </div>
  );
}

export default App;
