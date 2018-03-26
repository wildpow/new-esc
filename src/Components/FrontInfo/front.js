import React from 'react';
import { Headline, Wrapper, P, Links } from '../Home/HomeStyles';


const Front = () => {
  return (
    <Wrapper>
      <Headline>Spring Savings Event</Headline>
      <P>
      The Spring Sale is going on now through April 29th at ESC Mattress Center.  With brand new mattresses popping up, like the Consumer Reports top rated <Links to="/brands/sealy/Hybrid-Kelburn-II-Cushion-Firm">Sealy Kelburn II Hybrid</Links> and <Links to="/brands/stearns/Lux-Estate-Trailwood-Plush-Pillow-Top">Stearns and Foster Lux Estate Trailwood</Links>, it’s a great time to upgrade your sleep.   With spring cleaning going on we still have massive savings on closeout floor model mattresses as well as discontinued pillows and mattress protectors at huge savings.  Swing in to get a great deal on the bed of your dreams.
      </P>
      <Headline red>“Sleep Like the Experts Do!”</Headline>
    </Wrapper>
  )
}

export default Front;