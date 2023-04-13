const getIcon = (weatherType) => {
  let weatheStyle;
  switch (weatherType) {
    case "lightrain":
      weatheStyle = <i className="fas fa-cloud-rain"></i>;
      break;
    case "tsrain":
      weatheStyle = <i className="fa-solid fa-cloud-bolt"></i>;
      break;
    case "cloudy":
      weatheStyle = <i className="fas fa-cloud"></i>;
      break;
    case "rain":
      weatheStyle = <i className="fa-solid fa-cloud-rain"></i>;
      break;
    case "ishower":
      weatheStyle = <i className="fas fa-cloud-rain"></i>;
      break;
    case "lightrainday":
      weatheStyle = <i className="fas fa-cloud-rain"></i>;
      break;
    case "clear":
      weatheStyle = <i className="fas fa-sun"></i>;
      break;
    case "cloudynight":
      weatheStyle = <i className="fas fa-cloud-moon"></i>;
      break;
    case "mcloudy":
      weatheStyle = <i className="fas fa-cloud"></i>;
      break;
    case "snow":
      weatheStyle = <i className="fa-solid fa-snowflake"></i>;
      break;
    case "rainnight":
      weatheStyle = <i className="fas fa-cloud-moon-rain"></i>;
      break;
    case "ts":
      weatheStyle = <i className="fas fa-bolt"></i>;
      break;
    /* default:
        weatheStyle = <i className="fas fa-sun"></i>; */
  }
  return weatheStyle;
};

const convertToFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const convertToKelvin = (celcius) => {
  return celcius + 273.15;
};

const convertUnit = (unit, currentTemp) => {
  let temp;
  switch (unit) {
    case "celcius":
      temp = currentTemp;
      break;
    case "fahrenheit":
      temp = convertToFahrenheit(currentTemp);
      break;

    case "kelvin":
      temp = convertToKelvin(currentTemp);
      break;
  }
  return temp;
};

export { getIcon, convertUnit };
