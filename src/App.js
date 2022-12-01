import React, { useState } from "react";
import { Generic } from "./components/Generic";

const App = () => {
  const [clicked, setClicked] = useState(true);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <Generic />
    </div>
  );
};

export default App;
