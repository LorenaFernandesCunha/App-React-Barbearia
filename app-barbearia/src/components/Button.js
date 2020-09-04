import React, { Component } from 'react';
import '../pages/Home/style.css'


class Button extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nameButton:''
    };
  }

render() {
  return (
      <button className="btn">{this.props.nameButton}</button>
      
  );
}

}

  export default Button;