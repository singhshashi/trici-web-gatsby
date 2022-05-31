import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider } from "@fluentui/react-theme-provider"
import { Text, Link } from "@fluentui/react"
import { Stack } from "@fluentui/react/lib/Stack"
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
            Trici is a desktop application that that records your screen when you start a Focus Session. You set the context of the session by selecting the task you are working on. You can mark important moments during a session 
            as well as take notes during or after the session. Thus you have a screen recording tied to the task you were working on as well as notes and important moments that you may have marked. You can use this as a memory aid 
            to help you regain your train of thought after any interruption or otherwise.
          </Text>
        </div>
        <div className="links">
          <Stack verticalAlign="space-evenly" verticalFill>
          <Stack.Item>
              <Stack tokens={{childrenGap: 15}}>
                <Stack.Item>
                  <Link href="/blog" theme={themes.themeTriciDark}>Blog</Link>
                </Stack.Item>
                <Stack.Item>
                  <Link href="/docs" theme={themes.themeTriciDark}>Docs</Link>
                </Stack.Item>
              </Stack>
          </Stack.Item>
            <Stack.Item>
              <a href="https://discord.gg/866ErbpvEF"><img src="images/join_discord.webp" alt="join us on discord" width="100px" /></a>
          </Stack.Item>
          
        </Stack>



        </div>
      </div>
    </footer>
  )
}
export default Footer
