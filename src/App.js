import React, { useState } from "react";
import { Inputs } from "./components/Inputs";

const App = () => {
  const [clicked, setClicked] = useState(true);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <Inputs inputId="Name" type="text" />
    </div>
  );
};

export default App;
