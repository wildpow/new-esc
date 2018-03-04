import React from 'react';
import { MainArticle, Headline } from './PolicyStyles';

const Warranty = () => {
  return (
    <MainArticle>
      <Headline>Mattress Warranty Information</Headline>
      <p>
        Warranty requirements are determined by the manufacturer and details will be 
        set forth in the warranty card attached to your new mattress set. All warranty 
        claims will be handled through the manufacturer. Please read the warranty card for 
        requirements and instructions. The four things to be aware of that will void a 
        mattress warranty are: improper support from the frame, improper support from the 
        foundation, stains and soils, or removing the law label. Remember, body impressions 
        up to 1-1/2” (3/4” on most memory foam mattresses) are a considered a normal occurrence 
        with any new mattress and is not an indication of structural failure. The comfort layer 
        of the mattress is simply contouring to your natural curves, to give you the proper 
        support and comfort that your body needs.
      </p>                
      <h3>
        To initiate a mattress warranty claim you may contact your mattress 
        manufacturer via the phone number below.
      </h3>
      <h4>Sealy Mattress Warranty Service</h4>
      <a href="tel:1-800-697-3259">1-800-697-3259</a>

      <h4>Stearns & Foster Mattress Warranty Service</h4>
      <a href="tel:1-866-783-2767">1-866-783-2767</a>

      <h4>Tempur-PEDIC Mattress Warranty Service</h4>
      <a href="tel:1-800-821-6621">1-800-821-6621</a>
    </MainArticle>
  )
}

export default Warranty;