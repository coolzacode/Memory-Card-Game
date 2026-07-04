import Card from "./Card.jsx";

function pureShuffle(data) {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData;
}

export default function Gameboard({
  countryData,
  setCountryData,
  clickedCountries,
  setClickedCountries,
}) {
  function handleCardClick(name) {
    if (!clickedCountries.includes(name)) {
      setClickedCountries([...clickedCountries, name]);
    } else {
      setClickedCountries([]);
    }
    setCountryData((prevData) => pureShuffle(prevData));
  }

  return (
    <section className="gameboard">
      {countryData.map((country) => (
        <Card
          key={country.name}
          name={country.name}
          emoji={country.emoji}
          onClick={() => handleCardClick(country.name)}
        />
      ))}
    </section>
  );
}
