import axios from "axios"
import { useEffect, useState } from "react"
import goldMedal from '../../assets/goldMedal.png'
import silverMedal from '../../assets/silverMedal.png'
import bronzeMedal from '../../assets/bronzeMedal.png'
import gifUrl from '../../assets/LoadSpinner.gif'
import OlimpcsLogo from '../../assets/Olympics.svg'
const urlCountryList = 'https://apis.codante.io/olympic-games/countries'

const CountryList = () => {
 const [countries, setCountries] = useState([]);
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null);

 useEffect(() => {
  const fechCountries = async () => {
   try {
    const response = await axios.get(urlCountryList)
    setCountries(response.data.data)
    setLoading(false)
   } catch (error) {
    setError(error)
    setLoading(false)
   }
  }
  fechCountries()
 }, [])
 if (loading) {
  return (
   <div className="container-LoadSpinner">
    <img src={gifUrl} width={500} height={500} />
   </div>
  )
 }
 if (error) {
  return <p>Erro: {error.message}</p>
 }
 return (
  <>
   <div className="container-main">

    <div className="title">
     <img src={OlimpcsLogo} height={250} />
     <h1>Lista de Medalhas</h1>
    </div>
    {countries.map((country) => (
     <div key={country.id} className="container-country" >
      <div className="container-flag">
       <img src={country.flag_url} alt={`${country.name}`} width={120} className="flag" />
       <p>{country.name}</p>
      </div>

      <div className="container-medal">

       <div className="gold-section">
        <p>{country.gold_medals}</p>
        <img src={goldMedal} height={30} />
       </div>

       <div className="gold-section">
        <p>{country.silver_medals}</p>
        <img src={silverMedal} height={30} />
       </div>

       <div className="gold-section">
        <p>{country.bronze_medals}</p>
        <img src={bronzeMedal} height={30} />
       </div>

      </div>

      <div className="cointainer-total_medals">
       <p>{country.total_medals} medalhas</p>
      </div>
     </div>
    ))}

   </div>
  </>
 )
}

export default CountryList
