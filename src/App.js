import React from "react";


function Food({favourite}){
  return <h1>I like {favourite}</h1>
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="smhiopsal" />
      <Food favourite="chokumi" />
    </div>
  );
}

export default App;
