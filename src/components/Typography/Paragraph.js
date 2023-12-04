import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${(props) => props.fontSize || "inherit"};
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;
  color: ${(props) => props.color || "inherit"};
  max-width: ${(props) => props.$maxwidth || "unset"};
  margin: 0;
`;

const Paragraph = ({ children, color = null, maxwidth = null }) => {
  return (
    <StyledParagraph color={color} $maxwidth={maxwidth}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
