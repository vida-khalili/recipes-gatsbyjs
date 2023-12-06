import React from "react";
import PageContentWrapper from "../PageContentWrapper/PageContentWrapper";
import PageContentSection from "../PageContentWrapper/PageContentSection";
import RecipesList from "./RecipesList/RecipesList";
import TagsList from "./TagsList/TagsList";
import { Link, graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        cookTime
        prepTime
        content {
          tags
        }
      }
    }
  }
`;
const RecipesContent = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <PageContentWrapper template="tags">
      <PageContentSection>
        <Link className="tags-list-title" to={"/recipes/tags"}>
          tags
        </Link>
        <TagsList recipes={recipes} />
      </PageContentSection>
      <PageContentSection>
        <RecipesList recipes={recipes} />
      </PageContentSection>
    </PageContentWrapper>
  );
};

export default RecipesContent;
