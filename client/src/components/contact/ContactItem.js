import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ContactContext from '../../context/Contact/ContactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const {
    filtered,
    setCurrent,
    clearCurrent,
    deleteContactInFilterState,
  } = contactContext;

  const { id, name, email, phone, type } = contact;

  let floatStyle = { float: 'right' };

  const functionToSetCurrent = () => {
    //set contact in contacts state
    setCurrent(contact);
  };

  const functionToDeleteContact = () => {
    //clear current in contacts state
    contactContext.deleteContact(id);

    //clear current in filtered state
    if (filtered !== null) {
      deleteContactInFilterState(id);
    }

    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={floatStyle}
          className={
            type === 'professional'
              ? 'badge badge-success'
              : 'badge badge-primary'
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'> </i> {phone}
          </li>
        )}
      </ul>

      <p>
        <button className='btn btn-dark btn-sm' onClick={functionToSetCurrent}>
          {' '}
          Edit Contact
        </button>
        <button
          className='btn btn-danger btn-sm'
          onClick={functionToDeleteContact}
        >
          {' '}
          Delete Contact
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
