import { useEffect, useState } from "react";
import axios from "axios";

const urlCountryList = 'https://apis.codante.io/olympic-games/countries';

const useFetchCountries = () => {
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

 return { countries, loading, error };
};

export default useFetchCountries;
