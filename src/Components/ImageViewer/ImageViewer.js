import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
   display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  margin-top: 20px;
`
const SmallImgHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
`
const SmImg = styled.img`
  width: 50px;
  height: 50px;

  @media(min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  border: 2px solid white;
  &:hover {
    border: 2px solid black;
  }
`
const LargeImg = styled.img`
width: 150px;
height: 150px;
@media(min-width: 1024px) {
  width: 450px;
  height: 300px;
}

`

class ImageViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImg: '1'
    }
    this.changeActiveImage = this.changeActiveImage.bind(this);

  }
  changeActiveImage(e) {
    this.setState({
      activeImg: e.currentTarget.dataset.id
    })
  }
  selector() {
    const { activeImg } = this.state

    switch (activeImg) {
      case '1':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.cover}`} width="450" height="300"/>
      case '2':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img1}`} width="450" height="300"/>
      case '3':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img2}`} width="450" height="300"/>
      default:
        break;
    }
  }

  render() {
    return (
      <ImgWrapper>{console.log(this.props.cover, this.props.img1, this.props.img2)}
        <div className="MainImgHolder">{this.selector()}</div>
        <SmallImgHolder className="SmallImgHolder">
          <SmImg className="SmallPic" onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${this.props.cover}`} alt="ths" data-id="1" width="150" height="150"/>
          <SmImg className="SmallPic" onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${this.props.img1}`}  alt="ths" data-id="2" width="150" height="150"/>
          <SmImg className="SmallPic" onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${this.props.img2}`} width="150" height="150" alt="sfwef" data-id="3" width="150" height="150"/>
        </SmallImgHolder>
      </ImgWrapper>
    )
  }
  
}

export default ImageViewer;