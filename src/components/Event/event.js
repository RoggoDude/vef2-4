import { WEB_SER } from "../../App";
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


export default function EventPage(){
  const [event, setEvent] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);
  const {id} = useParams();

  async function fetchData() {
    let resp = await fetch(WEB_SER+"events/"+id).then(res => res.json());
    setEvent(resp);
  }

  return(
    <div className="eventPage">
        {event !== undefined ? (
          <>
            <div className="eventInfo">
              <p>{event.name}</p>
              <p>{event.description}</p>
            </div>
            <div className="eventRegs">
              {event.registrations.map(reg => {
                return(
                  <div className="eventReg" key={reg.id}>
                    <p>{reg.name}</p>
                    <p>{reg.comment}</p>
                  </div>
                )
              })}
            </div>
            </>
          ): ""}
    </div>
  )
}