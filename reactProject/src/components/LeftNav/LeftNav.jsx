
import React, {Component} from 'react';


class LeftNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : 'Sahitya'
    };
  }

  render() {
    const {name} = this.state;

    return (
      <p>Hello World {name} </p>
    );
  }
}

export default LeftNav;
