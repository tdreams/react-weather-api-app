import { getIcon, convertUnit } from "../helpers";
const Card = ({ day, unit }) => {
  // console.log(day);
  const date = day.date.toString();
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const dateOfTheMont = date.slice(6, 8);
  const formatedDate = new Date(year, month - 1, dateOfTheMont)
    .toDateString()
    .slice(0, 3);
  const unitShortHand =
    unit === "kelvin"
      ? unit.slice(0, 1).toUpperCase()
      : "°" + unit.slice(0, 1).toUpperCase();
  return (
    <div className="card-container">
      <div className="icon-container">{day.weather&&getIcon(day.weather)}</div>
      <h3>{formatedDate}</h3>
      <p>{day.weather}</p>
      <p>{`${convertUnit(unit, day.temp2m["max"])} ${unitShortHand} max`}</p>
      <p>{`${convertUnit(unit, day.temp2m["min"])} ${unitShortHand} min`}</p>
    </div>
  );
};
export default Card;
