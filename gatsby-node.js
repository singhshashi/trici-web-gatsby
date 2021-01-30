const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = node.fileAbsolutePath.split("content")[1].replace(".md", "")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const docsTemplate = path.resolve(`./src/templates/docs.tsx`);
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
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
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `${node.fields.slug}`,
      component: docsTemplate,
      context: { slug: `${node.fields.slug}`}
    })
  })
}
