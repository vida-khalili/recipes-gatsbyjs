import React from "react";
import H1 from "../Typography/H1";
import H2 from "../Typography/H2";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Paragraph from "../Typography/Paragraph";
import PageContentWrapper from "../PageContentWrapper/PageContentWrapper";
import PageContentSection from "../PageContentWrapper/PageContentSection";
import H4 from "../Typography/H4";

const HomeContent = () => {
  return (
    <PageContentWrapper>
      <PageContentSection>
        <TitleWrapper>
          <H2 color="#98a523">delicious</H2>
          <H1 color="#313131">Healthy Food</H1>
        </TitleWrapper>
        <Paragraph maxWidth="450px">
          A healthy diet is a diet that maintains or improves overall health. A
          healthy diet provides the body with essential nutrition: fluid,
          macronutrients such as protein, micronutrients such as vitamins, and
          adequate fibre and food energy
        </Paragraph>
        <H4>Eat Right, Feel Bright</H4>
      </PageContentSection>
      <PageContentSection>
        <StaticImage src="../../assets/images/bg.png" alt="image for hero" />
      </PageContentSection>
    </PageContentWrapper>
  );
};

const TitleWrapper = styled.span`
  h1 {
    font-size: 94px;
  }
  h2 {
    font-size: 124px;
    letter-spacing: 3px;
  }
  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 80px;
    }
    h2 {
      font-size: 106px;
    }
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 62px;
    }
    h2 {
      font-size: 80px;
    }
  }
`;

export default HomeContent;
