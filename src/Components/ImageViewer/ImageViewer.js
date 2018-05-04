import React from 'react';
import { ImgWrapper, SmallImgHolder, SmImg, LargeImg} from './ImageViewerStyles';

class ImageViewer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeImg: '1'
    };
    this.changeActiveImage = this.changeActiveImage.bind(this);
  };
  changeActiveImage(e) {
    this.setState({
      activeImg: e.currentTarget.dataset.id
    });
  };
  selector() {
    const { activeImg } = this.state

    switch (activeImg) {
      case '1':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.cover}`} alt={`Large image of ${this.props.fullname} ${this.props.type}`}/>
      case '2':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img1}`} alt={`Large image of ${this.props.fullname} ${this.props.type}`}/>
      case '3':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img2}`} alt={`Large image of ${this.props.fullname} ${this.props.type}`}/>
      default:
        break;
    }
  };
  render() {
    return (
      <ImgWrapper>
        <div>{this.selector()}</div>
        <SmallImgHolder>
          <SmImg onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.cover}`} data-id="1" alt={`Small image of ${this.props.fullname} ${this.props.type}`}/>
          <SmImg onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img1}`} data-id="2" alt={`Small image of ${this.props.fullname} ${this.props.type}`}/>
          <SmImg onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img2}`} data-id="3" alt={`Small image of ${this.props.fullname} ${this.props.type}`}/>
        </SmallImgHolder>
      </ImgWrapper>
    )
  }
};

export default ImageViewer;