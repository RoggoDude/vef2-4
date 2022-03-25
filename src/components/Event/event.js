import { WEB_SER } from "../../App";
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Comment from '../Comment/comment'



export default function EventPage({status}){
  const [event, setEvent] = useState(undefined);

  const {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      let resp = await fetch(WEB_SER+"events/"+id).then(res => res.json());
      setEvent(resp);
    }
    fetchData();
  }, [id]);

  return(
    <section className="event">
        {event !== undefined ? (
          <>
            <div className="event__info">
              <h1>{event.name}</h1>
              <p>{event.description}</p>
            </div>
            <ul className="event__registeredList">
              {event.registrations.map((reg,index) => {
                return(
                    <li className="event__registeredItem" key={index}>
                      <span className="event__registeredName">{reg.name}</span>
                      <span className="event__registeredComment">{reg.comment}</span>
                    </li>
                )
              })}
            </ul>
              {status === "true" ? <>
              <Comment/>
              </>: ""}
                <Link to={"/"}>
                <p>Til baka</p></Link>
            </>
          ): ""}
    </section>
  )
}