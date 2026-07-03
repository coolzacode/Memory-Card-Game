import "./App.css";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  const [clickedCountries, setClickedCountries] = useState([]);

  const countryData = [
    { name: "United States", emoji: "🇺🇸" },
    { name: "Canada", emoji: "🇨🇦" },
    { name: "Mexico", emoji: "🇲🇽" },
    { name: "United Kingdom", emoji: "🇬🇧" },
  ];
  return (
    <>
      <Scoreboard />
      <Gameboard
        countryData={countryData}
        setClickedCountries={setClickedCountries}
      />
    </>
  );
}

export default App;
