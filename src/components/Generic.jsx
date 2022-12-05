import React, { useState } from "react";
import { Inputs } from "./Inputs";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledButton = styled.button`
  width: 100px;
  border-radius: 8px;
  padding: 8px;
`;

const Generic = (props) => {
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
        valueInput={genericVals.name}
      />
      <Inputs
        inputId="Surname"
        type="text"
        change={(e) => {
          handleclick(e, "surname");
        }}
        valueInput={genericVals.surname}
      />
      <Inputs
        inputId="Phone"
        type="number"
        change={(e) => {
          handleclick(e, "phone");
        }}
        valueInput={genericVals.phone}
      />
      <Inputs
        inputId="Email"
        type="mail"
        change={(e) => {
          handleclick(e, "email");
        }}
        valueInput={genericVals.email}
      />
    </SectionWrapper>
  );
};

export { Generic };
