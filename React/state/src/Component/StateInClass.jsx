import React, {Component} from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hirva Parikh",
      contactno: "9054547420",
      salary:12000
    };
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <p>
          My contact no. is {this.state.contactno}
        </p>
        <p>
          My salary/month is {this.state.salary}
        </p>
      </div>
    );
  }
}

export default Person;
