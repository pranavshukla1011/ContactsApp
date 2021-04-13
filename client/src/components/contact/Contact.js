import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/Contact/ContactContext';
import ContactItem from '../contact/ContactItem';

const Contact = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contact;
