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
    "clear-sky-day": <WiDaySunny size={64} color="#f70776" />,
    "clear-sky-night": <WiNightClear size={64} color="#f70776" />,
    "few-clouds-day": <WiDayCloudy size={64} color="#f70776" />,
    "few-clouds-night": <WiNightAltCloudy size={64} color="#f70776" />,
    "scattered-clouds-day": <WiDayCloudyWindy size={64} color="#f70776" />,
    "scattered-clouds-night": (
      <WiNightAltCloudyWindy size={64} color="#f70776" />
    ),
    "broken-clouds-day": <WiCloudy size={64} color="#f70776" />,
    "broken-clouds-night": <WiCloudy size={64} color="#f70776" />,
    "shower-rain-day": <WiDayShowers size={64} color="#f70776" />,
    "shower-rain-night": <WiNightAltShowers size={64} color="#f70776" />,
    "rain-day": <WiDayRain size={64} color="#f70776" />,
    "rain-night": <WiNightAltRain size={64} color="#f70776" />,
    "thunderstorm-day": <WiThunderstorm size={64} color="#f70776" />,
    "thunderstorm-night": <WiThunderstorm size={64} color="#f70776" />,
    "snow-day": <WiSnowflakeCold size={64} color="#f70776" />,
    "snow-night": <WiSnowflakeCold size={64} color="#f70776" />,
    "mist-day": <WiDayFog size={64} color="#f70776" />,
    "mist-night": <WiNightFog size={64} color="#f70776" />,
  };
  return codeMapping[props.code];
}
