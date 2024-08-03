import axios from "axios";
import { useEffect, useState } from "react";


const urlEvents = 'https://apis.codante.io/olympic-games/events'

const useFetchEvents = () => {
 const [events, setEvents] = useState([]);
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchevents = async () => {
   try {
    const response = await axios.get(urlEvents)
    setEvents(response.data.data)
    setLoading(false)
   } catch (error) {
    setError(error)
    setLoading(false)
   }
  }
  fetchevents()
 }, [])

 return { events, loading, error };
}

export default useFetchEvents;