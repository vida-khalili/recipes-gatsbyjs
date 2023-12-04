import React from "react";
import PageContentWrapper from "../PageContentWrapper/PageContentWrapper";
import H1 from "../Typography/H1";
import PageContentSection from "../PageContentWrapper/PageContentSection";
import Paragraph from "../Typography/Paragraph";
import { StaticImage } from "gatsby-plugin-image";

const AboutContent = () => {
  return (
    <PageContentWrapper>
      <PageContentSection>
        <H1 fontSize="48px">About Me</H1>
        <Paragraph>
          In the heart of culinary creativity resides a true food aficionado,
          Vida. With an insatiable love for all things delicious, Vida has
          carved out a delectable niche in the world of gastronomy, making their
          kitchen a haven for flavors and aromas that tantalize the taste buds.
        </Paragraph>
        <Paragraph>
          For Vida, cooking is not merely a chore; it's a form of
          self-expression, a way to share warmth and joy through carefully
          crafted dishes. The kitchen, to Vida, is a sanctuary where creativity
          knows no bounds. Each recipe is a story, and each ingredient a
          character that contributes to the symphony of flavors.
        </Paragraph>
        <Paragraph>
          So, step into Vida's kitchen and embark on a flavorful adventure where
          every bite is a testament to a genuine passion for food and the art of
          cooking.
        </Paragraph>
      </PageContentSection>
      <PageContentSection>
        <StaticImage
          src="../../assets/images/woman-chef.jpg"
          alt="woman cooking"
          className="about-image"
          placeholder="blurred"
        />
      </PageContentSection>
    </PageContentWrapper>
  );
};

export default AboutContent;
