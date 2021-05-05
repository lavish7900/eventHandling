import React, { useState } from "react";

function App() {
   
  const [change,setChange]=useState("hello")
  const [Moused,setMoused]=useState(false);

function headchange(){
  setChange("changed");
}
 
function handleover(){
setMoused(true);
}
function handleout(){
  setMoused(false);
}

  return (
    <div className="container">
      <h1>{change}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
      style={{backgroundColor: Moused && "black"}}

       onClick={headchange}
      onMouseOver={handleover}
      onMouseOut={handleout}
      >Submit</button>
    </div>
  );
}

export default App;
