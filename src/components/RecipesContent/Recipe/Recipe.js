import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Recipe = ({ recipe = {}, featured = "false" }) => {
  const { title, image, cookTime, prepTime } = recipe;
  const pathToImage = getImage(image);
  return (
    <RecipeCard className={featured === "true" ? "featured" : ""}>
      <Link to={"/recipes"}>
        <GatsbyImage alt={title} image={pathToImage} className="recipe-image" />
        <DetailWrapper>
          <Title>{title}</Title>
          <TimeWrapper>
            prep: {prepTime}min | cook: {cookTime}min
          </TimeWrapper>
        </DetailWrapper>
      </Link>
    </RecipeCard>
  );
};

const RecipeCard = styled.div`
  &.featured {
    background-color: white;
    box-shadow: 0px 0px 4px 6px #edebde;
    margin-right: 32px;
    position: relative;
    padding: 16px;
    .recipe-image {
      position: absolute;
      width: 120px;
      height: 120px;
      top: -30px;
      right: -50px;
      border-radius: 100px;
      @media screen and (max-width: 700px) {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        top: -20px;
        right: -40px;
      }
    }
    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
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
