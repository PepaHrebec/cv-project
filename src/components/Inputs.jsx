import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  background-color: white;
  margin-top: 4px;
  padding: 4px;
  border-radius: 2px 2px 0 0;
  height: 1.5rem;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    background-color: rgb(215, 215, 215);
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(20rem, 50vw, 40rem);
`;

const StyledLabel = styled.label`
  margin-left: 4px;
`;

const StyledDiv = styled.div`
  border-bottom: 2px solid black;
  background-color: white;
  margin-top: 4px;
  padding: 4px;
  height: 1.5rem;
`;

const Inputs = (props) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={props.inputId}>{props.inputId}</StyledLabel>
      {props.clicked ? (
        <StyledInput
          id={props.inputId}
          type={props.type}
          onChange={props.change}
          value={props.valueInput}
        />
      ) : (
        <StyledDiv>{props.valueInput}</StyledDiv>
      )}
    </Wrapper>
  );
};

export { Inputs };
