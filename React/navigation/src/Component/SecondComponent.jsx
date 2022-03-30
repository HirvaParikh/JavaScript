import React, {Component} from 'react';

class SecondComponent extends Component {
  render() {
    const internalcssdemo = {fontSize:'50px',color:'blank'}

    return <h1 style={internalcssdemo}>This is Second Component.</h1>;
  }
}

export default SecondComponent;