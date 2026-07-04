import "./App.css";
import { useState } from "react";
import { TARGET_COUNTRIES } from "./services/countries.js";
import Scoreboard from "./components/Scoreboard.jsx";
import Gameboard from "./components/Gameboard.jsx";

function pureShuffle(data) {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData;
}

function App() {
  const [clickedCountries, setClickedCountries] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [countryData, setCountryData] = useState(TARGET_COUNTRIES);
  const score = clickedCountries.length;

  function handleCardClick(name) {
    if (!clickedCountries.includes(name)) {
      const nextScore = score + 1;
      setClickedCountries([...clickedCountries, name]);

      if (nextScore > bestScore) {
        setBestScore(nextScore);
      }
    } else {
      setClickedCountries([]);
    }
    setCountryData((prevData) => pureShuffle(prevData));
  }

  return (
    <>
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard countryData={countryData} onCardClick={handleCardClick} />
    </>
  );
}

export default App;
