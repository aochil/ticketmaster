import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
const TM_KEY = process.env.REACT_APP_TM_KEY;

function App() {
  const [eventList, setEventList] = useState([]);

  let TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${TM_KEY}&keyword=`;

  const getSearchValue = () => {
    let searchValue = document.getElementById("search");
    let updatedSearch = searchValue.value.replace(/\s/g, ","); //replace space between words with a comma
    console.log(updatedSearch);

    TM_API += updatedSearch;

    console.log(TM_API);
  };

  const getEvents = () => {
    fetch(TM_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEventList(data); //store data from udpated api url
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div data-testid="app">
      <h1>Ticketmaster</h1>
      <Input id="search" icon="search" placeholder="Search..." />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          getSearchValue();
          getEvents();
        }}
      >
        Search
      </button>
    </div>
  );
}

export { App };
