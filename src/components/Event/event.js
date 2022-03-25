import { WEB_SER } from "../../App";
import React from 'react';


class EventPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        regs: []
      };
    }

  
    componentDidMount() {
      console.log(this.state);
      fetch(WEB_SER+"events/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              eId: result.id,
              eName: result.name,
              eDesc: result.description,
              regs: result.registrations
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
      const { error, isLoaded, regs, eDesc, eName } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div className="eventPage">
            <div className="eventInfo">
              <h2>{eName}</h2>
              <h3>{eDesc}</h3>
          </div>
          <div>
              {regs.map(reg => (
              <div className="eventRegs" key={reg.id}>
                <h4>{reg.name}</h4>
                <p>{reg.comment}</p>
              </div>
            ))}
          </div>
        </div>
        );
      }
    }
  }

export default EventPage;