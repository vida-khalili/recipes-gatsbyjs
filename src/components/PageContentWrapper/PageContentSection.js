import React from "react";
import styled from "styled-components";

const PageContentSection = ({ children }) => {
  return <Section>{children}</Section>;
};

const Section = styled.section`
  width: 100%;
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
  .tags-list-title {
    color: #37724f;
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 16px;
    text-transform: capitalize;
    font-family: "Antonio", sans-serif;
  }
  .tags-image {
    border-radius: 8px;
    height: calc(100vh - 252px);
    @media screen and (max-width: 900px) {
      transform: rotate(180deg);
      width: 100%;
      height: 200px;
      img {
        transform: rotate(180deg);
      }
    }
  }
  .single-recipe-image {
    border-radius: 8px;
  }
`;

export default PageContentSection;
