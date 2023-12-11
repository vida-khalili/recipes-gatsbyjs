import React from "react";
import Layout from "../components/Layout/Layout";
import PageContentWrapper from "../components/PageContentWrapper/PageContentWrapper";
import PageContentSection from "../components/PageContentWrapper/PageContentSection";
import { Link } from "gatsby";
import H1 from "../components/Typography/H1";
import Paragraph from "../components/Typography/Paragraph";
import Seo from "../components/SEO/SEO";

const Error = () => {
  return (
    <Layout>
      <PageContentWrapper>
        <PageContentSection>
          <H1 fontSize={"80px"}>404</H1>
        </PageContentSection>
        <PageContentSection>
          <Paragraph>Page Not Found!</Paragraph>{" "}
          <Link
            to="/"
            style={{
              background: "#92a63d",
              color: "white",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            go back to Home
          </Link>
        </PageContentSection>
      </PageContentWrapper>
    </Layout>
  );
};

export default Error;

export const Head = () => <Seo pageTitle={"ERROR"} />;
