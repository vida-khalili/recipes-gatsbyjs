import React from "react";
import setupTags from "../../../utils/setupTags";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Paragraph from "../../Typography/Paragraph";
import slugify from "slugify";
const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

const TagsList = ({ template = "" }) => {
  const data = useStaticQuery(query);
  const content = data.allContentfulRecipe.nodes;
  const allTags = setupTags(content);
  return (
    <TagsWrapper template={template}>
      {allTags.map((item, index) => {
        const [text, value] = item;
        const slug = slugify(text, { lower: true });

        return (
          <Paragraph key={index}>
            <Link to={`/tags/${slug}`}>
              <span>{text}</span> <span> ({value})</span>
            </Link>
          </Paragraph>
        );
      })}
    </TagsWrapper>
  );
};

const TagsWrapper = styled.div`
  max-height: ${(props) =>
    props.template === "page" ? "calc(100vh - 331px)" : "unset"};
  overflow-y: auto;
  margin-top: ${(props) => (props.template === "page" ? "16px" : "unset")};
  padding: ${(props) => (props.template === "page" ? "8px" : "unset")};
  display: ${(props) => (props.template === "page" ? "flex" : "grid")};
  flex-wrap: wrap;
  gap: ${(props) => (props.template === "page" ? "24px" : "8px")};
  text-align: left;
  p {
    text-align: center;
    font-size: ${(props) => (props.template !== "page" ? "14px" : "16px")};
    height: ${(props) => (props.template !== "page" ? "unset" : "100px")};
    width: ${(props) => (props.template !== "page" ? "unset" : "200px")};
    display: ${(props) => (props.template !== "page" ? "flex" : "grid")};
    gap: 4px;
    align-items: center;
    justify-content: ${(props) =>
      props.template === "page" ? "center" : "flex-start"};
    justify-items: center;
    padding: ${(props) => (props.template !== "page" ? "0" : "16px")};
    box-shadow: ${(props) =>
      props.template !== "page" ? "none" : "0 0 2px 4px #edebde"};
    border-radius: 8px;
    @media screen and (max-width: 700px) {
      width: ${(props) => (props.template !== "page" ? "unset" : "130px")};
      height: ${(props) => (props.template !== "page" ? "unset" : "120px")};
    }
    span {
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    max-height: unset;
    overflow-y: unset;
    justify-content: ${(props) =>
      props.template !== "page" ? "flex-start" : "center"};
  }
`;

export default TagsList;
