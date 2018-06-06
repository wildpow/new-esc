import React, { Component } from 'react';
import midImg from '../../images/StearnsAboveReviews600x400.jpg';
import lgImg from '../../images/StearnsImage700x390.jpg';
import { BottomImg } from './LandingStyles';

class ResponsiveImg extends Component {
  state = { currentSrc: '' };

  onLoad = (event) => {
    this.setState({
      currentSrc: event.target.currentSrc
    });
  }

  render() { 
    return ( 

      <div>
      <picture>
  <source srcset={`${midImg} 300w`}
          sizes="(max-width: 639px) 100vw"/>
  <source srcset={`${midImg} 600w`}
          sizes="(min-width: 640px) and (max-width: 1023px) 50vw"/>
  <source srcset={`${lgImg} 724w`}
          sizes="(min-width: 1024px) 60vw"/>
  <img src={`${midImg}`} alt="hellop"/>
</picture>
      {this.state.currentSrc}
      </div>
    )
  }
}
 
export default ResponsiveImg;
