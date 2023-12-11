import React from "react";
import Layout from "../../components/Layout/Layout";
import RecipesContent from "../../components/RecipesContent/RecipesContent";
import Seo from "../../components/SEO/SEO";

const Recipes = () => {
  return (
    <Layout>
      <RecipesContent />
    </Layout>
  );
};

export default Recipes;

export const Head = () => <Seo pageTitle={"Recipes"} />;
