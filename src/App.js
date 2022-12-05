import React, { useState } from "react";
import { Generic } from "./components/Generic";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {font-family: 'Source Code Pro', monospace;
    padding: 0;
    margin: 0;
    }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100vw;
  padding: 5rem 0;
  & > * {
    margin: 0 auto;
  }
`;

const StyledButton = styled.button`
  padding: 1rem;
  width: 10rem;
`;

const App = () => {
  const [clicked, setClicked] = useState(true);

  return (
    <StyledWrapper>
      <GlobalStyle />
      <Generic clicked={clicked} />
      <Education clicked={clicked} />
      <Experience clicked={clicked} />
      <StyledButton
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        {clicked ? "Submit your CV" : "Edit your CV"}
      </StyledButton>
    </StyledWrapper>
  );
};

export default App;
