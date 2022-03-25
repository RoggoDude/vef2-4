import { WEB_SER } from "../../App";
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


export default function Events(){
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      let resp = await fetch(WEB_SER+"events/").then(res => res.json());
      setEvents(resp);
    }
    fetchData();
  }, []);

  return(
    <section className="events">
      <h2 className="events__title">Viðburðir á næstunni</h2>
      <ul className="events__list">
      {events !== undefined ? (
          events.items.map((item) => {
            return (
            <li className="events_event" key={item.id}>
            <Link to={`/event/${item.id}`}>
              <a>{item.name}</a>
            </Link>
            <p>{item.description}</p>
            </li>
            )
          })
          ): "Engir viðburðir á næstunni"}
      </ul>
    </section>
  )
}