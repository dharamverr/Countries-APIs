import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import CountyDetailShimmer from "./CountyDetailShimmer";

export default function CountryDetail() {
  const [countryDetail, setCountryDetail] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [notFound,setNotFound] = useState(false);
  const prams = useParams()
  //console.log(prams.country)
  const countryName = prams.country
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  
  useEffect(() => {
    fetch(url)
      .then((Response) => Response.json())
      .then(([data]) =>
        setCountryDetail({
          flag: data?.flags?.svg,
          countryName: data?.name?.common,
          nativename: Object.values(data.name.nativeName|| {})[0]?.common || "N/A",
          population: data.population.toLocaleString("en-IN") || "N/A",
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currencies: Object.values(data.currencies || {}),
          language: Object.values(data.languages || {}),
          borders: data.borders || [],
        }),
      ).catch((error) => {setNotFound(true)});
  }, [countryName]);

  useEffect(() => {
  if (!countryDetail.borders?.length) return;

  Promise.all(
    countryDetail.borders.map((border) =>
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then((data) => data[0].name.common)
    )
  ).then((countries) => {
    setBorderCountries(countries);
  }).catch((error) => {setNotFound(true)});
}, [countryDetail.borders]);

  //console.log(borderCountries);
  if(notFound) return <div style={{textAlign:'center', fontSize:'2rem', marginTop:'7rem'}}>Country Not Found.</div>
  return Object.keys(countryDetail).length === 0 ? (
    <CountyDetailShimmer/>
  ) : (
    <>
    {/* <CountyDetailShimmer/> */}
    <main>
      <div className="country-detail-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-detail">
          <img src={countryDetail.flag} alt="" />
          <div className="detail-text-container">
            <h1>{countryDetail.countryName}</h1>
            <div className="detail-text">
              <p>
                <b>Native Name: </b>

                <span className="native-name">{countryDetail.nativename}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryDetail.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryDetail.region}</span>
              </p>
              <p>
                <b>Sub-region: </b>
                <span className="sub-region">{countryDetail.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                {countryDetail?.capital?.map((item, index) => (
                  <span key={index} className="capital">
                    {item}
                  </span>
                ))}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {countryDetail?.tld?.map((item, index) => (
                  <span key={index} className="tld">
                    {item}
                  </span>
                ))}
              </p>
              <p>
                <b>Currencies: </b>
                {countryDetail?.currencies?.map((item, index) => (
                  <span
                    key={index}
                    className="currencies"
                  >{`${item.symbol} ${item.name}`}</span>
                ))}
              </p>
              <p>
                <b>Language: </b>
                {countryDetail?.language?.map((item, index) => (
                  <span key={index} className="language"> {item}</span>
                ))}
              </p>
            
            </div>
            {
                borderCountries.length === 0 ? null : <div className="borders">
                <b>Border countries: </b>
                {
                   borderCountries.map((item) => <Link key={item} to={`/${item}`}><span  className="border-countries"> {item}</span></Link>)
                }
              </div>
            }
              
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
