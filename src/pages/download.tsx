import React, { useState, useEffect, useCallback } from "react"
import Layout from "../components/layout/layout"
import {
  Text,
  CompoundButton,
  Stack,
  MessageBar,
  MessageBarType,
  mergeStyles,
} from "@fluentui/react"
import { Dialog, DialogType, DialogFooter } from "@fluentui/react/lib/Dialog"
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button"
import { useBoolean } from "@fluentui/react-hooks"
import { TextField } from "@fluentui/react/lib/TextField"
import { ChoiceGroup } from "@fluentui/react/lib/ChoiceGroup"
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner"
const axios = require("axios")

import "../templates/page.css"
import "./downloads.css"

const modalProps = {
  isBlocking: true,
  topOffsetFixed: true,
}

const dialogContentProps = {
  type: DialogType.largeHeader,
  title: "Get Notified of Updates",
  closeButtonAriaLabel: "Close",
  //   subText: 'Do you want to send this message without a subject?',
}


const Download: React.FunctionComponent = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true)
  
  



  function downloadInstaller(platform) {
    console.log("Download Button was clicked")
    console.log(platform)
    let downloadUrl = ""
    let willNavigate = false
    switch (platform) {
      case "macos-x64": {
        downloadUrl = "/thank-you?platform=macos-x64"
        willNavigate = true
        break
      }
      case "macos-arm64": {
        downloadUrl = "/thank-you?platform=macos-arm64"
        willNavigate = true
        break
      }
      case "debian-x64": {
        downloadUrl = "/thank-you?platform=debian-x64"
        willNavigate = true
        break
      }
      case "rpm-x64": {
        downloadUrl = "/thank-you?platform=rpm-x64"
        willNavigate = true
        break
      }
      case "linux-zip-x64": {
        downloadUrl = "/thank-you?platform=linux-zip-x64"
        willNavigate = true
        break
      }
      case "windows-x64": {
        downloadUrl = "/thank-you?platform=windows-x64"
        willNavigate = true;
        break
      }
      default: {
        willNavigate = false
        break
      }
    }
    if (willNavigate) {
      window.location.href = downloadUrl
    }
  }
  return (
    <Layout>
      <div className="pageContainer">
        <div className="pageContent">
          <div className="pageTitleContainer">
            <Text variant="xxLarge" className="downloadTitle" as="h1" block>
              Download Trici Desktop
            </Text>
            <Text variant="large" className="downloadSubtitle" as="h2" block>
              Free and built using open source technologies. No registration
              required.
            </Text>
          </div>
          <div className="downloadContainer">
            <div className="downloadButtonsRow">
              <div className="downloadButtonsItem">
                <img
                  alt="Mac"
                  src="https://cdn.gettrici.com/mac.svg"
                  className="macos-logo"
                />
                <div className="downloadButtonContainer">
                  <CompoundButton
                    primary
                    secondaryText="MacOS 10.12+"
                    iconProps={{ iconName: "Download" }}
                    className="downloadButton"
                    onClick={() => downloadInstaller("macos-x64")}
                  >
                    Intel x64 .dmg
                  </CompoundButton>
                  <CompoundButton
                    primary
                    secondaryText="MacOS 11+"
                    iconProps={{ iconName: "Download" }}
                    className="downloadButton"
                    onClick={() => {
                      downloadInstaller("macos-arm64")
                    }}
                  >
                    Apple Silicon (arm64) .dmg
                  </CompoundButton>
                </div>
              </div>
              <div className="downloadButtonsItem">
                <img
                  alt="Ubuntu"
                  src="https://cdn.gettrici.com/linux-logo.png"
                  className="macos-logo"
                />
                <div className="downloadButtonContainer">
                  <CompoundButton
                    primary
                    secondaryText="Debian, Ubuntu 18.04+"
                    iconProps={{ iconName: "Download" }}
                    className="downloadButton"
                    onClick={() => downloadInstaller("debian-x64")}
                  >
                    .deb
                  </CompoundButton>
                  <CompoundButton
                    primary
                    secondaryText="Red Hat, Fedora, SUSE"
                    iconProps={{ iconName: "Download" }}
                    className="downloadButton"
                    onClick={() => downloadInstaller("rpm-x64")}
                  >
                    .rpm
                  </CompoundButton>
                  <CompoundButton
                    primary
                    secondaryText="Any Linux"
                    iconProps={{ iconName: "Download" }}
                    className="downloadButton"
                    onClick={() => downloadInstaller("linux-zip-x64")}
                  >
                    .zip
                  </CompoundButton>
                </div>
              </div>
              <div className="downloadButtonsItem">
                <img
                  alt="Windows"
                  src="https://cdn.gettrici.com/windows-logo.png"
                  className="macos-logo"
                />
                <CompoundButton
                  primary
                  secondaryText="Windows 8+"
                  iconProps={{ iconName: "Download" }}
                  className="downloadButton"
                  onClick={() => downloadInstaller("windows-x64")}
                >
                  Get Notified When Ready
                </CompoundButton>
              </div>
            </div>
            <div className="legalstuff">
              <Text as="p" variant="small" block>
                By using Trici, you agree to its{" "}
                <a href="/terms">Terms of Use</a> and{" "}
                <a href="/privacy">privacy statement</a>.
              </Text>
              <Text as="p" variant="small" block>
                Mac and the Mac logo are trademarks of Apple Inc., registered in
                the U.S. and other countries.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Download
