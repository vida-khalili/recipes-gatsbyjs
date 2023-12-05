import React from "react";
import Recipe from "../Recipe/Recipe";
import styled from "styled-components";

const RecipesList = ({ recipes = [], featured = "false" }) => {
  return (
    <RecipeListWrapper className={featured === "true" ? "featured-list" : ""}>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} featured={featured} />
      ))}
    </RecipeListWrapper>
  );
};

const RecipeListWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  &.featured-list {
    margin-top: 24px;
    @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 40px;
    }
  }
`;

export default RecipesList;
