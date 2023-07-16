require("dotenv").config();
import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

let page = 0;
function GetEvents() {
  const [eventList, setEventList] = useState([]);
  let [activePage, setActivePage] = useState(0);
  let [query, setQuery] = useState("Coachella");
  let [searchText, setSearchText] = useState("");
  let [error, setError] = useState(false);

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
        setError(true);
        alert("Search not found, please search again");
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
      <Container id="eventContainer">
        {console.log(eventList)}

        {eventList.map((eachEvent) => {
          const images = eachEvent.images; //array of image objects
          const imageSize = "4_3";
          let imageUrl;
          images.map((image) => {
            //map through the array of images
            if (image.ratio == imageSize) {
              //if the image ratio is 4_3 then assign the url of this image to imageUrl
              imageUrl = image.url;
            }
          });

          const date = eachEvent.dates.start.dateTime;
          const formatDate = moment(date).format("MMMM Do, YYYY");
          const formatTime = moment(date).format("h:mm A");

          return (
            <div className="card" style={{ width: 18 + "rem" }}>
              <img
                className="card-img-top"
                src={imageUrl}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{eachEvent.name}</h5>
                <p class="card-text">{eachEvent._embedded.venues[0].name}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {formatDate + " at " + formatTime}
                </li>
                <li className="list-group-item">
                  {"Tickets starting at $" + eachEvent.priceRanges[0].min}
                </li>
              </ul>
              <div className="card-body">
                <a href={eachEvent.url} className="card-link" target="_blank">
                  {/* target blank to open ticket link in new tab*/}
                  View Tickets
                </a>
              </div>
            </div>

            // <div>
            //   {/* <span>{eachEvent.name}</span>
            //   <img src={imageUrl}></img> */}
            // </div>
          );
        })}
      </Container>
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

export default GetEvents;
