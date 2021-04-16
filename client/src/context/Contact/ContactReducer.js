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

//action = (type,payload)
export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const exp = new RegExp(`${state.filterText}`, 'gi');
          return (
            contact.name.match(exp) ||
            contact.email.match(exp) ||
            contact.phone.match(exp) ||
            contact.type.match(exp)
          );
        }),
      };

    case SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload,
      };

    case UPDATE_CONTACT_IN_FILTER:
      return {
        ...state,
        filtered: state.filtered.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case DELETE_CONTACT_IN_FILTER:
      return {
        ...state,
        filtered: state.filtered.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case CLEAR_FILTER:
      return {
        filtered: null,
      };
    default:
      return state;
  }
};
