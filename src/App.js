import React, { useState } from "react";
import { Generic } from "./components/Generic";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const App = () => {
  const [clicked, setClicked] = useState(true);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <StyledWrapper>
      <Generic clicked={clicked} />
      <Education />
      <Experience />
    </StyledWrapper>
  );
};

export default App;
