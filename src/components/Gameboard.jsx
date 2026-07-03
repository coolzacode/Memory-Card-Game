import Card from "./Card.jsx";

export default function Gameboard({ countryData }) {
  return (
    <>
      <section className="gameboard">
        {countryData.map((country, index) => (
          <Card key={index} name={country.name} emoji={country.emoji} />
        ))}
      </section>
    </>
  );
}
