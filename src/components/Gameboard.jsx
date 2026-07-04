import Card from "./Card.jsx";

export default function Gameboard({ countryData, onCardClick }) {
  return (
    <section className="gameboard">
      {countryData.map((country) => (
        <Card
          key={country.name}
          name={country.name}
          emoji={country.emoji}
          onClick={() => onCardClick(country.name)}
        />
      ))}
    </section>
  );
}
