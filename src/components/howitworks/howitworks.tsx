import React from "react"
import "./howitworks.css"
import { FontSizes } from "@uifabric/fluent-theme/lib/fluent/FluentType"
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
  <iframe class="intro-vid" src="https://player.vimeo.com/video/647717216?h=4600f20193&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen;" allowfullscreen title="Introducing Trici"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
  `;
  return (
    <div className="howitworks-container">
      <Text as="h2" variant="xLarge" block>
        How it works
      </Text>

      <div dangerouslySetInnerHTML={{ __html: vimeoEmbedMarkup }} />

            <div className="howitworks-pitch"> <p>Trici is a desktop application that helps developers regain lost productivity due interruptions and context switching. It reduces the time taken to recover your lost train of thought from 10 minutes or more to less than 2 minutes.</p></div>
    </div>
  )
}

export default HowItWorks
