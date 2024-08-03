import useFetchEvents from "../../API/Events"

export default function Events() {

 const { events, /* loading, error */ } = useFetchEvents()


 return (
  <div>
   {events.map((event) => {

    <div key={event.id}>
     <p>{event.discipline_name}</p>
    </div>

   })


   }
  </div>
 )
}