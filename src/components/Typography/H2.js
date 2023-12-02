import React from "react";
import styled from "styled-components";

const StyledH2 =
  styled.h2 <
  $color >
  `
color: inherit;
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
`;

const H2 = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

export default H2;
