import React from "react";
import Layout from "../../../components/Layout";
import TagsList from "../../../components/RecipesContent/TagsList/TagsList";
import PageContentWrapper from "../../../components/PageContentWrapper/PageContentWrapper";
import PageContentSection from "../../../components/PageContentWrapper/PageContentSection";
import H1 from "../../../components/Typography/H1";
import { StaticImage } from "gatsby-plugin-image";
const Tags = () => {
  return (
    <Layout>
      <PageContentWrapper template="tags">
        <PageContentSection>
          <StaticImage
            src="../../../assets/images/tags-img.png"
            alt="ingredients"
            className="tags-image"
          />
        </PageContentSection>
        <PageContentSection>
          <H1 fontSize={"48px"}>Tags</H1>
          <TagsList template="page" />
        </PageContentSection>
      </PageContentWrapper>
    </Layout>
  );
};

export default Tags;
