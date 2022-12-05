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

const Education = (props) => {
  const [eduVals, setEduVals] = useState({
    school: " ",
    title: " ",
    date: " ",
  });

  const handleclick = (e, name) => {
    setEduVals({
      ...eduVals,
      [name]: e.target.value,
    });
  };

  return (
    <SectionWrapper>
      <Inputs
        inputId="School"
        type="text"
        change={(e) => {
          handleclick(e, "school");
        }}
        valueInput={eduVals.school}
        clicked={props.clicked}
      />{" "}
      <Inputs
        inputId="Title obtained"
        type="text"
        change={(e) => {
          handleclick(e, "title");
        }}
        valueInput={eduVals.title}
        clicked={props.clicked}
      />
      <Inputs
        inputId="End of study"
        type="date"
        change={(e) => {
          handleclick(e, "date");
        }}
        valueInput={eduVals.date}
        clicked={props.clicked}
      />
    </SectionWrapper>
  );
};

export { Education };
