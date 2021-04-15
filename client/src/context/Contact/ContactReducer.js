import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
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
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            contact = action.payload;
          } else {
          }
        }),
      };
    default:
      return state;
  }
};
