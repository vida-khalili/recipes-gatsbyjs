import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  color: ${(props) => props.color || "inherit"};
`;

const H1 = ({ children, color = null }) => {
  return <StyledH1 color={color}>{children}</StyledH1>;
};

export default H1;
