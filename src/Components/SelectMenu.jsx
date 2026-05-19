import React from 'react'

export default function SelectMenu({query, setQuery}) {
  return (
    <select name="" id="" className='filter-by-region' onChange={(e) => setQuery(e.target.value)}>
        <option hidden>Filter by region</option>
        <option value=''>All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
  )
}
