import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Recipe = ({ recipe = {} }) => {
  const { title, image, cookTime, prepTime } = recipe;
  const pathToImage = getImage(image);
  return (
    <RecipeCard>
      <GatsbyImage alt={title} image={pathToImage} className="recipe-image" />
      <DetailWrapper>
        <Title>{title}</Title>
        <TimeWrapper>
          prep: {prepTime}min | cook: {cookTime}min
        </TimeWrapper>
      </DetailWrapper>
    </RecipeCard>
  );
};

const RecipeCard = styled.div`
  display: grid;
  width: 280px;
  border-radius: 8px;
  gap: 8px;
  text-transform: capitalize;

  .recipe-image {
    border-radius: 8px;
    height: 200px;
  }

  @media screen and (max-width: 700px) {
    width: 200px;
  }
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

const Title = styled.h4`
  font-weight: 600;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow-y: hidden;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    width: 150px;
    word-break: keep-all;
  }
`;
const DetailWrapper = styled.div`
  padding: 8px;
`;
const TimeWrapper = styled.p`
  opacity: 0.8;
  font-size: 14px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
export default Recipe;
