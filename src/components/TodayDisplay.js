import "@fortawesome/fontawesome-free/js/all.js";
import { getIcon } from "../helpers";

const TodayDisplay = ({ today,Currentaddress }) => {
  //console.log("ON THE TODAYDISPLAY", today, location);
  const lo = Currentaddress?.toString();
  const city = lo?.slice(17)
  console.log(city)
  return (
    <div className="today-container">
      <div className="info-container">
        <h1>Today's forecast</h1>
        <h3>
          {` ${city}`}
        </h3>
      </div>
      <div className="info-container">
        {getIcon(today?.weather)}</div>
    </div>
  );
};

export default TodayDisplay;
