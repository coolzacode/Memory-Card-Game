import "./App.css";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  const [clickedCountries, setClickedCountries] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const score = clickedCountries.length;
  const [countryData, setCountryData] = useState([
    { name: "United States", emoji: "🇺🇸" },
    { name: "Canada", emoji: "🇨🇦" },
    { name: "Mexico", emoji: "🇲🇽" },
    { name: "United Kingdom", emoji: "🇬🇧" },
  ]);

  if (score > bestScore) {
    setBestScore(score);
  }
  return (
    <>
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard
        countryData={countryData}
        setCountryData={setCountryData}
        clickedCountries={clickedCountries}
        setClickedCountries={setClickedCountries}
      />
    </>
  );
}

export default App;
