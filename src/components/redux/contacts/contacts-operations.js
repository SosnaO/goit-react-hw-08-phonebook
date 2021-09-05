import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from './contacts-actions';
import { toast } from 'react-toastify';
// import * as contactsAPI from '../../api';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
  .get('/contacts')
  .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  .catch(error => {
    dispatch(fetchContactsError(error));

    if (error.response.status === 404) {
      toast.info("There is no such user's collection!");
    } else if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  });
};


//   contactsAPI
//     .fetchContacts()
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());

  axios
  .post('/contacts', contact)
  .then(({ data }) => dispatch(addContactSuccess(data)))
  .catch(error => {
    dispatch(addContactError(error));

    if (error.response.status === 400) {
      toast.error('Contact creation error!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  });
};
  
//   contactsAPI
//     .addContact(contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());


  axios
  .delete(`/contacts/${id}`)
  .then(() => dispatch(deleteContactSuccess(id)))
  .catch(error => {
    dispatch(deleteContactError(error));

    if (error.response.status === 404) {
      toast.info("There is no such user's collection!");
    } else if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  });

};

//   contactsAPI
//     .deleteContact(id)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };
