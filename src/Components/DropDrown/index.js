import React from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.div`
display: flex;
`
const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink:1;
  flex-basis: 100px;
  
  position: absolute;
`
const WholeThing = styled.div`
display: flex;
flex-direction: column;
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
font-size: 1.3rem;
border: 2px solid blue;
color: white;
background: red;
outline: none;
`
const ButtonIcon = styled.div`
font-size: 1.3rem;
border: 2px solid blue;
color: white;
background: red;
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
      console.log(this.state.selected)
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
        <Button onClick={this.handleDropdown}>
          {this.state.buttonContent}
        </Button>
        <ButtonIcon>
        { this.state.open ? '\u25B2' : '\u25BC'}
        </ButtonIcon>
        </ButtonWrapper>
          { this.state.open &&
          <DropDownWrapper>
            <Ul>
              <li>
              <button onClick={this.drop} data-id="1">twin</button>
              </li>
              <li>
              <button onClick={this.drop} data-id="2">full</button>
              </li>
              <li>
              <button onClick={this.drop} data-id="3">Queen</button>
              </li>
            </Ul>
    
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