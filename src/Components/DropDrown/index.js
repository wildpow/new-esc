import React from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.div`
display: flex;
&:hover {background-color: #f1f1f1}
`
const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #1565c0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  &:hover {background-color: #f1f1f1}
`
const WholeThing = styled.div`
position: relative;
display: inline-block;
`
const Ul = styled.ul`
padding-top: 20px;
list-style: none;
float: left;
z-index: 999;
overflow: hidden;
position: absolute;
`
const Button = styled.button`
background-color: #1565c0;
color: white;
padding: 16px;
font-size: 16px;
border: none;
cursor: pointer;
outline: none;
&:hover {background-color: #eb1c24}
&:focus { background:#eb1c24;}
`
const ButtonIcon = styled.div`
background-color: #1565c0;
color: white;
padding: 16px;
font-size: 16px;
`
class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonContent: 'Size',
      open: false,
      selected: 0
    }
    this.handleDropdown = this.handleDropdown.bind(this);
    this.drop = this.drop.bind(this);
  }
  handleDropdown() {
    this.setState({
      open: !this.state.open
    })}
    drop(e) {
      this.setState({
        selected: e.currentTarget.dataset.id
      })
      this.handleDropdown()
    }
  
  selector() {
    const { selected } = this.state

    switch(selected) {
      case '1':
        return <h1>This is a twin price</h1>;
      case '2':
        return <h1>This is the Full price</h1>;
      case '3':
        return <h1>this the queen price</h1>
      default:
        return null;
    }
  }
  
  render() {
    return (
      <div>
      <WholeThing>
        <ButtonWrapper>
        <Button onMouseDown={this.handleDropdown}>
          {this.state.buttonContent}&nbsp;&nbsp; { this.state.open ? '\u25B2' : '\u25BC'}
        </Button>
        {/* <ButtonIcon>
        { this.state.open ? '\u25B2' : '\u25BC'}
        </ButtonIcon> */}
        </ButtonWrapper>
          { this.state.open &&
          <DropDownWrapper onMouseLeave={this.handleDropdown}>
              <Button onClick={this.drop} data-id="1">Twin</Button>
              <Button onClick={this.drop} data-id="2">TwinXL</Button>
              <Button onClick={this.drop} data-id="3">Full</Button>
              <Button onClick={this.drop} data-id="4">Queen</Button>
              <Button onClick={this.drop} data-id="5">King/Cal. King</Button>
          </DropDownWrapper>
          }
          </WholeThing>
          <div>
            {this.selector()}
          </div>
      </div>
    );
  }

}

export default DropDown