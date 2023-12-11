import * as React from "react";
import Layout from "../components/Layout/Layout";
import HomeContent from "../components/HomeContent/HomeContent";
import Seo from "../components/SEO/SEO";

export default function Home() {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
}

export const Head = () => <Seo pageTitle={"Home"} />;
