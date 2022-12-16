import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts, deleteContactHandler }) => {
  return (
    <div className="contact-container">
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContactHandler={deleteContactHandler}
        />
      ))}
    </div>
  );
};

export default ContactList;

// Extract Contact Components
const Contact = ({ contact, deleteContactHandler }) => {
  const { name, email, id, img } = contact;
  return (
    <div className="contact">
      <Link
        to={{ pathname: `Contact/${id}`, state: { contact } }}
        className="contact-desc"
      >
        <figure>
          <img src={img} alt="avatar" className="avatar-img" />
        </figure>
        <div className="contact-desc__text">
          <p className="contact-name">{name}</p>
          <p className="contact-email">{email}</p>
        </div>
      </Link>
      <div>
        <button
          className="delete-contact-btn"
          onClick={() => deleteContactHandler(id)}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};
