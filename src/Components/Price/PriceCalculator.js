import React from 'react';
import styled from 'styled-components';
import {Blue, MainFont2, MainFont1, FlexCol, BoxShadow, Border, RedBorderBottom } from '../../Styles';

const DropDown = styled.select`
  color: white;
  background-color: ${Blue};
  border-radius: 0;
  outline: none;
  padding: 10px 190px 10px 10px;
  font-family: ${MainFont2};
  appearance: none;
  -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 1.6rem;
`
const BoxDropDown = DropDown.extend`
  padding: 10px 10px 10px 10px;
`
const BoxWrapper = styled.div`
  transition: all .25s ease-in-out;
`
const BoxHeading = styled.h4`
  transition: all .25s ease-in-out;
  margin-bottom: 0;
  font-size: 1.7rem;
  font-family: ${MainFont1};
`
const Total = styled.h4`
  transition: all .25s ease-in-out;
  margin-top: 40px;
  font-size: 2.3rem;
  font-family: ${MainFont1};
`
const PriceHeading = styled.h4`
  margin: 0 0 5px 0;
  font-size: 1.7rem;
  font-family: ${MainFont2};
  letter-spacing: .1rem;
`

class PriceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeSector: '0',
      boxSector: '1',
      total: 0,
      boxPrice: 0,
      name: '',
      BoxAdded: false,
      opacityAddBox: 0,
      opacityIsNaN: 0,
      opacityTotal: 0,
      notFoundOrAddText: true
    }
    this.mattSizeSector = this.mattSizeSector.bind(this);
    this.AddBoxPrice = this.AddBoxPrice.bind(this);
  }

  mattSizeSector(e) {
    this.setState({
      sizeSector: e.target.value,
    },() => this.changePrice())
  }

  AddBoxPrice(e) {
    if(this.state.BoxAdded) {
      this.setState({
        boxSector: e.target.value,
        total: this.state.total - this.state.boxPrice,
        BoxAdded: false
      })
    } else {
      this.setState({
        boxSector: e.target.value,
        total: Number(this.state.total) + this.state.boxPrice,
        BoxAdded: true
      })
    }
  }
  changePrice() {
    const { sizeSector } = this.state;
    switch(sizeSector) {
      case '0':
        this.setState({
          name: 'Twin',
          total: this.props.data[0],
          boxPrice: this.props.boxPrice[0],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '1':
        this.setState({
          name: 'TwinXL',
          total: this.props.data[1],
          boxPrice: this.props.boxPrice[1],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '2':
        this.setState({
          name: 'Full',
          total: this.props.data[2],
          boxPrice: this.props.boxPrice[3],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '3':
        this.setState({
          name: 'Queen',
          total: this.props.data[3],
          boxPrice: this.props.boxPrice[3],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      case '4':
        this.setState({
          name: 'King/Cal. King',
          total: this.props.data[4],
          boxPrice: this.props.boxPrice[4],
          BoxAdded: false,
          boxSector: '1'
        },() => this.PriceCheck())
        break;
      default:
        this.setState({
          opacityAddBox: 0,
          opacityTotal: 0,
          BoxAdded: false,
          opacityIsNaN: 0,
          boxSector: '1',
          name: ''
        })
    }
  }
  PriceCheck() {
    if(this.state.total === '-n/a-') {
      this.setState({ 
        opacityIsNaN: 1,
        opacityAddBox: 0,
        opacityTotal: 0,
        notFoundOrAddText: false
      })
    } else {
      this.setState({ 
        opacityIsNaN: 0,
        opacityAddBox: 1,
        opacityTotal: 1,
        notFoundOrAddText: true
      })
    }
  }
  boxdropdown() {
    return (
      <BoxWrapper style={{opacity: this.state.opacityAddBox}}>
        <BoxDropDown onChange={this.AddBoxPrice} value={this.state.boxSector}>
          <option value={'1'}>[$0.00] No Box Spring</option>
          <option value={'2'}>[${this.state.boxPrice}.00] Standard Foundation</option>
        </BoxDropDown>
      </BoxWrapper>
    )
}

  render() {
    return (
      <div>
        <div>
          <PriceHeading>PRICE: {this.state.name}</PriceHeading>
          <div>
            <DropDown onChange={this.mattSizeSector}>
              <option value='10'>Select Size</option>
              <option value='0'>Twin</option>
              <option value='1'>Twin Extra Long</option>
              <option value='2'>Full</option>
              <option value='3'>Queen</option>
              <option value='4'>King/Cal. King</option>
            </DropDown>
          </div>
        </div>
        <div>
          {this.state.notFoundOrAddText ? 
            <BoxHeading style={{opacity: this.state.opacityAddBox}}>
              Add a Box Spring
            </BoxHeading> : 
            <BoxHeading style={{opacity: this.state.opacityIsNaN}}>
              Mattress doesn't come in that size
            </BoxHeading>}
            {this.boxdropdown()}
        </div>
        <Total style={{opacity: this.state.opacityTotal}}>
        TOTAL: {this.state.total}
        </Total>
        </div>
    )
  }
}

export default PriceCalculator;