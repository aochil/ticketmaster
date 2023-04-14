import React from "react";
import TitleCard from "./TitleCard";
import "../styles/titlecards.css"


function CardList(props) {
    const { dummyData } = props;
    dummyData.map((thing) => console.log(thing));

    return (
        <div className="amex_early_access">
            <div className="list">
                {
                    dummyData.length > 0 ? 
                    <div className="list1">
                            {dummyData.map((events1) => <TitleCard data={events1} />)}
                    </div>
                        : `There are No Events for this Category ${event}`

                }
                

            </div>

        </div>
    )

    
    
}

export default CardList