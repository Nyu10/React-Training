export default function Start(props) {
    
  return (
    <div className="start">
      <h1>Quizzical</h1>
      <h2>Some description if needed</h2>
      <button onClick={props.handleStart}>Start quiz</button>
    </div>
  );
}
