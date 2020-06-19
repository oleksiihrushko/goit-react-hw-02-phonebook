import React from 'react';
import styles from './ContactList.module.css';
import ContactItem from '../contactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
