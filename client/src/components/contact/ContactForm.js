import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/Contact/ContactContext';

export const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  useEffect(() => {
    if (current === null) {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    } else {
      setContact(current);
    }
  }, [contactContext, current]);

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({
      ...contact,
      [e.target.name]: [e.target.value].toString(),
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current == null) {
      addContact(contact);
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    } else {
      updateContact(contact);
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  };

  const functionToClearCurrent = () => {
    clearCurrent();
  };

  return (
    <form action='' onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {' '}
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Enter Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Enter Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Enter Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add new Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button
            className='btn btn-light btn-block'
            onClick={functionToClearCurrent}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
