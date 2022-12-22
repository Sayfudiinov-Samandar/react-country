import React, { useEffect } from "react";
import "./country.css";
import { useParams, useNavigate } from "react-router-dom";
import  { Lang } from "../../lang/Lang"
export function Country( { lang } ) {
  const [countryApi, setCountry] = React.useState([]);
  const country = useParams();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + country.name)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, [country]);

  const navigate = useNavigate();

  return (
    <div>
      {countryApi.map((item) => {
        return (
          <div className="container back-btn">
            <button
              className="btn btn-light d-flex align-items-center gap-3"
              onClick={() => navigate(-1)}>
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
                  fill="#111517"
                />
              </svg>
              Back
            </button>

            <div className="counrty-hero d-flex align-items-center">
              <div className="country-img">
                <img
                  src={item.flags.svg}
                  alt={item.name.common}
                  width="560"
                  height="401"
                />
              </div>
              <div>
                <h3 className="h2 mb-5"> {item.name.common}</h3>
                <div className="d-flex country-text">
                  <div className="d-flex flex-column gap-3">
                    <strong className="d-flex gap-2 m-0">
                      {Lang[lang].nativeName}:{" "}
                      <p className="m-0 opacity-75">
                        {item.name.nativeName.swe ? item.name.nativeName.swe: "Not native name"}
                      </p>
                    </strong>
                    <strong className="d-flex gap-2 m-0">
                      {Lang[lang].population}:
                      <p className="m-0 opacity-75">{item.population}</p>
                    </strong>
                    <strong className="d-flex gap-2 m-0">
                      {Lang[lang].region}:
                      <p className="m-0 opacity-75"> {item.region}</p>
                    </strong>
                    <strong className="d-flex gap-2 m-0">
                      {Lang[lang].subregion}:
                      <p className="m-0 opacity-75"> {item.subregion}</p>
                    </strong>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <strong className="d-flex gap-2 m-0">
                      {Lang[lang].topLeavelDemon}:
                      <p className="m-0 opacity-75"> {item.tld}</p>
                    </strong>
                    <strong className="d-flex gap-2 m-0">
                      {Lang[lang].currencies}:
                      <p className="m-0 opacity-75">
                        {" "}
                        {Object.keys(item.currencies)}
                      </p>
                    </strong>
                    <strong className="d-flex gap-2 m-0">
                     {Lang[lang].language}:
                      <p className="m-0 opacity-75">
                        {" "}
                        {Object.values(item.languages).join(", ")}
                      </p>
                    </strong>
                  </div>
                </div>
                <div className="d-flex mt-5 gap-3 align-items-center single-country">{Lang[lang].borders}: <p className="m-0" >{item.borders ? (item.borders.map(item=>(
                    <button className="btn btn-light ms-2">{item}</button>
                ))):(<span>No borders</span>)}</p></div>
              </div>




            </div>
          </div>
        );
      })}
    </div>
  );
}
