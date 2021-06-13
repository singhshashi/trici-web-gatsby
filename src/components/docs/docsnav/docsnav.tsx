import React from "react"
import "./docsnav.css"
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav"
import { useStaticQuery, graphql } from "gatsby"

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function replaceHyphenWithSpace(word: string): string {
  return word.replace('-', ' ');
}

function getNavLinkStructure(nodes: Array<any>): any {
  let navLinkStructure = { links: [] }
  const docsNodes = nodes.filter(node => node.relativeDirectory.includes("docs"))
  docsNodes.forEach(node => {
    const level = (node.relativeDirectory.match(/\//g) || []).length
    const cleanedNodeName = node.name.split("__")[0];
    const nodePosition = node.name.split("__")[1];
    if (level === 0) {
      const navLinkObject = {
        name: replaceHyphenWithSpace(capitalizeFirstLetter(cleanedNodeName)),
        url: `/${node.relativeDirectory}/${cleanedNodeName}`,
        key: `/${node.relativeDirectory}/${cleanedNodeName}`,
        isExpanded: true,
      }
      navLinkStructure.links.splice(nodePosition,0,navLinkObject)

    } else if (level === 1) {
      const parentLinkObjectName = replaceHyphenWithSpace(capitalizeFirstLetter(node.relativeDirectory.split("docs/")[1]));
      if (!navLinkStructure.links.some(link => link.name === parentLinkObjectName)) {
        const parentLinkObject = {
          name: parentLinkObjectName,
          isExpanded: true,
          key: `/${node.relativeDirectory}`,
          links: []
        }
        navLinkStructure.links.push(parentLinkObject);
      }
      const parentLinkObject = navLinkStructure.links.find(link => link.name === parentLinkObjectName);
      const navLinkObject = {
        name: replaceHyphenWithSpace(capitalizeFirstLetter(cleanedNodeName)),
        url: `/${node.relativeDirectory}/${cleanedNodeName}`,
        key: `/${node.relativeDirectory}/${cleanedNodeName}`,
        isExpanded: true,
      }
      parentLinkObject.links.splice(nodePosition,0,navLinkObject);
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
