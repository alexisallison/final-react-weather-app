import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDayCloudyWindy,
  WiNightAltCloudyWindy,
  WiCloudy,
  WiDayShowers,
  WiNightAltShowers,
  WiDayRain,
  WiNightAltRain,
  WiThunderstorm,
  WiSnowflakeCold,
  WiDayFog,
  WiNightFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": <WiDaySunny size={props.size} color="#f70776" />,
    "clear-sky-night": <WiNightClear size={props.size} color="#f70776" />,
    "few-clouds-day": <WiDayCloudy size={props.size} color="#f70776" />,
    "few-clouds-night": <WiNightAltCloudy size={props.size} color="#f70776" />,
    "scattered-clouds-day": (
      <WiDayCloudyWindy size={props.size} color="#f70776" />
    ),
    "scattered-clouds-night": (
      <WiNightAltCloudyWindy size={props.size} color="#f70776" />
    ),
    "broken-clouds-day": <WiCloudy size={props.size} color="#f70776" />,
    "broken-clouds-night": <WiCloudy size={props.size} color="#f70776" />,
    "shower-rain-day": <WiDayShowers size={props.size} color="#f70776" />,
    "shower-rain-night": (
      <WiNightAltShowers size={props.size} color="#f70776" />
    ),
    "rain-day": <WiDayRain size={props.size} color="#f70776" />,
    "rain-night": <WiNightAltRain size={props.size} color="#f70776" />,
    "thunderstorm-day": <WiThunderstorm size={props.size} color="#f70776" />,
    "thunderstorm-night": <WiThunderstorm size={props.size} color="#f70776" />,
    "snow-day": <WiSnowflakeCold size={props.size} color="#f70776" />,
    "snow-night": <WiSnowflakeCold size={props.size} color="#f70776" />,
    "mist-day": <WiDayFog size={props.size} color="#f70776" />,
    "mist-night": <WiNightFog size={props.size} color="#f70776" />,
  };
  return codeMapping[props.code];
}
