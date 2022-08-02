import React, { useState, useEffect, useCallback } from "react"
import "./hero.css"
import DownloadButton from "../shared/DownloadButton"




const HeroContainer: React.FunctionComponent = () =>  {
    
    




    // const onChangeInviteCode = useCallback((ev, newValue) => { setInviteCode(newValue);});
    

    // const emailDownloadLink = (OSName) => {
    //     console.log("SHow form to email download link");
    //     console.log("OSName: " + OSName);
    // }




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
            <DownloadButton hero={true} id="btnHeroDownloadForFree"/>
            <p className="available-announcement">Available for MacOS and Ubuntu. Coming Soon for Windows<sup>*</sup></p>
            </div>
            {/* <HowItWorksShort /> */}
            {/* <img src="images/TriciHomeExplain.png" alt="Trici Main Screen" className="mainscreenshot" /> */}
        </div>
    )
}

export default HeroContainer
