import React from "react";
import styled from "styled-components";
import RecipesList from "../RecipesList/RecipesList";
import H3 from "../../Typography/H3";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FaArrowRight } from "react-icons/fa6";

const query = graphql`
  query {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        title
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
        cookTime
        prepTime
      }
    }
  }
`;

const FeaturedRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Wrapper>
      <H3 color="#37724f">Featured recipes</H3>
      <RecipesList recipes={recipes} featured={"true"} />
      <Link className="link-to-recipes" to="/recipes">
        View All Recipes <FaArrowRight />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  gap: 40px;
  margin: 100px auto 50px auto;
  padding: 30px;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 0 2px 4px #edebde;
  @media screen and (max-width: 700px) {
    margin: 50px auto 50px auto;
    padding: 30px 16px;
    gap: 28px;
    h3 {
      font-size: 42px;
    }
  }
  .link-to-recipes {
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    background-color: #37724f;
    color: white;
    gap: 8px;
    transition: transform 200ms ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export default FeaturedRecipes;
