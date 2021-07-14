import React, { useState } from "react";
import DisplayLives from "./components/DisplayLives";

function App() {
  const [lives, setLives] = useState(6);

  return (
    <div>
      <DisplayLives lives={lives} />
    </div>
  );
}

export default App;
