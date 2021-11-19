import React from "react"
import { Stack, Text, Link, FontWeights } from "@fluentui/react"
import "./layout.css"
import logo from "../../../static/images/trici_logo_light.png"
import Header from "../header/header"
import Footer from "../footer/footer"
import { ThemeProvider } from "@fluentui/react-theme-provider"
import { themes } from "../../common/themes"
import { initializeIcons } from "@uifabric/icons"

initializeIcons("/icons/");

const Layout: React.FunctionComponent = props => {
  const themeLight = themes.themeTriciLight;
  const themeDark = themes.themeTriciDark;
  const themeBhor = themes.themeBhor;
  return (
    <ThemeProvider theme={themeBhor}>
      <div className="page-container">
        <div className="headerSection">
          <Header />
        </div>
        <div className="content-container">{props.children}</div>
        <div className="footerSection">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
