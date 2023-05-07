import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
