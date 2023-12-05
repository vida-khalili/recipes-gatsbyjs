import React from "react";
import Recipe from "../Recipe/Recipe";
import styled from "styled-components";

const RecipesList = ({ recipes = [] }) => {
  return (
    <RecipeListWrapper>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
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
`;

export default RecipesList;
