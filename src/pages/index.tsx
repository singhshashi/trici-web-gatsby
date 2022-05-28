import React from "react"
import { Stack, Text, Link, FontWeights } from "@fluentui/react"
import { Image, ImageFit } from "@fluentui/react/lib/Image"
import "./index.css"
import Hero from "../components/hero/hero"
import { loadTheme } from "@fluentui/react/lib/Styling"
import { themes } from "../common/themes"
import HowItWorks from "../components/howitworks/howitworks"
import Benefits from "../components/benefits/benefits"
import Layout from "../components/layout/layout"
import MoreBenefits from "../components/morebenefits/morebenefits"
import FaqMain from "../components/faqmain/faqmain"
// import ScreensCarousel  from "../components/screenscarousel/screenscarousel"
import {Helmet} from 'react-helmet';
const App: React.FunctionComponent = () => {
  return (
    <Layout>
    <Helmet>
      <title>Trici - Recover your train of thought after any interruption</title>
      <meta name="description" content="Start a Focus Session on Trici, record your screen activity and then watch a smart replay to recover your exact train of thought in less than 2 minutes." />
      <meta name="keywords" content="pomodoro, timer, screen recording, productivity, interruption, focus, deep work" />
    </Helmet>
      <Hero />
      <HowItWorks />
      <Benefits />
      <MoreBenefits />
      <FaqMain />
      {/* <ScreensCarousel /> */}
    </Layout>
  )
}

export default App
