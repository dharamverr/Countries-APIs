import React from 'react'
import { Link } from 'react-router'

export default function CountryCard({countryName,population,region,capital,flags,data}) {
    //we want to pass countries details which is already fetched. for this we use state attribute in link tag which is provided by react-router-dom
    
  return (
    <Link className="country-card" to={`/${countryName}`} state={data} >
        <img src={flags} alt={`${countryName} flags`} />
        <div className="card-text">
            <h3 className="card-title"> {countryName}</h3>
            <p><b>Population:</b> {population}</p>
            <p><b>Region:</b> {region}</p>
            <p><b>Capital:</b> {capital}</p>
        </div>
    </Link>
  )
}
