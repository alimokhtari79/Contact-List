import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const ContactList = ({ contacts, deleteContactHandler }) => {
  return (
    <div className="contact-container">
      {contacts.map((contact) => (
        <Contact
          contact={contact}
          deleteContactHandler={deleteContactHandler}
          key={contact.id}
        />
      ))}
    </div>
  );
};

export default ContactList;

// Extract Contact Components
const Contact = ({ contact, deleteContactHandler }) => {
  return (
    <div className="contact">
      <figure>
        <img src={contact.img} alt="avatar" className="avatar-img" />
      </figure>
      <div className="contact-desc">
        <p className="contact-name">{contact.name}</p>
        <p className="contact-email">{contact.email}</p>
      </div>
      <div>
        <button
          className="delete-contact-btn"
          onClick={() => deleteContactHandler(contact.id)}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};
