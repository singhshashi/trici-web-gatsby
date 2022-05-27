import React, { useState, useEffect, useCallback } from "react"
import "./hero.css"
import Header from "../header/header"
import { Customizations } from '@fluentui/react/lib/Utilities';
import { themes } from '../../common/themes'
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import { Stack, Text, MessageBar, MessageBarType, mergeStyles } from '@fluentui/react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { useBoolean } from '@fluentui/react-hooks';
import { TextField } from '@fluentui/react/lib/TextField';
import { ChoiceGroup } from '@fluentui/react/lib/ChoiceGroup';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import HowItWorksShort from "../howitworks/howitworksshort";
const axios = require('axios');

const modalProps = {
  isBlocking: true,
  topOffsetFixed: true,
};

const dialogContentProps = {
  type: DialogType.largeHeader,
  title: 'Download | Request Access',
  closeButtonAriaLabel: 'Close',
//   subText: 'Do you want to send this message without a subject?',
};

const getNameValidationErrorMessage = (value) => {
    return value.trim().length < 2 ? 'Name is required' : '';
};

const getEmailValidationErrorMessage = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email';
};

const gotoDownloads = () => {
    window.location.href = '/download';
}

function downloadInstaller(platform) {
    console.log("Download Button was clicked")
    console.log(platform)
    let downloadUrl = ""
    let willNavigate = false
    switch (platform) {
      case "Mac/iOS": {
        downloadUrl = "/thank-you?platform=macos-x64"
        willNavigate = true
        break
      }
      case "Mac/iOS": {
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
      case "Linux": {
        downloadUrl = "/thank-you?platform=linux-zip-x64"
        willNavigate = true
        break
      }
      case "Windows 10": {
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

const HeroContainer: React.FunctionComponent = () =>  {
    const [ hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const [ osSelected, setOSSelected ] = useState('');
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ inviteCode, setInviteCode ] = useState('');
    const [ formReady, {toggle: toggleFormReady }] = useBoolean(false);
    const [ showSpinner, { toggle: toggleShowSpinner }] = useBoolean(false);
    const [ showError, {toggle: toggleShowError }] = useBoolean(false);

    let OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";


    const onChangeName = useCallback((evt, newValue) => { setName(newValue); });
    const onChangeEmail = useCallback((evt, newValue) => { setEmail(newValue);});
    const onChangeOSSelected = useCallback((ev, option) => { setOSSelected(option.key)});

    // const onChangeInviteCode = useCallback((ev, newValue) => { setInviteCode(newValue);});

    const submitForm = useCallback(() => {
        toggleShowSpinner();
        toggleFormReady();
        const formData = {
            name: name,
            email: email,
            os: osSelected,
            inviteCode: inviteCode,
        };
        axios.post('https://api.gettrici.com/requestAccessOrDownload', formData).then((response) => {
            toggleShowSpinner();
            if (response.data.success) {
                window.location = response.data.nextUrl;
            } else {
                toggleFormReady();
                toggleShowError();
            }
        }).catch((err) => {
            toggleShowSpinner();
            toggleFormReady();
            toggleShowError();
            console.log('Error');
        });
    });

    useEffect(()=> {
        if (getNameValidationErrorMessage(name) === '' && getEmailValidationErrorMessage(email) === '' && osSelected !== '') {
            if (!formReady) {
                toggleFormReady();
            }
        } else {
            if (formReady) {
                toggleFormReady();
            }
        }
    }, [name, email, osSelected]);

    const osChoiceGroupOptions = [
        {key: 'macosint', text: 'Mac OS - Intel x64' },
        {key: 'macosapple', text: 'Mac OS - Apple Silicon arm64' },
        {key: 'ubuntu', text: 'Ubuntu' },
        {key: 'linux', text: 'Other Linux' },
        {key: 'windows', text: 'Windows'}
    ];

    const boxShadowDefinition= '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)';

    const heroButtonStyles = {
        root: { height: 60, minWidth: 280, backgroundColor: '#fff', color:'#191970', borderRadius: 5, boxShadow: boxShadowDefinition},
        label: { fontSize: 18, fontWeight: 'bold' }
    }

    const verticalGapStackTokens = {
        childrenGap: 10,
        padding: 5
    }

    const spinnerContainerCssClass = mergeStyles({
        display: 'block',
    });
    
    const emailFieldDescription = `Only for sending product updates, feedback etc.`;

    return (
        <div className="section__hero">
            <div className="hero_container">
            <div className="hero_pitch">
                <h1>Recover <span className="highlight">faster</span> from Interruptions</h1>
                <p className="byline">Trici reduces the time it takes for a developer to recover from an interruption from an average 25 minutes to less than 2 minutes.</p>
                    {/* <p className="byline">Record and recap your Focus Sessions and rebuild your lost train of thought in seconds!</p> */}
            </div>
            <div className="hero_cta">
                <PrimaryButton text={ OSName } onClick={ () => downloadInstaller(OSName) } styles={heroButtonStyles} iconProps={{ iconName: "Installation" }} id="btnDownloadForFree" />
                <Dialog
                    hidden={hideDialog}
                    onDismiss={toggleHideDialog}
                    modalProps={modalProps}
                    dialogContentProps={dialogContentProps}
                >
                    <form>
                    <Stack tokens={verticalGapStackTokens}>
                        <Stack.Item>
                            <TextField label="Name" onGetErrorMessage={getNameValidationErrorMessage} required value={name} onChange={onChangeName} />
                        </Stack.Item>
                        <Stack.Item>
                            <TextField label="Email" type="email" onGetErrorMessage={getEmailValidationErrorMessage} required value={email} onChange={onChangeEmail} description={emailFieldDescription} />
                        </Stack.Item>
                        <Stack.Item>
                            <ChoiceGroup options={osChoiceGroupOptions} label="OS" required selectedKey={osSelected} onChange={onChangeOSSelected} />
                        </Stack.Item>
                        {/* <Stack.Item>
                            <TextField label="Invite Code for download" value={inviteCode}  onChange={onChangeInviteCode} />
                        </Stack.Item> */}
                        <Stack.Item>
                            {showSpinner && <Spinner size={SpinnerSize.small} className={spinnerContainerCssClass} />}
                            {showError && <MessageBar messageBarType={MessageBarType.error} onDismiss={toggleShowError}>Oops! There was an error! Contact feedback@gettrici.com</MessageBar>}
                        </Stack.Item>
                    </Stack>
                    <DialogFooter>

                        <PrimaryButton onClick={submitForm} text="Submit" disabled={!formReady} id="btnSubmitDownloadRequestAccessForm" />
                        <DefaultButton onClick={toggleHideDialog} text="Cancel" />

                    </DialogFooter>
                    </form>
                </Dialog>
                {/* <div className="myPrimaryButton">
                    <OutboundLink href="https://forms.zohopublic.in/gettrici/form/TriciDownloads/formperma/a3H9zdJkx7u6ZrSvnNDeIltYE4L2s-LQiAWzAoQt7xY?referrername=gettrici">Request Access | Download</OutboundLink>
                </div> */}
            </div>
            <p className="available-announcement">Available for MacOS and Ubuntu. Coming Soon for Windows<sup>*</sup></p>
            </div>
            {/* <HowItWorksShort /> */}
            {/* <img src="images/TriciHomeExplain.png" alt="Trici Main Screen" className="mainscreenshot" /> */}
        </div>
    )
}

export default HeroContainer
