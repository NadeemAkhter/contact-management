import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
    <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-500">Contact Management</h1>
    <ContactForm />
    <ContactList />
  </div>
  );
}

export default App;