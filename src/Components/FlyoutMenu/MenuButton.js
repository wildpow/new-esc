import React, { Component } from 'react';
import './MenuButtonStyles.css';
import styled from 'styled-components'

const Button = styled.button`
  float: right;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0;
  overflow: visible;
  margin: 30px;
  transition-property: transform;
  transition-duration: .5s;
  margin-top: 5px;
  margin-left: -130px;
  margin-right: 0px;

  &:hover {
  cursor: pointer;
  transform: scale(1.2, 1.2);
}

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: -130px;
    margin-right: 50px;
}
  @media (min-width: 1022px) {
    display: none;
  }

`;

class MenuButton extends Component {
  render() {
    return (
        <Button className="menu" id="menu-btn" onMouseUp={this.props.handleMouseDown}>
                <span className="menu-lines">
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                </span>
            </Button>
      
    )
  }
}

export default MenuButton;