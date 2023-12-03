import React from "react";
import styled from "styled-components";

const PageContentSection = ({ children }) => {
  return <Section>{children}</Section>;
};

const Section = styled.section`
  display: grid;
  gap: 12px;
  align-items: center;
  justify-items: center;
  text-align: center;
  .about-image {
    border-radius: 8px;
    max-width: 700px;
  }
  .contact-image {
    border-radius: 8px;
    max-width: 700px;
  }
`;

export default PageContentSection;
