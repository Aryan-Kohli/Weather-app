import React from "react";

const Onecard = ({
  date,
  mintemp,
  maxtemp,
  humidity,
  sunrise,
  sunset,
  main,
  weatherIcon,
  weathermain,
}) => {
  return (
    <div className="card">
      <div className="cardnotbody mt-2 px-3">
        <h5 className="card-title ">{date}</h5>
      </div>
      <div className="card-body">
        <div className="text-center  mb-2">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt="Weather Icon"
          />
          <p className="card-text">{weathermain}</p>
        </div>
        <hr></hr>
        <p className="card-text">Min Temp: {mintemp}</p>
        <p className="card-text">Max Temp: {maxtemp}</p>
        <p className="card-text">Humidity: {humidity}</p>
        <p className="card-text">Sunrise: {sunrise}</p>
        <p className="card-text">Sunset: {sunset}</p>
      </div>
    </div>
  );
};

export default Onecard;
