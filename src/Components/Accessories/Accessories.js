import React from 'react';
import ComingSoon from '../ComingSoon/index';
import { Helmet } from "react-helmet";

const AccessoriesComponent = () => {
  return (
    <div>
      <Helmet>
        <title>ESC: Accessories</title>
        <meta name="description" content="Sleep system means more than a mattress and box, let us help you find a Pillow, Sheets, and Protector that will help you sleep better. We carry Dream Fit Sheets, Protect a bed Pillows & Protectors, Tempurpedic pillows, and Thecnogel Pillows. We can help with cooling as well if needed."/>

        <meta name="twitter:image:alt" content="E.S.C Matress Center"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        <meta property="og:url" content="https://www.escmattresscenter.com/accessories"/>
        <meta property="og:description" content="Sleep like the experts do."/>
      </Helmet>
    <ComingSoon/>
    </div>
  )
}

export default AccessoriesComponent;