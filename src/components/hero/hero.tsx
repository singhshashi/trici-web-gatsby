import React from "react"
import "./hero.css"
import Header from "../header/header"
import { Customizations } from '@fluentui/react/lib/Utilities';
import { themes } from '../../common/themes'
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import { Stack, Text, PrimaryButton } from '@fluentui/react';


const HeroContainer: React.FunctionComponent = () =>  {
    return (
        <div className="section__hero">
            <div className="hero_container">
            <div className="hero_pitch">
                <h1>Recover <span className="highlight">faster</span> from Interruptions</h1>
                    <p className="byline">Record and recap your Focus Sessions and rebuild your lost train of thought in seconds!</p>
            </div>
            <div className="hero_cta">
                <div className="myPrimaryButton">
                    <a href="https://forms.zohopublic.in/gettrici/form/TriciDownloads/formperma/a3H9zdJkx7u6ZrSvnNDeIltYE4L2s-LQiAWzAoQt7xY?referrername=gettrici">Request Access | Download</a>
                </div>
            </div>
            <p className="available-announcement">Desktop application available for MacOS<sup>*</sup> and Ubuntu. Coming Soon for Windows<sup>**</sup></p>
            </div>
            <img src="images/TriciMainScreen.webp" alt="Trici Main Screen" className="mainscreenshot" />
        </div>
    )
}

export default HeroContainer