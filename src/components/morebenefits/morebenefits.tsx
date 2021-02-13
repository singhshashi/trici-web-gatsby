import React from "react"
import "./morebenefits.css"
import { Text } from "@fluentui/react"
import { FontIcon } from "@fluentui/react/lib/Icon"
import { mergeStyles } from "@fluentui/react/lib/Styling"

const MoreBenefits: React.FunctionComponent = () => {
  const iconClass = mergeStyles({
    fontSize: 25,
    height: 25,
    width: 25,
    margin:'0 10px'
  });

  return (
    <div className="morebenefits-container">
      <Text as="h3" block variant="xxLarge">
        More reasons why you will love Trici
      </Text>
      <div className="morebenefits-row">
        <div className="morebenefits-item">
          <FontIcon iconName="ThisPC" className={iconClass} />
          <Text as="h6" variant="large" block>Privacy Guaranteed</Text>
          <Text as="p" block>No registration needed. All data resides on your computer.</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="PlaybackRate1x" className={iconClass} />
          <Text as="h6" variant="large" block> Smart Replay</Text>
          <Text as="p" block>Replays session video at variable high speeds. 6x speed when you were active, 20x when you were inactive.</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="Hide2" className={iconClass} />
          <Text as="h6" variant="large" block> Inactvity Detection</Text>
          <Text as="p" block>Automatically ends Focus Session if user is not active on the computer.</Text>
        </div>
      </div>
      <div className="morebenefits-row">
        <div className="morebenefits-item">
          <FontIcon iconName="Timer" className={iconClass} />
          <Text as="h6" variant="large" block> Track Focus Time</Text>
          <Text as="p" block>Tasks completed, lines of code committed can vary between days. Hours focused every day is a consistent metric to track across days.</Text>
        </div>

        <div className="morebenefits-item">
          <FontIcon iconName="Annotation" className={iconClass} />
          <Text as="h6" variant="large" block>Annotate and Search Sessions</Text>
          <Text as="p" block>Annotate moments of a Focus Session, like spotting a bug. Search annotations across sessions.</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="HardDrive" className={iconClass} />
          <Text as="h6" variant="large" block> Disk Space Management</Text>
          <Text as="p" block>Choose how much space should recordings occupy before they start getting purged.</Text>
        </div>
      </div>
    </div>
  )
}

export default MoreBenefits
