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

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Benefits />
      <MoreBenefits />
      <FaqMain />
    </Layout>
  )
}

export default App
