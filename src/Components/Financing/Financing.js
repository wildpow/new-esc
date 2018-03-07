import React from 'react';
import ComingSoon from '../ComingSoon/index';
import Helmet from 'react-helmet';

const FinancingComponent = () => {
  return (
    <div>
      <Helmet>
        <title>ESC: Financing</title>
        <meta name="description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image:secure_url" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
      </Helmet>
      <ComingSoon/>
    </div>
  )
}

export default FinancingComponent;