import React from "react"
import "./howitworks.css"
import { Stack, Text, PrimaryButton } from "@fluentui/react"

const HowItWorksShort: React.FunctionComponent = () => {
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
  <iframe class="pitch-vid" src="https://player.vimeo.com/video/647717216?h=4600f20193&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen;" allowfullscreen title="Introducing Trici"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
  `;
  return (
    <div className="pitchvid-container">

      <div dangerouslySetInnerHTML={{ __html: vimeoEmbedMarkup }} />

    </div>
  )
}

export default HowItWorksShort
