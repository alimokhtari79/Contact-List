import React from 'react';
import AddContact from '../components/AddContact';

const HomePage = ({ contacts, addContact }) => {
  return (
    <>
      <AddContact addContact={addContact} />
    </>
  );
};

export default HomePage;
