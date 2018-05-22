import React, { Component } from 'react';
import { FormWrapper } from './LandingStyles';

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
        <form onSubmit={this.handleSubmit}>
          <lable>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </lable>
          <lable>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </lable>
          <lable>
            Phone Number: 
            <input 
              tpye="tel" 
              name="tel"
              placeholder="425-512-0017" 
              value={tel} 
              onChange={this.handleChange}
            />
          </lable>
          <button type="submit">Send</button>
        </form>
      </FormWrapper>
     )
  }
}
 
export default AdForm;