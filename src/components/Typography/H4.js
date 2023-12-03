import React from "react";
import styled from "styled-components";

const StyledH4 = styled.h4`
  font-size: ${(props) => props.fontSize || "24px"};
  font-family: "Antonio", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  color: ${(props) => props.color || "inherit"};
`;

const H4 = ({ children, color = null, fontSize = null }) => {
  return (
    <StyledH4 color={color} fontSize={fontSize}>
      {children}
    </StyledH4>
  );
};

export default H4;
