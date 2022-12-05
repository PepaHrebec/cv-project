import React, { useState } from "react";
import { Inputs } from "./Inputs";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px dotted black;
  padding: 2rem;
  border-radius: 4px;
`;

const Generic = (props) => {
  const [genericVals, setGenericVals] = useState({
    name: " ",
    surname: " ",
    phone: " ",
    email: " ",
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
        valueInput={genericVals.name}
        clicked={props.clicked}
      />
      <Inputs
        inputId="Surname"
        type="text"
        change={(e) => {
          handleclick(e, "surname");
        }}
        valueInput={genericVals.surname}
        clicked={props.clicked}
      />
      <Inputs
        inputId="Phone"
        type="number"
        change={(e) => {
          handleclick(e, "phone");
        }}
        valueInput={genericVals.phone}
        clicked={props.clicked}
      />
      <Inputs
        inputId="Email"
        type="mail"
        change={(e) => {
          handleclick(e, "email");
        }}
        valueInput={genericVals.email}
        clicked={props.clicked}
      />
    </SectionWrapper>
  );
};

export { Generic };
