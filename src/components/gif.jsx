import React, { Component } from 'react';

class Gif extends Component {


  handleClick = () => {
        if(this.props.selectAGif) {
            this.props.selectAGif(this.props.id)
        }
        this.setState({selectedGifId: this.props.id})
        console.log('clicked', this.props.id);
    }

  shouldComponentUpdate(nextProps, nextState) {
    // don't call render() if props.id did not change
    return nextProps.id !== this.props.id;
  }

  render() {
    console.log('gif rendering ' + this.props.id)
    if (!this.props.id) {
      return null;
    }

    const src = `https://media0.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <div className="selected-gif">
        <img src={src} alt="" className="gif" onClick={this.handleClick} />
      </div>
      );
  }
}

export default Gif;
