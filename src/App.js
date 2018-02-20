import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import styled, { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import MenuButton from './Components/FlyoutMenu/MenuButton';
import Menu from './Components/FlyoutMenu/Menu';
import Footer from './Components/Footer/Footer';
import Topper from './Components/Topper/Topper';
import Navigation from './Components/Nav/Navigation';
import Logo from './Components/Logo/Logo';

import HomeComponent from './Components/Home/Home';
import BrandsComponent from './Components/Brands/Brands';
import AdjustableComponent from './Components/Adjustable/Adjustable';
import AccessoriesCompoent from './Components/Accessories/Accessories';
import FinancingComponent from './Components/Financing/Financing';
import BlogComponent from './Components/Blog/Blog';
import AboutComponent from './Components/About/About';

import SingleBase from './Components/Adjustable/SingleBase';
import SingleMattress from './Components/SingleMattress/SingleMattress';

import Sealy from './Components/MattressList/Sealy';
import Tempur from './Components/MattressList/Tempur';
import Stearns from './Components/MattressList/Stearns';
import Panda404 from './Components/Panda404/Panda404';

injectGlobal`
${styledNormalize}
      html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
.carousel.carousel-slider .control-arrow,.carousel .control-arrow{-webkit-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;position:absolute;z-index:2;top:20px;background:0 0;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{opacity:1}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:""}.carousel .control-disabled.control-arrow{opacity:0;cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;box-sizing:border-box}.carousel button{outline:0;border:0;background:0 0}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;width:80px;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333;padding:2px}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-flow:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-ms-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width:960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.9);box-shadow:1px 1px 2px rgba(0,0,0,.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#fff}.carousel:hover .slide .legend{opacity:1}.slide{margin-bottom:0!important;margin-top:0!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.carousel .slide{background:#fff;margin:auto}.control-prev{width:50px!important;font-size:2rem}.control-next{width:50px}@media(min-width:1100px){.control-next{width:70px}.control-prev{width:70px!important;font-size:2rem}}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{border-top:20px solid transparent;border-bottom:20px solid transparent}.carousel .control-next.control-arrow:before{border-left:20px solid #fff}.carousel .control-prev.control-arrow:before{border-right:20px solid #fff}
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700');
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 15px;
  transition: all .25s ease-in;
  @media (min-width: 768px) { width: 750px; padding-left: 10px; padding-right: 10px; }
  @media (min-width: 992px) { width: 970px; padding-left: 5px; padding-right: 5px; }
  @media (min-width: 1200px) { width: 1170px; }
  @media (min-width: 1300px) { width: 1270px; }
  @media (min-width: 1400px) { width: 1370px; }
`;


class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

const ScrollToTopWithRouter = withRouter(ScrollToTop)

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  };
  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  };
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    return (
      <Fragment>
        <Topper />
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        <Navigation/>
        <Logo/>
        <Container>
        <ScrollToTopWithRouter>
          <Switch>
            
            <Route path="/" component={HomeComponent} exact/>
            <Route path="/adjustable" component={AdjustableComponent} exact/>
            <Route path="/Accessories" component={AccessoriesCompoent} exact/>
            <Route path="/financing" component={FinancingComponent} exact/>
            <Route path="/blog" component={BlogComponent} exact/>
            <Route path="/about" component={AboutComponent} exact/>
            <Route path="/brands" component={BrandsComponent} exact/>

            <Route path="/brands/sealy" component={Sealy} exact/>
            <Route path="/brands/stearns" component={Stearns} exact/>
            <Route path="/brands/tempurpedic" component={Tempur} exact/>
            
            <Route path="/adjustable/:uri" component={SingleBase}/>
            <Route path="/brands/tempurpedic/:uri" component={SingleMattress}/>
            <Route path="/brands/sealy/:uri" component={SingleMattress}/>
            <Route path="/brands/stearns/:uri" component={SingleMattress}/>
            <Route component={Panda404}/>
            
            </Switch>
            </ScrollToTopWithRouter>
          <Footer/>
        </Container>
      </Fragment>
    );
  }
}

export default App;
