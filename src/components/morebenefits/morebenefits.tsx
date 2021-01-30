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
          <Text as="p" block>Lorem ipsum dolor sit amet, consectetur akls;djf adsfkljasdf asdlfj</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="CheckList" className={iconClass} />
          <Text as="h6" variant="large" block> Simple Task Manager</Text>
          <Text as="p" block>Lorem ipsum dolor sit amet, consectetur akls;djf adsfkljasdf asdlfj</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="Hide2" className={iconClass} />
          <Text as="h6" variant="large" block> Inactvity Detection</Text>
          <Text as="p" block>Lorem ipsum dolor sit amet, consectetur akls;djf adsfkljasdf asdlfj</Text>
        </div>
      </div>
      <div className="morebenefits-row">
        <div className="morebenefits-item">
          <FontIcon iconName="Timer" className={iconClass} />
          <Text as="h6" variant="large" block> Track Focus Time</Text>
          <Text as="p" block>Lorem ipsum dolor sit amet, consectetur akls;djf adsfkljasdf asdlfj</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="PlaybackRate1x" className={iconClass} />
          <Text as="h6" variant="large" block> Smart Replay</Text>
          <Text as="p" block>Lorem ipsum dolor sit amet, consectetur akls;djf adsfkljasdf asdlfj</Text>
        </div>
        <div className="morebenefits-item">
          <FontIcon iconName="HardDrive" className={iconClass} />
          <Text as="h6" variant="large" block> Automatic Disk Space Management</Text>
          <Text as="p" block>Lorem ipsum dolor sit amet, consectetur akls;djf adsfkljasdf asdlfj</Text>
        </div>
      </div>
    </div>
  )
}

export default MoreBenefits
