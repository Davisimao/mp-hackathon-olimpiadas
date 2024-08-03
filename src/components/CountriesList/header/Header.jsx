
import OlimpcsLogo from '../../../assets/Olympics.svg';
import SearchBar from '../searchBar/searchBar';
import styles from './Header.module.scss';
import Medals from './medals/medals';

export default function Header() {
  return (
    <>
      <div className={styles.title}>
        <div className={styles.containerTitle}>
          <img src={OlimpcsLogo} height={250} />
        </div>
        <SearchBar />
        <h1>Lista de Medalhas</h1>
      </div>
      <Medals />
    </>
  );
}
