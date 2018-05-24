import React, { Component } from 'react';
import { FormWrapper, Form, Label, Button, Input } from './LandingStyles';

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
          <Label>
            Name: 
            <Input 
              type="text" 
              name="name" 
              autoComplete="name"
              value={name} onChange={this.handleChange} />
          </Label>
          <Label>
            Email: 
            <Input 
              type="email" 
              name="email" 
              autoComplete="email"
              value={email} onChange={this.handleChange} />
          </Label>
          <Label>
            Phone: 
            <Input 
              tpye="tel" 
              name="tel"
              autoComplete="tel" 
              value={tel} 
              onChange={this.handleChange}
            />
            {/* <input type="checkbox"/> */}
          </Label>
          <Button type="submit">Send</Button>
        </Form>
      </FormWrapper>
     
     )
  }
}
 
export default AdForm;