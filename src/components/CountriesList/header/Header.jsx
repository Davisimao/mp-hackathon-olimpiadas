
import OlimpcsLogo from '../../../assets/Olympics.svg';
import PropTypes from 'prop-types';
import SearchBar from '../searchBar/searchBar';
import styles from './Header.module.scss';
import Medals from './medals/medals';

export default function Header({ searchTerm, onSearchChange }) {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.containerTitle}>
          <img src={OlimpcsLogo} height={250} />
        </div>
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <h1>Lista de Medalhas</h1>
      </div>
      <Medals />
    </>
  );

}
Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};