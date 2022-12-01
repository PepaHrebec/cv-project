import React, { useState } from "react";
import { Inputs } from "./Inputs";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Generic = () => {
  const [genericVals, setGenericVals] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const handleclick = (e, name) => {
    setGenericVals({
      ...genericVals,
      [name]: e.target.value,
    });
  };

  return (
    <SectionWrapper>
      <Inputs
        inputId="Name"
        type="text"
        change={(e) => {
          handleclick(e, "name");
        }}
      />
      <Inputs
        inputId="Surname"
        type="text"
        change={(e) => {
          handleclick(e, "surname");
        }}
      />
      <Inputs
        inputId="Phone"
        type="number"
        change={(e) => {
          handleclick(e, "phone");
        }}
      />
      <Inputs
        inputId="Email"
        type="mail"
        change={(e) => {
          handleclick(e, "email");
        }}
      />
      <button
        onClick={() => {
          console.log(genericVals);
        }}
      >
        Click me
      </button>
    </SectionWrapper>
  );
};

export { Generic };
