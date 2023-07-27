require("dotenv").config();
import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EventCard from "./EventCard";

function GetEvents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [eventList, setEventList] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [query, setQuery] = useState(searchParams.get('query'));
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  let TM_API = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TM_KEY}&page=${activePage}&keyword=${query}`; //used TM Api key from .env file

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
        alert("Search not found");
      });
  }, [activePage, query]);

  const previousPage = () => {
    console.log(eventList.length);
    if (!activePage == 0) {
      setActivePage(activePage - 1);
    }
  };
  const nextPage = () => {
    if (eventList.length == 20) {
      setActivePage(activePage + 1);
    }
  };
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      getEvents();
    }
  };
  return (
    <div id="main" tabIndex={0} onKeyDown={handleKeyEnter}>
      <div id="wrapper">
        <input
          value={query}
          id="search"
          placeholder="Search..."
          onChange={(event) => setSearchText(event.target.value)}
        />
        <Button
          type="button"
          id="searchBtn"
          content="Search"
          className="btn btn-outline-primary"
          onClick={() => {
            getEvents();
          }}
        />
      </div>
      <Container id="container">
        {eventList.map((eachEvent) => {
          return <EventCard event={eachEvent} />;
        })}
      </Container>
      <div id="pageBtns">
        <Button
          className="btn btn-outline-primary"
          content="Back"
          onClick={() => {
            previousPage();
          }}
        />
        <Button
          className="btn btn-outline-primary"
          content="Next"
          onClick={() => {
            nextPage();
          }}
        />
      </div>
    </div>
  );
}

export default GetEvents;
