import React from "react";
import MadLibs from "./MadLibs/MadLibs";
import AddCommasDisplay from "./addCommasDisplay";
import './App.css'

function App() {
  return (
    <div className="App">
      <AddCommasDisplay />
      <MadLibs />
    </div>
  );
}

export default App;
