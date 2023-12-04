import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageContentWrapper from "../PageContentWrapper/PageContentWrapper";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "recipes" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            height: 200
            layout: FIXED
            width: 200
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;

const RecipesContent = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <PageContentWrapper>
      {nodes.map((image, index) => {
        const imageData = getImage(image);
        return <GatsbyImage image={imageData} alt="recipe pic" />;
      })}
    </PageContentWrapper>
  );
};

export default RecipesContent;
