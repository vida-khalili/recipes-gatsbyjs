import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: ${(props) => props.fontSize || "inherit"};
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  color: ${(props) => props.color || "inherit"};
`;

const H2 = ({ children, color = null }) => {
  return <StyledH2 color={color}>{children}</StyledH2>;
};

export default H2;
