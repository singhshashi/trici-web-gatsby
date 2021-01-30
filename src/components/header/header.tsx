import React, { useState } from "react"
import {
  Text,
  Link,
  IconButton,
} from "@fluentui/react"
import { Customizations } from "@fluentui/react/lib/Utilities"
import { Panel, PanelType } from "@fluentui/react/lib/Panel"
import { themes } from "../../common/themes"
import { ThemeProvider } from "@fluentui/react-theme-provider"
import "./header.css"

const themeTriciDark = themes.themeTriciDark ;

const Header: React.FunctionComponent = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <div className="headerContainer">
        <div className="headerExpanded">
          <div className="logoContainer">
            <a href="/">
              <img
                src="http://cdn.gettrici.com/trici_logo_light.png"
                alt="trici"
                className="logo"
              />
            </a>
          </div>
          <div className="links">
            {/* <Link href="/features" theme={themeTriciDark}>Features</Link> */}

            {/* <Link>Pricing</Link> */}
            <Link href="/docs/home" theme={themeTriciDark}>Docs</Link>
            <Link href="/blog" theme={themeTriciDark}>Blog</Link>
            <Link href="/changelog" theme={themeTriciDark}>Changelog</Link>
          </div>
        </div>
      <div className="headerCollapsed">
        <IconButton
          iconProps={{ iconName: "GlobalNavButton" }}
          onClick={() => {
            setMenuVisible(!menuVisible)
          }}
          theme={themeTriciDark}
        />
        <Panel
          isBlocking={false}
          isOpen={menuVisible}
          onDismiss={() => {
            setMenuVisible(false)
          }}
          closeButtonAriaLabel="Close"
          type={PanelType.custom}
          customWidth={'240px'}
        >
          <ul className="navMenu">
            <li>
              <Link href="">Features</Link>
            </li>
            {/* <li><Link href="">Pricing</Link></li> */}
            <li>
              <Link href="">Help</Link>
            </li>
            <li>
              <Link href="">Changelog</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
          </ul>
        </Panel>
      </div>
    </div>
  )
}

export default Header
