import React, { PureComponent } from 'react';
import {Button, MenuLines, Bar } from './MenuStyles';

class MenuButton extends PureComponent {
  render() {
    return (
        <Button onMouseUp={this.props.handleMouseDown}>
                <MenuLines>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                </MenuLines>
            </Button>
      
    )
  }
};
export default MenuButton;