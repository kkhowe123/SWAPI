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

export default function CardDetails({name,homeworld})  {
  const peopleDetails = PEOPLE_DETAILS.map((people) => (
    <div
      class="bg-white md:w-96 md:h-96  ml-10 mt-10  border-2 border-gray-200 flex flex-col rounded-lg"
      key={people.name}
    >
      <div class="bg-cardBG text-white rounded-t-md">
        <img src={card} alt="Card logo" className=" p-2" />
        <h4 className="pl-2">{name}</h4>
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
      <div className="cardInfo">
      <div>
        <img src={homeWorld} alt="homeworld" className="cardInfoIcon" />
        <h3 className="cardInfoTitle">HomeWorld</h3>
     </div>
        <h4 className="cardInfoDetails">{homeworld}</h4>
      </div>

             
   <div className="cardInfo">
      <div>
        <img src={vehicle} alt="vehicle" className="cardInfoIcon" />
        <h3 className="cardInfoTitle">VEHICLE</h3>
     </div>
        <h4 className="inline mr-2 ">{people.vehicles}</h4>
      </div>

      <div className="cardInfo">
      <div>
        <img src={vehicle} alt="vehicle" className="cardInfoIcon" />
        <h3 className="cardInfoTitle">VEHICLE</h3>
     </div>
        <h4 className="cardInfoDetails ">{people.vehicles}</h4>
      </div>



      <div className="cardInfo">
      <div>
        <img src={starShip} alt="starship" className="cardInfoIcon" />
        <h3 className="cardInfoTitle">STARSHIP</h3>
     </div>
        <h4 className="cardInfoDetails">{people.starships}</h4>
      </div>

      <div className="cardInfo">
      <div>
        <img src={starShip} alt="starship" className="cardInfoIcon" />
        <h3 className="cardInfoTitle">STARSHIP</h3>
     </div>
        <h4 className="cardInfoDetails">{people.starships}</h4>
      </div>
      </div>

    </div>
  ));
  return <>{peopleDetails}</>;
}
