import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, ModalBox, Form,
          FormWrapper, LabelWrapper, Label,
          Input, Headline, Span, Button,
          Header, MakeOfferWrapper, SubmitButton } from './MakeOfferStyles';

const modalRoot = document.getElementById('modal-root'); //React Portal ref
// const mainRoot = document.getElementById('root'); // div containing the whole React app
class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div'); //holder for the portal
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
    .join("&")
} 

class MakeOffer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      name: "",
      email: "",
      note: "",
      tel: "",
      mattress: this.props.mattress,
      size: this.props.size,
      formSubmit: false,
      disabled: false,
      opacity: 1,
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded"},
      body: encode({ "form-name": "makeOffer", ...this.state })
    })
      .then(() => this.setState({ 
                    formSubmit: !this.state.formSubmit, 
                    disabled: !this.state.disabled,
                    opacity: .3 }))
      .then(() => this.handleHide())
      .catch(error => alert(error));
    // document.body.style.overflow = "visible";
    // document.getElementById('root').style.filter = 'blur(0px) grayscale(0%)';
    e.preventDefault();
  };

  handleShow() {
    this.setState({ showModal: true });
    document.body.style.overflow = "hidden";
    document.getElementById('root').style.filter = 'blur(5px) grayscale(50%)';
    document.getElementById('root').style.transition = '.35s';
  }

  handleHide() {
    this.setState({ 
      showModal: false,
      name: "",
      email: "",
      note: "",

      });
    document.body.style.overflow = "visible";
    document.getElementById('root').style.filter = 'blur(0px) grayscale(0%)';
  }
  render() {
    const { name, email, tel, note, mattress, size } = this.state;
    const modal = this.state.showModal ? (
      <Modal size={this.props.size}>
        <ModalContainer>
        <ModalBox>
          <Header>
            <Headline>Make an Offer</Headline>
            <button onClick={this.handleHide}>X</button>
          </Header>
          
            
            <p>
              We now are making it even easier to comparison shop with our locally owned and operated mattress center.
              If you find a lower price on the same mattress from a competitor, just let us know by filling out the quick form.
              We will get back to you within 24 hours and help you "sleep like the experts do".
            </p>
            <FormWrapper>
              <Form onSubmit={this.handleSubmit}>
                <LabelWrapper>
                  <Label>Name:</Label>
                  <Input
                    required
                    placeholder="Mr. Sleeping Panda"
                    type="text" 
                    name="name" 
                    autoComplete="name"
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
                    value={email} 
                    onChange={this.handleChange} 
                  />
                </LabelWrapper>
                <LabelWrapper>
                  <Label>Phone:</Label>
                    <Input
                      required
                      autoComplete="tel-national"
                      placeholder="###-###-####"
                      pattern="^[0-9-+s()]*$"
                      tpye="tel" 
                      name="tel"
                      value={tel} 
                      onChange={this.handleChange} 
                    />
                </LabelWrapper>
                <LabelWrapper>
                  <Label>Note:</Label>
                  <textarea
                    onChange={this.handleChange}
                    placeholder="Price match info"
                    required
                    rows="7"
                    cols="15"
                    type="text"
                    value={note} 
                    
                    name="note"
                  />
                </LabelWrapper>
                <input hidden type="text" name="mattress" defaultValue={mattress}/>
                <input hidden type="text" name="size" defaultValue={size} />
                <SubmitButton type="submit">Send</SubmitButton>
              </Form>
            </FormWrapper>
           
          </ModalBox>
          
        </ModalContainer>
      </Modal>
    ) : null;
    return (
      <MakeOfferWrapper style={{opacity: this.state.opacity}}>        <Button onClick={this.handleShow}
                style={{opacity: this.props.opacity,
                        transition: 'opacity 700ms ease-in-out'}}
                disabled={this.state.disabled}
        >Make <Span>an</Span> Offer</Button>
        {modal}
      </MakeOfferWrapper>
    )
  }
}

export default MakeOffer;