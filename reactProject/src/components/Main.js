
import React from 'react';
import LeftNav from 'components/LeftNav/LeftNav';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="Main_header">Personal Details Management App</div>
        <LeftNav/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
