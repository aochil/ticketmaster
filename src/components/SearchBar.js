import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";

const TM_KEY = process.env.REACT_APP_TM_KEY;
let page = 0;

function SearchBar() {
  const [eventList, setEventList] = useState([]);
  let [activePage, setActivePage] = useState(0);
  let [query, setQuery] = useState("");
  let [searchText, setSearchText] = useState("");
  let [error, setError] = useState(false);

  let TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${TM_KEY}&page=${activePage}&keyword=${query}`;

  const getEvents = () => {
    let updatedSearch = searchText.replace(/[\s,]/g, ","); //replace space between keywords with comma for api
    setQuery(updatedSearch);
    setSearchText("");
    
  };
  useEffect(() => {
    fetch(TM_API)
      .then((res) => res.json())
      .then((data) => {
        setEventList(data._embedded.events);
      })
      .catch((err) => {
        console.log("Error", err);
        setError(true);
        alert('Search not found, please search again',)
      });
  }, [activePage, query]);

  const previousPage = () => {
    if (!page == 0) {
      page--;
    }
  };
  const nextPage = () => {
    page++;
  };

  return (
    <div data-testid="app">
      <h1>Ticketmaster</h1>
      <Input
        id="search"
        icon="search"
        placeholder="Search..."
        onChange={(event) => setSearchText(event.target.value)}
      />
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
        }}
      />
      <Button
        content=">"
        onClick={() => {
          nextPage();
          setActivePage(page);
        }}
      />
    </div>
  );
}

export { SearchBar };
