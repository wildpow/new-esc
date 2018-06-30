import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MakeOfferWrapper, Button, ModalContainer } from './FinalStyles';
import { Span } from './MakeOfferStyles';
import { Card, Front, Back, Header, Form, SubmitButton} from './TestStyles';
import Logo from '../../../images/ezgif.com-optimize.gif'
import { CardContainer, TextArea } from './card'

const modalRoot = document.getElementById('modal-root');
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
    super(props)
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
      flipCard: ""                      
    }
    this.handleShow = this.handleShow.bind(this); 
    this.handleHide = this.handleHide.bind(this); 
    this.handleFlip = this.handleFlip.bind(this)  
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
      .then(() => this.handleFlip())
      .catch(error => alert(error));
    
    e.preventDefault();
  };

  handleShow() {
    this.setState({ showModal: true });
    document.body.style.overflow = "hidden";  //make backgroup not scrollable
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
  handleFlip() {
    this.setState({ flipCard: 'rotateY(180deg)'})
  }
  render() {
    const { name, email, tel, note, mattress, size } = this.state;
    const modal = this.state.showModal ? (
      <Modal size={this.props.size}> 
        <ModalContainer>
          <CardContainer>
            <Card style={{transform: this.state.flipCard}}>
              <Front>
                <Header>
                  <h3>Make an Offer</h3>
                  <button onClick={this.handleHide}>close</button>
                </Header>
                <p>
                  We now are making it even easier to comparison shop with our locally owned and operated mattress center.
                  If you find a lower price on the same mattress from a competitor, just let us know by filling out this form
                  and we will help you "sleep like the experts do".
                </p>
                <Form onSubmit={this.handleSubmit}>
                  <input
                    required
                    placeholder="Name"
                    type="text" 
                    name="name" 
                    autoComplete="name"
                    value={name} 
                    onChange={this.handleChange} 
                  />
                    <input
                    required
                    placeholder="Email"
                    type="email" 
                    name="email" 
                    autoComplete="email" 
                    value={email} 
                    onChange={this.handleChange} 
                  />
                    <input
                      required
                      autoComplete="tel-national"
                      placeholder="###-###-####"
                      pattern="^[0-9-+s()]*$"
                      tpye="tel" 
                      name="tel"
                      value={tel} 
                      onChange={this.handleChange} 
                    />
                  <TextArea
                    onChange={this.handleChange}
                    placeholder="Price match info"
                    required
                    type="text"
                    value={note} 
                    name="note"
                  />
                <input hidden type="text" name="mattress" defaultValue={mattress}/>
                <input hidden type="text" name="size" defaultValue={size} />
                <SubmitButton type="submit">Send</SubmitButton>
              </Form>
              </Front>
              <Back onClick={this.handleHide}>
                <h3>Thank you for reaching out to us. We will get back to you with in 24 hours</h3>
                <img src={Logo} alt="bla bla"/>
              </Back>
            </Card>
          </CardContainer>
        </ModalContainer>
      </Modal>
    ) : null;
    return (
      <MakeOfferWrapper style={{opacity: this.state.opacity}}>        
        <Button onClick={this.handleShow}
                style={{opacity: this.props.opacity, transition: 'opacity 700ms ease-in-out'}}
                disabled={this.state.disabled}
          >Make <Span>an</Span> Offer
        </Button>
        {modal}
      </MakeOfferWrapper>
    )
  }
}

export default MakeOffer;