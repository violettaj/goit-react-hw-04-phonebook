import { ContactListElement } from '../ContactListElement/ContactListElement.js';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => (
        <ContactListElement
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  number: PropTypes.number,
  name: PropTypes.string,
  onDelete: PropTypes.func,
};
