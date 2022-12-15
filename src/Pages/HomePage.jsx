import React from 'react';
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList';

const HomePage = ({ contacts, addContact, deleteContactHandler }) => {
  return (
    <div className="main-container">
      <AddContact addContact={addContact} />
      <ContactList
        contacts={contacts}
        deleteContactHandler={deleteContactHandler}
      />
    </div>
  );
};

export default HomePage;
