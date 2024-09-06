import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.scss";

const WeatherForecast = () => {
  const days = [
    { day: "SAT" },
    { day: "SUN" },
    { day: "MON" },
    { day: "TUE" },
    { day: "WED" },
    { day: "THU" },
    { day: "FRI" },
  ];

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: "get",
        url: "https://freetestapi.com/api/v1/weathers?limit=7",
      };
      try {
        const response = await axios(config);
        setWeatherData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="weather-forecast-table-container">
      <table className="weather-forecast-table">
        <caption>Weather Forecast Template (°F)</caption>
        <thead>
          <tr>
            {days.map((dayData, index) => (
              <th
                key={index}
                className={index === 0 || index === 1 ? "highlight" : ""}
              >
                {dayData.day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weatherData.map((dayData, index) => (
              <td key={index}>
                <div className="icon" aria-hidden="true">
                  {dayData.weather_description === "Clear sky" ? (
                    "🌞"
                  ) : dayData.weather_description.toLowerCase() ===
                    "partly cloudy" ? (
                    "🌤️"
                  ) : dayData.weather_description === "Sunny" ? (
                    "☀️"
                  ) : dayData.weather_description === "Cloudy" ? (
                    "☁️"
                  ) : dayData.weather_description === "Rain showers" ? (
                    "🌧️"
                  ) : (
                    ""
                  )}
                </div>
              </td>
            ))}
          </tr>

          <tr className="description-row">
            {weatherData.map((dayData, index) => (
              <td key={index}>
                <div>{dayData.weather_description}</div>
              </td>
            ))}
          </tr>

          <tr>
            {weatherData.map((dayData, index) => (
              <td key={index}>
                <div className="temp-high">{dayData.temperature}°C</div>
              </td>
            ))}
          </tr>
          <tr className="humidity-row">
            {weatherData.map((dayData, index) => (
              <td key={index}>
                <div>{dayData.humidity} g/kg</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherForecast;
