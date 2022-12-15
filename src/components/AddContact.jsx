import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
  });

  const changeFormHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const submitContactFormHandler = (e) => {
    e.preventDefault();
    addContact(newContact);
  };

  return (
    <div className="add-contact-container">
      <h3 className="add-contact-container__header">Add Contact</h3>
      <form onSubmit={submitContactFormHandler}>
        <div className="inputs-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={changeFormHandler}
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="inputs-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={changeFormHandler}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
