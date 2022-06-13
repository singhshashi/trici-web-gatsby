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
const isBrowser = typeof window !== 'undefined';


  function mobileCheck () {
    let check = false;
    if (isBrowser) {
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    }
    return check;
  };


const ThankYou: React.FunctionComponent = () => {
  const [platform, setPlatform] = useState("")
  
  const [downloadUrl, setDownloadUrl] = useState("")
  const [downloadSuccessMessageBar, setDownloadSuccessMessageBar] = useState(
    false
  )
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isMobile ] = useState(mobileCheck())
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
