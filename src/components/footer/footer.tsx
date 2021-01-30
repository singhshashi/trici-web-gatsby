import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider } from "@fluentui/react-theme-provider"
import { Text } from "@fluentui/react"
import { themes } from "../../common/themes"
import "./footer.css"

const darkTheme = themes.triciThemeDark
const lightTheme = themes.triciThemeLight

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyRightYear
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer-caption">
        <Text as="h4" variant="xLarge" block>
          Time Saved Equals Happy Developers!
        </Text>
      </div>
      <div className="footer-content">
        <div className="about">
          <Text as="h5" variant="large" block>About Trici</Text>
          <Text as="p" variant="mediumPlus" block>
            Trici was built out of the frustration of lost productivity due to
            interruptions, many of them genuine. I tried a bunch of tools and
            techniques to improve my focus, but found them lacking in one
            respect or another. Trici is an attempt to scratch that itch to Stay
            in the Zone, more often. To experience the satisfaction of getting
            things done.
          </Text>
        </div>
        <div className="links">
          <Text as="p" variant="large" block>Follow us on Twitter</Text>

          <a href="https://twitter.com/gettrici">twitter.com/gettrici</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
