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
  const [gameWon, setGameWon] = useState(false);
  const [gameLoss, setGameLoss] = useState(false);

  function handleCardClick(name) {
    if (gameWon || gameLoss) return;

    if (!clickedCountries.includes(name)) {
      const nextScore = score + 1;
      setClickedCountries([...clickedCountries, name]);

      if (nextScore > bestScore) {
        setBestScore(nextScore);
      }
      if (nextScore === countryData.length) {
        setGameWon(true);
      }
    } else {
      setGameLoss(true);
    }
    setCountryData((prevData) => pureShuffle(prevData));
  }

  function resetGame() {
    setClickedCountries([]);
    setGameWon(false);
    setGameLoss(false);
    setCountryData(pureShuffle(TARGET_COUNTRIES));
  }

  return (
    <>
      {gameWon && (
        <div className="modal-overlay">
          <div className="modal-content win">
            <h2>You Won!</h2>
            <p>Perfect score! You remembered them all.</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}

      {gameLoss && (
        <div className="modal-overlay">
          <div className="modal-content lose">
            <h2>Game Over</h2>
            <p>You already clicked that country! Final Score: {score}</p>
            <button onClick={resetGame}>Try Again</button>
          </div>
        </div>
      )}

      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard countryData={countryData} onCardClick={handleCardClick} />
      <div className="directions">
        <p>
          Directions: Click all 12 countries without picking the same one twice.
        </p>
      </div>
    </>
  );
}

export default App;
