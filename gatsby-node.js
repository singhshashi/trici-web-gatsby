const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = node.fileAbsolutePath.split("content")[1].replace(".md", "").split("__")[0]

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
  const pageTemplate = path.resolve(`./src/templates/markdownpage.tsx`);
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
    const path = `${node.fields.slug}`;
    const pageComponent = path.includes("docs") ?  docsTemplate : pageTemplate;
    createPage({
      path: `${node.fields.slug}`,
      component: pageComponent,
      context: { slug: `${node.fields.slug}`}
    })
  })
}
