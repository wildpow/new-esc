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
padding-top: 0px;
list-style: none;
padding-left: 0px;

z-index: 999;
overflow: hidden;
position: absolute;
`
const Button = styled.button`
background-color: #1565c0;
color: white;
border: none;
cursor: pointer;
outline: none;

padding: 8px;
font-size: .8rem;
@media(min-width: 1024px) { font-size: 1rem; padding: 16px;}
&:hover {background-color: #eb1c24}
&:focus { background:#eb1c24;}
`
const ButtonIcon = styled.div`
background-color: #1565c0;
color: white;
padding: 16px;
font-size: 16px;
`
const Price = styled.div`
  background: 2px solid black;
  margin-left: 5px;
  background: grey;
  width: 50px;
  height: 50px;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
  @media(min-width: 1024px) { font-size: 1.4rem; padding: 10px; width: 100px; height: 50px; margin-left: 10px;}
`

const Wrapper = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
justify-items: center;
justify-self: center;
align-items: center;

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
        return `Twin: $${this.props.data[0]}`;
      case '2':
        return `TwinXL: $${this.props.data[1]}`;
      case '3':
        return `Full: $${this.props.data[2]}`
      case '4':
        return `Queen: $${this.props.data[3]}`
      case '5':
        return `King/Cal. King: $${this.props.data[0]}`
      default:
        return null;
    }
  }
  
  render() {
    return (
      <Wrapper>
        <WholeThing>
        <ButtonWrapper>
        <Button onMouseDown={this.handleDropdown}>
          {this.state.buttonContent}&nbsp;&nbsp; { this.state.open ? '\u25B2' : '\u25BC'}
        </Button>
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
          <Price>
            {this.selector()}
          </Price>
      </Wrapper>
    );
  }

}

export default DropDown