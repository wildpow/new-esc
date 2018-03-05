import React from 'react';
import ComingSoon from '../ComingSoon/index';
import Helmet from 'react-helmet';

const FinancingComponent = () => {
  return (
    <div>
      <Helmet>
        <title>ESC: Financing</title>
        <meta name="description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
        
        <meta name="twitter:image:alt" content="E.S.C Matress Center"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        {/* <meta property="og:url" content="https://www.escmattresscenter.com/financing"/> */}
        <meta property="og:description" content="Sleep like the experts do."/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="1200"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
      </Helmet>
      <ComingSoon/>
    </div>
  )
}

export default FinancingComponent;