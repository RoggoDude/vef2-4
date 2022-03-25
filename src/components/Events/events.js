import { WEB_SER } from "../../App";
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


export default function Events(){
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let resp = await fetch(WEB_SER+"events/").then(res => res.json());
    setEvents(resp);
  }
  console.log(events)

  return(
    <div className="eventsList">
        {events !== undefined ? (
          events.items.map((item) => {
            return (
            <div className="eventSumm" key={item.id}>
            <Link to={`/event/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
            <p>{item.description}</p>
            </div>
            )
          })
          ): ""}
    </div>
  )
}