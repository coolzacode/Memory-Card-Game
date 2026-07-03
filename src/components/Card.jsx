export default function Card({ name, emoji }) {
  return (
    <>
      <div className="card">
        <p>{emoji}</p>
        <p>{name}</p>
      </div>
    </>
  );
}
