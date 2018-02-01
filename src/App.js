import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';

import './app.css';

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
  
`

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
      <div className="animated fadeIn">
        <Topper />
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        <Navigation/>
        <Logo/>
        <Container>
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
          <Footer/>
        </Container>
      </div>
    );
  }
}

export default App;
