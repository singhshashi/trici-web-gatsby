import React from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import "./index.css"
import Hero from "../components/hero/hero";
import { loadTheme } from 'office-ui-fabric-react/lib/Styling'
import { themes } from '../common/themes' 

  
loadTheme(themes.themeTriciLight)

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Hero />
      <Stack
        styles={{
            root: {
                maxWidth: "1280px",
                maxHeight: "550px",                
                margin: "0 auto",
                textAlign: "center"                
            },
        }}
        gap={30}
      >
        <Stack.Item>
        <div className="how-it-works">
          <Text as="h2" block={true}>How it works</Text>
          <iframe className="intro-vid" src="https://www.youtube-nocookie.com/embed/OxRhcviTFaA?showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <Text as="h2" block={true}>How Trici saves you a little bit of time - everytime!</Text>
        </div>
        
        </Stack.Item>        
      </Stack>      
    </div>
    
  )
}

export default App
