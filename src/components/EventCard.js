import React from "react";
import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

function EventCard(event) {
  console.log(event);

  const images = event.event.images; //array of image objects
  const imageSize = "4_3";
  let imageUrl;
  images.map((image) => {
    //map through the array of images
    if (image.ratio == imageSize) {
      //if the image ratio is 4_3 then assign the url of this image to imageUrl
      imageUrl = image.url;
    }
  });

  const date = event.event.dates.start.dateTime;
  const formatDate = moment(date).format("MMMM Do, YYYY"); //used moment to format date
  const formatTime = moment(date).format("h:mm A");
  const venueName = event.event._embedded.venues[0].name;
  const city = event.event._embedded.venues[0].city.name;
  const state = event.event._embedded.venues[0].country.name;


  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{event.event.name}</h5>
        <p className="card-text">{city+","}</p>
        <p className="card-text">{state}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{venueName}</li>
        <li className="list-group-item">{formatDate + " at " + formatTime}</li>
      </ul>
      <div className="card-body">
        <a
          href={event.event.url}
          className="btn btn-info"
          role="button"
          target="_blank"
        >
          {/* target blank to open ticket link in new tab*/}
          View Tickets
        </a>
      </div>
    </div>
  );
}

export default EventCard;
