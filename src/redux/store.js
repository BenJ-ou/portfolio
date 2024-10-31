import { createStore } from 'redux';

const initialState = {
  contactForm: {
    name: '',
    email: '',
    message: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTACT_FORM':
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export const updateContactForm = (name, value) => ({
  type: 'UPDATE_CONTACT_FORM',
  payload: { name, value },
});

export default store;
