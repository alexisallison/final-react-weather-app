import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}`;
  }
  function minTemperature() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="WeatherFoecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}&deg;
        </span>{" "}
        |
        <span className="WeatherForecast-temperature-min">
          {" "}
          {minTemperature()}&deg;
        </span>{" "}
      </div>
    </div>
  );
}
