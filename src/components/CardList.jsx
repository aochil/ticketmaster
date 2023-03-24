import React from "react";
import TitleCard from "./TitleCard";


function CardList(event){
    return (
        <div className="amex_early_access">
            <div className="list">
                {
                    event.length > 0 ?
                    event.map((events) => <TitleCard key={events.id} event ={events}/>)
                    : `There are No Events for this Category ${event}`

                }

            </div>

        </div>
    )
}

export default CardList