import React from "react"
import { Stack, Text, Link, FontWeights } from "@fluentui/react"
import "./page.css"
import { themes } from "../common/themes"
import Layout from "../components/layout/layout"
import DocsNav from "../components/docs/docsnav/docsnav"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
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
      <div className="pageContainer">
        <div className="pageContent" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
        </div>
      </div>
    </Layout>
  )
}

export default Docs
