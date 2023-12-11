import React from "react";
import Layout from "../components/Layout/Layout";
import ContactContent from "../components/ContactContent/ContactContent";
import Seo from "../components/SEO/SEO";

const Contact = () => {
  return (
    <Layout>
      <ContactContent />
    </Layout>
  );
};

export default Contact;

export const Head = () => <Seo pageTitle={"Contact"} />;
