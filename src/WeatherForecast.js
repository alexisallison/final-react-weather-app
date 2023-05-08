import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "baaf4089fe1f47ota3453bb84221f74b";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <WeatherIcon code="broken-clouds-night" size={36} />
          <div className="WeatherFoecast-temperatures">
            <span className="WeatherForecast-temperature-max">19&deg;</span> |
            <span className="WeatherForecast-temperature-min"> 10&deg;</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
