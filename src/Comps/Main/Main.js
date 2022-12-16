import React from "react";
import "./main.css";

const Main = (props) => {
  return (
    <>
      <li className="col-3 p-0 hero-list-box">
        <img src={props.item.flags.svg} width="100%" height="" alt="Flag-Germany" />
        <div className="box-place">
          <h3 className="hero-list-box-title">{props.item.name.common}</h3>
          <p className="hero-list-box-text">
            <strong>Population:</strong>
            {props.item.population}
          </p>
          <p className="hero-list-box-text">
            <strong>Region:</strong>
            {props.item.region}
          </p>
          <p className="hero-list-box-text">
            <strong>Capital:</strong>
            {props.item.capital}
          </p>
        </div>
      </li>
    </>
  );
};

export default Main;
