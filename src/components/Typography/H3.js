import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  font-size: 52px;
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  color: ${(props) => props.color || "inherit"};
`;

const H3 = ({ children, color = null }) => {
  return <StyledH3 color={color}>{children}</StyledH3>;
};

export default H3;
