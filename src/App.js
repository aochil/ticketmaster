import { get } from "lodash";
import React, { useEffect, useState } from "react";

const TM_KEY = process.env.REACT_APP_TM_KEY;

const TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${TM_KEY}`;

function App() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const getEvents = () => {
      fetch(TM_API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setEventList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getEvents();
  }, []);

  return (
    <div data-testid="app">
      <h1>Ticketmaster</h1>
    </div>
  );
}

export { App };
