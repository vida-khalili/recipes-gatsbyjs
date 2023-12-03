import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${(props) => props.fontSize || "inherit"};
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
  color: ${(props) => props.color || "inherit"};
  max-width: ${(props) => props.maxWidth || "unset"};
  margin: 0;
`;

const Paragraph = ({ children, color = null, maxWidth = null }) => {
  return (
    <StyledParagraph color={color} maxWidth={maxWidth}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
