import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css.css'
import { FormWrapper, Form, Label, Button, Input, ModalBox } from './LandingStyles';
import styled from 'styled-components';

//modal div
const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children, this.el,
    );
  }
}

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
      showModal: false,
      disabled: false,
      opacity: 1
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleShow() {
    this.setState({ showModal: true });
    document.body.style.overflow = "hidden";
    // document.body.style.filter = "blur(5px) grayscale(50%)";
    // document.body.style.transform = "scale(1);"
    // modalRoot.style.filter = "blur(none) grayscale(0%)"
  }
  handleHide() {
    this.setState({
      showModal: false,
      disabled: !this.state.disabled,
      name: "",
      email: "",
      tel: "",
      opacity: .3
    });
    document.body.style.overflow = "visible";
    // document.body.style.filter = "blur(0px) grayscale(0%)"

  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => this.handleShow())
    .catch(error => alert(error))

    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() { 
    const { name, email, tel } = this.state;
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <ModalBox>
          <h3>Thank You!</h3>
          <p>We will get in touch with you within 24 to 48 hours</p>
          <Button onClick={this.handleHide}>Hide</Button>
          </ModalBox>
        </div>
      </Modal>
    ) : null;
    return ( 
    
      <FormWrapper style={{opacity: this.state.opacity}}>
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
              disabled={this.state.disabled}
              value={name} 
              onChange={this.handleChange} />
          </DIV>
          <DIV>
          <Label>Email:</Label>
            <Input
              required
              placeholder="youremail@example.com"
              type="email" 
              name="email" 
              autoComplete="email"
              disabled={this.state.disabled}
              value={email} 
              onChange={this.handleChange} />
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
              disabled={this.state.disabled}
              value={tel} 
              onChange={this.handleChange}
            /></DIV>
          
          
          <Button 
            type="submit"
            disabled={this.state.disabled}
            // style={{opacity: this.state.opacity}}
          >
          Send
          </Button>
          {modal}
        </Form>
      </FormWrapper>
    
    )
  }
}

export default AdForm;