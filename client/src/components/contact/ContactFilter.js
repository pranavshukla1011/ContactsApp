import React, { Fragment, useContext, useRef, useEffect } from 'react';

import ContactContext from '../../context/Contact/ContactContext';

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const {
    filtered,
    filterContact,
    clearFilter,
    setFilterText,
  } = contactContext;

  let text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text = '';
    }
  }, [contactContext, filtered]);

  const onChange = (e) => {
    if (text.current !== '') {
      filterContact(e.target.value);
      setFilterText(e.target.value);
    } else {
      clearFilter();
      text = '';
    }
  };

  return (
    <Fragment>
      <form action=''>
        <input
          ref={text}
          type='text'
          placeholder='Filter Contacts'
          onChange={onChange}
        />
      </form>
    </Fragment>
  );
};

export default ContactFilter;
