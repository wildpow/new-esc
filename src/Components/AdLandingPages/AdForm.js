import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './css.css'
import { FormWrapper, Form, Label,
          Button, Input, ModalBox,
          ModalContainer, ModalButton, LabelWrapper } from './LandingStyles';
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
    document.getElementById('root').style.filter = 'blur(5px) grayscale(50%)';
    document.getElementById('root').style.transition = '.35s';
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
    document.getElementById('root').style.filter = 'blur(0px) grayscale(0%)';
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => this.handleShow())
    .catch(error => alert(error));
    e.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() { 
    const { name, email, tel } = this.state;
    const modal = this.state.showModal ? (
    <Modal>
      <ModalContainer onClick={this.handleHide}>
        <ModalBox>
          <h3>Thank You!</h3>
          <p>We will get in touch with you <br/>within 24 hours</p>
          <ModalButton onClick={this.handleHide}>Close</ModalButton>
        </ModalBox>
      </ModalContainer>
    </Modal>
    ) : null;
    return ( 
      <FormWrapper style={{opacity: this.state.opacity}}>
        <Form onSubmit={this.handleSubmit}>
          <LabelWrapper TopM>
            <Label>Name:</Label>
              <Input
                required
                placeholder="Mr. Sleeping Panda"
                type="text" 
                name="name" 
                autoComplete="name"
                //TODO:
              // I would like to have this field autoFocus but clicking on the map pin makes it fire 
              disabled={this.state.disabled}
              value={name} 
              onChange={this.handleChange} 
            />
          </LabelWrapper>
          <LabelWrapper>
            <Label>Email:</Label>
              <Input
                required
                placeholder="youremail@example.com"
                type="email" 
                name="email" 
                autoComplete="email"
                disabled={this.state.disabled}
                value={email} 
                onChange={this.handleChange} 
              />
            </LabelWrapper>
          <LabelWrapper>
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
              />
            </LabelWrapper>  
          <Button 
            type="submit"
            disabled={this.state.disabled}
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