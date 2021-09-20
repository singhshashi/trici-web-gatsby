import React from "react"
import { Stack, Text, Link, FontWeights } from "@fluentui/react"
import "./page.css"
import { themes } from "../common/themes"
import Layout from "../components/layout/layout"
import DocsNav from "../components/docs/docsnav/docsnav"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
        keywords
        lastUpdatedDate
      }
      html
      fields {
        slug
      }
    }
  }
`

const Docs: React.FunctionComponent = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>{props.data.markdownRemark.frontmatter.title}</title>
        <meta name="description" content={props.data.markdownRemark.frontmatter.description} />
        <meta name="keywords" content={props.data.markdownRemark.frontmatter.keywords} />
      </Helmet>
      <div className="pageContainer">
        <div className="pageContent" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
        </div>
      </div>
    </Layout>
  )
}

export default Docs
