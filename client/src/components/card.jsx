import React from "react";
import "../css/card.css";
import Onecard from "./onecard.jsx";
const Card = ({ weatherData }) => {
  const getNextFiveUniqueDaysData = () => {
    if (!weatherData) return [];

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const uniqueDaysMap = new Map();

    for (let i = 0; i < weatherData.length; i++) {
      const forecastDate = new Date(weatherData[i].dt * 1000);

      if (forecastDate >= currentDate) {
        const dateKey = forecastDate.toDateString();

        if (!uniqueDaysMap.has(dateKey)) {
          uniqueDaysMap.set(dateKey, weatherData[i]);
        }
      }

      if (uniqueDaysMap.size === 5) {
        break;
      }
    }

    return Array.from(uniqueDaysMap.values());
  };

  const nextFiveUniqueDaysData = getNextFiveUniqueDaysData();

  return (
    <div className="row">
      {nextFiveUniqueDaysData.map((day, index) => (
        <div key={index} className="col-md-2 mb-3">
          <Onecard
            date={day.dt_txt.split(" ")[0]}
            mintemp={day.main.temp_min}
            maxtemp={day.main.temp_max}
            humidity={day.main.humidity}
            sunrise={"6:20 a.m."}
            sunset={"6:12 p.m."}
            main={day.main}
            weatherIcon={day.weather[0].icon}
            weathermain={day.weather[0].main}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
