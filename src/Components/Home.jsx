import React, { useState } from 'react'
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesContainer from './CountriesContainer';

export default function Home() {
const [query, setQuery] = useState('');
  return (
    <>
    <main>
        <div className="search-filter-container">
          <SearchBar query = {query} setQuery = {setQuery}/>
          <SelectMenu setQuery = {setQuery}/>
        </div>        
      </main>
      <CountriesContainer query = {query}/></>
  )
}
