import "./App.css";
import Scoreboard from "./components/Scoreboard.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  const countryData = [
    { name: "United States", emoji: "🇺🇸" },
    { name: "Canada", emoji: "🇨🇦" },
    { name: "Mexico", emoji: "🇲🇽" },
    { name: "United Kingdom", emoji: "🇬🇧" },
  ];
  return (
    <>
      <Scoreboard />
      <Gameboard countryData={countryData} />
    </>
  );
}

export default App;
