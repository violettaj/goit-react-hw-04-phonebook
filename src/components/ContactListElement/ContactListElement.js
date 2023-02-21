import css from './ContactListElement.module.css';
import PropTypes from 'prop-types';

export const ContactListElement = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <p>
        {name}: {number}{' '}
      </p>
      <button className={css.delete} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  onDelete: PropTypes.func,
};
