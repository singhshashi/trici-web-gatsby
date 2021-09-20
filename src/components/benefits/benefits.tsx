import React from "react"
import "./benefits.css"
import { Text } from "@fluentui/react"

const Benefits: React.FunctionComponent = () => {
  return (
    <div className="benefits-container">
      <Text as="h3" variant="xxLarge" block>
        How Trici saves you a little bit of time - everytime!
      </Text>
      <div className="benefit">
        <div className="benefit-text-container">
          <Text as="p" variant="xxLarge" block>
            Start Coding Sooner
          </Text>
          <Text as="p" block variant="mediumPlus">
            Rebuild your train of thought in seconds by watching Smart Replay of your last focus session. No more switching between files in your editor or tabs in your browser to recollect your train of thought.
          </Text>
        </div>
        <div className="benefit-image-container">
          <img
            alt="benefit"
            src="images/RecapSession.gif"
            className="benefit-image"
          />
          <Text as="p" block variant="smallPlus">
            A High Speed Replay of a Focus Session.
          </Text>
        </div>
      </div>
      <div className="benefit inverse">
        <div className="benefit-text-container">
          <Text as="p" variant="xxLarge" block>
            Easier Context Switching
          </Text>
          <Text as="p" block variant="mediumPlus">
            Having to switch between tasks often? With Trici, you can filter Focus Sessions by Task or date allowing you to recover your train of thought for a task you had to leave unfinished. Trici is a superpower for those who have to switch between tasks often.
          </Text>
        </div>
        <div className="benefit-image-container">
          <img
            alt="benefit"
            src="images/SearchByTask.gif"
            className="benefit-image"
          />
          <Text as="p" block variant="smallPlus">
            Filter Focus Sessions by Task Name or Date.
          </Text>
        </div>
      </div>
      <div className="benefit">
        <div className="benefit-text-container">
          <Text as="p" variant="xxLarge" block>
            Block Distracting Websites
          </Text>
          <Text as="p" block variant="mediumPlus">
            Checking Twitter while your code builds? Block distracting websites when you start a Focus Session and don't break your train of thought in the first place.
          </Text>
        </div>
        <div className="benefit-image-container">
          <img
            alt="benefit"
            src="images/WebsiteBlocker.gif"
            className="benefit-image"
          />
          <Text as="p" block variant="smallPlus">
            Twitter, facebook and other sites blocked during a Focus Session.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Benefits
