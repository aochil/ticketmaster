import React, { useEffect, useState } from "react";
import TitleCard from "./components/TitleCard";
import CardList from "./components/CardList";


function App() {
 
  const dummyData = [
    {
      event_name : 'Wu-Tang Clan & Nas: NY State of Mind Tour',
      image_url: 'https://th.bing.com/th/id/OIP.vYoxSUT4CO4m-pSNkgPMbgHaEK?pid=ImgDet&rs=1',
      presale: 'TUE • FEB 28 • 9 AM',
      concert_date: 'WED • SEP 20 • 8:00 PM',
      location_1: 'Nashville, TN',
      arena_1: 'Bridgestone Arena'

    },
    {
      event_name: 'Laura Pausini World Tour 2023/2024',
      image_url: 'https://s1.ticketm.net/dam/a/715/38a05955-6f28-4fc3-b2df-2a5f085fb715_EVENT_DETAIL_PAGE_16_9.jpg',
      presale: 'THU • MAR 30 • 10 AM',
      concert_date: 'SAT • MAR 23 • 8 PM',
      location_1: 'Inglewood, CA',
      arena_1: 'Youtube Theater'

    },
    {
      event_name: 'Ricardo Arjona - Blanco Y Negro Volver',
      image_url: 'https://s1.ticketm.net/dam/a/441/a5fd0cca-6e7d-4dfd-88c2-f2e43dc96441_EVENT_DETAIL_PAGE_16_9.jpg',
      presale: 'WED • JAN 18 • 9 AM',
      concert_date: 'SUN • MAY 28 • 8:00 PM',
      location_1: 'Nashville, TN',
      arena_1: 'Bridgestone Arena'
    }


  ]

  return (
    <div data-testid="app">
        <h1>Ticketmaster</h1>
        {/* <TitleCard {...dummyData}/> */}
        <CardList dummyData={dummyData} />



    </div>
    
  );
}

export { App };
