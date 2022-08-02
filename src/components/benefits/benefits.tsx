import React from "react"
import "./benefits.css"
import { Text } from "@fluentui/react"
import { PrimaryButton } from "@fluentui/react/lib/Button";
import DownloadButton from "../shared/DownloadButton";

const Benefits: React.FunctionComponent = () => {
  const gotoDownloads = () => {
    window.location.href = "/download";
  }

  const downloadButtonStyles = {
    root: {
      width: 300,
      height: 70,
      borderRadius: 5,
    },
    label: {
      fontSize: 22,
    }
  }
  return (
    <div className="benefits-container">
      <Text as="h3" variant="xxLargePlus" block>
        How Trici saves you a little bit of time - everytime!
      </Text>
      <div className="benefit">
        <div className="benefit-text-container">
          <Text as="p" variant="xxLargePlus" block>
            Start Coding Sooner
          </Text>
          <Text as="p" block variant="large">
            Rebuild your train of thought in seconds by watching Smart Replay of your last focus session. No more switching between files in your editor or tabs in your browser to recollect your train of thought.
          </Text>
          {/* <PrimaryButton text="Download for Free" onClick={gotoDownloads} iconProps={{ iconName: "Installation" }} id="btnDownloadForFree" /> */}
        </div>
        <div className="benefit-image-container">
          <img
            alt="benefit"
            src="/images/dev_interruptions_recovery.webp"
            className="benefit-image"
          />
          <Text as="p" block variant="medium">
            Time taken to recover to core productivity after an interruption. 
          </Text>
        </div>
      </div>
      <div className="benefit inverse">
        <div className="benefit-text-container">
          <Text as="p" variant="xxLargePlus" block>
            Easier Context Switching
          </Text>
          <Text as="p" block variant="large">
            Having to switch between tasks often? With Trici, you can filter Focus Sessions by Task or date allowing you to recover your train of thought for a task you had to leave unfinished. Trici is a superpower for those who have to switch between tasks often.
          </Text>
          {/* <PrimaryButton text="Download for Free" onClick={gotoDownloads} iconProps={{ iconName: "Installation" }} id="btnDownloadForFree" /> */}
        </div>
        <div className="benefit-image-container">
          <img
            alt="benefit"
            src="images/SearchByTask.gif"
            className="benefit-image"
          />
          <Text as="p" block variant="medium">
            Filter Focus Sessions by Task Name or Date.
          </Text>
        </div>
      </div>
      <div className="benefit">
        <div className="benefit-text-container">
          <Text as="p" variant="xxLargePlus" block>
            Block Distracting Websites
          </Text>
          <Text as="p" block variant="large">
            Checking Twitter while your code builds? Block distracting websites when you start a Focus Session and don't break your train of thought in the first place.
          </Text>

        </div>
        <div className="benefit-image-container">
          <img
            alt="benefit"
            src="images/WebsiteBlocker.gif"
            className="benefit-image"
          />
          <Text as="p" block variant="medium">
            Twitter, facebook and other sites blocked during a Focus Session.
          </Text>
        </div>
      </div>
      <br />
      <br />
      <br />
      <DownloadButton hero={false} id="btnBenefitsDownloadForFree" />
      {/* <PrimaryButton text="Download for Free" onClick={gotoDownloads} iconProps={{ iconName: "Installation" }} styles={downloadButtonStyles} id="btnDownloadForFree" />     */}
    </div>
  )
}

export default Benefits
