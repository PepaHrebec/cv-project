import React, { useState } from "react";
import { Inputs } from "./Inputs";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Education = () => {
  const [eduVals, setEduVals] = useState({
    school: "",
    title: "",
    date: "",
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
      />{" "}
      <Inputs
        inputId="Title obtained"
        type="text"
        change={(e) => {
          handleclick(e, "title");
        }}
        valueInput={eduVals.title}
      />
      <Inputs
        inputId="End of study"
        type="date"
        change={(e) => {
          handleclick(e, "date");
        }}
        valueInput={eduVals.date}
      />
    </SectionWrapper>
  );
};

export { Education };
