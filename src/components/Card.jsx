export default function Card({ name, emoji, onClick }) {
  return (
    <div className="card" name={name} onClick={onClick}>
      <p>{emoji}</p>
      <p>{name}</p>
    </div>
  );
}
