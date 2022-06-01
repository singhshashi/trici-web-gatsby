import React from "react"
import "./howitworks.css"
import { Stack, Text, PrimaryButton } from "@fluentui/react"

const HowItWorks: React.FunctionComponent = () => {
  const videoIFrameMarkup =`
      <iframe
        class="intro-vid"
        src="https://www.youtube-nocookie.com/embed/JTAiEWOzkWg?showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
  `;
  const vimeoEmbedMarkup = `
  <div style="padding-bottom: 56.25%; position: relative;"><iframe width="100%" height="100%" src="https://player.vimeo.com/video/714085188?byline=0&portrait=0&title=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><small>Vimeo embedding powered by <a href="https://embed.tube">embed.tube</a></small></iframe></div>
  `;
  return (
    <div className="howitworks-container">
      <Text as="h2" variant="xxLargePlus" block>
        How It Works
      </Text>


      <div dangerouslySetInnerHTML={{ __html: vimeoEmbedMarkup }} className="pitchvid-container" />
            <div className="howitworks-pitch"> <Text as="p" variant="large">Trici is a desktop application that records your screen activity during a Focus Session and replays it at high speed to help you remember faster.</Text></div>
    </div>
  )
}

export default HowItWorks
