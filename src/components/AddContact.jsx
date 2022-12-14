import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const changeFormHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const submitContactFormHandler = (e) => {
    e.preventDefault();
    addContact(newContact);
  };

  return (
    <div>
      <h3>Add Contact</h3>
      <form onSubmit={submitContactFormHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={changeFormHandler}
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={changeFormHandler}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
