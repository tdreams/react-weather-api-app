import { useEffect, useState } from "react";
import TodayDisplay from "./components/TodayDisplay";
import Card from "./components/Cards";
import UnitContainer from "./components/UnitContainer";
import Geocode from "react-geocode";
import axios from "axios";

const App = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [Currentaddress, setAdress] = useState(null);
  const [unit, setUnit] = useState("celcius");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Location API is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
        },
        () => {
          setError("Sorry, we cannot find your location");
        }
      );
    }
  };

  const fetchData = () => {
    const latitude = location?.latitude;
    const longitude = location?.longitude;
    fetch(
      `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  };

  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  axios
    .get("http://localhost:8000/news")
    .then((response) => {
      const apiKey = response.data;
      Geocode.setApiKey(apiKey);
    })
    .catch((err) => {
      console.error(err);
    });
  // Get address from latitude & longitude.
  Geocode.fromLatLng(location?.latitude, location?.longitude).then(
    (response) => {
      const address = response.results[0].formatted_address;
      setAdress(address);
    },
    (err) => {
      console.error(err);
    }
  );

  console.log(data);
  console.log(unit);

  useEffect(() => {
    getLocation();
    fetchData();
  }, []);

  const handleClick = (e) => {
    setUnit(e.target.id);
  };

  return (
    <div className="weather-app">
      <TodayDisplay
        today={data?.dataseries[0]}
        location={location}
        Currentaddress={Currentaddress}
      />
      <div className="cards-container">
        {data?.dataseries.slice(0, 7).map((day, item) => (
          <Card key={item} day={day} unit={unit} />
        ))}
      </div>
      <UnitContainer handleClick={handleClick} unit={unit} />
      {error}
    </div>
  );
};

export default App;
