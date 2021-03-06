import React from "react"
import Layout from "../../components/layout/layout"
import { Text, CompoundButton } from "@fluentui/react"
import "../../templates/page.css"
import "./downloads.css"

const UbuntuDownload: React.FunctionComponent = () => {
  function downloadInstaller(e) {
    console.log("Download Button Clicked");
    window.open('https://download.gettrici.com/linux-x64/trici_2.2.0_amd54.deb');
  }
  return (
    <Layout>
      <div className="pageContainer">
        <div className="donwloadContainer">
          <div className="donwloadButtonContainer">
            <img
              alt="Mac"
              src="https://cdn.gettrici.com/ubuntu_orange_hex_su.svg"
              className="macos-logo"
            />
            <CompoundButton
              primary
              secondaryText="ubuntu 16.04+"
              iconProps={{ iconName: "Download" }}
              className="downloadButton"
            >
              DOWNLOAD
            </CompoundButton>
          </div>
          <div className="legalstuff">
            <Text as="p" variant="small" block>By using Trici, you agree to its <a href="/terms">Terms of Use</a> and <a href="/privacy">privacy statement</a>.</Text>
            <Text as="p" variant="small" block>
             Ubuntu and Canonical are registered trademarks of Canonical Ltd.
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default UbuntuDownload