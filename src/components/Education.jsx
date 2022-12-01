import React, { useState } from "react";
import { Inputs } from "./Inputs";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Education = () => {
  return (
    <SectionWrapper>
      <Inputs />
      <Inputs />
      <Inputs />
    </SectionWrapper>
  );
};

export { Education };
