import React, { useReducer } from 'react';

import ContactContext from '../Contact/ContactContext';
import ContactReducer from '../Contact/ContactReducer';

import { v4 as uuidv4 } from 'uuid';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  SET_FILTER_TEXT,
  UPDATE_CONTACT_IN_FILTER,
  DELETE_CONTACT_IN_FILTER,
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
    current: null, //to store contact to be edited
    filtered: null,
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

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current contact

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //filter contacts
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  const setFilterText = (text) => {
    dispatch({ type: SET_FILTER_TEXT, payload: text });
  };

  //update current contact in filter
  const updateContactInFilterState = (contact) => {
    dispatch({ type: UPDATE_CONTACT_IN_FILTER, payload: contact });
  };

  //clear current contact in filter
  const deleteContactInFilterState = (id) => {
    dispatch({ type: DELETE_CONTACT_IN_FILTER, payload: id });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filterText: state.filterText,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        setFilterText,
        updateContactInFilterState,
        deleteContactInFilterState,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
