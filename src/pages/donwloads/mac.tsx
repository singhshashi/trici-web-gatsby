import React from "react"
import Layout from "../../components/layout/layout"
import { Text, CompoundButton } from "@fluentui/react"
import "../../templates/page.css"
import "./downloads.css"

const MacDownload: React.FunctionComponent = () => {
  function downloadInstaller(e){
    console.log('Download Button was clicked');
    window.open('https://download.gettrici.com/darwin-x64/Trici-2.1.2.dmg');
  }
  return (
    <Layout>
      <div className="pageContainer">
        <div className="donwloadContainer">
          <div className="donwloadButtonContainer">
            <img
              alt="Mac"
              src="https://cdn.gettrici.com/mac.svg"
              className="macos-logo"
            />
            <CompoundButton
              primary
              secondaryText="MacOS 10.12+"
              iconProps={{ iconName: "Download" }}
              className="downloadButton"
              onClick={downloadInstaller}
            >
              DOWNLOAD
            </CompoundButton>
          </div>
          <div className="legalstuff">
            <Text as="p" variant="small" block>By using Trici, you agree to its <a href="/terms">Terms of Use</a> and <a href="/privacy">privacy statement</a>.</Text>
            <Text as="p" variant="small" block>
              Mac and the Mac logo are trademarks of Apple Inc., registered in
              the U.S. and other countries.
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default MacDownload
