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
          <Text as="p" block>
            Lorem Ipsum dolor sit amet Blah bblah
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
            Block Distracting Websites
          </Text>
          <Text as="p" block>
            Lorem Ipsum dolor sit amet Blah bblah
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
           Easily Switch Between Tasks
          </Text>
          <Text as="p" block>
            Lorem Ipsum dolor sit amet Blah bblah
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
