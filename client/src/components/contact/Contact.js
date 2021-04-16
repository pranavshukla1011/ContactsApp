import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/Contact/ContactContext';
import ContactItem from '../contact/ContactItem';
import ContactFilter from '../contact/ContactFilter';
const Contact = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  return (
    <Fragment>
      <ContactFilter />
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contact;
