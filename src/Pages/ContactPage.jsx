import { Link } from 'react-router-dom';

const ContactPage = ({ location }) => {
  const { contact } = location.state;
  console.log(contact);
  return (
    <section className="contact-detail__container">
      <div className="contact-detail">
        <figure>
          <img src={contact.img} alt="avatar" />
        </figure>
        <div className="contact-detail__desc">
          <p className="contact-detail__name">{contact.name}</p>
          <p>{contact.email}</p>
        </div>
      </div>
      <Link to="/" className="back-home">
        Back to Home
      </Link>
    </section>
  );
};

export default ContactPage;
