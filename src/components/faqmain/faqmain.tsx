import React from "react"
import "./faqmain.css"
import { Text } from "@fluentui/react"

const FaqMain: React.FunctionComponent = () => {
  return (
    <div className="faqmain-container">
      <div className="faqmain-heading">
        <Text as="h4" block variant="xLarge">
          Frequently Asked Questions
        </Text>
      </div>
      <div className="faqmain-content">
        <div className="faqmain-item">
          <Text as="h6" block variant="mediumPlus">
            What are the system requirements to install Trici?
          </Text>
          <Text as="p" block variant="medium">
            Trici is currently available for macOS (10.12 or higher) and Ubuntu
            Linux(14.10 or higher). The system RAM should be 8 GB or more. For
            macOS, Trici only supports the Intel chips architecture. Apple
            Silicon support is in the works.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="mediumPlus">
            Where is my data stored?
          </Text>
          <Text as="p" block variant="medium">
            All Trici data, i.e. screen recordings, tasks, settings etc. is stored on your local system and is never sent to any remote location. Trici works even when you are completely offline.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="mediumPlus">
            How much disk space do the recordings occupy?
          </Text>
          <Text as="p" block variant="medium">
            By default, the focus session recordings will occupy a maximum space
            of 2 GB, after which purging happens. The recording of a typical 30
            minute focus session occupies around 50-80 MB disk space.
          </Text>
        </div>        <div className="faqmain-item">
          <Text as="h6" block variant="mediumPlus">
           What if I use multiple monitors?
          </Text>
          <Text as="p" block variant="medium">
             You can specify which screen to record in the settings. Currently, Trici can only record one screen.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="mediumPlus">
            What is Smart Mode when viewing Recordings?
          </Text>
          <Text as="p" block variant="medium">
When viewing a recording in smart mode, the player plays at variable speeds, playing at much higher speeds, those portions of the session where the user was inactive. By default, the smart mode is switched on.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="mediumPlus">
           When will Trici be available for Windows?
          </Text>
          <Text as="p" block variant="medium">
            A version that works on Windows is under development and expected to be available tentatively by November 5, 2021. Request Access and select your OS as Windows to expedite development of that version.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default FaqMain
