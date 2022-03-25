import { WEB_SER } from "../../App";
import { useParams } from "react-router-dom";
import React from 'react';

class Events extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      id = useParams();
      fetch(WEB_SER+"events/1")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="eventsList">
            {items.map(item => (
              <div className="eventSumm" key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        );
      }
    }
  }

export default Events;