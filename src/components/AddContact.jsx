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
    if (!newContact.name || !newContact.email) {
      alert('Please enter fields :(');
      return;
    }
    addContact(newContact);
    setNewContact({ name: '', email: '' });
  };

  return (
    <section className="add-contact-container">
      <h3 className="add-contact-container__header">Add Contact</h3>
      <form onSubmit={submitContactFormHandler}>
        <div className="inputs-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={changeFormHandler}
            name="name"
            value={newContact.name}
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
            value={newContact.email}
            id="email"
            placeholder="Email"
          />
        </div>
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddContact;
