import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import PageContentWrapper from "../../components/PageContentWrapper/PageContentWrapper";
import PageContentSection from "../../components/PageContentWrapper/PageContentSection";
import H1 from "../../components/Typography/H1";
import H4 from "../../components/Typography/H4";
import Paragraph from "../../components/Typography/Paragraph";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClockFill, BsPeopleFill } from "react-icons/bs";
import slugify from "slugify";

const RecipeTemplate = ({ data }) => {
  console.log(data);
  const { title, image, cookTime, prepTime, servings, content, description } =
    data.contentfulRecipe;
  const pathToImage = getImage(image);
  const { tags, instructions, ingredients } = content;
  return (
    <Layout>
      <PageContentWrapper>
        <PageContentSection>
          <GatsbyImage
            image={pathToImage}
            alt={title}
            className="single-recipe-image"
          />
        </PageContentSection>
        <PageContentSection>
          <H1 fontSize="48px">{title}</H1>
          <Paragraph maxwidth={"90%"}>{description.description}</Paragraph>
          <MiniDetail>
            <TimingPanel>
              <BsClockFill color="#37724f" />
              <Paragraph>prep time</Paragraph>
              <Paragraph>{prepTime}min</Paragraph>
            </TimingPanel>
            <TimingPanel>
              <BsClockHistory color="#37724f" />
              <Paragraph>cook time</Paragraph>
              <Paragraph>{cookTime}min</Paragraph>
            </TimingPanel>
            <TimingPanel>
              <BsPeopleFill color="#37724f" />
              <Paragraph>servings</Paragraph>
              <Paragraph>{servings}</Paragraph>
            </TimingPanel>
          </MiniDetail>
          <Tags>
            tags:
            {tags.map((tag, index) => {
              const slug = slugify(tag, { lower: true });

              return (
                <Tag key={index}>
                  <Link to={`/tags/${slug}`}>{tag}</Link>
                </Tag>
              );
            })}
          </Tags>
        </PageContentSection>
      </PageContentWrapper>
      <br />
      <br />
      <PageContentWrapper template="baseline">
        <PageContentSection>
          <H4 fontSize={"32px"}>Ingredients</H4>
          <Ingredients>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </Ingredients>
        </PageContentSection>
        <PageContentSection>
          <H4 fontSize={"32px"}>Instructions</H4>
          <Instructions>
            {instructions.map((instruction, index) => {
              return (
                <li key={index}>
                  <p className="step">Step {index + 1}</p>
                  <Paragraph>{instruction}</Paragraph>
                </li>
              );
            })}
          </Instructions>
        </PageContentSection>
      </PageContentWrapper>
    </Layout>
  );
};

const MiniDetail = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const Tags = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: 600;
`;
const Tag = styled.p`
  border-radius: 4px;
  color: white;
  background-color: #37724f;
  padding: 8px;
`;
const Ingredients = styled.ul`
  list-style: none;
  margin-right: auto;
  li {
    padding: 16px;
    text-align: left;
    border-bottom: 2px solid #37724f3b;
  }
`;

const Instructions = styled.ul`
  list-style: none;
  margin-right: auto;
  li {
    padding: 16px;
    text-align: left;
  }
  .step {
    color: #37724f;
    font-weight: 700;
    font-family: "Antonio", sans-serif;
  }
`;
const TimingPanel = styled.div`
  display: grid;
  font-weight: 600;
  letter-spacing: 1px;
  align-items: center;
  justify-items: center;
  gap: 8px;
  font-family: "Antonio", sans-serif;
  svg {
    width: 20px;
    height: 20px;
  }
  p {
    margin: 0;
  }
  p:nth-child(3) {
    opacity: 0.8;
  }
`;

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      id
      title
      servings
      content {
        ingredients
        instructions
        tags
      }
      cookTime
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      prepTime
    }
  }
`;

export default RecipeTemplate;
