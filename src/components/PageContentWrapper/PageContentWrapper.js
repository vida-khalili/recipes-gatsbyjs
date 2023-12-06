import React from "react";
import styled from "styled-components";

const PageContentWrapper = ({ children, template = "" }) => {
  return <Wrapper $template={template}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  position: relative;
  display: grid;
  align-items: ${(props) =>
    props.$template === "tags" ? "flex-start" : "center"};
  justify-content: center;
  justify-items: center;
  grid-template-columns: ${(props) =>
    props.$template === "reverse"
      ? "1fr 0.6fr"
      : props.$template === "tags"
      ? "0.25fr 1fr "
      : "0.6fr 1fr"};
  gap: 32px;
  padding: ${(props) =>
    props.$template === "tags" ? "75px 30px 0 30px" : "0 30px"};
  .home-decoration-leaf {
    position: absolute;
    bottom: -140px;
    width: 280px;
    left: -30px;
    transform: rotate(-45deg);
    @media (max-width: 1200px) {
      bottom: -100px;
      width: 200px;
      left: -30px;
    }
    @media screen and (max-width: 900px) {
      top: 300px;
      bottom: unset;
    }
    @media screen and (max-width: 400px) {
      top: 330px;
      width: 150px;
      bottom: unset;
    }
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: unset;
    padding: 24px 16px 16px 16px;
  }
`;
export default PageContentWrapper;
