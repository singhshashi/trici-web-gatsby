import React from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import "./layout.css"
import logo from "../../../static/images/trici_logo_light.png"


const Layout: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="start"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign:"center",
          color: "#cccc34",
        },
      }}
      className="App"
      gap={15}
    >
      <img
        src={logo}
        alt="trici"
        className="App-logo"
      />
     
     
    </Stack>
  )
}

export default Layout
