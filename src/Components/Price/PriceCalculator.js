import React from 'react';
import styled from 'styled-components';
import {Blue, MainFont2 } from '../../Styles';
const Thingy = styled.select`
  color: white;
  background-color: ${Blue};
  border-radius: 0;
  outline: none;
  padding: 10px;
  font-family: ${MainFont2};
`
const Divy = styled.div`
display: flex;
flex-direction: column;
/* width: 400px;
height: 300px; */
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
      showButton: false,
      showPrice: false,
      BoxAdded: false,
      totalNaN: false
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
          showButton: false,
          showPrice: false,
          BoxAdded: false,
          totalNaN: false,
          boxSector: '1',
          name: ''
        })
    }
  }
  PriceCheck() {
    if(this.state.total === '-n/a-') {
      this.setState({ totalNaN: true, showButton: false, showPrice: false })
    } else {
      this.setState({ totalNaN: false, showButton: true, showPrice: true })
    }
  }
  boxdropdown() {
    return (
      <div>
        <h4>Add a Box Spring</h4>
        <Thingy onChange={this.AddBoxPrice} value={this.state.boxSector}>
          <option value={'1'}>[$0.00] No Box Spring</option>
          <option value={'2'}>[${this.state.boxPrice}.00] Standard Foundation</option>
        </Thingy>
      </div>
    )
}
noMattressSize() {
  return (
    <h3>Mattress doesn't come in that size</h3>
  )
}
  render() {
    return (
      <Divy>
        <h4>PRICE: {this.state.name}</h4>
        <Thingy onChange={this.mattSizeSector}>
          <option value='10'>Select Size</option>
          <option value='0'>Twin</option>
          <option value='1'>TwinXL</option>
          <option value='2'>Full</option>
          <option value='3'>Queen</option>
          <option value='4'>King/Cal. King</option>
        </Thingy>
        {this.state.showButton && this.boxdropdown()}
        {this.state.totalNaN && this.noMattressSize()}
        {this.state.showPrice ? this.state.total : null }
      </Divy>
    )
  }
}

export default PriceCalculator;