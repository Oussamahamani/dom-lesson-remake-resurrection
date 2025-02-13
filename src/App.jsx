import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let cities = [
    { name: "Boston", temperature: 71 },
    { name: "New York", temperature: 75 },
    { name: "Los Angeles", temperature: 80 },
    { name: "Chicago", temperature: 65 },
    { name: "Houston", temperature: 90 },
    { name: "Denver", temperature: 45 },
  ];
  cities = cities.map((city) => {
    city.tempInCelsius = (((city.temperature - 32) * 5) / 9).toFixed(2);
    city.tempInFahrenheit = city.temperature;
    city.color = city.tempInCelsius > 20 ? "red" : "blue";
    city.isCelsius = false;

    delete city.temperature;
    return city;
  });
  // filter
  // i made boston bigger
  //convert the temp to c
  // we colored the cities based on their temp
  //we deleted the city if it was too hot if it has temperature above 30

  const switchTemp = (index) => {
    console.log("hello", index);
  };

  return (
    <>
      {cities.map((city, index) => (
        <>
          {/* ? :  */}
          {city.tempInCelsius < 30 && (
            <div
              key={city.name}
              className={city.tempInCelsius > 20 ? "hot" : "cold"}
            >
              <li style={{ fontSize: 24 - index * 2 }}> {city.name}</li>
              {city.isCelsius ? (
                <li> {city.tempInCelsius} c</li>
              ) : (
                <li> {city.tempInFahrenheit} f</li>
              )}

              <button onClick={() => switchTemp(index)}>Temp Toggle </button>
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default App;
