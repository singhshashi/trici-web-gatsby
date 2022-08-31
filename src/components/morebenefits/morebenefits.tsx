import React from "react"
import "./morebenefits.css"
import { Text } from "@fluentui/react"
import { FontIcon } from "@fluentui/react/lib/Icon"
import { mergeStyles } from "@fluentui/react/lib/Styling"
import { PrimaryButton } from "@fluentui/react/lib/Button";

const MoreBenefits: React.FunctionComponent = () => {
  const iconClass = mergeStyles({
    fontSize: 25,
    height: 25,
    width: 25,
    margin:'0 10px'
  });

  const gotoDownloads = () => {
    window.location.href="/download";
  };

  return (
    <div className="morebenefits-container">
      <Text as="h3" block variant="xxLargePlus">
        More reasons why you will love Trici
      </Text>
      <div className="morebenefits-row">
        <div className="morebenefits-item">
          <FontIcon iconName="ThisPC" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block>Privacy Guaranteed</Text>
          <Text as="p" variant="large" block>No registration needed. All data resides on your computer.</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="PlaybackRate1x" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block> Smart Replay</Text>
          <Text as="p" variant="large" block>Replays session video at variable high speeds. 6x speed when you were active, 20x when you were inactive.</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="Hide2" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block> Inactivity Detection</Text>
          <Text as="p" variant="large" block>Automatically ends Focus Session if user is not active on the computer.</Text>
        </div>
      </div>
      <div className="morebenefits-row">
        <div className="morebenefits-item">
          <FontIcon iconName="Timer" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block> Track Focus Time</Text>
          <Text as="p" variant="large" block>Tasks completed, lines of code committed can vary between days. Hours focused every day is a consistent metric to track across days.</Text>
        </div>

        <div className="morebenefits-item">
          <FontIcon iconName="Annotation" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block>Annotate and Search Sessions</Text>
          <Text as="p" variant="large" block>Annotate moments of a Focus Session, like spotting a bug. Search annotations across sessions.</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="HardDrive" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block> Disk Space Management</Text>
          <Text as="p" variant="large" block>Choose how much space should recordings occupy before they start getting purged.</Text>
        </div>
      </div>
      <div className="morebenefits-row">
        <div className="morebenefits-item">
          <FontIcon iconName="AddNotes" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block>Automatic Daily Work Log</Text>
          <Text as="p" variant="large" block>Trici keeps a log of your daily work. Add tasks to your day plan, note down thoughts about the day.</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="Cut" className={iconClass} />
          <Text as="h6" variant="xLargePlus" block>Create Clips</Text>
          <Text as="p" variant="large" block>Create smaller clips from your Focus Session recordings.</Text>
        </div>
      </div>
          {/* <PrimaryButton text="Download for Free" onClick={gotoDownloads} iconProps={{ iconName: "Installation" }} id="btnDownloadForFree" /> */}
    </div>
  )
}

export default MoreBenefits
