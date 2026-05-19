import React, { useActionState, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryCardSimmer from "./CountryCardSimmer";

export default function CountriesContainer({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  const url =
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,borders,languages,flags,subregion,tld";
  useEffect(() => {
    fetch(url)
      .then((Response) => Response.json())
      .then((Data) => setCountriesData(Data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredList = countriesData.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.region.toLowerCase().includes(query.toLowerCase()),
  );
  //console.log(filteredList)
  return !countriesData.length ? (
    <CountryCardSimmer />
  ) : (
    <div className="countries-container">
      {filteredList.map((countryData) => {
        //console.log(countryData.flags.svg)

        return (
          <CountryCard
            key={countryData.name.common}
            countryName={countryData.name.common}
            population={countryData.population.toLocaleString("en-IN")}
            region={countryData.region}
            capital={countryData.capital.join(", ")}
            flags={countryData.flags.svg}
            data={countryData}
          />
        );
      })}
    </div>
  );
}
