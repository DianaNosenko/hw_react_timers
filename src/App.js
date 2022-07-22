import React from "react";
import TimerFromNull from "./TimerFromNull";
import TimerToNull from "./TimerToNull";
import './App.css';

function App() {
  return (
<>
<TimerFromNull start={0} end={10}/>
<TimerToNull start ={10} end={0}/>
</>
  );
}
export default App;
