import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'normalize.css';
import styled from 'styled-components';

import MenuButton from './Components/FlyoutMenu/MenuButton'
import Menu from './Components/FlyoutMenu/Menu'

import Topper from './Components/Topper/Topper'
import Navigation from './Components/Nav/Navigation';
import Logo from './Components/Logo/Logo';

import HomeComponent from './Components/Home/Home';
import BrandsComponent from './Components/Brands/Brands';
import AjustableComponent from './Components/Ajustable/Ajustable';
import AccessoriesCompoent from './Components/Accessories/Accessories';
import FinancingComponent from './Components/Financing/Financing';
import BlogComponent from './Components/Blog/Blog';
import AboutComponent from './Components/About/About';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 15px;
  @media (min-width: 1200px) { width: 1170px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 768px) { width: 750px; }
`

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <Topper />
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
        <Navigation/>
        <Logo/>
        <Container>
          <Route path="/" component={HomeComponent} exact/>
          <Route path="/brands" component={BrandsComponent} />
          <Route path="/ajustable" component={AjustableComponent} />
          <Route path="/Accessories" component={AccessoriesCompoent} />
          <Route path="/financing" component={FinancingComponent} exact/>
          <Route path="/blog" component={BlogComponent} />
          <Route path="/about" component={AboutComponent} />
        </Container>
      </div>
    );
  }
}

export default App;
