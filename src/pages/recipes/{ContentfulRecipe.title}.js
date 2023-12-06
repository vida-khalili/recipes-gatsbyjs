import React from "react";

import Layout from "../../components/Layout/Layout";
const RecipeTemplate = (props) => {
  const { title } = props.params;
  return <Layout>{title}</Layout>;
};

export default RecipeTemplate;
