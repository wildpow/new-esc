import React from 'react';
import Helmet from 'react-helmet';
import { MainArticle, WarrantyHeadline,
        P, WarranyName, WarranyNumber,
        WarrantyWrapper, WarrantyTopper } from './PolicyStyles';

const Warranty = () => {
  return (
    <MainArticle>
      <Helmet>
        <title>ESC: Mattress Warranty Information</title>


      <meta name="description" content="Mattress Warranty Information for E.S.C Mattress Center website"/>        
        <meta name="twitter:image:alt" content="E.S.C Matress Center"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        <meta property="og:url" content="https://www.escmattresscenter.com/warranty"/>
        <meta property="og:description" content="Mattress Warranty Information for E.S.C Mattress Center website"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="1200"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>

      </Helmet>
      <WarrantyHeadline>Mattress Warranty Information</WarrantyHeadline>
      <P>
        Warranty requirements are determined by the manufacturer and details will be 
        set forth in the warranty card attached to your new mattress set. All warranty 
        claims will be handled through the manufacturer. Please read the warranty card for 
        requirements and instructions.
      </P>
      <P>
        The four things to be aware of that will void a 
        mattress warranty are: improper support from the frame, improper support from the 
        foundation, stains and soils, or removing the law label. Remember, body impressions 
        up to 1-1/2” (3/4” on most memory foam mattresses) are a considered a normal occurrence 
        with any new mattress and is not an indication of structural failure. The comfort layer 
        of the mattress is simply contouring to your natural curves, to give you the proper 
        support and comfort that your body needs.
      </P>                
      <WarrantyTopper>
        To initiate a mattress warranty claim you may contact your mattress 
        manufacturer via the phone number below.
      </WarrantyTopper>
      <WarrantyWrapper>
        <WarranyName>Sealy Mattress Warranty Service</WarranyName>
        <WarranyNumber href="tel:1-800-697-3259">1-800-697-3259</WarranyNumber>

        <WarranyName>Stearns & Foster Mattress Warranty Service</WarranyName>
        <WarranyNumber href="tel:1-866-783-2767">1-866-783-2767</WarranyNumber>

        <WarranyName>Tempur-PEDIC Mattress Warranty Service</WarranyName>
        <WarranyNumber href="tel:1-800-821-6621">1-800-821-6621</WarranyNumber>
      </WarrantyWrapper>
    </MainArticle>
  )
}

export default Warranty;