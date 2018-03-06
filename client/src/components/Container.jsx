import React from 'react';
import Photo from './Photo.jsx';

class Container extends React.Component{
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div className = "container" onClick = {this.props.carosel} >
        <hr/>
        <Photo photos = {this.props.photos}/>
      </div>
    )
  }
}
module.exports = Container; 