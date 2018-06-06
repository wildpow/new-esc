import React, { Component } from 'react';
import { FormWrapper, Form, Label, Button, Input } from './LandingStyles';
// import { FlexRow } from '../../Styles'
import styled from 'styled-components';
const DIV = styled.div`
  margin-top: ${props => props.TopM ? '2px' : '0px'};
  display: flex;
  margin-bottom: 4px;
  flex-direction: row;
  @media(min-width: 360px) {
    margin-top: ${props => props.TopM ? '6px' : '0px'};
    margin-bottom: 8px;
  }
`
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class AdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tel: "",
    
    }
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => alert('success'))
    .catch(error => alert(error))

    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() { 
    const { name, email, tel } = this.state;
    return ( 
    
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
        <DIV TopM>
          <Label>Name:</Label>
            <Input
              required
              placeholder="Mr. Sleeping Panda"
              type="text" 
              name="name" 
              autoComplete="name"
              // autoFocus
              value={name} onChange={this.handleChange} />
          </DIV>
          <DIV>
          <Label>Email:</Label>
            <Input
              required
              placeholder="youremail@example.com"
              type="email" 
              name="email" 
              autoComplete="email"
              value={email} onChange={this.handleChange} />
          </DIV>
          <DIV>
          <Label>Phone:</Label>
            <Input
              required
              placeholder="###-###-####"
              pattern="^[0-9-+s()]*$"
              tpye="tel" 
              name="tel"
              autoComplete="tel" 
              value={tel} 
              onChange={this.handleChange}
            /></DIV>
          
          
          <Button type="submit">Send</Button>
        </Form>
      </FormWrapper>
    
    )
  }
}

export default AdForm;