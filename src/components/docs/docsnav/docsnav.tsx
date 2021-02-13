import React from "react"
import "./docsnav.css"
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav"
import { useStaticQuery, graphql } from "gatsby"

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function getNavLinkStructure(nodes: Array<any>): any {
  let navLinkStructure = { links: [] }
  const docsNodes = nodes.filter(node => node.relativeDirectory.includes("docs"))
  docsNodes.forEach(node => {
    const level = (node.relativeDirectory.match(/\//g) || []).length
    if (level === 0) {
      const navLinkObject = {
        name: capitalizeFirstLetter(node.name),
        url: `/${node.relativeDirectory}/${node.name}`,
        key: `/${node.relativeDirectory}/${node.name}`,
        isExpanded: true,
      }
      if (node.name === "home") {
        navLinkStructure.links.unshift(navLinkObject)
      } else {
        navLinkStructure.links.push(navLinkObject)
      }
    }
  })
  console.log(navLinkStructure)
  return navLinkStructure
}

const DocsNav: React.FunctionComponent = ({ selectedNode }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
          relativeDirectory
          extension
          name
        }
      }
    }
  `)

  const navLinkStructure = getNavLinkStructure(data.allFile.nodes)
  const navLinkGroups: INavLinkGroup[] = [navLinkStructure]

  const navStyles: Partial<INavStyles> = { root: { width: 200 } }
  return (
    <div>
      <Nav
        selectedKey={selectedNode}
        aria-label="Trici Documentation"
        styles={navStyles}
        groups={navLinkGroups}
      />
    </div>
  )
}
export default DocsNav
