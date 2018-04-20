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
`

class PriceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '0',
      total: 0,
      boxPrice: 0,
      name: '',
      ShowButton: false,
      showPrice: false,
      BoxAdded: false,
      poop: '1'
    }
    this.ChangeSelected = this.ChangeSelected.bind(this);
    this.AddBoxPrice = this.AddBoxPrice.bind(this);
  }

  ChangeSelected(e) {
    this.setState({
      selected: e.target.value,
      ShowButton: true,
      showPrice: true
    },() => this.changePrice())
  }
  AddBoxPrice(e) {
    this.state.BoxAdded ? null :
    this.setState({
      poop: e.target.value,
      total: this.state.total + this.state.boxPrice,
      BoxAdded: true
    })
  }
  changePrice() {
    const { selected } = this.state;
    switch(selected) {
      case '0':
      this.boxdropdown()
        this.setState({
          name: 'Twin',
          total: this.props.data[0],
          boxPrice: this.props.boxPrice[0],
          showPrice: true,
          BoxAdded: false,
          poop: '1'
        })
        break;
      case '1':
      this.boxdropdown()
        this.setState({
          name: 'TwinXL',
          total: this.props.data[1],
          boxPrice: this.props.boxPrice[1],
          showPrice: true,
          BoxAdded: false,
          poop: '1'
        })
        break;
      case '2':
      this.boxdropdown()
        this.setState({
          name: 'Full',
          total: this.props.data[2],
          boxPrice: this.props.boxPrice[3],
          showPrice: true,
          BoxAdded: false,
          poop: '1'
        })
        break;
      case '3':
      this.boxdropdown()
        this.setState({
          name: 'Queen',
          total: this.props.data[3],
          boxPrice: this.props.boxPrice[3],
          showPrice: true,
          BoxAdded: false,
          poop: '1'
        })
        break;
      case '4':
      this.boxdropdown()
        this.setState({
          name: 'King/Cal. King',
          total: this.props.data[4],
          boxPrice: this.props.boxPrice[4],
          showPrice: true,
          BoxAdded: false,
          poop: '1'
        })
        break;
      default:
        this.setState({
          ShowButton: false,
          showPrice: false,
          BoxAdded: false,
          poop: '1'
        })
    }
  }
  
  boxdropdown() {
   
    return (
      <div>
        <h4>Add a Box Spring</h4>
        <Thingy onChange={this.AddBoxPrice} value={this.state.poop}>
          <option value={'1'}>[$0.00] No Box Spring</option>
          <option value={'2'}>[${this.state.boxPrice}.00] Standard Foundation</option>
        </Thingy>
      </div>
    )
    // selected: '0',
    // total: 0,
    // boxPrice: null,
    // name: '',
    // ShowButton: false,
    // showPrice: false,
    // BoxAdded: false,
    // poop: '1'



}
  render() {
    return (
      <Divy>
        {console.log('Selected', this.state.selected)}
        {console.log('total', typeof this.state.total ,this.state.total)}
        {console.log('boxprice',typeof this.state.boxPrice, this.state.boxPrice)}
        {console.log('show button',this.state.ShowButton)}
        {console.log(this.props)}
        <h4>PRICE: {this.state.name}</h4>
        <Thingy onChange={this.ChangeSelected}>
          <option value='10'>Select Size</option>
          <option value='0'>Twin</option>
          <option value='1'>TwinXL</option>
          <option value='2'>Full</option>
          <option value='3'>Queen</option>
          <option value='4'>King/Cal. King</option>
        </Thingy>
        {this.state.ShowButton && this.boxdropdown()
        
          }
       
      {this.state.showPrice ? this.state.total : null }
      </Divy>
    )
  }
}
// const Boxdropdown = (props) => {
//   return (
//     <div>
//             <h4>Add a Box Spring</h4>
//           <Thingy>
//             <option>[$0.00] No Box Spring</option>
//             {console.log('boxprice in boxdropdown component',props.boxPrice)}
//             <option>[${props.boxPrice}.00] Standard Foundation</option>
//           </Thingy>
//           </div>
//   )
// }
export default PriceCalculator;