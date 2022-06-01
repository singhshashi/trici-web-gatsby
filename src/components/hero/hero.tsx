import React, { useState, useEffect, useCallback } from "react"
import "./hero.css"
import Header from "../header/header"
import { Customizations } from '@fluentui/react/lib/Utilities';
import { themes } from '../../common/themes'
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

const isBrowser = typeof window !== 'undefined';

const modalProps = {
  isBlocking: true,
  topOffsetFixed: true,
};


const dialogContentProps = {
  type: DialogType.largeHeader,
  title: 'Get Download Link',
  closeButtonAriaLabel: 'Close',
//   subText: 'Do you want to send this message without a subject?',
};

const macArchitectureSelectionModalProps = {
    isBlocking: false,
    topOffsetFixed: true,
};


const macArchitectureSelectionDialogProps = {
    type: DialogType.largeHeader,
    title: 'Select your architecture',
    closeButtonAriaLabel: 'Close',
    styles: {
        header: {
            textAlign: 'center',
        }
    }
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



const HeroContainer: React.FunctionComponent = () =>  {
    const [ hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
    const [ hideMacArchitectureSelectionDialog, { toggle: toggleHideMacArchitectureSelectionDialog }] = useBoolean(true);
    const [ osSelected, setOSSelected ] = useState('');
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ inviteCode, setInviteCode ] = useState('');
    const [ formReady, {toggle: toggleFormReady }] = useBoolean(false);
    const [ showSpinner, { toggle: toggleShowSpinner }] = useBoolean(false);
    const [ showError, {toggle: toggleShowError }] = useBoolean(false);



    const onChangeName = useCallback((evt, newValue) => { setName(newValue); });
    const onChangeEmail = useCallback((evt, newValue) => { setEmail(newValue);});
    const onChangeOSSelected = useCallback((ev, option) => { setOSSelected(option.key)});

    // const onChangeInviteCode = useCallback((ev, newValue) => { setInviteCode(newValue);});
    const getPlatform = () => {
        let platform = "Unknown";
        if (isBrowser) {
            if (window.navigator.userAgent.indexOf("Windows") !== -1) platform = "Windows";
            if (window.navigator.userAgent.indexOf("Mac") != -1) platform="MacOS";
            if (window.navigator.userAgent.indexOf("Linux") != -1) platform="Linux";
        }
        
        return platform;
    }

    const downloadInstaller = (platform) => {
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
        case "Linux": {
            downloadUrl = "/thank-you?platform=linux-zip-x64"
            willNavigate = true
            break
        }
        case "Windows": {
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
            console.log("Will Navitage to: " + downloadUrl)
            window.location.href = downloadUrl
        }
    }

    // const emailDownloadLink = (OSName) => {
    //     console.log("SHow form to email download link");
    //     console.log("OSName: " + OSName);
    // }

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


    // const getCtaButtonText = () => {
    //     let isMobile = false;
    //     if (isBrowser) {
    //         isMobile = window.mobileCheck();
    //     }

    //     if (isMobile) {
    //         return "Get Download Link";
    //     } else {
    //         const platform = getPlatform();
    //         if (platform === 'MacOS') {
    //             return 'Download for MacOS';
    //         } else if (platform === 'Linux') {
    //             return 'Download for Linux';
    //         } else if (platform === 'Windows') {
    //             return 'Download for Windows';
    //         } else {
    //             return 'Download for Free';
    //         }
    //     }
    // }

    const handleDownloadClick = () => {
        const isMobile = window.mobileCheck();
        console.log("isMobile: " + isMobile);

        if (!isMobile) {
            const platform = getPlatform();
            console.log(platform)
            if (platform === 'MacOS') {
                toggleHideMacArchitectureSelectionDialog();
                // showMacChipsetChoice();
            } else if (platform === 'Windows') {
                downloadInstaller(platform);
            } else if (platform === 'Linux') {
                downloadInstaller(platform);
            }
        } else {
            toggleHideDialog();
        }
    }

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
        root: { height: 80, minWidth: 320, backgroundColor: '#fff', color:'#191970', borderRadius: 5, boxShadow: boxShadowDefinition},
        label: { fontSize: 24, fontWeight: 'bold' }
    }

    const macArchitectureSelectionButtonStyles = {
        root: { height: 40, minWidth: 250, borderRadius: 5, boxShadow: boxShadowDefinition},
        label: { fontSize: 18, fontWeight: 'bold' }
    }
    const verticalGapStackTokens = {
        childrenGap: 10,
        padding: 5
    }

    const macArchSelectionStackTokens = {
        childrenGap: 20,
        padding: 10
    }

    const spinnerContainerCssClass = mergeStyles({
        display: 'block',
    });
    
    const emailFieldDescription = `Only for sending product updates, feedback etc.`;

    
    const ctaButtonText =  "Download for Free"; //getCtaButtonText();


    return (
        <div className="section__hero">
            <div className="hero_container">
            <div className="hero_pitch">
                <h1>Recover <span className="highlight">Faster</span> From Developer Interruptions</h1>
            </div>
            <div className="hero_byline_container">
                <p className="byline">Trici is a productivity tool that helps developers recover from any interruption in less than 2 minutes!</p>
                    {/* <p className="byline">Record and recap your Focus Sessions and rebuild your lost train of thought in seconds!</p> */}
            </div>
            <div className="hero_cta">
                <PrimaryButton text={ctaButtonText} onClick={handleDownloadClick} styles={heroButtonStyles} iconProps={{ iconName: "Installation" }} id="btnDownloadForFree" />
                <Dialog
                    hidden={hideMacArchitectureSelectionDialog}
                    onDismiss={toggleHideMacArchitectureSelectionDialog}
                    modalProps={macArchitectureSelectionModalProps}
                    dialogContentProps={macArchitectureSelectionDialogProps}
                >
                        <Stack tokens={macArchSelectionStackTokens}>
                            <Stack.Item>
                                <PrimaryButton onClick={() => downloadInstaller('macos-x64')} styles={macArchitectureSelectionButtonStyles} text="Intel x64"></PrimaryButton>
                            </Stack.Item>
                            <Stack.Item>
                                <PrimaryButton onClick={() => downloadInstaller('macos-arm64')} styles={macArchitectureSelectionButtonStyles} text="Apple Silicon arm64"></PrimaryButton>
                            </Stack.Item>
                            <Stack.Item>

                            </Stack.Item>
                        </Stack>
                </Dialog>
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
