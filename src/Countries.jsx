import React, { useState } from "react";
import "./App.css";

const Countries = ({ country,handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

   const handleVisited = () => {

         setVisited(!visited);
    
   };

   const { name, flags, region, population, ccn3 } = country;
   //    console.log(country);

   return (
      <div className="country">
         <h4>{name.common}</h4>
         <p>
            Flag :
            <img src={flags.png} alt="" />
         </p>
         <p>Region : {region}</p>
         <p>Population : {population}</p>
         <p>Code : {ccn3}</p>

<button onClick={()=> handleVisitedCountries(country)}
className="btn btn-success btn-sm">Visited Country</button><br />

         <button
            onClick={handleVisited}
            className="btn btn-sm text-white"
            style={{backgroundColor : visited ? 'red':'purple'}}
         >
            visited
         </button>
      </div>
   );
};

export default Countries;
