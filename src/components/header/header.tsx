import React from 'react';
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import "./header.css"



const Header: React.FunctionComponent = () => {
  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      verticalAlign="center"            
      className="header"      
    >
      <Stack.Item>
      <img
        src="http://cdn.gettrici.com/trici_logo_light.png"
        alt="trici"
        className="logo"
      />
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal horizontalAlign="space-evenly" gap={50}>
          <Link href="/">Features</Link>
          <Link>Pricing</Link>
          <Link>Resources</Link>        
          <Link>Blog</Link>
        </Stack>        
      </Stack.Item>




    </Stack>
  )
}

export default Header