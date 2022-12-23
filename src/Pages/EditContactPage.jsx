import React, { useEffect, useState } from 'react';

const EditContactPage = ({ editContact, location, history }) => {
  const { contact } = location.state;
  const [newContact, setNewContact] = useState({
    name: contact.name,
    email: contact.email,
  });

  useEffect(() => {
    setNewContact(contact);
  }, []);

  const changeFormHandler = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const submitContactFormHandler = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email) {
      alert('Please enter fields :(');
      return;
    }
    editContact(newContact, newContact.id);
    setNewContact({ name: '', email: '' });
    history.push('/');
  };

  return (
    <section className="add-contact-container">
      <h3 className="add-contact-container__header">Edit Contact</h3>
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
          Update
        </button>
      </form>
    </section>
  );
};

export default EditContactPage;
