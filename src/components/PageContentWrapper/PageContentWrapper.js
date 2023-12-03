import React from "react";
import styled from "styled-components";

const PageContentWrapper = ({ children, reverse = "false" }) => {
  return <Wrapper reverse={reverse}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: ${(props) =>
    props.reverse === "true" ? "1fr 0.6fr" : "0.6fr 1fr"};
  gap: 32px;
  padding: 0 30px;
  @media screen and (max-width: 900px) {
    grid-template-columns: unset;
  }
`;
export default PageContentWrapper;
