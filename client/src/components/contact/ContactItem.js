import React from 'react';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={floatStyle}
          className={
            { type } === 'professional'
              ? 'badge badge-success '
              : 'badge badge-primary '
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
        <button className='btn btn-dark btn-sm'> Add Contact</button>
        <button className='btn btn-danger btn-sm'> Delete Contact</button>
      </p>
    </div>
  );
};

const floatStyle = { float: 'right' };

export default ContactItem;
