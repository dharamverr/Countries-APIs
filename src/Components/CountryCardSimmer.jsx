import React from "react";
import "./CountryCardShimmer.css";
// export default function CountryCardSimmer() {
//   return (
//     <div className='countries-container'>
//         {
//             Array.from({length: 10}).map((el, i) => {
//                 return <div key={i} style={{height:'22rem', backgroundColor:'#ccc'}}  className='country-card'></div>
//             })
//         }
//     </div>
//   )
// }

// CountryCardShimmer.jsx

const CountryCardShimmer = () => {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((el, i) => {
        return (
          <div key={i} className="country-card shimmer-card">
            <div className="shimmer shimmer-img"></div>

            <div className="card-text">
              <div className="shimmer shimmer-title"></div>

              <div className="shimmer shimmer-text"></div>
              <div className="shimmer shimmer-text"></div>
              <div className="shimmer shimmer-text short"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryCardShimmer;
