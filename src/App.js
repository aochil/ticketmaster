import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";

const TM_KEY = process.env.REACT_APP_TM_KEY;
let page = 0;


function App() {
  const [eventList, setEventList] = useState([]);
  let [activePage, setActivePage] = useState(0);
  let [query, setQuery] = useState('pop');

  let TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${TM_KEY}&page=${activePage}&keyword=${query}`;

  const getEvents = () => {
    const searchValue = document
      .getElementById("search")
      .value.replace(/\s/g, ","); //replace space between words with a comma
    setQuery(searchValue);
    console.log(query)

    console.log(TM_API);
     fetch(TM_API)
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
    console.log('here');
  }, [activePage,query]);

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
