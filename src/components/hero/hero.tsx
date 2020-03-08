import React from "react"
import "./hero.css"
import Header from "../header/header"
import { Customizations } from 'office-ui-fabric-react/lib/Utilities';
import { themes } from '../../common/themes'
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import { Stack, Text, PrimaryButton } from 'office-ui-fabric-react';


const HeroContainer: React.FunctionComponent = () =>  {
    Customizations.applySettings({theme: themes.themeTriciDark })
    return (
        <div className="section__hero">
            <Stack
                styles={{
                    root: {
                        maxWidth: "1280px",
                        // maxHeight: "60px",
                        margin: "0 auto",
                        textAlign: "center",
                        color: "#ffffff"
                    },
                }}
                gap={30}
            >
            <Header />
            <div className="hero_pitch">
                <h1><span className="highlight">Record and Recap</span> your Focus Sessions</h1>
                <p>Trici is a memory aid, helping you rebuild your train of thought in a matter of seconds!</p>                
            </div>
            <div className="hero_cta">
                <div className="myPrimaryButton">
                    <span>Request an Invite</span>
                </div>
            </div>          
            <Text variant="medium">Available for MacOS and Ubuntu. Coming Soon for Windows</Text>      
            </Stack>
        </div>
    )
}

export default HeroContainer