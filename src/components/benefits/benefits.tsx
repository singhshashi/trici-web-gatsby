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
            src="https://via.placeholder.com/640x480.png?text=Trici Focus Session Review"
            className="benefit-image"
          />
        </div>
      </div>
      <div className="benefit inverse">
        <div className="benefit-text-container">
          <Text as="p" variant="xxLarge" block>
            Easier Context Switching
          </Text>
          <Text as="p" block variant="mediumPlus">
            Having to switch between tasks often? With Trici, you can filter Focus Sessions by Task allowing you to recover your train of thought for a task you had to leave unfinished. Trici is a superpower for those who have to switch between tasks often.
          </Text>
        </div>
        <div className="benefit-image-container">
          <img
            alt="benefit"
            src="https://via.placeholder.com/640x480.png?text=Trici Focus Session Review"
            className="benefit-image"
          />
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
            src="https://via.placeholder.com/640x480.png?text=Trici Focus Session Review"
            className="benefit-image"
          />
        </div>
      </div>
    </div>
  )
}

export default Benefits
