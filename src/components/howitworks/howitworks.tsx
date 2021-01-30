import React from "react"
import "./howitworks.css"
import { FontSizes } from "@uifabric/fluent-theme/lib/fluent/FluentType"
import { Stack, Text, PrimaryButton } from "@fluentui/react"

const HowItWorks: React.FunctionComponent = () => {
  const videoIFrameMarkup =`
      <iframe
        class="intro-vid"
        src="https://www.youtube-nocookie.com/embed/OxRhcviTFaA?showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
  `;
  return (
    <div className="howitworks-container">
      <Text as="h2" variant="xLarge" block>
        How it works
      </Text>

      <div dangerouslySetInnerHTML={{ __html: videoIFrameMarkup }} />
    </div>
  )
}

export default HowItWorks
