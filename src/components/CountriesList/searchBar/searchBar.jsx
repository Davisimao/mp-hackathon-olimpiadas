import PropTypes from 'prop-types';
import styles from './searchBar.module.scss';

export default function SearchBar({ searchTerm, onSearchChange }) {

 return (
  <input
   type="text"
   placeholder="Search for a country"
   value={searchTerm}
   onChange={onSearchChange}
   className={styles.searchBox}
  />

 );
}

SearchBar.propTypes = {
 searchTerm: PropTypes.string.isRequired,
 onSearchChange: PropTypes.func.isRequired,
};