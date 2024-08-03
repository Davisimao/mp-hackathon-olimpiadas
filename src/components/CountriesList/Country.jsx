import { useState } from "react";
import useFetchCountries from "../../API/Countries";
import gifUrl from '../../assets/LoadSpinner.gif';
import styles from './CountryList.module.scss';
import Header from "./header/Header";

const CountryList = () => {
 const { countries, loading, error } = useFetchCountries();
 const [searchTerm, setSearchTerm] = useState('');


 const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
 };

 const filteredCountries = countries.filter(country =>
  country.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 if (loading) {
  return (
   <div className={styles.containerLoadSpinner}>
    <img src={gifUrl} width={500} height={500} />
   </div>
  );
 }

 if (error) {
  return <p>Erro: {error.message}</p>;
 }

 return (
  <div className={styles.containerMain}>
   <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
   {filteredCountries.map((country, index) => (
    <div key={country.id} className={styles.containerCountry}>
     <p className={styles.rank}>{index + 1}</p>
     <div className={styles.containerFlag}>
      <img src={country.flag_url} alt={`${country.name}`} height={40} width={55} />
      <p>{country.name}</p>
     </div>
     <div className={styles.goldMedal}>
      <p>{country.gold_medals}</p>
     </div>
     <div className={styles.silverMedal}>
      <p>{country.silver_medals}</p>
     </div>
     <div className={styles.bronzeMedal}>
      <p>{country.bronze_medals}</p>
     </div>
     <div className={styles.containerTotalMedals}>
      <p>{country.total_medals} medalhas</p>
     </div>
    </div>
   ))}
  </div>
 );
};

export default CountryList;
