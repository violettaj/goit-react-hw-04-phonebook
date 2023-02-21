import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.title}>Find contacts by name</label>
      <input
        className={css.search}
        value={value}
        id="filter"
        name="filter"
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onDelete: PropTypes.func,
};
