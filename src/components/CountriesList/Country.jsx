import axios from "axios";
import { useEffect, useState } from "react";
import gifUrl from '../../assets/LoadSpinner.gif';
import styles from './CountryList.module.scss';

import Header from "./header/Header";
const urlCountryList = 'https://apis.codante.io/olympic-games/countries';

const CountryList = () => {
 const [countries, setCountries] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchCountries = async () => {
   try {
    const response = await axios.get(urlCountryList);
    setCountries(response.data.data);
    setLoading(false);
   } catch (error) {
    setError(error);
    setLoading(false);
   }
  };
  fetchCountries();
 }, []);

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
  <>
   <div className={styles.containerMain}>
    <Header />
    {countries.map((country) => (
     <div key={country.id} className={styles.containerCountry}>
      <div className={styles.containerFlag}>
       <img src={country.flag_url} alt={`${country.name}`} width={120} className={styles.flag} />
       <p>{country.name}</p>
      </div>
      <div className={styles.containerTotalMedals}>
       <p>{country.total_medals} medalhas</p>
      </div>
     </div>
    ))}
   </div>
  </>
 );
};

export default CountryList;
