import React from "react";
import Layout from "../components/Layout/Layout";
import AboutContent from "../components/AboutContent/AboutContent";
import Seo from "../components/SEO/SEO";

const About = () => {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
};

export default About;

export const Head = () => <Seo pageTitle={"About"} />;
