import React from "react";
import Start from "./start";
import Questions from "./questions";
import Blob from "./blob";

function App() {
  const [questionsPage, setQuestionsPage] = React.useState(false);
  function handleStart(){
    setQuestionsPage(true);
  }
  return (
    <div>
      <div className="App">
        <Blob />
        {questionsPage ?   <Questions />: <Start handleStart={handleStart}/>}
      </div>
    </div>
  );
}

export default App;
