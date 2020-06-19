import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import { v4 as uuid } from 'uuid';
import styles from './App.module.css';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
// import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1 className={styles.sectionTitle}>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2 className={styles.sectionTitle}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          onRemoveContact={this.removeContact}
          contacts={this.getFilteredContacts()}
        />
      </div>
    );
  }
}
