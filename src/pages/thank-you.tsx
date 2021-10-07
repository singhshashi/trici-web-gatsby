import React from "react"
import { Stack, Text, Link, FontWeights, mergeStyles } from "@fluentui/react"
import { Image, ImageFit } from "@fluentui/react/lib/Image"
import Layout from "../components/layout/layout"
import { Helmet } from 'react-helmet';
import './page.css';

const ThankYou : React.FunctionComponent = () => {
  const videoIFrameMarkup =`
      <iframe
        class="intro-vid"
        src="https://www.youtube-nocookie.com/embed/OxRhcviTFaA?showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
  `;

  const videoContainerCss = mergeStyles({
    margin:25,
  });

  const thankYouMessageCss = mergeStyles({
    margin: 50,
  });

  return (
    <Layout>
      <Helmet>
        <title>Trici - Recover your train of thought after any interruption</title>
        <meta name="description" content="Start a Focus Session on Trici, record your screen activity and then watch a smart replay to recover your exact train of thought in less than 2 minutes." />
        <meta name="keywords" content="pomodoro, timer, screen recording, productivity, interruption, focus, deep work" />
      </Helmet>
      <div className="trici-web-container center">
        <div className={thankYouMessageCss}>
          <Text as="h2" block variant="xxLarge">Thank you! We will get in touch with you when a build for your OS is ready.</Text>
        </div>
        <div className={videoContainerCss}>
          {/* <div dangerouslySetInnerHTML={{ __html: videoIFrameMarkup }} /> */}
        </div>
      </div>

    </Layout>
  )
}
export default ThankYou;