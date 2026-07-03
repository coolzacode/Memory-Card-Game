import Card from "./Card.jsx";

export default function Gameboard({ countryData, setClickedCountries }) {
  function updateList(name) {
    setClickedCountries((prev) => [...prev, name]);
  }

  return (
    <>
      <section className="gameboard">
        {countryData.map((country, index) => (
          <Card
            key={index}
            name={country.name}
            emoji={country.emoji}
            onClick={() => updateList(country.name)}
          />
        ))}
      </section>
    </>
  );
}
