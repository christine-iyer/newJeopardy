export default function Score({ getScore, score }) {
  return (
    <>
    <h2>{score}</h2>
    <button onClick={getScore}>Increase</button>
    
    </>
  );
}