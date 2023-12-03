import React from "react";
import H1 from "../Typography/H1";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const HomeContent = () => {
  return (
    <Wrapper>
      <H1 color="#98a523">delicious</H1>
      <StaticImage
        src="../../assets/images/bg.png"
        alt="image for hero section"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;

export default HomeContent;
