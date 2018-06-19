import React, { Component } from 'react';

const encode = (data) => {
  return object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      url: "",
      deliveryZip: "",
      mattress: this.props.mattress,
      size: this.props.size,
      formSubmit: false
    }
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded"},
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({ formSubmit: true }))
      .catch(error => alert(error));
    
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Form;