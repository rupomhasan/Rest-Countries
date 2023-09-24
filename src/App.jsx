import React, { useEffect, useState } from "react";
import "./App.css";
import Countries from "./Countries";
const App = () => {
   const [countries, setCountries] = useState([]);
   const [visitedCountries, setVisitedCountries] = useState([])




   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then((res) => res.json())
         .then((data) => setCountries(data));
   }, []);

   const handleVisitedCountries= (country) => {


         const newVisitedCountries = [...visitedCountries,country]
         setVisitedCountries(newVisitedCountries)
      console.log(visitedCountries)
   }

   return (
      <>
         <h1> Rest Countries</h1>
      <div>
         <h4>All visited Countries : {visitedCountries.length}</h4>
         <ol>
            {
               visitedCountries.map(country => <li>{country.name.common}</li>)
            }
         </ol>
      </div>
      <h3>All Countries : {countries.length}</h3>

         <div className="country-container">
            {
               countries.map(country => <Countries country={country} key = {country.cca3}
               handleVisitedCountries={handleVisitedCountries}></Countries>)
            }
         </div>
      </>
   );
};

export default App;
