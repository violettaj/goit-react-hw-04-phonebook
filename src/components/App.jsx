import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleContactAdd = ({ name, number }) => {
    const normalizationName = name.toLowerCase();

    const atContactList = this.state.contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalizationName
    );
    if (atContactList) {
      alert(`${name} is already in contacts.`);
      return;
    }

    if (atContactList) {
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleContactsFiltered = () => {
    const { filter, contacts } = this.state;
    const normalizedCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedCase)
    );
  };

  handleContactItemDelete = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  componentDidMount() {
    const list = window.localStorage.getItem('contacts-list');
    if (!list) return;
    this.setState({
      contacts: JSON.parse(list),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const contactListStringified = JSON.stringify(this.state.contacts);
      window.localStorage.setItem('contacts-list', contactListStringified);
    }
  }

  render() {
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleContactAdd} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <div>
            <Filter
              value={this.state.filter}
              onChange={this.handleFilterChange}
            />
            <ContactList
              contacts={this.handleContactsFiltered()}
              onDelete={this.handleContactItemDelete}
            />
          </div>
        )}
      </div>
    );
  }
}
