import React from "react";
import TitleCard from "./TitleCard";


function CardList(props) {
    const { dummyData } = props;
    dummyData.map((thing) => console.log(thing));

    return (
        <div className="amex_early_access">
            <div className="list">
                {
                    dummyData.length > 0 ? 
                    dummyData.map((events1) => <TitleCard data ={events1}/>)
                        : `There are No Events for this Category ${event}`

                }
                

            </div>

        </div>
    )

    
    
}

export default CardList