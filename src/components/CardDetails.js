//This component is responsible for displaying the details of the people that is stored in cardData.js
//https://jakearchibald.github.io/svgomg/
import card from "../assets/Card.svg";
import deck from "../assets/Deck.svg";
import female from "../assets//Gender-Female.svg";
import male from "../assets/Gender-Male.svg";
import homeWorld from "../assets/Homeworld.svg";
import search from "../assets/Search.svg";
import starShip from "../assets/Starship.svg";
import vehicle from "../assets/Vehicle.svg";

import { PEOPLE_DETAILS } from "../cardData";

export default function CardDetails() {
  const peopleDetails = PEOPLE_DETAILS.map((people) => (
    <div
      class="bg-white md:w-80  h-64 border-2 ml-10  mt-10 border-gray-200 flex flex-col rounded-lg"
      key={people.name}
    >
      <div class="bg-cardBG text-white">
        <img src={card} alt="Card logo" className=" p-2" />
        <h4 className="pl-2">{people.name}</h4>
      </div>

      <div className="text-sm w-full flex justify-between items-center mb-1 mt-1">
        <div>
          <img
            className="w-4 ml-1 inline"
            src={people.gender === "male" ? male : female}
            alt="gender"
          />{" "}
          <h4 className="inline">{people.birth_year} </h4>
        </div>
        <p className="mr-2"> {people.species}</p>
      </div>

      <hr className="h-0 border-2 ml-2 mr-2 border-cardDetailsBG"/>
        <div className="text-sm mt-2">
      <div className="flex justify-between m-2 rounded-sm bg-cardDetailsBG">
      <div>
        <img src={homeWorld} alt="homeworld" className="inline w-4 ml-1" />
        <h3 className="inline ml-0.5">HomeWorld</h3>
     </div>
        <h4 className="inline mr-2">{people.homeworld}</h4>
      </div>

             
   <div className="flex justify-between m-2 rounded-sm bg-cardDetailsBG">
      <div>
        <img src={vehicle} alt="vehicle" className="inline w-4 ml-1" />
        <h3 className="inline ml-0.5">VEHICLE</h3>
     </div>
        <h4 className="inline mr-2 ">{people.vehicles}</h4>
      </div>

      <div className="flex justify-between m-2 rounded-sm bg-cardDetailsBG">
      <div>
        <img src={vehicle} alt="vehicle" className="inline w-4 ml-1" />
        <h3 className="inline ml-0.5">VEHICLE</h3>
     </div>
        <h4 className="inline mr-2 ">{people.vehicles}</h4>
      </div>



      <div className="flex justify-between m-2 rounded-sm bg-cardDetailsBG">
      <div>
        <img src={starShip} alt="starship" className="inline w-4 ml-1" />
        <h3 className="inline ml-0.5">STARSHIP</h3>
     </div>
        <h4 className="inline mr-2">{people.starships}</h4>
      </div>

      <div className="flex justify-between m-2 rounded-sm bg-cardDetailsBG">
      <div>
        <img src={starShip} alt="starship" className="inline w-4 ml-1" />
        <h3 className="inline ml-0.5">STARSHIP</h3>
     </div>
        <h4 className="inline mr-2">{people.starships}</h4>
      </div>
      </div>

    </div>
  ));
  {
    /* <
<li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 border-gray-100'> <img src={vehicle} alt="vehicle" className="inline"/>Vehicle<h4 className="inline">{people.vehicles}</h4></li>
<li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 border-gray-100'> <img src={starShip} alt="starship" className="inline"/>Starship <h4 className="inline">{people.starships}</h4></li> */
  }
  return <>{peopleDetails}</>;
}
