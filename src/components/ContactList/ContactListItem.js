import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './contactListItem.module.css';

const ContactListItem = ({ name, number, id, onDelete }) => (
  <li className={styles.contactListItem}>
    <p className={styles.contact}>
      {name}: {number}{' '}
    </p>
    <Button
     className={styles.buttonDelete}
     color="primary"
     variant="contained"
      type="button"
      onClick={() => onDelete(id)}
    >
      Delete
    </Button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;