import React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesContent/RecipesList/RecipesList";
import H1 from "../components/Typography/H1";
import PageContentWrapper from "../components/PageContentWrapper/PageContentWrapper";
import PageContentSection from "../components/PageContentWrapper/PageContentSection";
import Seo from "../components/SEO/SEO";
const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes;
  const { tag } = pageContext;
  return (
    <Layout>
      <PageContentWrapper template="tags">
        <PageContentSection>
          <H1>{tag}</H1>
        </PageContentSection>
        <PageContentSection>
          <RecipesList recipes={recipes} />
        </PageContentSection>
      </PageContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query getRecipesByTag($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        content {
          tags
        }
        cookTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        title
        prepTime
        id
      }
    }
  }
`;
export default TagTemplate;

export const Head = ({ pageContext }) => {
  const { tag } = pageContext;
  return <Seo pageTitle={tag} />;
};
