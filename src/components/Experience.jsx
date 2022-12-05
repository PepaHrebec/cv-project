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

const Experience = (props) => {
  const [expVals, setExpVals] = useState({
    company: " ",
    title: " ",
    main_tasks: " ",
    hire: " ",
    left: " ",
  });

  const handleclick = (e, name) => {
    setExpVals({
      ...expVals,
      [name]: e.target.value,
    });
  };
  return (
    <SectionWrapper>
      <Inputs
        inputId="Company"
        type="text"
        change={(e) => {
          handleclick(e, "company");
        }}
        valueInput={expVals.company}
        clicked={props.clicked}
      />
      <Inputs
        inputId="Title"
        type="text"
        change={(e) => {
          handleclick(e, "title");
        }}
        valueInput={expVals.title}
        clicked={props.clicked}
      />
      <Inputs
        inputId="Tasks"
        type="text"
        change={(e) => {
          handleclick(e, "main_tasks");
        }}
        valueInput={expVals.main_tasks}
        clicked={props.clicked}
      />
      <Inputs
        inputId="Date of hire"
        type="date"
        change={(e) => {
          handleclick(e, "hire");
        }}
        valueInput={expVals.hire}
        clicked={props.clicked}
      />
      <Inputs
        inputId="Date of leaving"
        type="date"
        change={(e) => {
          handleclick(e, "left");
        }}
        valueInput={expVals.left}
        clicked={props.clicked}
      />
    </SectionWrapper>
  );
};

export { Experience };
