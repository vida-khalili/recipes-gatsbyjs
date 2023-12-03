import React from "react";
import styled from "styled-components";

const PageContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 0.6fr 1fr;
  gap: 32px;
  padding: 0 30px;
  @media screen and (max-width: 900px) {
    grid-template-columns: unset;
  }
`;
export default PageContentWrapper;
