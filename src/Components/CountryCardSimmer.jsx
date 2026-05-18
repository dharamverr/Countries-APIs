import React from 'react'

export default function CountryCardSimmer() {
  return (
    <div className='countries-container'>
        {
            Array.from({length: 10}).map((el, i) => {
                return <div key={i} style={{height:'22rem', backgroundColor:'#ccc'}}  className='country-card'></div>
            })
        }
    </div>
  )
}
