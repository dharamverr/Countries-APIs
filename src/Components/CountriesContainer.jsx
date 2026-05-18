import React, { useActionState, useEffect, useState } from 'react'
import CountryCard from './CountryCard';

export default function CountriesContainer({query}) {
    const [countriesData, setCountriesData] = useState([]);
    
    const url = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,flag,borders,launguages,flags'
    useEffect(() => {
        fetch(url)
        .then(Response => Response.json())
        .then(Data => setCountriesData(Data))
        .catch(error => {console.log(error)})
    },[])

  const filteredList = countriesData.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()) || country.region.toLowerCase().includes(query.toLowerCase()))
  //console.log(filteredList)
  return (
    <div className='countries-container'>
        {filteredList.map((countryData) =>{
            //console.log(countryData.flags.svg)

            return (<CountryCard 
                    key={countryData.flag} 
                    countryName = {countryData.name.common}
                    population = {countryData.population.toLocaleString('en-IN')}
                    region = {countryData.region}
                    capital = {countryData.capital.join(", ")}
                    currency = {countryData.currencies}
                    flags = {countryData.flags.svg}
                    />
        )})}
    </div>
  )
}
