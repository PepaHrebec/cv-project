import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  background-color: white;
  margin-top: 4px;
  padding: 4px;
  border-radius: 2px 2px 0 0;
  &:focus {
    background-color: rgb(215, 215, 215);
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
`;

const StyledLabel = styled.label`
  margin-left: 4px;
`;

const Inputs = (props) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={props.inputId}>{props.inputId}</StyledLabel>
      <StyledInput id={props.inputId} type={props.type} />
    </Wrapper>
  );
};

export { Inputs };
