import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
const TM_KEY = process.env.REACT_APP_TM_KEY;
let page = 0;
function App() {
  const [eventList, setEventList] = useState([]);
  let [activePage, setActivePage] = useState(0);

  let TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${TM_KEY}&page=${activePage}&keyword=`;

  const getEvents = async () => {
    const searchValue = document
      .getElementById("search")
      .value.replace(/\s/g, ","); //replace space between words with a comma
    TM_API += searchValue;

    console.log(TM_API);
    await fetch(TM_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEventList(data); //store data from udpated api url
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    getEvents();
    setActivePage(page);
  }, []);

  const previousPage = () => {
    if (!page == 0) {
      page--;
    }
  };
  const nextPage = () => {
    console.log("before", page);
    page++;
    console.log("after", page);
  };

  return (
    <div data-testid="app">
      <h1>Ticketmaster</h1>
      <Input id="search" icon="search" placeholder="Search..." />
      <Button
        content="Search"
        className="btn btn-primary"
        onClick={() => {
          getEvents();
        }}
      />

      <Button
        content="<"
        onClick={() => {
          previousPage();
          setActivePage(page);
          getEvents();
        }}
      />
      <Button
        content=">"
        onClick={() => {
          nextPage();
          setActivePage(page);
          getEvents();
        }}
      />
    </div>
  );
}

export { App };
