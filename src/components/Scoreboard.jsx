export default function Scoreboard({ score, bestScore }) {
  return (
    <header className="scoreboard">
      <h1>
        Score: <span>{score}</span>
      </h1>
      <h1>
        Best Score: <span>{bestScore}</span>
      </h1>
    </header>
  );
}
