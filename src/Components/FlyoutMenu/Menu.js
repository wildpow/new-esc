import React, { PureComponent } from "react";
import "./Menu.css";
import { NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Topper from '../Topper/Topper';
import image from '../../images/logo.png';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  
  text-align: center;
`;
export const Image = styled.img`
transition: all .25s ease-in;
align-self: center;
height: 6em;
@media (min-width: 500px) { height: 8em; }
@media (min-width: 768px) { height: 11em; }
`
const theme = {
  main: '#c62828'
};

class Menu extends PureComponent {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <Wrapper id="flyoutMenu"
        onMouseUp={this.props.handleMouseDown} 
        className={visibility}>
        <ThemeProvider theme={theme}>
        <Topper/>
        </ThemeProvider>
      <Nav>
        <NavLink className="flyoutLinks" to="/">Home</NavLink>
        <NavLink activeClassName="flyoutActive" className="flyoutLinks" to="/brands">Brands</NavLink>
        <NavLink activeClassName="flyoutActive" className="flyoutLinks" to="/adjustable">Adjustable</NavLink>
        <NavLink activeClassName="flyoutActive" className="flyoutLinks" to="/accessories">Accessories</NavLink>
        <NavLink activeClassName="flyoutActive" className="flyoutLinks" to="/financing">Financing</NavLink>
        <NavLink activeClassName="flyoutActive" className="flyoutLinks" to="/blog">Our Blog</NavLink>
        <NavLink activeClassName="flyoutActive" className="flyoutLinks" to="/about">About Us</NavLink>
        <Image src={image}/>
      </Nav>
      
      
      </Wrapper>
    );
  }
}
 
export default Menu;
