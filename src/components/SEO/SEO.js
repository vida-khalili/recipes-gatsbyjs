import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`;
const Seo = ({ pageTitle, pageDescription }) => {
  const { site } = useStaticQuery(query);
  const { title, author, description } = site.siteMetadata;
  const descriptionContent = pageDescription || description;
  return (
    <>
      <title>
        {pageTitle} | {title}
      </title>
      <meta name="description" content={descriptionContent} />
      <meta name="author" content={author} />
    </>
  );
};

export default Seo;
