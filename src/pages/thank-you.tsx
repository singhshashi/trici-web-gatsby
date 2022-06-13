import React, { useState, useEffect, useCallback } from "react"
import { useBoolean } from "@fluentui/react-hooks"
import { TextField } from "@fluentui/react/lib/TextField"
import {
  Stack,
  Text,
  Link,
  FontWeights,
  MessageBar,
  MessageBarType,
  mergeStyles,
  PrimaryButton,
  WindowProvider,
} from "@fluentui/react"
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner"
import { Image, ImageFit } from "@fluentui/react/lib/Image"
import Layout from "../components/layout/layout"
import { Helmet } from "react-helmet"
import "./page.css"
const axios = require("axios")

const ThankYou: React.FunctionComponent = () => {
  const [platform, setPlatform] = useState("")
  
  const [downloadUrl, setDownloadUrl] = useState("")
  const [downloadSuccessMessageBar, setDownloadSuccessMessageBar] = useState(
    false
  )
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [showSignUp, { toggle: toggleShowSignUp }] = useBoolean(false)
  const [formReady, { toggle: toggleFormReady }] = useBoolean(false)
  const [showSpinner, { toggle: toggleShowSpinner }] = useBoolean(false)
  const [showError, { toggle: toggleShowError }] = useBoolean(false)
  const [showSignUpSuccess, { toggle: toggleShowSignUpSuccess }] = useBoolean(
    false
  )

  const verticalGapStackTokens = {
    childrenGap: 10,
    padding: 5,
  }

  const spinnerContainerCssClass = mergeStyles({
    display: "block",
  })

  const emailFieldDescription = `Only for sending product updates, feedback etc.`

  const getNameValidationErrorMessage = value => {
    return value.trim().length > 0 && value.trim().length < 2
      ? "Name is required"
      : ""
  }

  const getFoundPlatform = platform => {
    switch (platform) {
      case "macos-x64":
        return "Mac Intel"
      case "macos-arm64":
        return "Mac Apple Silicon"
      case "debian-x64":
        return "Ubuntu"
      case "windows-x64":
        return "Windows"
      default:
        return "unknown"
    }
  }

  const getEmailValidationErrorMessage = value => {
    return value.trim().length === 0 ||
      (value.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      ? ""
      : "Please enter a valid email"
  }

  function getDefaultDownloadLinkForPlatform(platform: string) {
    switch (platform) {
      case "macos-x64": {
        return "https://download.gettrici.com/darwin-x64/Trici-2.6.1-x64.dmg"
      }
      case "macos-arm64": {
        return "https://download.gettrici.com/darwin-arm64/Trici-2.6.1-arm64.dmg"
      }
      case "debian-x64": {
        return "https://download.gettrici.com/linux-x64/trici_2.4.0_amd64.deb"
      }
      default: {
        return "unknown"
      }
    }
  }

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const platform = urlSearchParams.get("platform")
    const showSignUp = urlSearchParams.get("showSignUp") === "true"
    if (showSignUp) {
      toggleShowSignUp()
    } 
    setPlatform(platform)
    const isMobile = window.mobileCheck();
    console.log("isMobile: " + isMobile);
    console.log("platform:", platform);
    axios
      .get(`https://api.gettrici.com/getDownloadLink?platform=${platform}`)
      .then(response => {
        if (response.data.success) {
          setDownloadUrl(response.data.downloadLink)
          if (response.data.downloadLink === "notfound") {
            setDownloadUrl(getDefaultDownloadLinkForPlatform(platform))
          } else {
            if (!isMobile) {
              window.location = response.data.downloadLink
            }
          }
        } else {
          setDownloadUrl(getDefaultDownloadLinkForPlatform(platform))
          const defaultDownloadLink = getDefaultDownloadLinkForPlatform(platform);
          if (defaultDownloadLink !== "unknown" && !isMobile) {
            window.location = getDefaultDownloadLinkForPlatform(platform)
          }
        }
      })
      .catch(err => {
        console.error(err)
        console.log("Showing default download link")
        setDownloadUrl(getDefaultDownloadLinkForPlatform(platform))
      })
  }, [])

  useEffect(() => {
    if (
      name.trim().length > 0 &&
      getNameValidationErrorMessage(name) === "" &&
      email.trim().length > 0 &&
      getEmailValidationErrorMessage(email) === ""
    ) {
      if (!formReady) {
        toggleFormReady()
      }
    } else {
      if (formReady) {
        toggleFormReady()
      }
    }
  }, [name, email])

  const videoIFrameMarkup = `
      <iframe
        class="explainer-vid"
        src="https://www.youtube-nocookie.com/embed/OxRhcviTFaA?showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
  `

  const showSignUpSuccessWithVideoCss = mergeStyles({
    margin: 25,
    textAlign: "center",
  })

  let thankYouMessageCss = mergeStyles({
    margin: "0 auto",
    marginTop: 40,
    textAlign: "center",
    backgroundColor: "#DFF6DD",
    color: "#435742",
    maxWidth: "50%",
    padding: "10px",
  })

  const onChangeName = useCallback((evt, newValue) => {
    setName(newValue)
  })
  const onChangeEmail = useCallback((evt, newValue) => {
    setEmail(newValue)
  })

  const submitForm = useCallback(() => {
    toggleShowSpinner()
    toggleFormReady()
    const formData = {
      name: name,
      email: email,
      os: getFoundPlatform(platform),
    }
    axios
      .post("https://api.gettrici.com/requestAccessOrDownload", formData)
      .then(response => {
        toggleShowSpinner()
        if (response.data.success) {
          toggleShowSignUpSuccess()
          //   window.location = response.data.nextUrl
        } else {
          toggleFormReady()
          toggleShowError()
        }
      })
      .catch(err => {
        toggleShowSpinner()
        toggleFormReady()
        toggleShowError()
        console.log("Error")
      })
  })
  const foundPlatform = getFoundPlatform(platform)

  const isMobile = window.mobileCheck();

  console.log("isMobile: " + isMobile);
  let downloadSuccessMessageBarPartial = (
    <div>
      {!isMobile && (
        <>
          <Text as="p" variant="xLarge" block>
            Thank you for downloading Trici for {foundPlatform}!
          </Text>
          <Text as="p" variant="large" block>
            Download not starting?{" "}
            <Link href={downloadUrl}>Try this direct download link.</Link>
          </Text>
        </>
        
      )}
      {isMobile && (
        <>
          <Text as="p" variant="xLarge" block>
            Thank you for downloading Trici for {foundPlatform}!
          </Text>
          <Text as="p" variant="large" block>
            The link to download has been sent to the email you provided!
          </Text>
        </>
      )}
      
    </div>
  )

  if (foundPlatform === "unknown") {
    thankYouMessageCss = mergeStyles({
      margin: "0 auto",
      marginTop: 40,
      textAlign: "center",
      backgroundColor: "#fde7e9",
      color: "#333333",

      maxWidth: "50%",
      padding: "10px",
    })
    downloadSuccessMessageBarPartial = (
      <div>
        <Text as="p" variant="xLarge" block>
          Oops! The platform you are trying to download for is not supported.
        </Text>
        <Text as="p" variant="large" block>
          Please try again with a different platform.
        </Text>
      </div>
    )
  }
  if (foundPlatform === "Windows") {
    if (showSignUp) {
      downloadSuccessMessageBarPartial = (
        <div>
          Please sign up below to get notified when Trici for Windows becomes
          available for download.
        </div>
      )
    } else {
      downloadSuccessMessageBarPartial  = (
        <div>
          <Text as="p" variant="xLarge" block>
            Thank you for signing up for Trici for Windows!
          </Text>
          <Text as="p" variant="large" block>
            You will be notified when Trici for Windows becomes available.
          </Text>
        </div>
      )
    }
  }

  if (downloadUrl === "signup") {
    downloadSuccessMessageBarPartial = <div></div>
  }

  return (
    <Layout>
      <Helmet>
        <title>
          Trici - Recover your train of thought after any interruption
        </title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Start a Focus Session on Trici, record your screen activity and then watch a smart replay to recover your exact train of thought in less than 2 minutes."
        />
        <meta
          name="keywords"
          content="pomodoro, timer, screen recording, productivity, interruption, focus, deep work"
        />
      </Helmet>
      <div className="trici-web-container center">
        <div className={thankYouMessageCss}>
          {downloadSuccessMessageBarPartial}
        </div>
        <div className="ms-depth-4 signupFormContainer">
          {showSignUpSuccess || !showSignUp ? (
            <div className={showSignUpSuccessWithVideoCss}>
              <Text as="p" variant="xLarge" block>
                Thank you for signing up!
              </Text>
              <Text as="p" variant="large" block>
                Watch this video to see how to get started with Trici.
              </Text>
              <div dangerouslySetInnerHTML={{ __html: videoIFrameMarkup }} />
            </div>
          ) : (
            <Stack tokens={verticalGapStackTokens}>
              <Stack.Item>
                <Text as="p" variant="xLarge" block>
                  Sign up to get the latest updates
                </Text>
              </Stack.Item>
              <Stack.Item>
                <TextField
                  label="Name"
                  onGetErrorMessage={getNameValidationErrorMessage}
                  required
                  value={name}
                  onChange={onChangeName}
                />
              </Stack.Item>
              <Stack.Item>
                <TextField
                  label="Email"
                  type="email"
                  onGetErrorMessage={getEmailValidationErrorMessage}
                  required
                  value={email}
                  onChange={onChangeEmail}
                  description={emailFieldDescription}
                />
              </Stack.Item>
              {/* <Stack.Item>
                            <TextField label="Invite Code for download" value={inviteCode}  onChange={onChangeInviteCode} />
                        </Stack.Item> */}
              <Stack.Item>
                {showSpinner && (
                  <Spinner
                    size={SpinnerSize.small}
                    className={spinnerContainerCssClass}
                  />
                )}
                {showError && (
                  <MessageBar
                    messageBarType={MessageBarType.error}
                    onDismiss={toggleShowError}
                  >
                    Oops! There was an error! Contact feedback@gettrici.com
                  </MessageBar>
                )}
              </Stack.Item>
              <Stack.Item>
                <PrimaryButton
                  onClick={submitForm}
                  text="Submit"
                  disabled={!formReady}
                  id="btnSubmitDownloadRequestAccessForm"
                />
              </Stack.Item>
            </Stack>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default ThankYou
