import React, { useReducer } from 'react';

import ContactContext from '../Contact/ContactContext';
import ContactReducer from '../Contact/ContactReducer';

import uuid from 'uuid';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        name: 'pranav 1',
        email: 'pranav3@gmail.com',
        phone: '1111',
        type: 'personal',
      },
      {
        name: 'pranav 2',
        email: 'pranav2@gmail.com',
        phone: '2222',
        type: 'personal',
      },
      {
        name: 'pranav 3',
        email: 'pranav3@gmail.com',
        phone: '3333',
        type: 'personal',
      },
    ],
  };

  //reducer
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //actions

  //add contact

  //delete contact

  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
