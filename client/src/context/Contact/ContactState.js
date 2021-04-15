import React, { useReducer } from 'react';

import ContactContext from '../Contact/ContactContext';
import ContactReducer from '../Contact/ContactReducer';

import { v4 as uuidv4 } from 'uuid';

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
        id: '123',
        name: 'pranav 1',
        email: 'pranav3@gmail.com',
        phone: '1111',
        type: 'personal',
      },
      {
        id: '234',
        name: 'pranav 2',
        email: 'pranav2@gmail.com',
        phone: '2222',
        type: 'personal',
      },
      {
        id: '345',
        name: 'pranav 3',
        email: 'pranav3@gmail.com',
        phone: '3333',
        type: 'professional',
      },
    ],
  };

  //reducer
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //actions

  //add contact

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
