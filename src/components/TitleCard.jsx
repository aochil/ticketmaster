import React from "react";
import "../styles/titlecards.css"
function TitleCard(props) {
    const { data } = props;

    return (
        <div className="Title-Card">
            <div className="upper-half">
                <div className="text-hold">
                    PRESALE: {data.presale}
                </div>
                <img src={data.image_url}/>
            </div>
            <div className="bottom-half">
                <p className="concertdate">{data.concert_date}</p>
                <h2>{data.event_name}</h2>
                <p className="location">{data.location_1} • {data.arena_1}</p>
            </div>
        </div>
    )
}

export default TitleCard
