import React from "react";
import "../styles/titlecards.css"
function TitleCard(event){
    return (
        <div className="Title-Card">
            <div className="upper-half">
                <div className="text-hold">
                    PRESALE: {event.presale}
                </div>
                <img src={event.image_url}/>
            </div>
            <div className="bottom-half">
                <p className="concertdate">{event.concert_date}</p>
                <h2>{event.event_name}</h2>
                <p className="location">{event.location_1} • {event.arena_1}</p>
            </div>
        </div>
    )
}

export default TitleCard
