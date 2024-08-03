import PropTypes from 'prop-types';
import styles from './searchBar.module.scss';
import { FaSearch } from "react-icons/fa";
export default function SearchBar({ searchTerm, onSearchChange }) {

 return (
  <div className={styles.searchIcon} >
   <input
    type="text"
    placeholder="Procure por um país"
    value={searchTerm}
    onChange={onSearchChange}
    className={styles.searchBox}
   />
   <FaSearch className={styles.FaSearch} />
  </div>

 );
}

SearchBar.propTypes = {
 searchTerm: PropTypes.string.isRequired,
 onSearchChange: PropTypes.func.isRequired,
};